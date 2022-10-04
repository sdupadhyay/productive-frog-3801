import React, { useState } from "react";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import axios from "axios";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { email, password, name };

    axios({
      method: "post",
      url: "/user/signup",
      baseURL: "https://limitless-wildwood-95588.herokuapp.com",
      data: payload,
    })
      .then((res) => {
        console.log(res);
        alert("SignUp successful");
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong! Please try again");
      });
  };

  return (
    <div>
      <Flex m="auto" mt="50px" border="1px solid" w="52%">
        <Box h="800px" w="40%" borderRight="1px solid gray">
          <Image
            ml="40px"
            mt="60px"
            w="90px"
            src="https://app.hellobonsai.com/assets/logos/bonsai-0fe7c417d79806408d8117d5a0ca871f0be3afb1104d54b53f59f53cbda2f28b.svg"
            alt="logo"
          />
          <Text ml="40px" mt="20px" fontSize="sm" fontWeight="600">
            Join 500,000+ freelancers and <br /> agencies using Bonsai
          </Text>
        </Box>
        <Flex flexDirection="column">
          <Text
            ml="40px"
            mt="50px"
            fontSize="2xl"
            fontWeight="bold"
            fontFamily="Domino"
          >
            Try Bonsai free with your <br /> Workflow today
          </Text>
          <Flex ml="50px" flexDirection="column">
            <form onSubmit={handleSubmit} style={{ marginTop: "30px" }}>
              <label htmlFor="email" style={{ marginBottom: "10px" }}>
                EMAIL
              </label>
              <br />
              <input
                onChange={handleEmailChange}
                id="email"
                type="email"
                style={{
                  border: "1px solid gray",
                  outline: "0",
                  paddingLeft: "10px",
                  width: "400px",
                }}
              />
              <br />
              <label htmlFor="fullname" style={{ marginBottom: "10px" }}>
                FULL NAME
              </label>
              <br />
              <input
                onChange={handleNameChange}
                style={{
                  border: "1px solid gray",
                  ouline: "0",
                  paddingLeft: "10px",
                  width: "400px",
                }}
                id="fullname"
                type="text"
              />
              <br />
              <label htmlFor="password" style={{ marginBotttom: "10px" }}>
                PASSWORD
              </label>
              <br />
              <input
                onChange={handlePasswordChange}
                style={{
                  border: "1px solid gray",
                  outline: "0",
                  paddingLeft: "10px",
                  width: "400px",
                }}
                id="password"
                type="text"
              />
              <br />
              <input
                type="text"
                style={{
                  border: "1px solid gray",
                  outline: "0",
                  paddingLeft: "10px",
                }}
                placeholder="INDIA"
              />
              <input
                type="text"
                style={{
                  border: "1px solid gray",
                  outline: "0",
                  paddingLeft: "10px",
                }}
                placeholder="INR"
              />
              <br />
              <Button
                type="submit"
                w="400px"
                backgroundColor="#00b289"
                color="white"
              >
                Create Free Account
              </Button>
            </form>
            <Button
              variant="outline"
              w="400px"
              borderColor="#00b289"
              _hover={{ backgroundColor: "white" }}
            >
              Login
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default SignUp;
