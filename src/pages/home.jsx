import { Link } from "react-router-dom";
import { DATA_CODE } from "../Data/data";
export default function Home() {
  const Render_Data = DATA_CODE.map((e) => {
    return (
      <>
        <h2>this is name : {e.name}</h2>
        <span>This is title from DATA_CODE : {e.title}</span>
        <Link to={e.link}>{e.link}</Link>
      </>
    );
  });
  return (
    <>
      <h2>
        This is <strong>Home page</strong> of this react App with routing
      </h2>
      <h1>Here are some Data : </h1>
      {Render_Data}
    </>
  );
}
