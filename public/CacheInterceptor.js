const cache = new Map();

export const withCache = (fn) => {
  return async (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = await fn(...args);
    cache.set(key, result);
    return result;
  };
};

export const clearCache = (key) => {
  if (key) cache.delete(key);
  else cache.clear();
};
