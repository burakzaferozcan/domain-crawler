module.exports = {
  CONNECTION_STRING:
    process.env.CONNECTION_STRING || "mongodb://localhost:27017/domain-crawler",
  BASE_URL: process.env.BASE_URL || "http://localhost:3000",
};
