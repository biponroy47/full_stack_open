const { test, describe } = require('node:test')
const assert = require('node:assert')
const listHelper = require('../utils/list_helper')
const blogs = require('./test_blogs')

describe('favorite blog', () => {
  test('finding most liked blog', () => {
    const result = listHelper.favoriteBlog(blogs)
    const desiredResult = blogs[2]
    assert.deepStrictEqual(result, desiredResult)
  })
})