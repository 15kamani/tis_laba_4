var primeTester = function (v) {
  if (isNaN(v) || n < 1 || Math.floor(v) != v) {
    return "";
  }
  if (v === 2) {
    return true;
  }
  if (v % 2 === 0) {
    return false;
  }

  for (var i = 3, limit = Math.sqrt(v); i <= limit; i += 2) {
    if (v % i === 0) {
      return false;
    }
  }
  return v;
};
