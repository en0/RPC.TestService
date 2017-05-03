'use strict';

const rpcUtils = require('rpc-utils');
const lib = require('./../lib');

module.exports = function MyPlugin(opts) {

    var seneca = this,
        logLevel = opts.logLevel;

    seneca.rpcAdd('role:testService.Pub,cmd:hello.v1', hello_v1);

    return { name: "MyPlugin" };

    // ------------------------------------------------------------------------

    function hello_v1(args, rpcDone) {

        var params = {

            name: "Say Hello (v1)",
            code: "TS-SH01",
            repr: lib.repr.hello_v1,

            transport: seneca,
            logLevel: args.get('logLevel', logLevel),
            done: rpcDone,

            optional: [
                { field: 'name', type: String, default: "World", regex: '^\\S+$' },
            ],

            tasks: [
                format
            ],
        }

        args.set('tokens', []);

        rpcUtils.Workflow.Executor(params).run(args);
    }
}

function format(console, state, done) {
    var greeting = lib.helpers.format(lib.GREETING_FORMAT, state.get('name'));
    state.set("greeting", greeting);
    done(null, state);
}
