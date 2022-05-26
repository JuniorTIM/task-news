
const News = require("../models/News");

module.exports.newsController = {
  postNews: (req, res) => {
    News.create({
      title: req.body.title,
      text: req.body.text,
      categoryId: req.body.categoryId,
    }).then(() => {
      res.json("Новость добавлена");
    });
  },

  getNews: (req, res) => {
    News.find().then((data) => {
      res.json(data);
    });
  },

  getNewsById: (req, res) => {
    News.findById(req.params.id).then((data) => {
      res.json(data);
    });
  },
  
  getNewsByCat: (req, res) => {
    News.find({categoryId: req.params.id}).then((data) => {
      res.json(data);
    });
  },

  patchNews: (req, res) => {
    News.findByIdAndUpdate(req.params.id, {
      title: req.body.title,
      text: req.body.text,
      categoryId: req.body.categoryId,
    }).then(() => {
      res.json("Новость изменена");
    });
  },

  deleteNews: (req, res) => {
    News.findByIdAndRemove(req.params.id).then(() => {
      res.json("Новость удалена");
    });
  },
};
