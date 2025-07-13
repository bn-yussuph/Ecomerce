import express from "express";
import reviewController from "./review.controller.js";

const reviewRouter = express.Router();

reviewRouter.get("/", reviewController.getAllReview);
reviewRouter.post("/", reviewController.addReview);
reviewRouter.put("/:id", reviewController.updateReview);
reviewRouter.delete("/:id", reviewController.deleteReview);

export default reviewRouter;