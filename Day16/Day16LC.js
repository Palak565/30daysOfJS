// DAY 16

// 2627. Debounce
function debounce(fn, t) {
    let timeout = null;
  
    return function(...args) {
      if (timeout) {
        clearTimeout(timeout);
      }
  
      timeout = setTimeout(() => {
        fn(...args);
        timeout = null;
      }, t);
    };
  }

  const debouncedLog = debounce(console.log, 2000);