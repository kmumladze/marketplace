import { PiShippingContainerBold } from "react-icons/pi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { SlEarphones } from "react-icons/sl";
import { MdPayments } from "react-icons/md";

export default function UpperFooter() {
  return (
    <div className="flex justify-center items-center w-full mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-center gap-8 mx-auto max-w-6xl dark:text-white my-16">
        <div className="flex flex-col gap-2">
          <PiShippingContainerBold size={28} />
          <p className="font-bold text-lg">Free Shipping</p>
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
