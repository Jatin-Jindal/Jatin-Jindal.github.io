import {
  Flex,
  Spacer,
  Box,
  Button,
  ButtonGroup,
  Link,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
  Center,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import logo from "public/Logo.svg";
import { HamburgerIcon } from "@chakra-ui/icons";

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
      {/* For Large devices: */}
      <Show above="md">
        <ButtonGroup spacing="0" p="4" variant="ghost">
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
      </Show>
      {/* For smol devices */}
      <Show below="md">
        <Center mr={6} mt={-5}>
          <Menu>
            <MenuButton
              as={IconButton}
              fontSize="2em"
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="unstyled"
            />
            <MenuList bg="#0f1120" borderColor={"transparent"} minW={"8rem"}>
              {Object.entries(buttons).map(([key, value]) => (
                <MenuItem
                  key={key}
                  onClick={() => {
                    // @ts-ignore
                    window.location = value;
                  }}
                  bg="#0f1120"
                  _hover={{ bg: "#00000080" }}
                  color="#FFFFFF80"
                  justifyContent="center"
                  fontFamily={`'Raleway', sans-serif`}
                  fontSize="1.05em"
                  fontWeight="200"
                  letterSpacing={".03em"}
                >
                  {key}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Center>
      </Show>
    </Flex>
  );
};

export default NavBar;
