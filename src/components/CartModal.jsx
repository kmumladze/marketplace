import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

import ShoppingCart from "./ShoppingCart.jsx";

const CartModal = forwardRef(function Modal({ title, actions }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialog}
      className="mt-6 bg-stone-200 dark:bg-gray-500 p-4 rounded-lg w-1/2 shadow-2xl"
    >
      <h2 className="font-semi font-mono m-2">{title}:</h2>
      <ShoppingCart />
      <form method="dialog">{actions}</form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default CartModal;
