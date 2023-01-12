import {
  Box,
  Button,
  Flex,
  Link,
  Spacer,
  Text,
  Tooltip,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import avatar from "./../../../assets/avatar.png";
import React from "react";
import InfoCard from "./InfoCard";
import { FaWhatsapp } from "react-icons/fa";
import { DownloadIcon } from "@chakra-ui/icons";

interface MainPageProps {
  id?: string;
}

export const MainPage: React.FC<MainPageProps> = ({ id }) => {
  const [isSmallerThan1118] = useMediaQuery("(max-width: 1118px)");
  return (
    <Flex
      mx="7vw"
      mt="7vh"
      mb="14vh"
      id={id || "mainPage"}
      flexWrap={isSmallerThan1118 ? "wrap" : "nowrap"}
      flexDirection={{ base: "column", md: "row" }}
    >
      <Box my="auto">
        <InfoCard />
      </Box>
      <Spacer />
      <Image src={avatar} alt="avatar" />
      <Spacer />
      <VStack
        my="auto"
        fontStyle={`"Raleway", sans-serif`}
        fontWeight="600"
        color="#7B4AE280"
      >
        <Tooltip
          hasArrow
          label="Coming soon!"
          aria-label="Download Resume"
          bg="#101928"
          color="teal.300"
          fontFamily={`"Raleway", sans-serif`}
          fontWeight="800"
          letterSpacing={"wide"}
          borderRadius={"md"}
        >
          <Link href="#">
            Download CV <DownloadIcon mx="2px" />
          </Link>
        </Tooltip>
        <Button
          leftIcon={<FaWhatsapp />}
          color="#7B4AE280"
          variant="outline"
          fontSize="1.3em"
          borderColor="#7B4AE280"
          borderRadius="0.5em"
        >
          <Text fontSize="0.8em">Start Conversation</Text>
        </Button>
      </VStack>
    </Flex>
  );
};

export default MainPage;
