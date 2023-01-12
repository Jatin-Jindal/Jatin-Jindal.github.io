import { Center, Flex, Spacer, Wrap } from "@chakra-ui/react";
import profilePic from "../../assets/ProfilePic.png";
import React from "react";
import Image from "next/image";
import AboutCard from "./AboutCard";

interface AboutProps {}

export const About: React.FC<AboutProps> = ({}) => {
  return (
    <Flex id="about" flexDir={{ base: "column", md: "row" }} my="14vh" mx="7vw">
      <Center minW={"5em"}>
        <Image src={profilePic} alt="About" />
      </Center>
      <Spacer />
      <AboutCard />
    </Flex>
  );
};

export default About;
