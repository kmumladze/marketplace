import womanbag from "../assets/womanbag.jpg";
import fashionmodelwoman from "../assets/fashionmodelwoman.jpg";
import fashionmodelman from "../assets/fashionmodelman.jpg";
import makeup from "../assets/makeup.jpg";

import { PiShippingContainerBold } from "react-icons/pi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { SlEarphones } from "react-icons/sl";
import { MdPayments } from "react-icons/md";

export default function InstagramStories() {
  return (
    <div className="flex flex-col items-center gap-10 m-10">
      <h1 className="font-mono font-bold text-2xl dark:text-white">
        Our Instagram Stories
      </h1>
      <div className="flex flex-col md:flex-row justify-center gap-10">
        <img className="w-full md:w-60 h-auto" src={womanbag} alt="" />
        <img className="w-full md:w-60 h-auto" src={fashionmodelwoman} alt="" />
        <img className="w-full md:w-60 h-auto" src={fashionmodelman} alt="" />
        <img className="w-full md:w-60 h-auto" src={makeup} alt="" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 items-center gap-10 dark:text-white">
        <div className="flex flex-col gap-2">
          <PiShippingContainerBold size={24} />
          <p className="font-bold">Free Shipping</p>
          <p className="text-sm">Free shipping for order above $150</p>
        </div>

        <div className="flex flex-col gap-2">
          <RiMoneyDollarCircleLine size={24} />
          <p className="font-bold">Money Guarantee</p>
          <p className="text-sm">Within 30 days for an exchange</p>
        </div>

        <div className="flex flex-col gap-2">
          <SlEarphones size={24} />
          <p className="font-bold">Online Support</p>
          <p className="text-sm">24 hours a day, 7 days a week</p>
        </div>

        <div className="flex flex-col gap-2">
          <MdPayments size={24} />
          <p className="font-bold">Flexible Payment</p>
          <p className="text-sm">Pay with multiple credit cards</p>
        </div>
      </div>
    </div>
  );
}
