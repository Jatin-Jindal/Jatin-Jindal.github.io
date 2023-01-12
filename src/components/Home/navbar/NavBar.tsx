import { Flex, Spacer, Box, Button, ButtonGroup, Link } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import logo from "public/Logo.svg";

const buttons = {
  Home: "#",
  "About me": "#about",
  // Portfolio: "#portfolio",
  Skills: "#skills",
  // Career: "#career",
  // Recommendations: "#recommendations",
  Contact: "#contact",
};

interface navbarProps {
  id?: string;
}

export const NavBar: React.FC<navbarProps> = ({ id }) => {
  return (
    <Flex
      id={id || "navbar"}
      backgroundColor="#7B4AE20D"
      borderRadius="1em"
      mx="8vw"
      mt="3.5vh"
    >
      <Box p="4">
        <Image
          src={logo.src}
          alt="logo"
          width={logo.width}
          height={logo.height}
        />
      </Box>
      <Spacer />
      <ButtonGroup
        spacing="0"
        p="4"
        variant="ghost"
        display={{ base: "none", md: "block" }}
      >
        {Object.entries(buttons).map(([key, value]) => (
          <Link href={value} key={key}>
            <Button
              key={key}
              colorScheme="white"
              color="#FFFFFF80"
              fontFamily={`'Raleway', sans-serif`}
              fontSize="1.05em"
              fontWeight="200"
              letterSpacing={".03em"}
            >
              {key}
            </Button>
          </Link>
        ))}
      </ButtonGroup>
    </Flex>
  );
};

export default NavBar;
