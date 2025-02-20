import Header from "../components/Header";
import FooterPage from "./FooterPage";
import { Accordion, AccordionItem } from "@heroui/react";

export default function FaQPage() {
  const question1 =
    "Marketplace is an online marketplace where you can buy and sell products, including electronics, fashion, beauty products, and more.";
  const question2 =
    "Sellers list their products on our platform, and buyers can browse, purchase, and receive deliveries directly from them. We provide a secure environment for transactions.";
  const question3 =
    " Simply browse products, add items to your cart, and proceed to checkout. Follow the payment instructions to complete your purchase.";
  const question4 = "You can reach our support team via email or phone number.";
  const question5 =
    "Yes! We frequently run promotions and offer discount codes. Keep an eye on our homepage and subscribe to our newsletter for updates.";
  const question6 =
    "Delivery times depend on the seller’s location and shipping method.";
  const question7 = "Shipping costs vary by product and location. ";
  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col items-center justify-evenly bg-gray-100 px-6 py-12">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-extrabold text-3xl font-mono">FaQ</h1>
          <p className="text-sm italic">Your questions answered here.</p>
        </div>
        <div className="max-w-4xl w-full bg-white shadow-2xl rounded-lg p-8">
          <Accordion variant="light">
            <AccordionItem
              className="font-bold"
              key="1"
              aria-label="Accordion 1"
              title="What is Marketplace?"
            >
              <p className="font-normal"> {question1} </p>
            </AccordionItem>
            <AccordionItem
              className="font-bold"
              key="2"
              aria-label="Accordion 2"
              title="How does Marketplace work?"
            >
              <p className="font-normal"> {question2}</p>
            </AccordionItem>
            <AccordionItem
              className="font-bold"
              key="3"
              aria-label="Accordion 3"
              title="How do I place an order?"
            >
              <p className="font-normal"> {question3} </p>
            </AccordionItem>
            <AccordionItem
              className="font-bold"
              key="4"
              aria-label="Accordion 4"
              title=" How can I contact customer support?"
            >
              <p className="font-normal"> {question4} </p>
            </AccordionItem>
            <AccordionItem
              className="font-bold"
              key="5"
              aria-label="Accordion 5"
              title="Does Marketplace offer discounts or promo codes?"
            >
              <p className="font-normal"> {question5} </p>
            </AccordionItem>
            <AccordionItem
              className="font-bold"
              key="6"
              aria-label="Accordion 6"
              title="How long does delivery take?"
            >
              <p className="font-normal"> {question6} </p>
            </AccordionItem>
            <AccordionItem
              className="font-bold"
              key="7"
              aria-label="Accordion 7"
              title="How much does shipping cost?"
            >
              <p className="font-normal"> {question7} </p>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <FooterPage />
    </>
  );
}
