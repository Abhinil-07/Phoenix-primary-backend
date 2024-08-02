import mongoose from "mongoose";

const MemberModel = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  studentID: {
    type: String,
    required: true,
  },
  razorpay_order_id: {
    type: String,
    unique: true,
  },
});

const Member = mongoose.model("Member", MemberModel);

export { Member };
