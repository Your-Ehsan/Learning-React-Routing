// write App function in react and add routing in it with BrowserRouter, Link, Route and Routes
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import About from "./pages/about";
import Header from "./components/header";
import { DATA_CODE } from "./Data/data";

function Render_Code() {
  return (
    <>
      <h1>hy there this is Render_Code() function </h1>
    </>
  );
}
function App() {
  const render_link = DATA_CODE.map((e) => {
    return (
      <>
        <Route path={e.link} element={<Render_Code />}></Route>
      </>
    );
  });
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>
          {render_link}
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
