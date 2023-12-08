import { useDispatch, useSelector } from "react-redux";
import Button from "../../UI/Button";
import { currentQuantety, decreasItem, increasItem } from "./Cartslice";

function UpdateItemQuantity({ pizaaID }) {
  const dispatch = useDispatch();
  const curselect = useSelector(currentQuantety(pizaaID));
  return (
    <div className=" flex items-center gap-2 md:gap-3">
      <Button click={() => dispatch(decreasItem(pizaaID))} type="round">
        -
      </Button>
      <span className=" font-medium ">{curselect} </span>
      <Button type="round" click={() => dispatch(increasItem(pizaaID))}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
