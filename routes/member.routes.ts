import { Router } from "express";
import {
  getMemberDetails,
  memberSignup,
} from "../controllers/member.controller";
const router = Router();

router.route("/join").post(memberSignup);
router.route("/details").post(getMemberDetails);

export default router;
