const { Schema, model, Mongoose } = require("mongoose");

const StylesSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  color: {
    type: String,
    required: true,
    default: "#000",
  },
  wikiURL: String,
  image: String,
});

const StylesModel = model("styles",StylesSchema);

module.exports = StylesModel;
