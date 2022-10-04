import React from "react";
import "./Sidebar1.css";
import {
  AiOutlineInbox,
  AiOutlineMacCommand,
  AiOutlinePlayCircle,
  AiOutlinePlusSquare,
} from "react-icons/ai";
import { FiHome } from "react-icons/fi";
import { VscFileSubmodule } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { IoIosContacts } from "react-icons/io";
import { TbFileDollar, TbReceipt } from "react-icons/tb";
import { IoNewspaperOutline } from "react-icons/io5";
import { GrDocumentText } from "react-icons/gr";
import { MdKingBed, MdOutlineWatchLater } from "react-icons/md";
import { BiGift, BiTask } from "react-icons/bi";
import { BsWallet } from "react-icons/bs";
import { ImFileText2 } from "react-icons/im";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";

const Sidebar1 = () => {
  return (
    <div>
      <div id="sidebar">
        <div id="s1">
          <img
            src="https://app.hellobonsai.com/packs/static/bonsai-623ed86a47a195e7f9e2.svg"
            width="100px"
            alt="logo"
          />
          <AiOutlinePlusSquare color="#00b289" />
        </div>
        <div id="s2">
          <FiHome />
          <Link to="/dashboard">
            {" "}
            <p> Dashboard</p>
          </Link>
        </div>
        <Popover placement="bottom">
          <div id="s3">
            <IoIosContacts />
            <PopoverTrigger>
              <Link to="/clients">Clients</Link>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody textAlign="left" textDecoration="none">
                <Link to="/automation"> • Automation</Link>
                <br />
                <Link to="/settings"> • Settings</Link>
              </PopoverBody>
            </PopoverContent>
          </div>
        </Popover>
        <div id="s4">
          <VscFileSubmodule />
          <Link to="/projects"> Projects</Link>
        </div>
        <div id="s2">
          <GrDocumentText />
          <p> Proposals</p>
        </div>
        <div id="s3">
          <IoNewspaperOutline />
          <p> Contracts</p>
        </div>
        <div id="s4">
          <TbFileDollar />
          <p> Invoices</p>
        </div>
        <div id="s2">
          <MdOutlineWatchLater />
          <p> TimeTracking</p>
        </div>
        <div id="s3">
          <BiTask />
          <p> Tasks</p>
        </div>
        <div id="s3">
          <AiOutlineMacCommand />
          <p> Forms</p>
        </div>
        <div id="s4">
          <AiOutlineInbox />
          <p> Services</p>
        </div>
        <div id="s2">
          <BsWallet />
          <p> Cash</p>
        </div>
        <div id="s3">
          <ImFileText2 />
          <p> Accounting</p>
        </div>
        <div id="s4">
          <TbReceipt />
          <p> Taxes</p>
        </div>
        <div id="getonemonth">
          <div id="inner">
            <BiGift className="free" color="#00b289" />
            <p>Get One Month Free</p>
          </div>
        </div>
      </div>
      <div id="dashboardNavbar">
        <div id="searchbar">
          <label>
            {" "}
            <SearchIcon />{" "}
          </label>

          <input placeholder="Search" className="se" />
        </div>
        <div id="otherPart">
          <div style={{ paddingTop: "15px", paddingLeft: "250px" }}>
            {" "}
            <Button leftIcon={<MdKingBed />} colorScheme="green" size="sm">
              Start Free Trial
            </Button>
          </div>
          <div
            style={{
              paddingTop: "10px",
              paddingLeft: "50px",
              display: "flex",
              gap: "7px",
            }}
          >
            <div>
              <AiOutlinePlayCircle size="2.5rem" color="darkgreen" />
            </div>

            <div>
              <p style={{ marginTop: "7px" }}>Start Timer</p>
            </div>
          </div>
          <div style={{ paddingTop: "15px", paddingLeft: "35px" }}>
            <Button colorScheme="blue">User Name </Button>
          </div>
        </div>
      </div>
      {/* Make Pages from here */}
    </div>
  );
};

export default Sidebar1;
