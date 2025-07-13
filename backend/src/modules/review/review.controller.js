import { reviewModel } from "./review.model.js";

class ReviewController {
    async addReview(req, res) {
        try {
            const review = await reviewModel.create(req.body);
            return res.status(201).json(review);
        } catch (error) {
            return res.status(400).json({ error: "Can not add review", error});
        }
    }

    async getAllReview(req, res) {
        let reviews = await reviewModel.find();
        return res.status(200).json(reviews);
    }

    async getreview(req, res) {
        return res.send("From get a review");
    }

    async updateReview(req, res){
        return res.send("From update review");
    }

    async deleteReview(req, res){
        return res.send("From delete review");
    }
}

const reviewController = new ReviewController();

export default reviewController;