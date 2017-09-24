const url = require('url');

module.exports = (from, to) => {
  const parsed = url.parse(from);
  return `${to}/${parsed.host}${parsed.path}`;
};
