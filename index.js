'use strict';

var debugging = !!process.env.DYLD_LIBRARY_PATH
  , bindings = require('bindings')

module.exports = 

/**
 * Convenience function to consistently resolve a module binding for two cases:
 *
 *  - a) module is run as addon and the `bindings` module is used to resolve the module
 *  - b) module is currently being debugged and directly executed inside a node process and therefore is resolved via `process.binding`
 *
 * @name resolveBinding
 * @function
 * @param {string} name full name of the module 
 * @return {Object} the binding object of the native module
 */
function resolveBinding(name) {
  if (debugging ) {
    return typeof process._linkedBinding === 'function'
      ? process._linkedBinding(name.replace(/\.node$/,''))
      : process.binding(name.replace(/\.node$/,''));
  }
  return bindings({ bindings: name, module_root: bindings.getRoot(module.parent) });
}


