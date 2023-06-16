// write App function in react and add routing in it with BrowserRouter, Link, Route and Routes
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Link to={"/"}>Home</Link>
        <Link to={"/contact"}>Contact us</Link>
        <Link to={"/about"}>About us</Link>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
function Home() {
  return (
    <>
      <h1>this is Home section !</h1>
    </>
  );
}
function Contact() {
  return (
    <>
      <h1>this is Contact section !</h1>
    </>
  );
}
function About() {
  return (
    <>
      <h1>this is About section !</h1>
    </>
  );
}
export default App;
