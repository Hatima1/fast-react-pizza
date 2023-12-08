import { Link } from "react-router-dom";
import LinkButton from "../../UI/LinkButton";

function EmptyCart() {
  return (
    <div className="  px-3 py-4 font-semibold">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className=" mt-6 font-semibold sm:text-xl">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
