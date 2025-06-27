// // import mongoose from "mongoose";

// // const paymentSchema = new mongoose.Schema({
// //   userName: String,
// //   amount: Number,
// //   paymentId: String,
// //   orderId: String,
// //   status: { type: String, default: "success" },
// //   createdAt: { type: Date, default: Date.now },
// // });

// // export default mongoose.model("Payment", paymentSchema);
// // ✅ Payment.js (model)
// import mongoose from "mongoose";

// const paymentSchema = new mongoose.Schema({
//   userName: String,
//   amount: Number,
//   paymentId: String,
//   orderId: String,
//   status: { type: String, enum: ["success", "failed"], default: "success" },
//   createdAt: { type: Date, default: Date.now },
// });

// export default mongoose.model("Payment", paymentSchema);


// models/Payment.js
import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  userName: String,
  amount: Number,
  doctor: String,           // ✅ New: Doctor's name
  time: Date,               // ✅ New: Appointment datetime
  paymentId: String,
  orderId: String,
  status: { type: String, enum: ["success", "failed"], default: "success" },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Payment", paymentSchema);
