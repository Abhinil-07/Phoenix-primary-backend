import { Router } from "express";
import {
  getMemberDetails,
  getMemberDetailsUsingEmail,
  memberSignup,
} from "../controllers/member.controller";
const router = Router();

router.route("/join").post(memberSignup);
router.route("/details").post(getMemberDetails);
router.route("/details/email").post(getMemberDetailsUsingEmail);
export default router;
