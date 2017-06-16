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
 * Provides the assertions for testing Liberty code and config from this generator
 */
'use strict';

const assert = require('yeoman-assert');
const SERVER_XML = 'src/main/liberty/config/server.xml';
const SERVER_ENV = 'src/main/liberty/config/server.env';
const IBM_WEB_EXT = 'src/main/webapp/WEB-INF/ibm-web-ext.xml';

function AssertLiberty() {
  this.assertAllFiles = function(exists) {
    var check = exists ? assert.fileContent : assert.noFileContent;
    var type = exists ? 'has' : 'does not have';
    it(type + ' server.xml, server.env and ibm-web-ext.xml', function() {
      assert.file(SERVER_XML);
      assert.file(SERVER_ENV);
      assert.file(IBM_WEB_EXT);
    });
  }

  this.assertJNDI = function(exists, name, value) {
    it('contains a server.xml JDNI entry for ' + name + " = " + value, function() {
      var check = exists ? assert.fileContent : assert.noFileContent;
      check(SERVER_XML, '<jndiEntry jndiName="' + name + '" value="' + value + '"/>');
    });
  }

  this.assertEnv = function(exists, name, value) {
    it('contains a server.env entry for ' + name + " = " + value, function() {
      var check = exists ? assert.fileContent : assert.noFileContent;
      check(SERVER_ENV, name + '="' + value + '"');
    });
  }

  this.assertContextRoot = function(name) {
    it('contains a ibm-web-ext.xml entry for ' + name, function() {
      assert.fileContent(IBM_WEB_EXT, '<context-root uri="/' + name + '"/>');
    });
  }
}

module.exports = exports = AssertLiberty;
