'use strict';

const util = require('util');

module.exports = {
    format: format
};

function format() {
    var args = Array.prototype.slice.call(arguments);
    return util.format.apply(null, args);
}
