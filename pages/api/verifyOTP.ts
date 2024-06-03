import type { NextApiRequest, NextApiResponse } from "next";
// @ts-ignore
import { verifyOTP } from "otpless-next-js-auth-sdk";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const {phone,orderId,otp} = req.body
    const response = await verifyOTP(
      null,
      "91"+phone,
      orderId,
      otp,
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET
    );
    res.status(200).json({ response });
  } catch (err) {
    res.status(500).json({ error: "failed to load data" });
  }
}
