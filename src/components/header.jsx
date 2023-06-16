import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <Link to={"/"}>Home</Link>
      <Link to={"/contact"}>Contact us</Link>
      <Link to={"/about"}>About us</Link>
    </>
  );
}
