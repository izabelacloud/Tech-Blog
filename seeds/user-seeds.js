const { User } = require('../models');

const userData = [
  {
    username: 'izabelapetrovicova',
    email: "i.petrovicova@gmail.com",
    password: 'test1'
    
  },
  {
    username: 'izabelap',
    email: "izabelap@gmail.com",
    password: 'test2'
  },
  {
    username: 'ip',
    email: "ip@gmail.com",
    password: 'test3'
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;