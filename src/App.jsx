// write App function in react and add routing in it with BrowserRouter, Link, Route and Routes
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import About from "./pages/about";
import Header from "./components/header";
import Render_Code from "./pages/render_code";
// import { DATA_CODE } from "./Data/data";


function App() {
  // const render_link = DATA_CODE.map((e) => {
  //   return (
  //     <>
  //     </>
  //   );
  // });
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>
    <Route path={'/:id'} element={<Render_Code />}></Route>
          {/* {render_link} */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
