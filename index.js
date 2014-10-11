var Calendar = require('./components/Calendar');

module.exports.Calendar = Calendar;

// Setting these for example.js until browserify -s with -r is resolved
// might be https://github.com/substack/node-browserify/issues/939
module.exports.React = require('react');
module.exports.ReactBootstrap = require('react-bootstrap');
