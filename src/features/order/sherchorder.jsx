import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Sherchorder() {
  const [query, setquery] = useState("");
  const navgate = useNavigate();
  function handlersum(e) {
    e.preventDefault();
    if (!query) return;
    navgate(`/order/${query}`);
    setquery("");
  }
  return (
    <form onSubmit={handlersum}>
      <input
        placeholder="sherch order"
        value={query}
        onChange={(e) => setquery(e.target.value)}
        className=" w-27 rounded-full bg-yellow-100 px-3 py-2 text-sm transition-all duration-300 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64  sm:focus:w-72"
      />
    </form>
  );
}

export default Sherchorder;
