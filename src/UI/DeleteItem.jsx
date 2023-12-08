import { useDispatch } from "react-redux";
import Button from "./Button";
import { delelteItem } from "../features/cart/Cartslice";

function DeleteItem({ pizaaID }) {
  const dispatch = useDispatch();
  return (
    <Button type="small" click={() => dispatch(delelteItem(pizaaID))}>
      Delete
    </Button>
  );
}

export default DeleteItem;
