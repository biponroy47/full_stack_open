const { test, describe } = require('node:test')
const assert = require('node:assert')
const listHelper = require('../utils/list_helper')
const blogs = require('./test_blogs')

describe('most author likes', () => {
  test('finding most liked blog author', () => {
    const result = listHelper.mostLikes(blogs)
    const desiredResult = {
      author: 'Edsger W. Dijkstra',
      likes: 17,
    }
    assert.deepStrictEqual(result, desiredResult)
  })
})
