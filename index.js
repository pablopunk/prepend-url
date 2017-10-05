const url = require('url')

const clean = str => {
  if (!str) {
    return ''
  }
  return str.trim()
}

module.exports = (from, to) => {
  if (!to) {
    return from
  }
  const parsed = url.parse(from)
  const host = clean(parsed.host)
  const path = clean(parsed.path)
  return `${to}/${host}${path}`
}
