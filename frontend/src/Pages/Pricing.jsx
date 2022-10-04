import { Button, Heading, Text } from "@chakra-ui/react";
import React from "react";
import "./Pricing.css";
import { Switch } from "@chakra-ui/react";
import { useState } from "react";
import PriceBox from "../Components/PriceBox";
import { Monthly } from "../Assets/MonthlyPricing";
import { Yearly } from "../Assets/YearlyPricing";
import MainNavbar from "../Components/MainNavbar";
import { Accordion } from "@chakra-ui/react";
import Faq from "../Components/Faq";
import { FaqData } from "../Assets/Faq";
import Footer from "../Components/Footer";
const Pricing = () => {
  const [state, setState] = useState(false);
  const [data, setData] = useState(Monthly);
  const handleClick = () => {
    if (!state) {
      setData(Yearly);
      setState(true);
    } else {
      setData(Monthly);
      setState(false);
    }
    // setState(state ? false : true);
    // if (state) console.log("Part 2");
    // else console.log("Part 1");
    //console.log("Clicked", state);
  };
  return (
    <div>
      <MainNavbar />
      <div id="sbox">
        <div
          style={{ width: "100%", height: "150px", backgroundColor: "#f2faff" }}
        ></div>
        <div id="sbox1">
          <div className="sbox1-a">
            <div style={{ paddingTop: "10px", paddingLeft: "350px" }}>
              <Heading
                fontSize="40px"
                fontFamily="Amerigo-bt roman opt"
                color="#4C525A"
                fontWeight="500px"
              >
                Plans & Pricing
              </Heading>
            </div>
          </div>
          <div className="sbox1-b">
            <div style={{ marginLeft: "50px", marginTop: "29px" }}>
              <b
                style={{ fontFamily: "Amerigo-bt roman opt", color: "#4c525a" }}
              >
                {" "}
                MONTHLY
              </b>
            </div>
            <div style={{ marginTop: "-25px", marginLeft: "150px" }}>
              <Switch size="lg" colorScheme="teal" onChange={handleClick} />
            </div>
            <div style={{ marginTop: "-25px", marginLeft: "220px" }}>
              <p>YEARLY</p>
            </div>
            <div style={{ marginTop: "-60px", marginLeft: "155px" }}>
              <img
                src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e9d7255d3886a6103fb12a9_FREE-text.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div id="spricebox">
          {data.map((ele) => (
            <PriceBox key={ele.id} ele={ele} />
          ))}
        </div>
        <div id="sbox2">
          <div style={{ paddingTop: "25px" }}>
            <Heading
              as="h2"
              color="#4c525a"
              fontFamily="Amerigo-bt roman opt"
              fontWeight="400px"
              ml="350px"
            >
              {" "}
              Super charge your work with add-ons
            </Heading>
          </div>
        </div>
        <div id="sbox3">
          <div style={{ width: "70%" }}>
            <div style={{ marginLeft: "20px", paddingTop: "30px" }}>
              <Heading
                color="#4c525a"
                fontFamily="Proximanova opt"
                fontSize="27px"
              >
                Collaborators
              </Heading>
            </div>
            <div style={{ marginLeft: "20px" }}>
              <Text color="#4c525a">
                Invite other users to specific projects for limited access and
                functionality.
              </Text>
            </div>
          </div>
          <div
            style={{ width: "30%", paddingTop: "35px", paddingLeft: "100px" }}
          >
            <Heading>Free</Heading>
          </div>
        </div>
        <div id="sbox3">
          <div style={{ width: "70%" }}>
            <div style={{ marginLeft: "20px", paddingTop: "30px" }}>
              <Heading
                color="#4c525a"
                fontFamily="Proximanova opt"
                fontSize="27px"
              >
                Partners
              </Heading>
            </div>
            <div style={{ marginLeft: "20px" }}>
              <Text color="#4c525a">
                Invite other users for full account access and company
                management.
              </Text>
            </div>
          </div>
          <div
            style={{ width: "30%", paddingTop: "35px", paddingLeft: "100px" }}
          >
            <Heading>$9</Heading>
            <Text color="#4c525a">/Month</Text>
          </div>
        </div>
        <div id="sbox3">
          <div style={{ width: "70%" }}>
            <div style={{ marginLeft: "20px", paddingTop: "30px" }}>
              <Heading
                color="#4c525a"
                fontFamily="Proximanova opt"
                fontSize="27px"
              >
                Bonsai Tax
              </Heading>
            </div>
            <div style={{ marginLeft: "20px" }}>
              <Text color="#4c525a">
                Track expenses, identify write-offs, and estimate quarterly
                taxes easily.
              </Text>
            </div>
          </div>
          <div
            style={{ width: "30%", paddingTop: "35px", paddingLeft: "100px" }}
          >
            <Heading>$10</Heading>
            <Text color="#4c525a">/Month</Text>
          </div>
        </div>
        <div id="stryfree">
          <div
            style={{
              width: "80%",
              textAlign: "left",
              marginTop: "75px",
              marginLeft: "45px",
            }}
          >
            <Heading
              fontFamily={"'Amerigo-bt roman opt',sans-serif"}
              color="#4C525A"
              fontWeight="500px"
              fontSize="45px"
            >
              It’s <span style={{ color: "#00B289" }}>your</span> business.
              <br />
              We’re here to help it grow.
            </Heading>
          </div>
          <div style={{ width: "20%", marginTop: "110px" }}>
            <Button colorScheme="green">START FREE</Button>
          </div>
        </div>
        <div id="sfaq" style={{ margin: "auto" }}>
          <div style={{ marginLeft: "300px" }}>
            <Heading fontSize="30px" color="#00B289">
              Frequently Asked Questions
            </Heading>
          </div>
          <div style={{ width: "70%", margin: "auto", marginTop: "50px" }}>
            <Accordion allowToggle>
              {FaqData.map((ele) => (
                <Faq
                  key={ele.Id}
                  Description={ele.Description}
                  Heading={ele.Heading}
                />
              ))}
            </Accordion>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Pricing;
