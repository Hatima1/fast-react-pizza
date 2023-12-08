import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, click }) {
  const base =
    " inline-block text-sm rounded-full bg-yellow-400   text-sm font-semibold uppercase text-slate-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300  focus:ring-offset-2 disabled:cursor-not-allowed ";
  const style = {
    primary: base + "px-4  py-3 md:px-6 ms:py-4 uppercase    ",
    small: base + "px-4  py-2 md:px-5 ms:py-2.5 text-sm ",
    round: base + "px-2.5  py-1 md:px-2.5 ms:py-3.5 text-sm ",
    secondry:
      " text-sm inline-block rounded-full border-2 border-stone-300 hover:text-stone-800  px-4  py-2 md:px-5 ms:py-2.5 text-sm text-stone-400    text-sm font-semibold uppercase text-slate-800 transition-colors duration-300 hover:bg-stone-300 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-300  focus:ring-offset-2 disabled:cursor-not-allowed foucs:bg-stone-300  ",
  };
  if (to)
    return (
      <Link to={to} className={style[type]}>
        {children}{" "}
      </Link>
    );
  if (click)
    return (
      <button onClick={click} className={style[type]}>
        {children}{" "}
      </button>
    );
  return (
    <button
      className=" border-stone-300 "
      className={style[type]}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
