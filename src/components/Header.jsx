import { useContext } from "react";
import logo from "../assets/logo.jpg";
import Button from "../UI/Button";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/ProgressContext";

export default function Header() {
  const cartCtx = useContext(CartContext);

  const userProgressCtx = useContext(UserProgressContext);

  function handleShowCart() {
    userProgressCtx.showCart();
  }

  const totalCartItems = cartCtx.items.reduce(
    (noOfTotalItems, item) => noOfTotalItems + item.quantity,
    0
  );

  return (
    <>
      <div>
        <header id="main-header">
          <div id="title">
            <img src={logo} />
            <h1>Elite Restaurant</h1>
          </div>
          <nav>
            <Button textOnly onClick={handleShowCart}>
              Cart ({totalCartItems})
            </Button>
          </nav>
        </header>
      </div>
    </>
  );
}
