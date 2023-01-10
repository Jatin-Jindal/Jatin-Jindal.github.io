import {
  Card,
  CardBody,
  Stack,
  Heading,
  CardFooter,
  Text,
  Icon,
  Link,
  Wrap,
  WrapItem,
  Box,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import React from "react";

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

interface InfoCardProps {}

export const InfoCard: React.FC<InfoCardProps> = ({}) => {
  return (
    <Card variant="unstyled" maxW="sm">
      <CardBody>
        <Box bgColor="#7B4AE21A" p="1em" borderRadius="1em">
          <Heading
            size="md"
            color="#7B4AE2"
            fontFamily={`"Raleway", sans-serif`}
            fontWeight="700"
          >
            👋 Hello there!
          </Heading>
        </Box>
        <Stack mt="6" spacing="3">
          <Heading
            fontFamily={`"Raleway", sans-serif`}
            fontWeight="800"
            size="3xl"
          >
            Jatin
          </Heading>
          <Heading
            fontFamily={`"Raleway", sans-serif`}
            fontWeight="800"
            size="3xl"
          >
            Jindal
          </Heading>
          <Text fontSize="lg" color="gray.500">
            FS Dev | Linux Enthusiast
          </Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <Wrap spacing="1em">
          {Object.entries(socials).map(([key, { as, link }]) => (
            <WrapItem>
              <Link href={link} key={key}>
                <Icon as={as} aria-label={key} boxSize="7" color="#FFFFFF80" />
              </Link>
            </WrapItem>
          ))}
        </Wrap>
      </CardFooter>
    </Card>
  );
};

export default InfoCard;
