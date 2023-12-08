import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loder from "./Loder";

function AppLayout() {
  const navigat = useNavigation();
  const isLoding = navigat.state === "loading";
  return (
    <div className=" grid  h-screen grid-rows-[auto_1fr_auto] ">
      {isLoding && <Loder />}

      <Header />
      <div className=" overflow-scroll">
        <main className=" mx-auto  max-w-3xl ">
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
