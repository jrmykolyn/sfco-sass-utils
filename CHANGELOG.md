# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) and this project adheres to [Semantic Versioning](http://semver.org/).

## [1.20.0] - 2017-11-29
### Added
- Added development dependencies: `kss`.

#### Changed
- Normalized `get*()` functions: replace 'base' value with 'default' for `getColor()`. Display warning in cases where 'base' key is used.
- Moved `functions/` and `mixins/` into new `lib/` dir.
- Updated function/mixin documentation syntax as per `kss` requirements, regenerated docs.

## [1.19.0] - 2017-11-24
### Added
- Added 'kebab-case' aliases for all functions (eg. `getColor`/`get-color`, `getFont`/`getFont`, etc.).
- Added tests for function aliases (eg. `get-color`, `get-font`, etc.).

### Changed
- Refactored the following functions: `getColor`; `getFont`; `getPath`.
- Updated function and mixin declarations to use 'kebab-case' for variable identifiers.
- Updated docs.
