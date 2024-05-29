module.exports = {
  async up(db, client) {
    await db.createCollection(
      "timer"
    )
  },

  async down(db, client) {
    await db.dropCollection('timer');
  }
};
