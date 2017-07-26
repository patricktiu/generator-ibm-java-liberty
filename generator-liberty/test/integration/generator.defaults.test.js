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
const AssertLiberty = require('../../lib/assert.liberty');
const MockPromptMgr = require('../mocks/mock.promptmgr');
const common = require('@arf/java-common');

class TechOptions extends AssertTech {
  constructor(buildType) {
    super();
    this.conf = {
      headless :  "true",
      debug : "true",
      createType : 'picnmix',
      buildType : buildType
    }
    var ctx = new common.context('test', this.conf, new MockPromptMgr());
    this.options = {
      context : ctx
    };
    this.before = function() {
      return helpers.run(path.join( __dirname, '../../generators/app'))
        .withOptions(this.options)
        .withPrompts({})
        .toPromise();
    }
  }
}

class LibertyOptions extends AssertLiberty {
  constructor(buildType) {
    super();
    this.conf = {
      headless :  "true",
      debug : "true",
      createType : 'picnmix',
      buildType : buildType
    }
    var ctx = new common.context('test', this.conf, new MockPromptMgr());
    this.options = {
      context : ctx
    };
    this.before = function() {
      return helpers.run(path.join( __dirname, '../../generators/app'))
        .withOptions(this.options)
        .withPrompts({})
        .toPromise();
    }
  }
}

describe('java liberty generator : defaults integration test', function () {
  describe('Generates a project with default technologies', function () {
    var options = new TechOptions('maven');
    before(options.before.bind(options));
    options.assertrest('maven');
  });
  describe('Generates a project with default technologies', function () {
    var options = new LibertyOptions('maven');
    before(options.before.bind(options));
    options.assertPlatforms([], 'maven');
  });

});
