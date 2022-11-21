import { useState } from "react";

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

import "@fontsource/poppins";
import "./App.css";
import logo from "./assets/img/eth.png";
import imgOne from "./assets/img/main.png";
import openImg from "./assets/img/open.png";
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
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  let array = [
    {
      str: "Send cryptocurrencies to your friend’s wrapped domain.",
      path: oneToOne,
    },
    {
      str: "Make payments to DAOs and Crowdfunds with wrapped domains",
      path: oneToMany,
    },
    {
      str: "Incentivize your liquidity providers and stakers using wrapped domains",
      path: manyToOne,
    },
    {
      str: "Create an ecosystem of multiple web2 and web3 projects with Wrapped domains interconnected with one another",
      path: manyToMany,
    },
  ];

  let accordions = [
    {
      header: "Whats wrapped domains?",
      body: "Wrapped Domains is a web3 naming system built on the Ethereum blockchain for mapping cryptocurrency addresses to human-readable names such as ‘kevin.weth’ and providing web2 domains to individuals through the blockchain.",
    },
    {
      header: "Is Wrapped Domains a web3 or web2 service?",
      body: "Wrapped Domains is a web3 domain naming system that can also be used for creating web2 websites",
    },
    {
      header: "How much are wrapped domains?",
      body: "That’s for you to decide",
    },
    {
      header: "Why are names registered as hashes?",
      body: "By default, addresses are recognized by the blockchain and not names which is why names must be converted to valid addresses using a namehash mapping",
    },
    {
      header: "Which wallets and dapps support Wrapped Domains so far?",
      body: "This is also for you to specify",
    },
    {
      header: "Why should I use a .weth address?",
      body: ".weth allows you to create an identity on the web and receive payments easily from others who have your .weth name",
    },
    {
      header: "Will I be charged annually for my .weth domain?",
      body: "No. You pay once and you don't have to pay again for life.",
    },
    {
      header: "How can I sell my .weth web3 domain?",
      body: "To do this, you should use a secondary market such as Opensea , Looksrare",
    },
  ];

  return (
    <div className="flex justify-center tracking-tighter px-[10px] textFont">
      <div className="font-sans max-w-[944px] w-[100%] textFont">
        <Navbar />
        <div className="flex flex-col gap-y-6 max-w-[605px] w-[100%] mx-auto items-center">
          <img alt="img1" src={imgOne}></img>
          <p className="text-[36px] font-medium text-[#44403c] text-center textFont">
            The global web3 domains protocol
          </p>
          <p className="text-center text-[#78716c] leading-6 textFont">
            WENS has a simple mission of providing a decentralized and yet
            affordable way to map domain names (represented as .WETH) to
            on-chain data. Where on-chain data can be anything from a Ethereum
            (ETH) address to IPFS CID, images, text, and more.
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
            <img alt="card" src={openImg} />
            <p className="text-[#44403c] text-[20px] mb-[20px] font-medium">
              Open
            </p>
            <p className="text-center text-[16px] text-[#787172] mg-[8px]">
              WENS is open by default. This enables you to build on WENS as you
              see fit with no gatekeeping
            </p>
          </Card>
          <Card>
            <img alt="card" src={efficient} />
            <p className="text-[#44403c] text-[20px] mb-[20px] font-medium">
              Efficient
            </p>
            <p className="text-center text-[16px] text-[#787172] mg-[8px]">
              Your domain is yours forever , WENS does not charge any renewal
              fees.
            </p>
          </Card>
          <Card>
            <img alt="card" src={yours} />
            <p className="text-[#44403c] text-[20px] mb-[20px] font-medium">
              Yours
            </p>
            <p className="text-center text-[16px] text-[#787172] mg-[8px]">
              WENS is completely decentralized , its fully Built and operated by
              the community. The future of WENS is defined by you
            </p>
          </Card>
        </div>
        <div className="flex flex-col max-w-[410px] mt-[162px] mb-[120px] mx-auto items-center">
          <h1 className="text-[#3b82f6] font-medium text-[20px]">WENS is...</h1>
          <h1 className="text-[36px] text-[#44403c] my-[8px] font-sans font-medium text-center leading-tight textFont">
            “Creating an online identity and becoming a part of the metaverse”
          </h1>
        </div>
        <div className="flex max-w-[650px] mx-auto">
          <img src={people} alt="people" className="w-[100%]" />
        </div>
        <h1 className="mt-[8px] font-normal text-[36px] text-[#44403c] leading-tight text-center textFont">
          Compatible with IPFS
        </h1>
        <div className="flex flex-col items-center max-w-[470px] mx-auto my-0">
          <p className="mt-[8px] mb-[8px] text-[#787172] leading-6 text-center">
            Domain names are distributed across multiple servers with the help
            of IPFS
          </p>
        </div>
        <h1 className="mt-[196px] mb-[24px] text-center font-normal text-[36px] leading-10 text-[#44403c] textFont">
          Payment is more fluid with wrapped domains
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
        <div className="flex flex-col sm:flex-row justify-center items-center">
          <div className="">
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
          </div>
          <div className="">
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
        </div>
        <h1 className="mt-[146px] mb-[40px] text-center font-normal text-[36px] leading-10 text-[#44403c] textFont">
          Get started with Wrapped Domains
        </h1>
        <div className="flex flex-col sm:flex-row">
          <Card>
            <img alt="card" src={become} className="h-[106px] w-auto" />
            <p className="text-[#44403c] text-[24px] mb-[12px] mt-[24px] font-normal text-center">
              Become a Wrapped Domains member
            </p>
            <p className="text-center px-[30px] text-[16px] text-[#787172] mb-[8px]">
              Own multiple Wrapped Domains in the form of ERC-1155 NFTs and
              perform batch transactions when transferring
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
              Start building with Wrapped Domains
            </p>
            <p className="text-center px-[30px] text-[16px] text-[#787172] mb-[8px]">
              Build your portfolio or business website using Wrapped Domains
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
              Build with Wrapped Domains
            </button>
          </Card>
        </div>
        <h1 className="mt-[146px] mb-[24px] text-center font-normal text-[36px] leading-10 text-[#44403c] textFont">
          FAQs
        </h1>
        {/* <div className="flex flex-col sm:flex-row"> */}
        <div className="px-[20px] textFont">
          {accordions.map((accordion, index) => (
            <Accordion open={open === index + 1} key={index}>
              <AccordionHeader onClick={() => handleOpen(index + 1)}>
                {accordion.header}
              </AccordionHeader>
              <AccordionBody>{accordion.body}</AccordionBody>
            </Accordion>
          ))}
        </div>
        <img alt="icon" src={logo} className="mt-[160px] w-[40px] mx-auto" />
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
