// This isn't transpilled, so mush use commonJS and ES5

// Register babel to transpil before our test run
require('babel-register')();

// Disable webpack feature mocha doesn't understand
require.extensions['css']=function(){};