const { test, describe } = require('node:test')
const assert = require('node:assert')
const listHelper = require('../utils/list_helper')
const blogs = require('./test_blogs')

describe('most blogs author', () => {
  test('finding most liked blog author', () => {
    const result = listHelper.mostBlogs(blogs)
    const desiredResult = {
      author: 'Robert C. Martin',
      blogs: 3,
    }
    assert.deepStrictEqual(result, desiredResult)
  })
})
