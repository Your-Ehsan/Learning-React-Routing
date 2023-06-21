// write App function in react and add routing in it with BrowserRouter, Link, Route and Routes
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import About from "./pages/about";
import Render_Code from "./pages/render_code";
import Layout from "./layouts/layout";
import Layout_2 from "./layouts/layout_2";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path={"contact"} element={<Contact />} />
            <Route path={"about"} element={<About />} />
            <Route path={":id"} element={<Render_Code />} />
            <Route path="layout_2" element={<Layout_2 />}>
              <Route index element={<About />} />
              <Route path="home" element={<Home />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
