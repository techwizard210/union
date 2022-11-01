import { useState } from "react";

import "./App.css";
import imgOne from "./assets/img/main.jpg";
import open from "./assets/img/open.png";
import efficient from "./assets/img/efficient.png";
import yours from "./assets/img/yours.png";
import people from "./assets/img/people.jpg";
import become from "./assets/img/become.jpg";
import start from "./assets/img/start.jpg";
import icon from "./assets/img/icon.png";
import oneToOne from "./assets/img/one-to-one.png";
import oneToMany from "./assets/img/one-to-many.png";
import manyToOne from "./assets/img/many-to-one.png";
import manyToMany from "./assets/img/many-to-many.png";

import Navbar from "./components/Navbar";
import Card from "./components/Card";

function App() {
  const [tab, setTab] = useState(0);
  const [largeTab, setLargeTab] = useState(0);

  let array = [
    {
      str: "From one friend to another, from a parent to their child or from a business to an individual",
      path: oneToOne,
    },
    {
      str: "A contract or DAO to it’s members, a professional underwriter to clients or a VC to startups",
      path: oneToMany,
    },
    {
      str: "Many people investing in a startup, smart contract/DAO or Crowdfunding",
      path: manyToOne,
    },
    {
      str: "From members of one DAO to another, a sorority as a credit union, friends and family as a bank",
      path: manyToMany,
    },
  ];
  return (
    <div className="flex justify-center tracking-tighter px-[10px]">
      <div className="font-sans max-w-[944px] w-[100%]">
        <Navbar />
        <div className="flex flex-col gap-y-6 max-w-[605px] w-[100%] mx-auto items-center">
          <img alt="img1" src={imgOne}></img>
          <p className="text-[36px] font-medium text-[#44403c]">
            The global credit protocol
          </p>
          <p className="text-center text-[#78716c] leading-6">
            Credit is more than a tool for speculation, it’s the mechanism by
            which money turns into productive capital. Union enables developers
            to build on programmable credit lines, giving people and robots the
            ability to underwrite and borrow.
          </p>
          <a
            href="https://wrapped-nameservice.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-[#2563eb] text-[#fff] w-[200px] min-h-[48px] text-[14px] px-[24px] py-[12px] h-[24px] text-center"
          >
            Open app
          </a>
        </div>
        <div className="flex flex-col sm:flex-row mt-[148px] gap-x-3">
          <Card>
            <img alt="card" src={open} />
            <p className="text-[#44403c] text-[20px] mb-[20px] font-medium">
              Open
            </p>
            <p className="text-center text-[16px] text-[#787172] mg-[8px]">
              Union is open by default. This enables you to build on Union as
              you see fit with no gatekeeping
            </p>
          </Card>
          <Card>
            <img alt="card" src={efficient} />
            <p className="text-[#44403c] text-[20px] mb-[20px] font-medium">
              Efficient
            </p>
            <p className="text-center text-[16px] text-[#787172] mg-[8px]">
              Middlemen are removed from the equation. Borrowing and lending has
              never been more efficient
            </p>
          </Card>
          <Card>
            <img alt="card" src={yours} />
            <p className="text-[#44403c] text-[20px] mb-[20px] font-medium">
              Yours
            </p>
            <p className="text-center text-[16px] text-[#787172] mg-[8px]">
              Built and operated by the community. The future of Union is
              defined by you
            </p>
          </Card>
        </div>
        <div className="flex flex-col max-w-[410px] mt-[162px] mb-[120px] mx-auto items-center">
          <h1 className="text-[#3b82f6] font-medium text-[20px]">
            Credit is...
          </h1>
          <h1 className="text-[48px] text-[#44403c] my-[8px] font-bold text-center leading-tight">
            “Exchanging present value for the possibility of future value”
          </h1>
        </div>
        <div className="flex max-w-[650px] mx-auto">
          <img src={people} alt="people" className="w-[100%]" />
        </div>
        <h1 className="mt-[8px] font-normal text-[36px] text-[#44403c] leading-tight text-center">
          No credit score, just your friend circle
        </h1>
        <div className="flex flex-col items-center max-w-[470px] mx-auto my-0">
          <p className="mt-[8px] mb-[8px] text-[#787172] leading-6 text-center">
            Gain trust from your friends, build up your credit line and gain
            access to credit whenever you need it
          </p>
        </div>
        <h1 className="mt-[196px] mb-[24px] text-center font-normal text-[36px] leading-10 text-[#44403c]">
          Credit is more fluid with Union
        </h1>
        <div className="flex flex-col max-w-[560px] mx-auto">
          <img
            src={array[tab].path}
            alt="one-to-one-relationship"
            className="w-[100%]"
          />
          <div className="flex flex-col max-w-[400px] mb-[32px] mx-auto">
            <p className="text-center text-[16px] text-[#78716c] mg-[8px]">
              {array[tab].str}
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-x-7">
          <button
            onClick={(e) => setTab(0)}
            className={
              "btnSmall" +
              (tab === 0
                ? " bg-[#2563eb] text-[#fff]"
                : " bg-[#fff] text-[#000]")
            }
          >
            One to One
          </button>
          <button
            onClick={(e) => setTab(1)}
            className={
              "btnSmall" +
              (tab === 1
                ? " bg-[#2563eb] text-[#fff]"
                : " bg-[#fff] text-[#000]")
            }
          >
            One to Many
          </button>
          <button
            onClick={(e) => setTab(2)}
            className={
              "btnSmall" +
              (tab === 2
                ? " bg-[#2563eb] text-[#fff]"
                : " bg-[#fff] text-[#000]")
            }
          >
            Many to One
          </button>
          <button
            onClick={(e) => setTab(3)}
            className={
              "btnSmall" +
              (tab === 3
                ? " bg-[#2563eb] text-[#fff]"
                : " bg-[#fff] text-[#000]")
            }
          >
            Many to Many
          </button>
        </div>
        <h1 className="mt-[146px] mb-[24px] text-center font-normal text-[36px] leading-10 text-[#44403c]">
          Get started with Union
        </h1>
        <div className="flex flex-col sm:flex-row">
          <Card>
            <img alt="card" src={become} className="h-[106px] w-auto" />
            <p className="text-[#44403c] text-[24px] mb-[12px] mt-[24px] font-normal text-center">
              Become a Union member
            </p>
            <p className="text-center px-[30px] text-[16px] text-[#787172] mb-[8px]">
              Get vouches to borrow, lend to friends and vote to define the
              future of Union.
            </p>
            <button
              onClick={(e) => setLargeTab(0)}
              className={
                "btnLarge" +
                (largeTab === 0
                  ? " bg-[#2563eb] text-[#fff]"
                  : " bg-[#fff] text-[#000]")
              }
            >
              Open App
            </button>
          </Card>
          <Card>
            <img alt="card" src={start} className="h-[106px] w-auto" />
            <p className="text-[#44403c] text-[24px] mb-[12px] mt-[24px] font-normal text-center">
              Start building with Union
            </p>
            <p className="text-center px-[30px] text-[16px] text-[#787172] mb-[8px]">
              Build credit reliant financial tools on top of Ethereum’s
              crypto-native credit protocol
            </p>
            <button
              onClick={(e) => setLargeTab(1)}
              className={
                "btnLarge" +
                (largeTab === 1
                  ? " bg-[#2563eb] text-[#fff]"
                  : " bg-[#fff] text-[#000]")
              }
            >
              Build with Union
            </button>
          </Card>
        </div>
        <img alt="icon" src={icon} className="mt-[160px] mx-auto" />
        <div className="flex justify-center gap-x-10 mt-[20px] text-[13px] text-[#565461]">
          <span>Docs</span>
          <span>Governance</span>
          <span>Community</span>
          <span>App</span>
        </div>
        <div className="flex justify-center gap-x-10 mt-[20px] mb-[80px] text-[13px] text-[#c4c4c4]">
          <span>Github</span>
          <span>Discord</span>
          <aspan>Twitter</aspan>
          <span>Medium</span>
        </div>
      </div>
    </div>
  );
}

export default App;
