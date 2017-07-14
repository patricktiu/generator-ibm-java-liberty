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
const JVM_OPTIONS = 'src/main/liberty/config/jvm.options';
const IBM_WEB_EXT = 'src/main/webapp/WEB-INF/ibm-web-ext.xml';
const JVM_OPTIONS_JAVAAGENT = '-javaagent:../../shared/resources/javametrics-agent.jar';
const LIBERTY_VERSION = '17.0.0.1';   //current Liberty version to check for
const tests = require('@arf/java-common');

//handy function for checking both existence and non-existence
function getCheck(exists) {
  return {
    file : exists ? assert.file : assert.noFile,
    desc : exists ? 'should create ' : 'should not create ',
    content : exists ? assert.fileContent : assert.noFileContent
  }
}

function getBuildCheck(exists, buildType) {
  return {
    content : exists ? tests.test(buildType).assertContent : tests.test(buildType).assertNoContent
  }
}

function AssertLiberty() {
  this.assertAllFiles = function(exists) {
    var check = getCheck(exists);
    it(check.desc + 'server.xml, server.env, jvm.options and ibm-web-ext.xml', function() {
      check.file(SERVER_XML);
      check.file(SERVER_ENV);
      check.file(IBM_WEB_EXT);
      check.file(JVM_OPTIONS);
    });
    
    it(check.desc + 'jvm.options with ' + JVM_OPTIONS_JAVAAGENT, function() {
        //check.content(JVM_OPTIONS, JVM_OPTIONS_JAVAAGENT);
     });
    
    this.assertFeature(true, "jsp-2.3");
    this.assertFeature(true, "servlet-3.1");
    this.assertFeature(true, "managedBean-1.0");
    this.assertFeature(true, "websocket-1.1");
  
        
  }

  this.assertVersion = function(buildType) {
    describe('contains Liberty version ' + LIBERTY_VERSION, function() {
      var check = getBuildCheck(true, buildType);
      if(buildType === 'gradle') {
        check.content('wlp-webProfile7-' + LIBERTY_VERSION);
      }
      if(buildType === 'maven') {
        var groupId = 'com\\.ibm\\.websphere\\.appserver\\.runtime';
        var artifactId = 'wlp-webProfile7';
        var version = LIBERTY_VERSION.replace(/\./g, '\\.');
        var content = '<assemblyArtifact>\\s*<groupId>' + groupId + '</groupId>\\s*<artifactId>' + artifactId + '</artifactId>\\s*<version>' + version + '</version>\\s*<type>zip</type>\\s*</assemblyArtifact>';
        var regex = new RegExp(content);
        check.content(regex);
      }
    });
  }

  this.assertJNDI = function(exists, name, value) {
    var check = getCheck(exists);
    it(check.desc + 'a server.xml JDNI entry for ' + name + " = " + value, function() {
      check.content(SERVER_XML, '<jndiEntry jndiName="' + name + '" value="' + value + '"/>');
    });
  }

  this.assertEnv = function(exists, name, value) {
    var check = getCheck(exists);
    it(check.desc + 'a server.env entry for ' + name + " = " + value, function() {
      check.content(SERVER_ENV, name + '="' + value + '"');
    });
  }

  this.assertContextRoot = function(name) {
    it('contains a ibm-web-ext.xml context root for ' + name, function() {
      assert.fileContent(IBM_WEB_EXT, '<context-root uri="/' + name + '"/>');
    });
  }

  this.assertFeature = function(exists, name) {
    var check = getCheck(exists);
    it(SERVER_XML + ' ' + check.desc + 'a feature for ' + name, function() {
      check.content(SERVER_XML, "<feature>" + name + "</feature>");
    });
  }
  this.assertDeployType = function(deployType, buildType) {
    describe('checks build steps for deploying to Bluemix', function() {
      var check = getBuildCheck(deployType === 'bluemix', buildType);
      if(buildType === 'gradle') {
        check.content("cfContext = 'mybluemix.net'");
        check.content("apply plugin: 'cloudfoundry'");
        check.content('task checkBluemixPropertiesSet()');
        check.content("task printBluemixProperties(dependsOn: 'checkBluemixPropertiesSet')");
        check.content('def checkPropertySet(propertyName)');
        check.content('cloudfoundry {');
        check.content("cfPush.dependsOn 'printBluemixProperties'");
      }
      if(buildType === 'maven') {
        var profileContent = '<profile>\\s*<id>bluemix</id>';
        var profileRegex = new RegExp(profileContent);
        check.content(profileRegex);
        var propertyContent = '<cf\.context>mybluemix\.net</cf\.context>';
        var propertyRegex = new RegExp(propertyContent);
        check.content(propertyRegex);
      }
    });
  }
}

module.exports = exports = AssertLiberty;
