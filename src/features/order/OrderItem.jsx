import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="  space-y-1  py-3 ">
      <div className=" flex items-center justify-between gap-4  ">
        <p>
          <span>{quantity}&times;</span> {name}
        </p>
        <p className=" font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      <p className=" text-sm capitalize italic text-stone-500">
        {isLoadingIngredients ? "loding..." : ingredients.join(", ")}{" "}
      </p>
    </li>
  );
}

export default OrderItem;
