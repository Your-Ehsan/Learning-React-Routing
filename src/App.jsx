// write App function in react and add routing in it with BrowserRouter, Link, Route and Routes
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import About from "./pages/about";
import Render_Code from "./pages/render_code";
import Layout from "./layouts/layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path={"/"} element={<Home />}></Route>
            <Route path={"/contact"} element={<Contact />}></Route>
            <Route path={"/about"} element={<About />}></Route>
            <Route path={"/:id"} element={<Render_Code />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
