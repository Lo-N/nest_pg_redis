'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'Users',
      'balance',
      {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.00,
      }
    );
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn('Users', 'balance');
  }
};
