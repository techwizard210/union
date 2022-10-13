import logo from "./logo.svg";
import "./App.css";
import imgOne from "./assets/img/Screenshot_1.png";

import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col text-center px-20">
        <img alt="img1" src={imgOne}></img>
        <p className="text-[36px] font-medium">The global credit protocol</p>
        <p>
          Credit is more than a tool for speculation, it’s the mechanism by
          which money turns into productive capital. Union enables developers to
          build on programmable credit lines, giving people and robots the
          ability to underwrite and borrow.
        </p>
      </div>
    </>
  );
}

export default App;
