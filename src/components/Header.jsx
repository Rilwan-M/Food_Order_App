import logo from "../assets/logo.jpg";
import Button from "../UI/Button";

export default function Header() {
  return (
    <>
      <div>
        <header id="main-header">
          <div id="title">
            <img src={logo} />
            <h1>Elite Restaurant</h1>
          </div>
          <nav>
            <Button textOnly>Cart(0)</Button>
          </nav>
        </header>
      </div>
    </>
  );
}
