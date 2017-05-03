'use strict';

const services = require('./services');

module.exports = function RPC_TokenService(App) {

    var conf = App.configurations;

    // Validate Shared Config
    conf.shared.assertMember("logLevel");
    conf.shared.assertMember("stackName");

    var app = App({
        onConfigUpdate: () => app.restart(),
        onStart: bootstrap,
        onRestart: bootstrap,
        onShutdown:() => process.exit(0)
    });

    // Start the service
    app.start();

    // ------------------------------------------------------------------------

    function bootstrap(bus, conf) {

        var params = {
            logLevel: conf.shared.logLevel,
            stackName: conf.shared.stackName
        };

        bus.use(services.MyPlugin, params);

        bus.rpcClient({ pin: "role:*" });
        bus.rpcServer({ pin: [
          "role:testService",
          "role:testService.Pub"
        ]});
    }
};
