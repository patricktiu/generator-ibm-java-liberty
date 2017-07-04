# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

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
