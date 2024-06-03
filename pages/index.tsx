import axios from "axios";
import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [phone, setPhone] = useState();
  const [otp, setOtp] = useState();
  const [orderId, setOrderId] = useState();
  const setValue = (e:any,param:"phone" | "otp") =>{
    let data = e.target.value;
    param=="phone"?setPhone(data):setOtp(data);
  }
  const handleSendOTP = async () => {
    try {
      const response = await axios.post("/api/sendOTP",{
        phone:phone
      });
      if(response){
        setOrderId(response.data.result.orderId)
      }
      console.log("OTP sent:", response.data);
    } catch (error) {
      console.error("Error sending OTP:", error);
    }
  };

  const handleVerifyOTP = async () => {
    try {
      const response = await axios.post("/api/verifyOTP",{
        phone,
        orderId,
        otp
      });
      console.log("OTP sent:", response.data);
    } catch (error) {
      console.error("Error sending OTP:", error);
    }
  };
  
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >

      <h1> Login Screen </h1>
      <input type="number" className="phoneInput" onChange={(e)=>setValue(e,"phone")}></input>
      <button onClick={()=>handleSendOTP()}>Send OTP</button><br />
      <input type="number" className="otpInput" onChange={(e)=>setValue(e,"otp")}></input>
      <button onClick={()=>handleVerifyOTP()}>Verify OTP</button>
    </main>
  );
}
