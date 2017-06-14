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
 * Provides the assertions for testing code from this generator
 */
'use strict';
const assert = require('yeoman-assert');
const INDEX_HTML = 'src/main/webapp/index.html';

function AssertTech() {
  this.assert = function() {
    it('generates an index.html', function() {
      assert.file(INDEX_HTML);
    });
    it('generates sample test files', function() {
      assert.file('src/test/java/it/EndpointTest.java');
      assert.file('src/test/java/it/TestApplication.java');
    });
  }
  this.assertpicnmix = function() {
    this.assert();    //there are no additional files to check for
  }
  this.assertmsbuilder = function() {
    this.assert();    //there are no additional files to check for
    kube.test(this.options.appName, true);
    it('adds MS Builder section to index.html', function() {
      assert.fileContent(INDEX_HTML, '<h2>Microservice Builder');
    });
    this.assertmicroprofiledep();
  }
  this.assertrest = function() {
    it('generates sample file LibertyRestEndpoint.java', function() {
      assert.file('src/main/java/application/rest/LibertyRestEndpoint.java');
    });
    it('generates sample file LibertyRestEndpoinTestIT.java', function() {
      assert.file('src/test/java/it/rest/LibertyRestEndpointTestIT.java');
    });
    it('generates an index.html file with a rest section', function() {
      assert.fileContent(INDEX_HTML, '<h2>REST</h2>');
    });
  }
  this.assertmicroprofile = function() {
    it('generates an index.html file with a microprofile section', function() {
      assert.fileContent(INDEX_HTML, '<h2>MicroProfile</h2>');
    });
  }
  this.assertpersistence = function() {
    it('generates an index.html file with a persistence section', function() {
      assert.fileContent(INDEX_HTML, '<h2>Persistence</h2>');
    });
  }
  this.assertwebsockets = function() {
    it('generates an index.html file with a websockets section', function() {
      assert.fileContent(INDEX_HTML, '<h2>WebSockets</h2>');
    });
  }
  this.assertservlet = function() {
    it('generates an index.html file with a servlet section', function() {
      assert.fileContent(INDEX_HTML, '<h2>Servlet</h2>');
    });
  }
  this.assertwatsonsdk = function() {
    it('generates an index.html file with a Watson SDK section', function() {
      assert.fileContent(INDEX_HTML, '<h2>Watson SDK</h2>');
    });
  }
  this.assertswagger = function() {
    it('generates an index.html file with a Swagger section', function() {
      assert.fileContent(INDEX_HTML, '<h2>Swagger</h2>');
    });
  }
  this.assertspringboot_web = function() {
    it('generates an index.html file with a Spring Boot section', function() {
      assert.fileContent(INDEX_HTML, '<h2>Spring Boot with Spring MVC</h2>');
    });
  }
}

module.exports = exports = AssertTech;
