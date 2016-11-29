/**
 * Created on 2016-11-29.
 * @author: Gman Park
 */

switch (process.env.NODE_ENV) {
    case 'prod':
    case 'production':
        module.exports = require('./config/webpack.prod');
        break;
    case 'test':
    case 'testing':
        module.exports = require('./config/webpack.test');
        break;
    case 'dev':
        module.exports = require('./config/webpack.dev');
        break;
    default:
        module.exports = require('./config/webpack.dev');
        break;
}