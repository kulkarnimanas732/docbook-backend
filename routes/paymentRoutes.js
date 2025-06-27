import express from "express";
import { createOrder, verifyPayment,getPayments } from "../controllers/paymentController.js";

const router = express.Router();

router.post("/orders", createOrder);
router.post("/verify", verifyPayment);
router.get("/payments", getPayments);

export default router;
