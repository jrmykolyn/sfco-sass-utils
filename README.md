# Short Future Co. - SASS Utils.
---
## About
SASS Utils. is a library of SASS `mixins` and `functions` which aim to simplify common patterns for project writing styles. SASS Utils. is meant to compliment larger, more robust SASS libraries, such as [Thoughtbot's][1] [Bourbon][2].

## Installation
### Node
- Navigate to the root of your project and run: `npm install --save-dev sfco-sass-utils`.
- If you're using a task runner like `Gulp` or `Grunt`, update the runner's configuration file to include a path to the root folder of `sfco-sass-utils` (ie. 'node_modules/sfco-sass-utils').

## Setup
- Add the library to your project using `@import 'sfco-sass-utils'`.
- Ensure that the library has been imported *before* any rules/SASS partials that use it's mixins or functions.
- If your project stores style-related configuration information in dedicated partial files (eg. `_config.scss`, `_variables.scss`, etc.), `sfco-sass-utils` should be imported *after* these files.

## Documentation
For current documentation, navigate to the `docs/` folder and open the `index.html` file. Documentation can be generated using `npm run docs`. Please note that all development dependencies (`devDependencies`) must be installed in order to generate documentation.

## Tests
Tests for `sfco-sass-utils` can be run using the `npm test` command. Please note that all development dependencies (`devDependencies`) must be installed in order to run the test suite.

## TODO
- Look into escaping `#{...}` characters within inline function/mixin documentation (currently stripped out during compilation process).

[1]: https://thoughtbot.com/
[2]: http://bourbon.io/
