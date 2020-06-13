const { Post } = require('../models');

const postData = [
  {
    title: 'ORM Mapping',
    content: 'I have really loved learning about ORM.',
    user_id: 1
    
  },
  {
    title: 'Why MVC is import',
    content: 'MVC allows developers to maintain true separation of concerns.',
    user_id: 2
  },
  {
    title: 'Authentication vs. Authorization',
    content: 'The is a difference where authentication is confirming your own identity whereas authorization means being allowed access to system.',
    user_id: 3
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;