const _ = require('lodash');

const totalLikes = (blogs) => {
  let likes = 0;
  for (const blog of blogs) {
    likes += blog.likes;
  }
  return likes;
};

const favoriteBlog = (blogs) => {
  if (blogs.length === 0) return;
  let favorite = blogs[0];
  for (const blog of blogs) {
    if (blog.likes > favorite.likes) {
      favorite = blog;
    }
  }
  return {
    title: favorite.title,
    author: favorite.author,
    likes: favorite.likes,
  };
};

const mostBlogs = (blogList) => {
  const grouped = _(blogList)
    .countBy('author')
    .map((blogs, author) => ({
      author,
      blogs,
    }))
    .value();
  return _.maxBy(grouped, 'blogs');
};

const mostLikes = (blogList) => {
  const grouped = _(blogList)
    .groupBy('author')
    .map((blogs, author) => ({
      author,
      likes: _.sumBy(blogs, 'likes'),
    }))
    .value();
  return _.maxBy(grouped, 'likes');
};

module.exports = {
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes,
};
