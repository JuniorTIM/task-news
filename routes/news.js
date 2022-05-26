const { Router } = require("express");
const { newsController } = require("../controllers/news.controller");

const router = Router();

router.get("/news", newsController.getNews);
router.get("/news/:id", newsController.getNewsById);
router.get("/news/categorie/:id", newsController.getNewsByCat);
router.post("/news", newsController.postNews);
router.patch("/news/:id", newsController.patchNews);
router.delete("/news/:id", newsController.deleteNews);

module.exports = router;
