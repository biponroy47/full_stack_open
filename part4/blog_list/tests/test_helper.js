const Blog = require('../models/blog')

const initialBlogs = [
  {
    title: 'new blog',
    author: 'bipon',
    url: 'www.wesbite.com',
    likes: 1,
  },
  {
    title: 'another blog',
    author: 'bipon',
    url: 'www.wesbite.com',
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
