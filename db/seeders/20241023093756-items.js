'use strict';
const { Op } = require('sequelize');

const items = [
  {
    id: "5df68c77-4a82-4250-9b7c-efe948655e1d",
    title: 'Flat white',
    price: 11.25,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "83c6155b-0eec-4cee-bc62-3ed2475eee91",
    title: 'Cappuccino',
    price: 13.75,
    createdAt: new Date(),
    updatedAt: new Date(),
  }
]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Items', items, { ignoreDuplicates: true });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Items', { id: {
      [Op.in]: users.map((item) => item.id)
    }}, {});
  }
};
