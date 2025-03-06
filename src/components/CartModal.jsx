import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

import ShoppingCart from "./ShoppingCart.jsx";

const CartModal = forwardRef(function Modal({ title, actions, onClose }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
    };
  });

  function handleClick(e) {
    const rect = e.target.getBoundingClientRect();

    const clickedInDialog =
      rect.top <= e.clientY &&
      e.clientY <= rect.top + rect.height &&
      rect.left <= e.clientX &&
      e.clientX <= rect.left + rect.width;

    if (clickedInDialog === false) e.target.close();
  }

  return createPortal(
    <dialog
      onClick={handleClick}
      ref={dialog}
      className="backdrop:bg-black/50 backdrop:backdrop-blur-md mt-6 bg-stone-200 dark:bg-gray-500 p-4 rounded-lg w-full md:w-1/2 shadow-2xl m-auto"
    >
      <h2 className="font-semi font-mono m-2 dark:text-black dark:font-bold">
        {title}:
      </h2>
      <ShoppingCart />
      <form method="dialog">{actions}</form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default CartModal;
