const { test, describe } = require('node:test')
const assert = require('node:assert')
const listHelper = require('../utils/list_helper')


describe('exercise 4.3', ()=>{
    test('dummy returns one', () => {
      const blogs = ['']
    
      const result = listHelper.dummy(blogs)
      assert.strictEqual(result, 1)
    })
})

describe('total likes', () => {
  const listWithOneBlog = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
      likes: 5,
      __v: 0
    }
  ]

  test('when list has only one blog, equals the likes of that', () => {
    const result = listHelper.totalLikes(listWithOneBlog)
    assert.strictEqual(result, 5)
  })
})

describe('favorite blog', () =>{
  const listWithOneBlog = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
      likes: 5,
      __v: 0
    }
  ]
  const listWithTwoBlogs = [
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
  test('when list has only one blog, returns that one', () => {
    const result = listHelper.favoriteBlog(listWithOneBlog)
    assert.deepStrictEqual(result, { _id: '5a422aa71b54a676234d17f8', title: 'Go To Statement Considered Harmful', author: 'Edsger W. Dijkstra', url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf', likes: 5, __v: 0 })
  })
  test('when list has only two blogs, returns the one with highest amount of likes', () => {
    const result = listHelper.favoriteBlog(listWithTwoBlogs)
    assert.deepStrictEqual(result, {_id: '2', title: 'Winner', author: 'Someone', url: 'www.google.com', likes: 10, __v: 0})
  })
})