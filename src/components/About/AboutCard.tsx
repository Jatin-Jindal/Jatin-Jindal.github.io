import {
  Card,
  CardBody,
  Heading,
  Stack,
  CardFooter,
  Text,
  Box,
  Flex,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import EmojiProvider from "../EmojiProvider";
import Image from "next/image";

import ghostmangy from "public/ghostmangy.png";

interface AboutCardProps {}

export const AboutCard: React.FC<AboutCardProps> = ({}) => {
  const aboutMe = `👋:My name is Jatin Jindal, and I prefer to go by Jatin. My pronouns are he/him.
👨‍💻:I’ve been developing with programming interfaces like Javascript, ReactJS and TypeScript since 4 years.
🎓:I am currently pursuing my degree in Computer Science and Engineering from Vellore Institute of Technology, Bhopal and set to graduate in 2025.
💡:My interests lie in exploring Linux-based systems, developing full-stack applications and experimenting with front-end elements in my free time.
🚀:I am constantly striving to improve and learn more in my field and am excited to bring my skills and passion to a dynamic team.`;
  const [lessThan335px] = useMediaQuery("(max-width: 335px)");
  return (
    <Card variant="unstyled" maxW={{ base: "100%", md: "57%" }}>
      <CardBody>
        <Flex>
          <Box bgColor="#7B4AE21A" px="6" py="3" borderRadius="1em">
            <Heading
              size="md"
              color="#7B4AE2"
              fontFamily={`"Raleway", sans-serif`}
              fontWeight="700"
            >
              <EmojiProvider emoji="🧐" alt="About" />
              About me
            </Heading>
          </Box>
        </Flex>
        <Flex mt="6" gap={4} flexDir={lessThan335px ? "column-reverse" : "row"}>
          <Heading
            fontFamily={`"Raleway", sans-serif`}
            fontWeight="700"
            size="2xl"
          >
            Jatin Jindal
          </Heading>
          <Flex>
            <Flex
              bgColor="#7B4AE21A"
              px="6"
              py="3"
              borderRadius="1em"
              align="center"
            >
              <Image
                src={ghostmangy}
                alt="Ghostmander"
                style={{
                  display: "inline",
                  maxHeight: "1.5rem",
                  maxWidth: "1.5rem",
                  marginRight: "0.5rem",
                  marginTop: "0.01rem",
                  aspectRatio: "1/1",
                }}
              />
              <Heading
                size="md"
                color="#7B4AE2"
                fontFamily={`"Raleway", sans-serif`}
                fontWeight="700"
              >
                Ghostmander
              </Heading>
            </Flex>
          </Flex>
        </Flex>
        <Stack mt="6" spacing="6">
          {aboutMe.split("\n").map((line, _) => (
            <Text
              fontSize="lg"
              color="gray.500"
              fontWeight={400}
              letterSpacing="wide"
              fontFamily={`"Raleway", sans-serif`}
              textAlign="justify"
              key={_}
            >
              <EmojiProvider
                emoji={line.split(":")[0]}
                alt={line.split(":")[0]}
                maxH={5}
              />
              {line.split(":")[1]}
            </Text>
          ))}
        </Stack>
      </CardBody>
      <CardFooter mt="1em"></CardFooter>
    </Card>
  );
};

export default AboutCard;
