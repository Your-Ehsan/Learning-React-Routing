import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <Link className="mx-2 leading-snug text-slate-200 font-medium" to={"/"}>
        Home
      </Link>
      <Link
        className="mx-2 leading-snug text-slate-200 font-medium"
        to={"/contact"}
      >
        Contact us
      </Link>
      <Link
        className="mx-2 leading-snug text-slate-200 font-medium"
        to={"/about"}
      >
        About us
      </Link>
    </>
  );
}
