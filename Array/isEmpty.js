(() => {
  if (!Array.isEmpty) {
    Object.defineProperty(Array, 'isEmpty', {
      value: (arr) => {
        if (!Array.isArray(arr)) return false;  // bukan array → false
        if (arr.length === 0) return true;      // kosong → true

        let stringCount = 0;
        let nonStringCount = 0;

        for (let i of arr) {
          if (typeof i === 'string' && i.trim().length === 0) stringCount++;
          else nonStringCount++;
        }

        return stringCount > nonStringCount;
      },
      writable: false,
      enumerable: false,
      configurable: true,
    });
  }
})();
