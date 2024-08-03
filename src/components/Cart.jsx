import React, { useContext } from "react";
import Modal from "../UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import Button from "../UI/Button";
import UserProgressContext from "../store/ProgressContext";
import CartItem from "./CartItem";

function Cart() {
  const cartCtx = useContext(CartContext);
  const userProgresCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.price * item.quantity,
    0
  );

  function handleCloseCart() {
    userProgresCtx.hideCart();
  }

  function handleCheckout() {
    userProgresCtx.showCheckout();
  }

  function handleClose() {
    userProgresCtx.hideCart();
  }

  return (
    <Modal
      className="cart"
      open={userProgresCtx.progress === "cart"}
      onClose={userProgresCtx.progress === "cart" ? handleClose : undefined}
    >
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleCloseCart}>
          Close
        </Button>
        {cartCtx.items.length > 0 && (
          <Button onClick={handleCheckout}> Go To Checkout</Button>
        )}
      </p>
    </Modal>
  );
}

export default Cart;
