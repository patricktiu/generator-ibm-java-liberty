# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="5.0.2"></a>
## [5.0.2](https://github.ibm.com/arf/java-codegen-liberty/compare/v5.0.1...v5.0.2) (2017-07-27)


### Bug Fixes

* **templates:** #65 - Update artifactID setting ([0143b04](https://github.ibm.com/arf/java-codegen-liberty/commit/0143b04))
* **test:** add tests for artifactId and appName override ([ef26643](https://github.ibm.com/arf/java-codegen-liberty/commit/ef26643))



<a name="5.0.1"></a>
## [5.0.1](https://github.ibm.com/arf/java-codegen-liberty/compare/v5.0.0...v5.0.1) (2017-07-26)


### Bug Fixes

* **templates:** Add missing classpath line for cloudfoundry ([cd07794](https://github.ibm.com/arf/java-codegen-liberty/commit/cd07794))



<a name="5.0.0"></a>
# [5.0.0](https://github.ibm.com/arf/java-codegen-liberty/compare/v4.0.0...v5.0.0) (2017-07-26)


### Bug Fixes

* **test:** put README tests in mocha 'it' block ([98c55d9](https://github.ibm.com/arf/java-codegen-liberty/commit/98c55d9))


### Features

* **templates:** Add platforms as config ([a06a823](https://github.ibm.com/arf/java-codegen-liberty/commit/a06a823))


### BREAKING CHANGES

* **templates:** deployType config removed

Signed-off-by: Katherine Stanley <katheris@uk.ibm.com>



<a name="4.0.0"></a>
# [4.0.0](https://github.ibm.com/arf/java-codegen-liberty/compare/v3.2.0...v4.0.0) (2017-07-25)


### Bug Fixes

* **templates:** Update servlet id to web and websockets id to websocket ([4d48ddd](https://github.ibm.com/arf/java-codegen-liberty/commit/4d48ddd))
* **templates:** use correct name for java metrics ([0bb6e74](https://github.ibm.com/arf/java-codegen-liberty/commit/0bb6e74))


### Features

* **build:** correct managed beans feature name and disable javametrics ([16beaf0](https://github.ibm.com/arf/java-codegen-liberty/commit/16beaf0))
* **templates:** templates for java metrics and extra tests ([63b2251](https://github.ibm.com/arf/java-codegen-liberty/commit/63b2251))


### BREAKING CHANGES

* **templates:** id changes for technologies servlet to web and websockets
to websocket.

Signed-off-by: Katherine Stanley <katheris@uk.ibm.com>
* **templates:** this change makes java metrics optional, default being
not enabled.

Signed off by : Adam Pilkington apilkington@uk.ibm.com



<a name="3.2.0"></a>
# [3.2.0](https://github.ibm.com/arf/java-codegen-liberty/compare/v3.1.2...v3.2.0) (2017-07-21)


### Features

* **health:** re-enable Java app metrics ([8be6667](https://github.ibm.com/arf/java-codegen-liberty/commit/8be6667))



<a name="3.1.2"></a>
## [3.1.2](https://github.ibm.com/arf/java-codegen-liberty/compare/v3.1.1...v3.1.2) (2017-07-17)


### Bug Fixes

* **build:** update java-common to 2.0.2 ([bb5e919](https://github.ibm.com/arf/java-codegen-liberty/commit/bb5e919))



<a name="3.1.1"></a>
## [3.1.1](https://github.ibm.com/arf/java-codegen-liberty/compare/v3.1.0...v3.1.1) (2017-07-14)


### Bug Fixes

* **templates:** revert addition of java metrics ([f12cd01](https://github.ibm.com/arf/java-codegen-liberty/commit/f12cd01))



<a name="3.1.0"></a>
# [3.1.0](https://github.ibm.com/arf/java-codegen-liberty/compare/v3.0.0...v3.1.0) (2017-07-13)


### Features

* **templates:** add support for dependency type in build files ([7ade5c7](https://github.ibm.com/arf/java-codegen-liberty/commit/7ade5c7))



<a name="3.0.0"></a>
# [3.0.0](https://github.ibm.com/arf/java-codegen-liberty/compare/v2.2.0...v3.0.0) (2017-07-07)


### Features

* **templates:** add tests to check readme contents ([a1f358a](https://github.ibm.com/arf/java-codegen-liberty/commit/a1f358a))
* **templates:** Update springboot_web id to be springbootweb ([f3c3131](https://github.ibm.com/arf/java-codegen-liberty/commit/f3c3131))


### BREAKING CHANGES

* **templates:** springboot_web is no longer a valid technology

Signed-off-by: Katherine Stanley <katheris@uk.ibm.com>



<a name="2.2.0"></a>
# [2.2.0](https://github.ibm.com/arf/java-codegen-liberty/compare/v2.1.2...v2.2.0) (2017-07-06)


### Bug Fixes

* **config:** Update generator to add on missing defaults ([3bda535](https://github.ibm.com/arf/java-codegen-liberty/commit/3bda535))


### Features

* **config:** Update generator to use new defaults module ([ea19783](https://github.ibm.com/arf/java-codegen-liberty/commit/ea19783))



<a name="2.1.2"></a>
## [2.1.2](https://github.ibm.com/arf/java-codegen-liberty/compare/v2.1.1...v2.1.2) (2017-07-05)


### Bug Fixes

* **config:** Fix Liberty constructor to not overwrite config ([cbb62e8](https://github.ibm.com/arf/java-codegen-liberty/commit/cbb62e8))



<a name="2.1.1"></a>
## [2.1.1](https://github.ibm.com/arf/java-codegen-liberty/compare/v2.1.0...v2.1.1) (2017-07-04)


### Bug Fixes

* **test:** Add defaults unit test ([11b5283](https://github.ibm.com/arf/java-codegen-liberty/commit/11b5283))



<a name="2.1.0"></a>
# [2.1.0](https://github.ibm.com/arf/java-codegen-liberty/compare/v2.0.0...v2.1.0) (2017-07-03)


### Features

* **config:** Set config defaults specific to Liberty ([ae3d353](https://github.ibm.com/arf/java-codegen-liberty/commit/ae3d353))
* **templates:** Add template content for deployType bluemix ([252acbe](https://github.ibm.com/arf/java-codegen-liberty/commit/252acbe))



<a name="2.0.0"></a>
# [2.0.0](https://github.ibm.com/arf/java-codegen-liberty/compare/v1.1.0...v2.0.0) (2017-06-30)


### Features

* **templates:** Update msbuilder template to be a technology ([fca0457](https://github.ibm.com/arf/java-codegen-liberty/commit/fca0457))


### BREAKING CHANGES

* **templates:** msbuilder is no longer a pattern option

Signed-off-by: Katherine Stanley <katheris@uk.ibm.com>



<a name="1.1.0"></a>
# [1.1.0](https://github.ibm.com/arf/java-codegen-liberty/compare/v1.0.0...v1.1.0) (2017-06-22)


### Bug Fixes

* **infrastructure:** stop a failed scan from failing the build ([e366642](https://github.ibm.com/arf/java-codegen-liberty/commit/e366642))
* **infrastructure:** update java-common in package.json ([70cb925](https://github.ibm.com/arf/java-codegen-liberty/commit/70cb925))
* **test:** remove unused springSelected parameter ([333d3b9](https://github.ibm.com/arf/java-codegen-liberty/commit/333d3b9))
* **tests:** change to use handlerbars createFrame function. ([17e3b28](https://github.ibm.com/arf/java-codegen-liberty/commit/17e3b28))
* **tests:** export liberty assertions ([a271b80](https://github.ibm.com/arf/java-codegen-liberty/commit/a271b80))


### Features

* **templates:** add Liberty server configuration templates ([c6fb32c](https://github.ibm.com/arf/java-codegen-liberty/commit/c6fb32c))
* **tests:** add tests for features ([3cbfb2d](https://github.ibm.com/arf/java-codegen-liberty/commit/3cbfb2d))
* **tests:** checks to see if files are present or missing ([da14f47](https://github.ibm.com/arf/java-codegen-liberty/commit/da14f47))
* **tests:** update mock context handlebars reference ([55db330](https://github.ibm.com/arf/java-codegen-liberty/commit/55db330))
* **tests:** use common command and add compile tests ([ff607d1](https://github.ibm.com/arf/java-codegen-liberty/commit/ff607d1))



<a name="1.0.0"></a>
# [1.0.0](https://github.ibm.com/arf/java-codegen-liberty/compare/v0.1.1...v1.0.0) (2017-06-13)


### Features

* **test:** ensure that integration test asserts are accessible. ([bde76bb](https://github.ibm.com/arf/java-codegen-liberty/commit/bde76bb))


### BREAKING CHANGES

* **test:** moved the parts of the test framework to be accessed
by the main generator into a lib directory and removed the unit tests
export.

Signed off by : Adam Pilkington apilkington@uk.ibm.com



<a name="0.1.1"></a>
## [0.1.1](https://github.ibm.com/arf/java-codegen-liberty/compare/v0.1.0...v0.1.1) (2017-06-12)


### Bug Fixes

* **picnmix:** tidy up file locations for JAX-RS ([94f0fa9](https://github.ibm.com/arf/java-codegen-liberty/commit/94f0fa9))
