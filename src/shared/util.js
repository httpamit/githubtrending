// To check is given value null
export const isNull = (target) =>
  target === null || target === "" || target === "null" || /^\s+$/.test(target);

// To check is given value Undefined
export const isUndefined = (target) =>
  typeof target === "undefined" || target === undefined;

// To check is given value string or array Empty
export const isEmptyObject = (obj) =>
  !isUndefined(obj) &&
  !isNull(obj) &&
  obj.constructor === Object &&
  Object.keys(obj).length === 0;
