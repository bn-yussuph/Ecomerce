/**
 * Import required modules
 */
import { reviewModel } from "./review.model.js"; // Review model for database interactions

/**
 * Define a class to manage review-related operations
 */
class ReviewController {
  /**
   * Add a new review to the database
   * 
   * @async
   * @param {Express.Request} req - The incoming request
   * @param {Express.Response} res - The outgoing response
   */
  async addReview(req, res) {
    try {
      // Create a new review
      const review = await reviewModel.create(req.body);
      return res.status(201).json(review);
    } catch (error) {
      // Return an error response if review creation fails
      return res.status(400).json({ error: "Can not add review", error });
    }
  }

  /**
   * Retrieve all reviews from the database
   * 
   * @async
   * @param {Express.Request} req - The incoming request
   * @param {Express.Response} res - The outgoing response
   */
  async getAllReview(req, res) {
    // Find all reviews
    let reviews = await reviewModel.find();
    return res.status(200).json(reviews);
  }

  /**
   * Retrieve a review by ID
   * 
   * @async
   * @param {Express.Request} req - The incoming request
   * @param {Express.Response} res - The outgoing response
   */
  async getReview(req, res) {
    let id = req.params;
    let review = await reviewModel.findById(id);
    if(!review){
      return res.status(404).json({ error: "review not found."})
    }
    return res.status(201).json( { message: "success", review });
  }

  /**
   * Update a review in the database
   * 
   * @async
   * @param {Express.Request} req - The incoming request
   * @param {Express.Response} res - The outgoing response
   */
  async updateReview(req, res) {
    let { id } = req.params;
    const updatedReview = await reviewModel.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedReview) {
      return res.status(404).json({ message: "Can not update review" });
    }
    return res.status(201).json({ updatedReview });
}

  /**
   * Delete a review from the database
   * 
   * @async
   * @param {Express.Request} req - The incoming request
   * @param {Express.Response} res - The outgoing response
   */
  async deleteReview(req, res) {
    let { id } = req.params;
    let deletedReview = await reviewModel.findByIdAndDelete(id);
    if(!deletedReview){
      return res.status(404).json({error: "can not delete review"})
    }
    return res.status(201).json({ message: "success", deletedReview });
}
}

/**
 * Create a new instance of the ReviewController class
 */
const reviewController = new ReviewController();

/**
 * Export the ReviewController instance
 */
export default reviewController;