import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  userName: String,           
  patientName: String,        
  age: Number,                
  gender: String,             
  doctor: String,
  time: Date,
  amount: Number,
  paymentId: String,
  orderId: String,
  status: { type: String, enum: ["success", "failed"], default: "success" },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Payment", paymentSchema);
