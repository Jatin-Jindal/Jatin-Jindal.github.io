import {
  Box,
  Center,
  Flex,
  Heading,
  Icon,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";
import {
  SiBitbucket,
  SiBootstrap,
  SiCss3,
  SiDocker,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import EmojiProvider from "../EmojiProvider";

interface skillsProps {}

export const skills: React.FC<skillsProps> = ({}) => {
  const dayToDay = [
    SiReact,
    SiJavascript,
    SiTypescript,
    SiNextdotjs,
    SiCss3,
    SiHtml5,
    SiGithub,
    SiGit,
    SiPython,
  ];
  const someExp = [
    SiBitbucket,
    SiPostgresql,
    SiMysql,
    SiVuedotjs,
    SiNodedotjs,
    SiDocker,
    SiTailwindcss,
    SiBootstrap,
    SiSass,
  ];
  return (
    <Center id="skills">
      <VStack spacing={5}>
        <Flex>
          <Box bgColor="#7B4AE21A" px="6" py="3" borderRadius="1em">
            <Heading
              size="md"
              color="#7B4AE2"
              fontFamily={`"Raleway", sans-serif`}
              fontWeight="700"
            >
              <EmojiProvider emoji="👨‍💻" alt="Skills" />
              Skills · Experiences
            </Heading>
          </Box>
        </Flex>
        <Heading
          fontFamily={`"Raleway", sans-serif`}
          fontWeight="700"
          size="2xl"
        >
          Technologies and Skills
        </Heading>

        <Box>
          <Center>
            <Text
              fontSize="2xl"
              color="gray.500"
              fontWeight={400}
              letterSpacing="wide"
              fontFamily={`"Raleway", sans-serif`}
              textAlign="center"
              mt="6vh"
              mb="3vh"
            >
              Technologies I use day to day
            </Text>
          </Center>
          <Wrap spacing={9} align="center" justify="center">
            {dayToDay.map((icon, index) => (
              <WrapItem key={`${index}-${icon}`}>
                <Icon
                  as={icon}
                  boxSize={16}
                  color="#7B4AE280"
                  borderRadius="md"
                />
              </WrapItem>
            ))}
          </Wrap>
        </Box>
        <Box>
          <Center>
            <Text
              fontSize="2xl"
              color="gray.500"
              fontWeight={400}
              letterSpacing="wide"
              fontFamily={`"Raleway", sans-serif`}
              textAlign="center"
              my="3vh"
            >
              Technologies I don't use that often, but am experienced with
            </Text>
          </Center>
          <Wrap spacing={9} align="center" justify="center">
            {someExp.map((icon, index) => (
              <WrapItem key={`${index}-${icon}`}>
                <Icon
                  as={icon}
                  boxSize={16}
                  color="#7B4AE280"
                  borderRadius="md"
                />
              </WrapItem>
            ))}
          </Wrap>
        </Box>
      </VStack>
    </Center>
  );
};

export default skills;
