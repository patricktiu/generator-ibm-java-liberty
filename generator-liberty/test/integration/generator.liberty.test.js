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
 * Tests the Liberty aspects generator
 */
'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const AssertLiberty = require('../../lib/assert.liberty');
const MockContext = require('../mocks/mock.context');

const ARTIFACTID = 'artifact.0.1';
const GROUPID = 'test.group';
const VERSION = '1.0.0';
const APPNAME = 'testApp';
const FRAMEWORK = 'liberty';

class Options extends AssertLiberty {

  constructor(createType, jndiEntries, envEntries) {
    super();
    this.conf = {
      headless :  "true",
      debug : "true",
      buildType : 'maven',
      createType : createType,
      promptType : 'prompt:liberty',
      technologies : [],
      jndiEntries : jndiEntries,
      envEntries : envEntries,
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

describe('java liberty generator : Liberty server integration test', function () {

  describe('Generates server configuration (no technologies)', function () {
    var jndiEntries = [{name :'jndiName', value:'jndiValue'}];
    var envEntries = [{name: 'envName', value : 'envValue'}];
    var options = new Options('picnmix', jndiEntries, envEntries);
    before(options.before.bind(options));
    options.assertAllFiles(true);
    options.assertContextRoot(APPNAME);
    jndiEntries.forEach(entry => {
      options.assertJNDI(true, entry.name, entry.value);
    });
    envEntries.forEach(entry => {
      options.assertEnv(true, entry.name, entry.value);
    });
  });

});
