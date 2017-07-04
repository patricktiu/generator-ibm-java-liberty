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

// test the defaults module

var assert = require('assert');
var defaults = require('../../lib/defaults');

describe('Defaults module', function() {
  describe('Call getDefault to get the default object', function() {
    var deployType = defaults.getObject('deployType');
    var technologies = defaults.getObject('technologies');
    it('can get the default value', function() {
      assert.equal(deployType.default, 'local');
      assert(Array.isArray(technologies.default));
      assert.equal(technologies.default.length, 1);
      assert.equal(technologies.default[0], 'rest');
    });
    it('can get the description', function() {
      assert.equal(deployType.desc, 'Type of deployment required');
      assert.equal(technologies.desc, 'Technologies to configure when using the prompt:liberty promptType');
    });
    it('can get the type', function() {
      assert.equal(deployType.type, String);
    });
  });
  it('can use get() to get the default value', function() {
    assert.equal(defaults.get('deployType'), 'local');
    var technologies = defaults.get('technologies');
    assert(Array.isArray(technologies));
    assert.equal(technologies.length, 1);
    assert.equal(technologies[0], 'rest');
  });
  describe('Call getDefaults to get a list of config values with defaults', function() {
    var defaultValues = defaults.get();
    var foundTechnologies = false;
    var foundDeployType = false;
    for(var i = 0; i < defaultValues.length; i++) {
      if(defaultValues[i] === 'technologies') {
        foundTechnologies = true;
      }
      if(defaultValues[i] === 'deployType') {
        foundDeployType = true;
      }
    }
    it('finds technologies in the list of config values with defaults', function() {
      assert(foundTechnologies);
    });
    it('finds deployType in the list of config values with defaults', function() {
      assert(foundDeployType);
    });
  });

  describe('Technologies default type is an array', function() {
    var technologiesType = defaults.getObject('technologies').type;
    it('returns technologies as an array when passed an array', function() {
      var array = ["foo", "bar"];
      var newArray = technologiesType(array);
      assert(Array.isArray(newArray));
      assert.equal(newArray.length, 2);
      assert.equal(newArray[0], "foo");
      assert.equal(newArray[1], "bar");
    });
    it('returns technologies as an array when passed a comma separated string', function() {
      var string = "foo,bar";
      var array = technologiesType(string);
      assert(Array.isArray(array));
      assert.equal(array.length, 2);
      assert.equal(array[0], "foo");
      assert.equal(array[1], "bar");
    });
  });
})
