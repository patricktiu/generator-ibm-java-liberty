/*
 * Copyright IBM Corporation 2017
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const Generator = require('yeoman-generator');
const extend = require('extend');
const Defaults = require('../../lib/defaults');
const OpenApi = require('../../lib/openapi');

const defaults = new Defaults();

module.exports = class extends Generator {

  constructor(args, opts) {
    super(args, opts);
    //create command line options that will be passed by YaaS
    defaults.setOptions(this);
    extend(this, opts.context);   //inject the objects and functions directly into 'this' to make things easy
    this.logger.writeToLog("Liberty Generator context", opts.context);
    const ext = this.promptmgr.add(require('../prompts/liberty.js'));
    ext.setContext(opts.context);
    this.patterns.push('picnmix');
    this.conf.addMissing(opts, defaults);
    this.openApiDir = [];
    this.conf.enableApiDiscovery = this.config.enableApiDiscovery || false;
    this.logger.writeToLog("Liberty Generator conf (final)", this.conf);
  }

  initializing() {
  }


  prompting() {
    //do not add questions in here, use the promptmgr on the context if you need to get input from the user
  }

  configuring() {
    this.configure(this);
    if(this.conf.technologies.includes('swagger')) {
      this.conf.enableApiDiscovery = true;
    }
    this.openApiDir = [];
    if(this.conf.bluemix && this.conf.bluemix.openApiServers && this.conf.bluemix.backendPlatform == 'JAVA' ) {
      this.conf.enableApiDiscovery = true;
      return OpenApi.generate(this.conf.bluemix.openApiServers)
        .then(dir => {
          this.openApiDir = dir;
        });
    }
  }

  writing() {
    if(this.conf.buildType == 'maven') {
      this.conf.bxBuildCmd = '`mvn install -Pbluemix -Dcf.org=[your email address] -Dcf.username=[your username] -Dcf.password=[your password]`';
    }
    if(this.conf.buildType == 'gradle') {
      this.conf.bxBuildCmd = '`gradle build cfPush -PcfOrg=[your email address] -PcfUsername=[your username] -PcfPassword=[your password]`';
    }
    if(this.openApiDir.length > 0) {
      OpenApi.writeFiles(this.openApiDir, this);
    }
    return this.defaultWriter(this);   //use the default writer supplied by the context.
  }

  end() {
  }

};
