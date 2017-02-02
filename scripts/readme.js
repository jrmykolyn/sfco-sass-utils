// IMPORT MODULES
var fs = require( 'fs' );
var Promise = require( 'bluebird' );


// DECLARE VARS
const dirs = [ 'mixins', 'functions' ];
const targetPath = `${__dirname}/..`;
const outFile = 'temp.txt'; // TODO: Update value of `outFile` when script is complete.

var filterDirs = filterMaker( dirs );


// DEFINE FUNCTIONS
function readDir( dir ) {
    return new Promise( ( resolve, reject ) => {
        fs.readdir( dir, ( err, data ) => {
            if ( err ) reject( err );
            resolve( data );
        } )
    } );
}

function readDirs( dirsArr ) {
    var promises = [];
    
    dirsArr.forEach( ( dir ) => {
        promises.push( readDir( dir ) );
    } );

    return Promise.all( promises );
}

function concatAll( inputArr ) {
    return inputArr.reduce( ( arr1, arr2 ) => {
        return arr1.concat( arr2 );
    } );
}

function filterMaker( whitelist ) {
    return function( arr ) {
        return arr.filter( ( item ) => {
            return whitelist.includes( item );
        } );
    }
}


// DO PROGRAM
readDir( targetPath )
    .then( filterDirs )
    .then( 
        ( data ) => {
            return readDirs( data.map( ( item ) => `${targetPath}/${item}` ) );
        }
    )
    .then( concatAll )
    .then(
        ( data ) => {
            data.forEach( ( item ) => {
                fs.appendFile( `${__dirname}/${outFile}`, `${item}\n`, ( err ) => {
                    if ( err ) {
                        console.error( err );
                    }
                } );
            } );
        }
    )
    .catch(
        ( err ) => {
            console.error( 'CAUGHT ERROR' );
            console.error( err );
        }
    )
