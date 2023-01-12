import {
  Box,
  Center,
  Icon,
  Tooltip,
  Wrap,
  WrapItem,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";

interface TechStackProps {
  heading: string;
  techObj: { [key: string]: IconType };
}

export const TechStack: React.FC<TechStackProps> = ({ heading, techObj }) => {
  return (
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
          {heading}
        </Text>
      </Center>
      <Wrap spacing={9} align="center" justify="center">
        {Object.entries(techObj).map(([key, value]) => (
          <Tooltip
            hasArrow
            label={key}
            aria-label={key}
            bg="#101928"
            color="teal.300"
            fontFamily={`"Raleway", sans-serif`}
            fontWeight="800"
            letterSpacing={"wide"}
            borderRadius={"md"}
            key={key}
          >
            <WrapItem key={key}>
              <Icon
                as={value}
                boxSize={16}
                color="#7B4AE280"
                borderRadius="md"
              />
            </WrapItem>
          </Tooltip>
        ))}
      </Wrap>
    </Box>
  );
};

export default TechStack;
