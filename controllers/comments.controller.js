const Comment = require("../models/Comment");

module.exports.commentController = {
  PostComment: (req, res) => {
    Comment.create({
      name: req.body.name,
      text: req.body.text,
      newsId: req.body.newsId
    }).then(() => {
      res.json("Коммент опубликован");
    });
  },

  DeleteComment: (req, res) => {
    Comment.findByIdAndRemove(req.params.id).then(() => {
      res.json("Коммент удален");
    });
  },

  GetCommentByNews: (req, res) => {
    Comment.find({newId: req.params.id}).then((data) => {
      res.json(data);
    });
  },
};
