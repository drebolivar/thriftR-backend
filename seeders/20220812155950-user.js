'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          username: 'MackleSm0r3z',
          passwordDigest: '20dollars',
          email: 'MaCkLeSSiSMoRe@aol.com',
          profileImg: 'https://i.imgur.com/74igJK0.png',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: 'NotRyanLewis',
          passwordDigest: 'whoamieven88',
          email: 'ryanyancylewis@angelfire.com',
          profileImg: 'https://i.imgur.com/YMN911r.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {})
  }
}
