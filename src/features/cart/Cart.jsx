import { Link } from "react-router-dom";
import LinkButton from "../../UI/LinkButton";
import EmptyCart from "../../features/cart/EmptyCart";
import CartItem from "../cart/CartItem";
import Button from "../../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { clearItem } from "./Cartslice";

function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const username = useSelector((state) => state.user.username);
  const dispatch = useDispatch();
  if (!cart.length) return <EmptyCart />;
  return (
    <div className=" mp px-5  ">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className=" mt-7 text-xl font-semibold">Your cart, {username}</h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizaaID} />
        ))}
      </ul>
      <div className="mt-3 space-x-3">
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>
        <Button type="secondry" click={() => dispatch(clearItem())}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
