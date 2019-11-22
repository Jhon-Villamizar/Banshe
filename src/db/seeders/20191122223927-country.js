'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('tbl_country', [{
        name: 'Chile',
      },
      {
        name: 'Peru',
      },
      {
        name: 'Ecuador',
      },
      {
        name: 'Venezuela',
      },
      {
        name: 'Barbados',
      },
      {
        name: 'Puerto Rico',
      },
      {
        name: 'United States',
      },
      {
        name: 'Norway',
      },
      {
        name: 'Sweden',
      },
      {
        name: 'Denmark',
      },
      {
        name: 'Belgium',
      },
      {
        name: 'Portugal',
      },
      {
        name: 'Switzerland',
      },
      {
        name: 'Germany',
      },
      {
        name: 'Slovenia',
      },
      {
        name: 'Czechia',
      },
      {
        name: 'Poland',
      },
      {
        name: 'Romania',
      },
      {
        name: 'Greece',
      },
      {
        name: 'South Africa',
      },
      {
        name: 'Israel',
      },
      {
        name: 'Australia',
      },
      {
        name: 'New Zealand',
      },
      {
        name: 'Indonesia',
      },
      {
        name: 'Kuala Lumpur',
      },
      {
        name: 'Philippines',
      },
      {
        name: 'Nepal',
      },
      {
        name: 'Taiwan',
      },
      {
        name: 'China',
      },
      {
        name: 'South Korea',
      },
      {
        name: 'Japan',
      }], {});
  },
  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('tbl_country', null, {});
  }
};
