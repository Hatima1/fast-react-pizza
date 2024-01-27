import { useDispatch } from "react-redux";
import Button from "./Button";
import { delelteItem } from "../features/cart/Cartslice";

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();
  return (
    <Button type="small" click={() => dispatch(delelteItem(pizzaId))}>
      Delete
    </Button>
  );
}

export default DeleteItem;
