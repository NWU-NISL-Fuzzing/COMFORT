var log4js = require('log4js');
log4js.configure({
  appenders: {
    console:{ type: 'console' },
    runLogs:{ type: 'file', filename: '../log/run.log', category: 'run' }
  },
     categories: {

        default: {appenders: ['console', 'runLogs'], level: 'info'}

    }
});
var logger = log4js.getLogger('run');

exports.logger = logger;
