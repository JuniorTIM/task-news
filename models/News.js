const mongoose = require("mongoose");

const newsSchema = mongoose.Schema({
  title: String,
  text: String,
  categoryId: {
    ref: "Category",
    type: mongoose.SchemaTypes.ObjectId
  }
});

const News = mongoose.model("News", newsSchema);

module.exports = News;
