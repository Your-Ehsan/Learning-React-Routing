import { redirect } from "react-router";

export function protectedRoute(){
    const isSigned = false;
    if (!isSigned) {
      throw redirect("/contact?message=login+in+first"); //NOTE: this is the prefered example how you can protect one route using some condition.
    }
}