const { test, after, beforeEach, describe } = require('node:test')
const assert = require('node:assert')
const supertest = require('supertest')
const mongoose = require('mongoose')
const helper = require('./test_helper')
const app = require('../app')
const api = supertest(app)
const Blog = require('../models/blog')

describe('basic api tests', () => {
  beforeEach(async () => {
    await Blog.deleteMany({})
    const blogObjects = helper.initialBlogs.map((blog) => new Blog(blog))
    const promiseArray = blogObjects.map((blog) => blog.save())
    await Promise.all(promiseArray)
  })
  test('blogs are returned as json', async () => {
    await api
      .get('/api/blogs')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })

  test('all blogs are returned', async () => {
    const blogs = await api.get('/api/blogs')
    assert.strictEqual(blogs.body.length, helper.initialBlogs.length)
  })

  test('_id property formatted to id', async () => {
    const response = await api.get('/api/blogs')
    const content = JSON.stringify(response.body[0])
    assert(content.includes('id'))
    assert(!content.includes('_id'))
  })
  describe('api request tests', () => {
    test('a valid note can be added ', async () => {
      const newBlog = {
        title: 'another blog yay!',
        author: 'bipon',
        url: 'www.wesbite.com',
        likes: 1,
      }
      await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(201)
        .expect('Content-Type', /application\/json/)
      const blogsAtEnd = await helper.blogsInDb()
      assert.strictEqual(blogsAtEnd.length, helper.initialBlogs.length + 1)
    })

    test('likes default to 0 if not specified ', async () => {
      const newBlog = {
        title: 'woohoo!',
        author: 'bipon',
        url: 'www.wesbite.com',
      }
      await api.post('/api/blogs').send(newBlog)
      const updatedBlogs = await helper.blogsInDb()
      const addedBlog = updatedBlogs.find((blog) => blog.title === 'woohoo!')
      assert.strictEqual(addedBlog.likes, 0)
    })

    test('missing title', async () => {
      const newBlog = {
        author: 'bipon',
        url: 'www.wesbite.com',
      }
      await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(400)
        .expect('Content-Type', /application\/json/)
    })
    test('deleting a blog', async () => {
      const blogsBefore = await helper.blogsInDb()
      const blogToDelete = blogsBefore[0]
      await api.delete(`/api/blogs/${blogToDelete.id}`).expect(204)
      const blogsAfter = await helper.blogsInDb()
      assert.strictEqual(blogsAfter.length, helper.initialBlogs.length - 1)
    })
    test('updating a blog', async () => {
      const blogsBefore = await helper.blogsInDb()
      const oldBlog = blogsBefore[0]
      const newInfo = {
        title: 'updated',
        url: 'www.wesbite.com',
        likes: 999,
      }
      await api.put(`/api/blogs/${oldBlog.id}`).send(newInfo)
      const updatedBlogs = await helper.blogsInDb()
      const updatedBlog = updatedBlogs.find((blog) => blog.title === 'updated')
      assert.strictEqual(updatedBlog.likes, 999)
    })
  })
})

after(async () => {
  await mongoose.connection.close()
})
