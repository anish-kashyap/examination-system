const mongoose = require("mongoose");
require("dotenv").config();

const MONGOURI = `mongodb+srv://esm:anish@1997@cluster0.frvha.mongodb.net/esmDatabse?retryWrites=true&w=majority`;
const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(MONGOURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    mongoose.set("useFindAndModify", false);
    console.log("Connected to DB !!");
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = InitiateMongoServer;
