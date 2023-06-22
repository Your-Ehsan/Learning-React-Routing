import { Link, useLocation, useParams } from "react-router-dom";
import { GetData } from "../api";

/*  

1- The {request} object of loder={} is already allocated
2- The {params} object of loder={} is already allocated

*/
export function loader({ params }) {
  console.log(params);
  return GetData();
}
// export function loader({request}) {
//   console.log(request);
//   return GetData();
// }

/* 
  We can access the searchParames of web using JavaScript
  e.g --> new URL(request.url).searchParams.get("userName") <- value that we want e.g : "userName"
*/
export default function Render_Code() {
  const param = useParams();
  const location = useLocation();
  // console.log(location);
  // console.log(param.id);
  const _Back = location.state?.filter || null;
  {
    /*NOTE: if this dost's work then replace null with "" */
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
