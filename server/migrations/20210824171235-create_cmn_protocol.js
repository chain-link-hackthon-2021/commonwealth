'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.transaction(async (t) => {
      await queryInterface.createTable('CmnProtocols', {
        id: { type: Sequelize.STRING, primaryKey: true }, // autogenerated,
        name: { type: Sequelize.STRING, allowNull: false },
        projectProtocol: { type: Sequelize.STRING, allowNull: false },
        collectiveProtocol: { type: Sequelize.STRING, allowNull: false },
        chain: { type: Sequelize.STRING, allowNull: false, references: { model: 'Chains', key: 'id' } }
      }, { transaction: t });

      await queryInterface.bulkInsert('CmnProtocols', [{
        id: 'kovan-ethereum-protocol',
        name: 'Kovan Ethereum CMN Protocol',
        projectProtocol: '0x264cB0546D8d515b632DF3571Ef0b503855a3C77',
        collectiveProtocol: '0x13C99770694f07279607A6274F28a28c33086424',
        chain: 'ethereum-kovan'
      }], { transaction: t });
    });

    return new Promise((resolve, reject) => {
      resolve();
    });
  },

  down: async (queryInterface, Sequelize) => {
    // return queryInterface.dropTable('CmnProtocols');
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.bulkDelete('CmnProtocols', { id: 'kovan-ethereum-protocol' }, { transaction: t }),
        queryInterface.dropTable('CmnProtocols', { transaction: t }),
      ]);
    });
  }
};