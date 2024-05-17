import express from "express";
import userRouter from "./users.route.js"; // Import the router as userRouter

const router = express.Router();

router.get("/test", (req, res) => {
  res.send("working");
});

// Handle all requests matching "/users" with userRouter
router.use('/users', userRouter);

export default router;
