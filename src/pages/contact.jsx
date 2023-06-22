import { useLoaderData } from "react-router";

// loader concept step-4 import useLoaerData() hook & use here
export function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}
export default function Contact() {
  // console.log(useLoaderData())
  return (
    <>
    {useLoaderData()}
      <h2>
        this is <strong>Contact Page</strong> of this react App with routing
      </h2>
    </>
  );
}
