Object.defineProperty(Array, 'empty', {
  value: function empty(arg = []) {
    if (typeof arguments[0] === 'undefined' || Array.isArray(arguments[0]) === false) return false;
  
    for (var i of arg) if (typeof i === 'string' && i.length === 0) return false;  
    return arg.length > 0;
  },
  writable: false, // nggak bisa diubah
  enumerable: false, // nggak nongol di loop
  configurable: true,
});
