const test = require('ava')
const prepend = require('..')

test('Simple test', t => {
  const result = prepend('http://pablopunk.com', 'https://microsec.pw')
  const expected = 'https://microsec.pw/pablopunk.com/'
  t.is(result, expected)
})
