import React from "react";
import { Button, InputOtp, Form } from "@heroui/react";

import enterOTP from "../assets/enterOTP.png";
import { Link } from "react-router";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/react";
import { FaCheckCircle } from "react-icons/fa";

export default function EnterOTP() {
  const [otp, setOtp] = React.useState("");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [backdrop, setBackdrop] = React.useState("opaque");

  const backdrops = "blur";

  const handleOpen = (backdrop) => {
    setBackdrop(backdrop);
    onOpen();
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-screen m-4 gap-10">
      <div
        className="w-full md:w-1/2 h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${enterOTP})` }}
      >
        <div className="flex items-center justify-center p-3 m-4 border-2 rounded-xl cursor-pointer overflow-hidden w-1/3">
          <h3 className="text-medium md:text-xl font-semibold dark:text-white">
            <span className="text-3xl from-content2-foreground">M</span>
            arketplace
          </h3>
        </div>
      </div>

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
            onPress={() => handleOpen(backdrops)}
          >
            Verify
          </Button>
          {otp && (
            <div className="text-small text-default-500">
              OTP submitted: {otp}
            </div>
          )}
        </Form>

        <Modal backdrop={backdrop} isOpen={isOpen} onClose={onClose}>
          <ModalContent className="p-8">
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col items-center justify-center text-3xl gap-1">
                  <FaCheckCircle />
                </ModalHeader>
                <ModalBody>
                  <div className="flex flex-col justify-center text-center gap-2">
                    <h1 className="font-bold text-xl">
                      Password Changed Successfully
                    </h1>
                    <p className="text-sm">
                      Your password has been updated successfully
                    </p>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Link to="/login" className="m-auto">
                    <Button
                      className="bg-black text-white tex-sm px-8 py-2 text-center m-auto"
                      variant="light"
                      onPress={onClose}
                    >
                      Back to Login
                    </Button>
                  </Link>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
}
