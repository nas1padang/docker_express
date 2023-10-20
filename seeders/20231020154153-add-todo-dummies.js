'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Todos', [
      { title: 'Todo 1', deletedAt: null, createdAt: new Date(), updatedAt: new Date() },
      { title: 'Todo 2', deletedAt: null, createdAt: new Date(), updatedAt: new Date() },
      { title: 'Todo 3', deletedAt: null, createdAt: new Date(), updatedAt: new Date() },
      { title: 'Todo 4', deletedAt: null, createdAt: new Date(), updatedAt: new Date() },
      { title: 'Todo 5', deletedAt: null, createdAt: new Date(), updatedAt: new Date() },
      { title: 'Todo 6', deletedAt: null, createdAt: new Date(), updatedAt: new Date() },
      { title: 'Todo 7', deletedAt: null, createdAt: new Date(), updatedAt: new Date() },
      { title: 'Todo 8', deletedAt: null, createdAt: new Date(), updatedAt: new Date() },
      { title: 'Todo 9', deletedAt: null, createdAt: new Date(), updatedAt: new Date() },
      { title: 'Todo 10', deletedAt: null, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Todos', null, {});
  }
};
