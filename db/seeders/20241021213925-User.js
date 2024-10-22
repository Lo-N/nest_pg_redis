'use strict';
const { Op } = require('sequelize');

const users = [
  {
    id: '4d03c043-2301-4f35-9229-f217e31cc637',
    login: 'joe_joe',
    password: 'not_joe_secret',
    firstName: 'John',
    lastName: ' Doe',
    email: 'johndoe@user.io',
    age: 20,
    createdAt: new Date(),
    updatedAt: new Date(),
  }
]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Users', users);
   
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', { login: {
      [Op.in]: users.map((user) => user.login)
    }}, {});
  }
};
