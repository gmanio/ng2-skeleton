/**
 * Created on 2016-11-24.
 * @author: Gman Park
 */

// Look in ./config folder for webpack.dev.js
switch (process.env.NODE_ENV) {
    case 'prod':
    case 'production':
        module.exports = require('./config/webpack.prod')({env: 'production'});
        break;
    case 'test':
    case 'testing':
        module.exports = require('./config/webpack.test')({env: 'test'});
        break;
    case 'dev':
        module.exports = require('./config/webpack.dev')({env: 'development'});
        break;
    default:
        module.exports = require('./config/webpack.dev')({env: 'development'});
}