'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'Purchases',
      'userId',
      {
        type: Sequelize.UUID,
        references: {
          model: 'Users',
          key: 'id'
        },
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'NO ACTION',
      }
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn('Purchases', 'userId')
  }
};
