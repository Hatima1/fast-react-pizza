import { Link } from "react-router-dom";
import Sherchorder from "../features/order/sherchorder";
import User from "../features/user/User";

function Header() {
  return (
    <header className=" flex items-center justify-between border-b border-stone-400 bg-yellow-400 px-5  py-3 sm:px-6 ">
      <Link to="/" className=" tracking-widest">
        Fast React Pizza
      </Link>
      <Sherchorder />
      <User />
    </header>
  );
}

export default Header;
