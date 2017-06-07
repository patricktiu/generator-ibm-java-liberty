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

var Generator = require('yeoman-generator');
var Handlebars = require('handlebars');
var fspath = require('path');
var fs = require('fs');
var extend = require('extend');


module.exports = class extends Generator {

  constructor(args, opts) {
    super(args, opts);
    extend(this, this.options.context);   //inject the objects and functions directly into 'this' to make things easy
    this.logger.writeToLog("Liberty Generator options", this.options);
  }

  initializing() {
    this.promptmgr.add('liberty');
  }


  prompting() {
    //do not add questions in here, use the promptmgr on the context if you need to get input from the user
  }

  configuring() {
  }

  writing() {
    this.destinationRoot(this.conf.projectPath);
    this.logger.writeToLog("Destination path", this.destinationRoot());
    this.defaultWriter(this.templatePath());   //use the default writer supplied by the context.
  }

  end() {
  }

};
