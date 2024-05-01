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
  let favorite = blogs.reduce((max, blog) => max.likes > blog.likes ? max : blog)
  return favorite
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

const mostLikes = (blogs) => {
  let list = []
  blogs.map(blog => {
    let newItem = { 'author': blog.author , 'likes': blog.likes}
    
    list.some(e => e.author === blog.author) 
      ? list.find((e) => e.author === blog.author).likes += blog.likes 
      : list.push(newItem) 
  })

  var res = Math.max(...list.map(function(o){return o.likes;}))
  var obj = list.find(function(o){ return o.likes  == res; })
  return obj
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs,
    mostLikes
}