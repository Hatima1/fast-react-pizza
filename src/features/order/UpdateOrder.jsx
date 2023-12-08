import { useFetchers } from "react-router-dom";
import Button from "../../UI/Button";
import { updateOrder } from "../../servers/apiRestaurant";

function UpdateOrder({ order }) {
  const fetcher = useFetchers();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make priority</Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;

export async function action({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
