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

/**
 * Tests the technology aspect of the generator
 */
'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const AssertTech = require('../../lib/assert.technologies');
const MockContext = require('../mocks/mock.context');

const ARTIFACTID = 'artifact.0.1';
const GROUPID = 'test.group';
const VERSION = '1.0.0';
const APPNAME = 'testApp';
const FRAMEWORK = 'liberty';

class Options extends AssertTech {

  constructor(createType, technologies) {
    super();
    this.conf = {
      headless :  "true",
      debug : "true",
      buildType : 'maven',
      createType : createType,
      promptType : 'prompt:liberty',
      technologies : technologies,
      appName : APPNAME,
      groupId : GROUPID,
      artifactId : ARTIFACTID,
      version : VERSION
    }
    this.options = {
      context : new MockContext(this.conf)
    };
    this.before = function() {
      return helpers.run(path.join( __dirname, '../../generators/app'))
        .withOptions(this.options)
        .withPrompts({})
        .toPromise();
    }
  }

}

var technologies = ['rest', 'microprofile', 'persistence', 'websockets', 'servlet', 'watsonsdk', 'swagger', 'springboot_web'];

execute('picnmix', 'picnmix', technologies);
//execute('technologies/msbuilder', 'msbuilder', technologies);

function execute(createType, assertFunc, technologiesToTest) {

  describe('java liberty generator : technologies integration test', function () {

    for(var i = 0; i < technologiesToTest.length; i++) {
      describe('Generates a ' + createType + ' project for ' + technologiesToTest[i], function () {
        var options = new Options(createType, [technologiesToTest[i]]);
        before(options.before.bind(options));
        options['assert' + assertFunc]();
        options['assert' + technologiesToTest[i]]();
      });
    }

  });
}

describe('java liberty generator : technologies integration test', function () {

  describe('Generates a project for (no technologies)', function () {
    var options = new Options('picnmix', []);
    before(options.before.bind(options));
    options.assert();
  });

});


for(var i = 0; i < 5; i++) {
  var totalTechnologies = Math.floor(Math.random() * technologies.length) + 1;  //how many technologies to pick - min of 1 up to number of available technologies
  var techsToPickFrom = Array.from(technologies);                        //copy of technologies to pick from
  var techs = new Array();                                           //chosen technologies
  var description = new String();

  for(var j = 0; j < totalTechnologies; ) {
    var index = Math.floor(Math.random() * technologies.length);
    var tech = techsToPickFrom[index];
    if(tech) {
      techs.push(technologies[index]);
      techsToPickFrom[index] = undefined;
      description += tech + ' ';
      j++;
    }
  }

  describe('java liberty generator : ' + totalTechnologies + ' random technologies integration test', function () {

    describe('Generates a project for [' + description.trim() + ']', function () {
      var options = new Options('picnmix', techs);
      before(options.before.bind(options));
      options.assertpicnmix();
      for(var k = 0; k < techs.length; k++) {
        options['assert' + techs[k]]();
      }
    });

  });
}
