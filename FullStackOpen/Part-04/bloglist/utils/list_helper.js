const dummy = (blogs) => {
  return 1
}
  
const totalLikes = (blogs) => {
  let sum = 0
  blogs.map((x) =>{
    sum += x.likes
  })
  return sum
}

const favoriteBlog = (blogs) =>{
  let maxBlog = blogs.reduce((max, blog) => max.likes > blog.likes ? max : blog)
  return maxBlog
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog
}