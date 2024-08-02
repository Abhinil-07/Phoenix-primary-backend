import { Request, Response } from "express";
import { Member } from "../models/member.model.";

const memberSignup = async (req: Request, res: Response) => {
  try {
    const { name, studentID } = req.body;
    console.log(name);
    const member = await Member.create({ name, studentID });
    return res.status(200).json({
      sucess: true,
      data: member,
    });
  } catch (error) {
    return res.status(500).json({
      sucess: false,
      error,
    });
  }
};

const getMemberDetails = async (req: Request, res: Response) => {
  try {
    const { razorpay_order_id } = req.body;
    const member = await Member.findOne({ razorpay_order_id });
    return res.status(200).json({
      sucess: true,
      member,
    });
  } catch (error) {
    return res.status(500).json({
      sucess: false,
      error: "Server Error",
    });
  }
};
export { memberSignup, getMemberDetails };
