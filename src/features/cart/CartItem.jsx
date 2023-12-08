import Button from "../../UI/Button";
import DeleteItem from "../../UI/DeleteItem";
import { formatCurrency } from "../../utils/helpers";
import UpdateItemQuantity from "./UpdateItemQuantity";

function CartItem({ item }) {
  const { pizaaID, name, quantity, totalPrice } = item;

  return (
    <li className=" mb-2 py-3 sm:flex sm:items-center sm:justify-between  ">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="  flex items-center justify-between sm:space-x-2">
        <p className=" mx-4 text-sm font-semibold">
          {formatCurrency(totalPrice)}
        </p>

        <UpdateItemQuantity pizaaID={pizaaID} />
        <DeleteItem pizaaID={pizaaID} />
      </div>
    </li>
  );
}

export default CartItem;
