const { User } = require('../models');

const userData = [
  {
    username: 'izabelapetrovicova',
    password: 'test1'
    
  },
  {
    username: 'izabelap',
    password: 'test2'
  },
  {
    username: 'ip',
    password: 'test3'
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;