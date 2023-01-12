import {
  Card,
  CardBody,
  Heading,
  Stack,
  CardFooter,
  Text,
  Box,
  Flex,
  Image,
} from "@chakra-ui/react";
import React from "react";
import EmojiProvider from "../EmojiProvider";

interface AboutCardProps {}

export const AboutCard: React.FC<AboutCardProps> = ({}) => {
  const aboutMe = `👋:My name is Jatin Jindal, most of my friends prefer calling me Jindal though, online, I go by ghostmander.
👨‍💻:I’ve been developing with programming interfaces like Javascript, ReactJS and TypeScript since 2 years 
🎓:Will graduate from Vellore Institute of Technology, Bhopal (VIT, B) in 2025 with a degree in CSE
💡:My interests mainly lie in exploring Linux based systems, developing full stacks and experimenting in frontend elements in my free time.
🚀:Everyday, I’m just trying to be a little better than yesterday if not, then learn as much as possible in my life.`;
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
        <Stack mt="6" spacing="0">
          <Heading
            fontFamily={`"Raleway", sans-serif`}
            fontWeight="700"
            size="2xl"
          >
            Jatin Jindal
          </Heading>
          <Heading
            fontFamily={`"Raleway", sans-serif`}
            fontWeight="700"
            size="2xl"
          >
            aka Ghostmander
          </Heading>
        </Stack>
        <Stack mt="6" spacing="6">
          {aboutMe.split("\n").map((line, _) => (
            <Text
              fontSize="lg"
              color="gray.500"
              fontWeight={400}
              letterSpacing="wide"
              fontFamily={`"Raleway", sans-serif`}
              noOfLines={3}
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
