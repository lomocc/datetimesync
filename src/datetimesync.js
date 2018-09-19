let _ts = 0;
function parseTime(vaule) {
  if (typeof value !== 'number') {
    if (typeof value === 'string') {
      vaule = Date.parse(value);
    } else if (vaule instanceof Date) {
      vaule = vaule.getTime();
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
    return parseTime(target) - this.getTime();
  },
  setTime(value) {
    _ts = parseTime(value) - Date.now();
  }
};
