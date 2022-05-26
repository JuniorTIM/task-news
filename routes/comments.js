const { Router } = require("express");
const { commentController } = require("../controllers/comments.controller");
const router = Router();

router.post("/comments", commentController.PostComment)
router.delete("/comments/:id", commentController.DeleteComment)
router.get("/comments/:id", commentController.GetCommentByNews)

module.exports = router;