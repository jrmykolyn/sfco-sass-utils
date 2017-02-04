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
- If your project stores style-related configuration information in dedicated partial files (eg. `_config.scss`, `_variables.scss`, etc.), `sfco-sass-utils` should be import *after* these files.


## Documentation
- For current documentation, navigate to the `sfco-sass-utils/docs/` folder and open the `index.html` file.


[1]: https://thoughtbot.com/
[2]: http://bourbon.io/
