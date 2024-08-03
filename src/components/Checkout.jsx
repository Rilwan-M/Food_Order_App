import React, { useContext, useState } from "react";
import Modal from "../UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import UserProgressContext from "../store/ProgressContext";
import Input from "../UI/Input";
import Button from "../UI/Button";

function Checkout() {
  const cartCtx = useContext(CartContext);

  const userProgresCtx = useContext(UserProgressContext);

  const [orderData, setOrderData] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;

    console.log(name, value);

    setOrderData((prevOrderData) => ({ ...prevOrderData, [name]: value }));
  }

  const totalPrice = cartCtx.items.reduce(
    (totalAmount, item) => totalAmount + item.quantity * item.price,
    0
  );

  function handleClose() {
    userProgresCtx.hideCheckout();
  }

  function handleSubmit(event) {
    event.preventDefault();

    fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order: {
          items: cartCtx.items,
          customer: orderData,
        },
      }),
    });
  }

  return (
    <Modal open={userProgresCtx.progress === "checkout"} onClose={handleClose}>
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount : {currencyFormatter.format(totalPrice)}</p>
        <Input
          label="Full Name"
          type="text"
          id="name"
          onChange={handleChange}
        />
        <Input label="E-mail" type="email" id="email" onChange={handleChange} />
        <Input label="Street" type="text" id="street" onChange={handleChange} />
        <div className="control-row">
          <Input
            label="Postal Code"
            type="text"
            id="postalCode"
            onChange={handleChange}
          />
          <Input label="City" type="text" id="city" onChange={handleChange} />
        </div>
        <p className="modal-actions">
          <Button type="button" textOnly onClick={handleClose}>
            Close
          </Button>
          <Button>Submit Order</Button>
        </p>
      </form>
    </Modal>
  );
}

export default Checkout;
