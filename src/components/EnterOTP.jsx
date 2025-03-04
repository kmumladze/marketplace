import React from "react";
import { Button, InputOtp, Form } from "@heroui/react";

import enterOTP from "../assets/enterOTP.png";
import { Link } from "react-router";

export default function EnterOTP() {
  const [otp, setOtp] = React.useState("");

  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-screen m-4 gap-10">
      <div
        className="w-full md:w-1/2 h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${enterOTP})` }}
      ></div>

      <div className="flex flex-col gap-10">
        <Link to="/forgotpassword">
          <p>← Back</p>
        </Link>

        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-3xl">Enter OTP </h1>
          <p className="text-sm text-stone-400 w-full md:w-2/3">
            We have share a code of your registered email address
            marketplace@example.com
          </p>
        </div>

        <Form
          className="flex w-full flex-col items-center md:items-start gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const otp = formData.get("otp");

            setOtp(otp);
          }}
        >
          <InputOtp
            isRequired
            aria-label="OTP input field"
            length={4}
            name="otp"
            placeholder="Enter code"
          />
          <Button
            size="lg"
            type="submit"
            variant="bordered"
            className="bg-black text-white border-none w-1/3"
          >
            Verify
          </Button>
          {otp && (
            <div className="text-small text-default-500">
              OTP submitted: {otp}
            </div>
          )}
        </Form>
      </div>
    </div>
  );
}
