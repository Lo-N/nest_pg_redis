'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'Purchases',
      'itemsIds',
      {
        type: Sequelize.ARRAY(Sequelize.UUID),
        allowNull: false,
      }
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn('Purchases', 'itemsIds')
  }
};
