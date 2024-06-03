import type { NextApiRequest, NextApiResponse } from "next";
// @ts-ignore
import { sendOTP } from "otpless-next-js-auth-sdk";
const someAsyncOperation = () => {
  return "hell01";
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const result = await someAsyncOperation();
    res.status(200).json({ result });
  } catch (err) {
    res.status(500).json({ error: "failed to load data" });
  }
}
