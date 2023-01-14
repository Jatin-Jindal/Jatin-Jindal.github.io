import { Box, Center, Flex, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import {
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
import FadeInSection from "../FadeInSection";
import TechStack from "./TechStack";

interface skillsProps {}

export const skills: React.FC<skillsProps> = ({}) => {
  const dayToDay = {
    React: SiReact,
    Javascript: SiJavascript,
    Typescript: SiTypescript,
    "Next.js": SiNextdotjs,
    CSS: SiCss3,
    HTML5: SiHtml5,
    Github: SiGithub,
    Git: SiGit,
    Python: SiPython,
  };
  const someExp = {
    Postgresql: SiPostgresql,
    Mysql: SiMysql,
    "Vue.js": SiVuedotjs,
    "Node.js": SiNodedotjs,
    Docker: SiDocker,
    Tailwind: SiTailwindcss,
    Bootstrap: SiBootstrap,
    Sass: SiSass,
  };
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
          textAlign={"center"}
        >
          Technologies and Skills
        </Heading>
        <FadeInSection>
          <TechStack
            heading="Technologies I use on a daily basis"
            techObj={dayToDay}
          />
        </FadeInSection>
        <FadeInSection>
          <TechStack
            heading="Technologies I don't use that often, but am experienced with"
            techObj={someExp}
          />
        </FadeInSection>
      </VStack>
    </Center>
  );
};

export default skills;
