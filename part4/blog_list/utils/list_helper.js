const dummy = () => {
  return 1
}

const totalLikes = (blogs) => {
  const reducer = (sum, item) => {
    return sum + item.likes
  }
  return blogs.length === 0 ? 0 : blogs.reduce(reducer, 0)
}

const favoriteBlog = (blogs) => {
  const reducer = (currentBlog, blog) => {
    return blog.likes > currentBlog.likes ? blog : currentBlog
  }
  return blogs.length === 0 ? null : blogs.reduce(reducer)
}

const mostBlogs = (blogs) => {
  const map = new Map()
  blogs.forEach((blog) => {
    if (map.has(blog.author)) map.set(blog.author, map.get(blog.author) + 1)
    else map.set(blog.author, 1)
  })
  const output = { author: '', blogs: 0 }
  map.forEach((value, key) => {
    if (value > output.blogs) {
      output.author = key
      output.blogs = value
    }
  })
  return output
}

const mostLikes = (blogs) => {
  const map = new Map()
  blogs.forEach((blog) => {
    if (map.has(blog.author))
      map.set(blog.author, map.get(blog.author) + blog.likes)
    else map.set(blog.author, blog.likes)
  })
  const output = { author: '', likes: 0 }
  map.forEach((value, key) => {
    if (value > output.likes) {
      output.author = key
      output.likes = value
    }
  })
  return output
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes,
}
