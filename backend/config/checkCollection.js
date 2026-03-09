const mongoose = require("mongoose");

async function checkCollection() {

  const collections = await mongoose.connection.db.listCollections().toArray();

  const exists = collections.some(c => c.name === "users");

  if (exists) {
    console.log("Users collection exists");
  } else {
    console.log("Users collection does not exist");
  }

}

module.exports = checkCollection;