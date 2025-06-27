import Razorpay from "razorpay";
import crypto from "crypto";
import dotenv from "dotenv";
import Payment from "../models/Payment.js";

dotenv.config();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});


export const createOrder = async (req, res) => {
  try {
    const amount = req.body.amount;
    if (!amount || isNaN(amount)) {
      return res.status(400).json({ message: "Invalid or missing amount" });
    }

    const options = {
      amount: amount * 100,
      currency: "INR",
      receipt: crypto.randomBytes(10).toString("hex"),
    };

    const order = await razorpay.orders.create(options);
    res.status(200).json({ data: order });
  } catch (err) {
    console.error("Order creation failed:", err);
    res.status(500).json({ message: "Order creation failed" });
  }
};


export const verifyPayment = async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      amount,
      mobile,
      doctor,
      time,
      patientName,
      age,
      gender,
    } = req.body;

    let isValid = false;

    
    if (razorpay_signature) {
      const sign = razorpay_order_id + "|" + razorpay_payment_id;
      const expectedSign = crypto
        .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
        .update(sign)
        .digest("hex");

      isValid = expectedSign === razorpay_signature;
    }


    await Payment.create({
      userName: mobile,
      patientName,
      age,
      gender,
      doctor,
      time,
      amount,
      paymentId: razorpay_payment_id,
      orderId: razorpay_order_id,
      status: isValid ? "success" : "failed",
    });

    if (isValid) {
      return res.status(200).json({ message: "Payment verified successfully" });
    } else {
      return res.status(200).json({ message: "Payment failed and recorded" });
    }
  } catch (err) {
    console.error("Payment verification error:", err);
    res.status(500).json({ message: "Verification failed" });
  }
};


export const getPayments = async (req, res) => {
  try {
    const payments = await Payment.find().sort({ createdAt: -1 });
    res.json(payments);
  } catch (err) {
    res.status(500).json({ message: "Failed to load payment history" });
  }
};
