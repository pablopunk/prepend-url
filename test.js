const test = require('ava')
const prepend = require('.')

test('prepend url', t => {
  const result = prepend('http://pablopunk.com', 'https://microsec.pw')
  const expected = 'https://microsec.pw/pablopunk.com/'
  t.is(result, expected)
})

test('returns same url if nothing is passed', t => {
  const result = prepend('http://pablopunk.com', '')
  const expected = 'http://pablopunk.com'
  t.is(result, expected)
})

test('returns same url if null is passed', t => {
  const result = prepend('http://pablopunk.com', null)
  const expected = 'http://pablopunk.com'
  t.is(result, expected)
})

test('returns new url if the first parameter is nothing', t => {
  const result = prepend('', 'https://microsec.pw')
  const expected = 'https://microsec.pw/'
  t.is(result, expected)
})
