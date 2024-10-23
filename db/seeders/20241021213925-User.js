'use strict';
const { Op } = require('sequelize');

const users = [
  {
    id: '4d03c043-2301-4f35-9229-f217e31cc637',
    login: 'joe_joe',
    password: '$2b$10$OgoDdxG776MBzCB8pUNbUOahx/EsDFQxll8Eaw96u7Kz3zA97h5kS', // not_joe_secret
    firstName: 'John',
    lastName: ' Doe',
    email: 'johndoe@user.io',
    age: 30,
    balance: 125.75,
    createdAt: new Date(),
    updatedAt: new Date(),
  }
]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Users', users, { ignoreDuplicates: true });
   
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', { login: {
      [Op.in]: users.map((user) => user.login)
    }}, {});
  }
};
