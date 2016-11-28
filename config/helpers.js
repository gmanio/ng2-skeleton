/**
 * Created on 2016-11-24.
 * @author: Gman Park
 */

var path = require('path');

// Helper functions
var ROOT = path.resolve(__dirname, '..');
var SRC = path.resolve(__dirname, '..', 'src');

function root(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [ROOT].concat(args));
}

function src(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [SRC].concat(args));
}

exports.root = root;
exports.src = src;