/* IMPORT MODULES */
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var stripCSSComments = require('gulp-strip-css-comments');
var removeEmptyLines = require('gulp-remove-empty-lines');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var postCSSCustomProperties = require('postcss-custom-properties');
var postCSSImport = require('postcss-import');
var postCSSStyleGuide = require('postcss-style-guide');
var nano = require('cssnano');


/* DECLARE VARS */
var PROJECT = 'SF Co. SASS Utils';
var INPUT = 'sfco-sass-utils.scss';

var PATHS = {
    docs: {
        src: './',
        dest: './docs/'
    },
    tests: {
        src: './tests/',
        dest: './tests/'
    }
};


/* DECLARE TASKS */
/**
 * 'Default' Gulp task, executed when `gulp` is run from the
 * command line with *no* arguments.
 *
 * The following tasks are executed *before* the contents of
 * the `default` task.
 * - `docs`
 */
gulp.task( 'default', [ 'tests', 'docs' ], function() {
    console.log( 'INSIDE TASK: `default`' );
} );


/**
 * ...
 */
gulp.task( 'docs', function() {
    return gulp.src( PATHS.docs.src + INPUT )
        .pipe( sass( {
            outputStyle: 'expanded' 
            } )
        )
        .pipe( postcss( [
            postCSSImport,
            postCSSCustomProperties( { preserve: true } ),
            autoprefixer,
            postCSSStyleGuide( {
                project: PROJECT,
                dest: PATHS.docs.dest + '/index.html',
                showCode: true,
                theme: 'psg-theme-minimal',
                themePath: './node_modules/psg-theme-minimal'
            } ),
            nano
        ] ) );
} );


/**
 * ...
 */
gulp.task( 'tests', function() {
    return gulp.src( PATHS.tests.src + 'input.scss' )
        .pipe( sass( {
            outputStyle: 'expanded'
        } ) )
        .pipe( stripCSSComments() )
        .pipe( removeEmptyLines() )
        .pipe( rename( function( path ) {
            path.basename = 'output';
        } ) )
        .pipe( gulp.dest( PATHS.tests.dest) );
} );