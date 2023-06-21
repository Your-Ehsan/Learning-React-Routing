import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Home() {
  const [DATA, setDATA] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/Blog").then((req) =>
      req.json().then((res) => setDATA(res))
    );
  }, []);
  const Render_Data = DATA.map((e) => {
    return (
      <>
        <h2 key={e.id}>this is name : {e.userName}</h2>
        <span key={e.title}>This is title from DATA_CODE : {e.title}</span>
        <Link to={"/" + e.id}>{e.link}</Link>
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
