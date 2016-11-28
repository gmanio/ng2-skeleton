/**
 * Created on 2016-11-24.
 * @author: Gman Park
 */

import 'ie-shim'; // Internet Explorer 9 support
import 'core-js/es6';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

if ('production' === process.env.NODE_ENV) {
    // Production

} else {
    // Development
    Error['stackTraceLimit'] = Infinity;
    require('zone.js/dist/long-stack-trace-zone');
}