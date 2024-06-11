const mongoose = require('mongoose')
const url =
  'mongodb+srv://biponroy47:bipondiya47@cluster0.wdsbsc8.mongodb.net/testBlogList?retryWrites=true&w=majority&appName=Cluster0'

mongoose.set('strictQuery', false)
mongoose.connect(url)

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number,
})

const Blog = mongoose.model('Blog', blogSchema)

const blog = new Blog({
  title: 'new blog',
  author: 'bipon',
  url: 'www.www.wwww',
  likes: 1,
})

blog.save().then(() => {
  console.log('blog saved!')
  mongoose.connection.close()
})
