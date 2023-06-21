import { Link, useLocation, useParams } from "react-router-dom";
export default function Render_Code() {
  const param = useParams();
  const location = useLocation();
  console.log(location);
  console.log(param.id);
  const _Back = location.state?.filter || null;
  {
    /* if this dost's work then replace null with "" */
  }
  return (
    <>
      <Link to={`..${_Back}`} className="font-semibold">
        &larr; back
        {location.state.userName ? ` to ${location.state.userName}` : null}
      </Link>
      <h1>hy there this is Render_Code() function </h1>
      <span>
        Hy this is the id of the document : <strong>{param.id}</strong>
      </span>
    </>
  );
}
