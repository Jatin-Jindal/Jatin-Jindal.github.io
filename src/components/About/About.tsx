import { Center, Flex, Spacer } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import AboutCard from "./AboutCard";

import profilePic from "public/ProfilePic.png";

interface AboutProps {}

export const About: React.FC<AboutProps> = ({}) => {
  return (
    <Flex id="about" flexDir={{ base: "column", md: "row" }} my="14vh" mx="7vw">
      <Center minW={"5em"} mb={{ base: 12, md: 0 }}>
        <Image src={profilePic} alt="About" />
      </Center>
      <Spacer />
      <AboutCard />
    </Flex>
  );
};

export default About;
