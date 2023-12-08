import { useState } from "react";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../servers/apiRestaurant";
import Button from "../../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { Totalprice, clearItem, gercart } from "../cart/Cartslice";
import store from "../../Store";
import { formatCurrency } from "../../utils/helpers";
import { fetchAddress } from "../user/userSlice";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const disoatch = useDispatch();
  const navigat = useNavigation();
  const issubmiting = navigat.state === "submitting";

  const formErrors = useActionData();
  const { username, status, position, address, error } = useSelector(
    (state) => state.user,
  );
  const positionloding = status === "loading";

  const cart = fakeCart;
  const Priority = withPriority ? withPriority * 0.2 : 0;
  const totalCartPrice = useSelector(Totalprice);
  const totalprice = totalCartPrice + Priority;

  return (
    <div className="px-4 py-6">
      <h2 className=" mb-8 text-xl  font-semibold ">
        Ready to order? Let's go!
      </h2>

      <Form method="POST">
        <div className=" mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className=" sm:basis-40">First Name</label>
          <input
            type="text"
            defaultValue={username}
            name="customer"
            required
            className="input  grow"
          />
        </div>

        <div className=" mb-5  flex w-full flex-col gap-2 sm:flex-row sm:items-center">
          <label className=" sm:basis-40">Phone number</label>
          <div className=" grow">
            <input type="tel" name="phone" required className="input  w-full" />
            {formErrors?.phone && (
              <p className=" mt-2 rounded-md bg-red-100 p-2  text-xs text-red-700">
                please Enter your phone number
              </p>
            )}
          </div>
        </div>

        <div className=" relative  mb-5  flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className=" sm:basis-40">Address</label>
          <div className=" grow">
            <input
              type="text"
              name="address"
              required
              className="input w-full"
              value={address}
              disabled={positionloding}
            />
          </div>
          {!position.latitude && !position.longitude && (
            <span className=" absolute right-1 top-8  items-center sm:top-1 ">
              <Button
                disabled={positionloding}
                type="small"
                click={(e) => {
                  e.preventDefault();
                  disoatch(fetchAddress());
                }}
              >
                get position
              </Button>
            </span>
          )}
        </div>
        {status === "error" && (
          <p className=" mb-3 mt-4  rounded-md bg-red-100 p-2   text-xs text-red-700">
            {error}
          </p>
        )}

        <div className=" mb-12  flex items-center gap-4 font-semibold ">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="  h-5 w-5 accent-yellow-400   focus:ring focus:ring-yellow-400  focus:ring-offset-2"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>
        <input type="hidden" name="cart" value={JSON.stringify(cart)} />
        <input
          type="hidden"
          name="position"
          value={
            position.latitude && position.longitude
              ? `${position.latitud}, ${position.longitude} `
              : ""
          }
        />

        <div>
          <Button disabled={issubmiting || positionloding} type="primary">
            {issubmiting
              ? "pacing order..."
              : `order now for ${formatCurrency(totalprice)} `}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formDataa = await request.formData();
  const data = Object.fromEntries(formDataa);
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true",
  };
  console.log(order);
  // const eroor = {};
  // if (!isValidPhone(order.phone))
  //   eroor.phone = "Please give us your corect nummber";
  // if (Object.keys(eroor).length > 0) return eroor;
  const Neworder = await createOrder(order);
  store.dispatch(clearItem());

  return redirect(`/order/${Neworder.id}`);
}

export default CreateOrder;
