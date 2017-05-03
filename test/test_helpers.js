'use strict';

const assert = require('assert');
const uuid = require('uuid');
const lib = require('../src/lib');

describe('lib/helpers', function() {

    describe('format', function() {

        it('should allow string passthru.', function() {
            assert.equal(lib.helpers.format("asdf asdf"), "asdf asdf");
        });

        it('should interpolate arguments into the pattern.', function() {
            var _u = uuid().toString();
            assert.equal(lib.helpers.format("asdf %s", _u), `asdf ${_u}`);
        });

    });
});
