import { useParams } from "react-router-dom";
export default function Render_Code() {
    const param  = useParams()
    console.log(param.id)
    return (
      <>
        <h1>hy there this is Render_Code() function </h1>
        <span>Hy this is the id of the document : <strong>{param.id}</strong></span>
      </>
    );
  }