import { useRouteError } from "react-router";

function Error() {
  console.log(useRouteError());
  return (
    <>
      <h1>this is error: </h1>
      {useRouteError().status}
    </>
  );
}
export default Error;
