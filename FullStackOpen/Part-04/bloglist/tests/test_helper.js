const Blog = require('../models/blog')

const initialBlogs = [
    {
      title: 'HTML is easy',
      author: 'Someone',
      url: 'url',
      likes: 10
    },
    {
      title: 'Browser can execute only JavaScript',
      author: 'Somebody',
      url: 'url',
      likes: 8
    },
    {
      title: 'Change blog',
      author: 'Someone',
      url: 'url',
      likes: 0
    }
  ]

const nonExistingId = async () => {
  const blog = new Blog({ title: 'willremovethissoon' })
  await blog.save()
  await blog.deleteOne()

  return blog._id.toString()
}

const blogsInDb = async () => {
  const blogs = await Blog.find({})
  return blogs.map(blog => blog.toJSON())
}

module.exports = {
  initialBlogs, nonExistingId, blogsInDb
}