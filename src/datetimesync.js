let _ts = 0;
function parseTime(value) {
  if (typeof value !== 'number') {
    if (typeof value === 'string') {
      value = Date.parse(value);
    } else if (value instanceof Date) {
      value = value.getTime();
    } else {
      throw new Error('value should be number(length=13)');
    }
  } else if (value < 1e10) {
    value = value * 1000;
  }
  return value;
}
module.exports = {
  getTime() {
    return _ts + Date.now();
  },
  getTimeDiff(target) {
    return parseTime(target) - _ts - Date.now();
  },
  setTime(value) {
    _ts = parseTime(value) - Date.now();
  }
};
