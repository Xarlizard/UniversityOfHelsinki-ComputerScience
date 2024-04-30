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

const mostBlogs = (blogs) =>{
  let authors = []
  let maxcount = 0; 
  let element_having_max_freq; 

  blogs.map(blog => {authors.push(blog.author) })

  for (let i = 0; i < authors.length; i++) { 
    let count = 0; 
    for (let j = 0; j < authors.length; j++) { 
      if (authors[i] == authors[j]) 
        count++; 
    }
    if (count > maxcount) { 
      maxcount = count;
      element_having_max_freq = authors[i]; 
    } 
  } 
  return element_having_max_freq; 
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs
}