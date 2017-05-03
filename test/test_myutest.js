'use strict';

const rpcUtils = require('rpc-utils');
const assert = require('assert');
const MockSeneca = require('./MOCK_seneca');
const services = require('../src/services');
const uuid = require('uuid');

var seneca = MockSeneca();
var impl = [
    services.MyPlugin.call(seneca, { logLevel: 'quiet' }),
];

describe('MyPlugin', function() {

    describe('hello.v1', function() {

        it('should say hello', function(done) {

            var params = { };

            seneca.act('role:testService.Pub,cmd:hello.v1', params, function(err, data) {
                assert.equal(data.result, 'Hello, World');
                done();
            });
        });

        it('should say hello to the given name.', function(done) {

            var params = {
                name: uuid().toString()
            };

            seneca.act('role:testService.Pub,cmd:hello.v1', params, function(err, data) {
                assert.equal(data.result, `Hello, ${params.name}`);
                done();
            });
        });

        it('should not accept names with spaces.', function(done) {
            var params = {
                name: "asdf asd fasdf"
            };

            seneca.act('role:testService.Pub,cmd:hello.v1', params, function(err, data) {
                assert(data.hasError);
                done();
            });
        });

    });
});
