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

'use strict'

//mock a context object to allow simulated composure by other generators

const Handlebars = require('handlebars');
const fspath = require('path');

function Context(conf) {
  this.conf = conf;
  this.logger = {
    writeToLog : function(header, data) {
      //console.log(header + ' : ' + JSON.stringify(data));   // uncomment this line for debugging
    }
  };
  this.promptmgr = {
    add : function() {
        //do nothing, prompts don'w work in a mock
        return { setContext : function(){}};
    }
  }
  this.patterns = [];
  this.paths = [];

  this.configure = function() {
    //not used in mock scenario
  };

  this.addDependencies = function(deps) {
    //do nothing
  }

  this.addFrameworkDependencies = function(deps) {
    //do nothing
  };

  this.defaultWriter = function(generator) {
    generator.fs.copyTpl(fspath.join(generator.templatePath(), 'picnmix'), generator.destinationRoot(), undefined, {process : content => {
      var compiledTemplate = Handlebars.compile(content);
      return compiledTemplate(this.conf);
    }});

    var from = fspath.resolve(generator.templatePath(), 'technologies');
    this.conf.technologies.forEach(technology => {
      generator.fs.copyTpl(fspath.join(from, technology), generator.destinationRoot(), undefined, {process : content => {
        var compiledTemplate = Handlebars.compile(content);
        return compiledTemplate(this.conf);
      }});
    });

  }
}

module.exports = exports = Context;
