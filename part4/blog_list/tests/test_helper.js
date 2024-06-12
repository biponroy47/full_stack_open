const Blog = require('../models/blog')

const initialBlogs = [
  {
    title: 'a',
    author: 'a',
    url: 'a',
    likes: 1,
  },
  {
    title: 'b',
    author: 'b',
    url: 'b',
    likes: 1,
  },
]

const blogsInDb = async () => {
  const blogs = await Blog.find({})
  return blogs.map((blog) => blog.toJSON())
}

module.exports = {
  initialBlogs,
  blogsInDb,
}
