const mongoose = require("mongoose");

let instance = null;
class Database {
  constructor() {
    if (!instance) {
      this.mongoConnection = null;
      instance = this;
    }
    return instance;
  }
  async connect(options) {
    try {
      console.log("DB Connecting...");
      let db = await mongoose.connect(options.CONNECTION_STRING);
      console.log("DB Connected...");
    } catch (error) {
      console.error(err);
      process.exit(1);
    }
  }
}
module.exports = Database;
