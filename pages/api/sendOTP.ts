import type { NextApiRequest, NextApiResponse } from "next";
// @ts-ignore
import { sendOTP } from "otpless-next-js-auth-sdk";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const {phone} = req.body;
    const result = await sendOTP(
      "91"+phone,
      null,
      "WHATSAPP",
      null,
      null,
      60,
      6,
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET
    );
    res.status(200).json({ result});
  } catch (err) {
    res.status(500).json({ error: "failed to load data" });
  }
}
