// write App function in react and add routing in it with BrowserRouter, Link, Route and Routes
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
// loader concepts step-2 [import loader on dedicated <Route/>]
import Home, { BlogLoader } from "./pages/home"; //[loader as HomeLoader] it's not necessary but can be a better practice.
import Contact from "./pages/contact";
import About from "./pages/about";
import Render_Code from "./pages/render_code";
import Layout from "./layouts/layout";
import Layout_2 from "./layouts/layout_2";
import Not_Found from "./pages/not_found";
import Error from "./components/error";

function App() {
  return (
    <>
      <RouterProvider
        router={createBrowserRouter(
          createRoutesFromElements(
            <Route element={<Layout />}>
              <Route
                index
                errorElement={
                  <Error/>
                }
                element={<Home />}
                loader={BlogLoader}
              />
              <Route
                path={"contact"}
                element={<Contact />}
                // loader={HomeLoader} // loader concept step-3 use loader function in loder={...}
              />
              <Route path={"about"} element={<About />} />
              <Route path={":id"} element={<Render_Code />} />
              <Route path="layout_2" element={<Layout_2 />}>
                <Route index element={<About />} />
                <Route path="home" element={<Home />} />
              </Route>
              <Route path="*" element={<Not_Found />} />
            </Route>
          )
        )}
      />
      {/* <BrowserRouter>
        <Routes> */}
      {/* <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path={"contact"} element={<Contact />} />
            <Route path={"about"} element={<About />} />
            <Route path={":id"} element={<Render_Code />} />
            <Route path="layout_2" element={<Layout_2 />}>
              <Route index element={<About />} />
              <Route path="home" element={<Home />} />
            </Route>
            <Route path="*" element={<Not_Found />} />
          </Route> */}{" "}
      {/* in previous versions we used react routers default elements but now we are going to use React Router Data Layer APIs */}
      {/* </Routes>
      </BrowserRouter> */}
    </>
  );
}
export default App;
