const mongoose = require("mongoose");

const commentsSchema = mongoose.Schema({
  name: String,
  text: String,
  newsId: {
    ref: "News",
    type: mongoose.SchemaTypes.ObjectId
  }
});

const Comment = mongoose.model("Comment", commentsSchema);

module.exports = Comment;
