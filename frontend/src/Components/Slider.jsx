import React from "react";
import Slider from "react-slick";
import { Box, Image, Text } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };
  return (
    <div>
      <Box w="980px" m="auto">
        <Slider {...settings}>
          <div>
            <Box h="450px" mr="20px">
              <Box w="180px" h="200px">
                <Image
                  w="100%"
                  h="100%"
                  borderTopRightRadius="25%"
                  borderBottomLeftRadius="25%"
                  objectFit="cover"
                  src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5888e1f5f34690422d33efce_david-mihm.jpg"
                  alt="user"
                />
              </Box>
              <Text fontSize="2xl" mt="30px" ml="30px">
                "For all my Freelancer / Small Agency <br /> followers, I wish
                I’d discovered <br /> @bonsaiinc long ago - great templated{" "}
                <br /> contract"
              </Text>
              <Text fontSize="xl" fontWeight="bold" mt="40px" ml="30px">
                David Mihm
              </Text>
              <Text fontSize="large" color="gray" mt="8px" ml="30px">
                Founder of TidingsCo
              </Text>
            </Box>
          </div>
          <div>
            <Box h="450px">
              <Box w="180px" h="200px">
                <Image
                  w="100%"
                  h="100%"
                  borderTopRightRadius="25%"
                  borderBottomLeftRadius="25%"
                  objectFit="cover"
                  src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5888e56ffe81b74722a25aa8_DavidUrbinati.jpg"
                  alt="user"
                />
              </Box>
              <Text fontSize="2xl" mt="30px" ml="30px">
                "@bonsaiinc is probably my all time <br /> favorite freelance
                tool. hands down. the <br /> team is super responsive and
                accessible <br /> when i have questions."
              </Text>
              <Text fontSize="xl" fontWeight="bold" mt="40px" ml="30px">
                David Urbinati
              </Text>
              <Text fontSize="large" color="gray" mt="8px" ml="30px">
                Motion design / animation
              </Text>
            </Box>
          </div>
          <div>
            <Box h="450px" mr="20px">
              <Box w="180px" h="200px">
                <Image
                  w="100%"
                  h="100%"
                  borderTopRightRadius="25%"
                  borderBottomLeftRadius="25%"
                  objectFit="cover"
                  src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/588913c6065c48675c827252_nat.jpg"
                  alt="user"
                />
              </Box>
              <Text fontSize="2xl" mt="30px" ml="30px">
                "Anyone doing #freelance work should <br /> use @bonsaiinc for
                contracts/payment. <br /> It's amazing and saves boatloads of
                <br /> time."
              </Text>
              <Text fontSize="xl" fontWeight="bold" mt="40px" ml="30px">
                Nathanael Smith
              </Text>
              <Text fontSize="large" color="gray" mt="8px" ml="30px">
                Product design
              </Text>
            </Box>
          </div>
          <div>
            <Box h="450px">
              <Box w="180px" h="200px">
                <Image
                  w="100%"
                  h="100%"
                  borderTopRightRadius="25%"
                  borderBottomLeftRadius="25%"
                  objectFit="cover"
                  src=" https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/588913ce796cb37d4ddfa28e_jold.jpg"
                  alt="user"
                />
              </Box>
              <Text fontSize="2xl" mt="30px" ml="30px">
                "Wow, @bonsaiinc's contracts are <br /> completely wonderful. If
                you freelance <br /> you have to check it out. Really lovely{" "}
                <br /> experience. h/t @hemeon"
              </Text>
              <Text fontSize="xl" fontWeight="bold" mt="40px" ml="30px">
                Jon Gold
              </Text>
              <Text fontSize="large" color="gray" mt="8px" ml="30px">
                Designer and engineer
              </Text>
            </Box>
          </div>
        </Slider>
      </Box>
    </div>
  );
};

export default SliderComponent;
