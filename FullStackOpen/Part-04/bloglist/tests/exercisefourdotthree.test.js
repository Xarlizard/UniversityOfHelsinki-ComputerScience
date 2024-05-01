const { test, describe } = require('node:test')
const assert = require('node:assert')
const listHelper = require('../utils/list_helper')

const blogList1 = [
  {
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
    likes: 5,
    __v: 0
  }
]
const blogList2 = [
  {
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
    likes: 5,
    __v: 0
  },
  {
    _id: '2',
    title: 'Winner',
    author: 'Someone',
    url: 'www.google.com',
    likes: 10,
    __v: 0
  }
]
const blogList3 = [
  {
    _id: '1',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    likes: 5,
  },
  {
    _id: '2',
    title: 'Winner',
    author: 'Someone',
    likes: 10,
  }, 
  {
    _id: '3',
    title: 'Second book',
    author: 'Edsger W. Dijkstra',
    likes: 8,
  }
]

describe('exercise 4.3', ()=>{

  test('dummy returns one', () => {
    const blogs = ['']
    
    const result = listHelper.dummy(blogs)
    assert.strictEqual(result, 1)
  })
})

describe('exercise 4.4 total likes', () => {

  test('when list has only one blog, equals the likes of that', () => {

    const result = listHelper.totalLikes(blogList1)
    assert.strictEqual(result, 5)
  })
})

describe('exercise 4.5 most likes', () =>{

  test('when list has only one blog, returns that one', () => {

    const result = listHelper.favoriteBlog(blogList1)
    assert.deepStrictEqual(result, 
      { 
        _id: '5a422aa71b54a676234d17f8', 
        title: 'Go To Statement Considered Harmful', 
        author: 'Edsger W. Dijkstra', 
        url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf', 
        likes: 5, 
        __v: 0 
      })
  })
  test('when list has only two blogs, returns the one with highest amount of likes', () => {

    const result = listHelper.favoriteBlog(blogList2)
    assert.deepStrictEqual(result, {_id: '2', title: 'Winner', author: 'Someone', url: 'www.google.com', likes: 10, __v: 0})
  })
})

describe('exercise 4.6 most blogs', ()=>{

  test('Author with most blogs pops up', () => {

    const result = listHelper.mostBlogs(blogList3)
    assert.deepStrictEqual(result, 'Edsger W. Dijkstra')
  })
})

describe('exercise 4.7 most likes', ()=>{

  test('Author with most likes pops up', () => {

    const result = listHelper.mostLikes(blogList3)
    assert.deepStrictEqual(result, {'author': 'Edsger W. Dijkstra', 'likes': 13})
  })
})