import { useDispatch, useSelector } from "react-redux";
import Button from "../../UI/Button";
import { formatCurrency } from "../../utils/helpers";
import { addItem, currentQuantety } from "../cart/Cartslice";
import DeleteItem from "../../UI/DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();
  const curselect = useSelector(currentQuantety(id));
  console.log(curselect);
  const isincart = curselect > 0;

  function handlerclick() {
    const item = {
      pizaaID: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(item));
  }
  return (
    <li className=" flex gap-2 py-2 ">
      <img
        src={imageUrl}
        alt={name}
        className={` h-24 ${soldOut ? " opacity-70 grayscale" : ""}`}
      />
      <div className="  flex grow flex-col">
        <p className=" font-medium">{name}</p>
        <p className=" text-sm capitalize italic text-slate-500">
          {ingredients.join(", ")}
        </p>
        <div className=" mt-auto flex items-center justify-between text-sm">
          {!soldOut ? (
            <p>{formatCurrency(unitPrice)}</p>
          ) : (
            <p className=" font-medium uppercase text-stone-500">Sold out</p>
          )}
          {isincart && (
            <div className=" flex items-center gap-4 sm:gap-8">
              <UpdateItemQuantity pizaaID={id} />
              <DeleteItem pizaaID={id} />
            </div>
          )}
          {!soldOut && !isincart && (
            <Button type="small" click={handlerclick}>
              ADD TO CART
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
