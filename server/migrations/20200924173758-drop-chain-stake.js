'use strict';

module.exports = {
  down: async (queryInterface, DataTypes) => {
    await queryInterface.sequelize.transaction(async (t) => {
      await queryInterface.createTable('ChainStakes', {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true }, // autogenerated
        stash: { type: DataTypes.STRING, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        chain: { type: DataTypes.STRING, references: { model: 'Chains', key: 'id' } }
      }, { transaction: t });
    });

    await queryInterface.sequelize.transaction(async (t) => {
      await queryInterface.addIndex('ChainStakes', { fields: ['chain', 'stash' ] }, { transaction: t });
    });

    return new Promise((resolve, reject) => {
      resolve();
    });
  },
  up: (queryInterface, DataTypes) => {
    return queryInterface.dropTable('ChainStakes');
  }
};
