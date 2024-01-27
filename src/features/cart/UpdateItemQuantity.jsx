import { useDispatch, useSelector } from "react-redux";
import Button from "../../UI/Button";
import { currentQuantety, decreasItem, increasItem } from "./Cartslice";

function UpdateItemQuantity({ pizzaId }) {
  const dispatch = useDispatch();
  const curselect = useSelector(currentQuantety(pizzaId));
  return (
    <div className=" flex items-center gap-2 md:gap-3">
      <Button click={() => dispatch(decreasItem(pizzaId))} type="round">
        -
      </Button>
      <span className=" font-medium ">{curselect} </span>
      <Button type="round" click={() => dispatch(increasItem(pizzaId))}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
