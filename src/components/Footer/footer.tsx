import {
  Box,
  Flex,
  Icon,
  Link,
  SimpleGrid,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

interface footerProps {}

export const footer: React.FC<footerProps> = ({}) => {
  const socials = {
    Linkedin: {
      as: FaLinkedin,
      link: `https://www.linkedin.com/in/jatin-jindal-378673218/`,
    },
    Github: {
      as: FaGithub,
      link: `https://github.com/Jatin-Jindal`,
    },
  };
  return (
    <Box bg="#7B4AE21A">
      <SimpleGrid columns={3}>
        <Flex
          align="center"
          // ml={{ base: 0, md: 10, lg: 20, xl: 30 }}
          ml={{ base: "0rem", md: "2.5rem", lg: "5rem" }}
        >
          <Text
            fontSize={{ base: "sm", md: "md", lg: "lg", xl: "xl" }}
            color="gray.500"
            fontWeight={400}
            letterSpacing="wide"
            fontFamily={`"Raleway", sans-serif`}
            textAlign="right"
          >
            Copyright © 2023 Jatin Jindal
          </Text>
        </Flex>
        <Wrap spacing="1em" align="center" justify="center">
          {Object.entries(socials).map(([key, { as, link }]) => (
            <WrapItem key={key}>
              <Link href={link}>
                <Icon
                  as={as}
                  aria-label={key}
                  boxSize={{ base: 8, md: 10, lg: 14, xl: 16 }}
                  my={{ base: 2, md: 4, lg: 6, xl: 8 }}
                  color="#FFFFFF80"
                />
              </Link>
            </WrapItem>
          ))}
        </Wrap>
      </SimpleGrid>
    </Box>
  );
};

export default footer;
