import { Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";

interface ExpCardSubProps {
  subheading: string;
  heading: string;
}

export const ExpCardSub: React.FC<ExpCardSubProps> = ({
  subheading,
  heading,
}) => {
  return (
    <VStack spacing={-2}>
      <Text
        color="#7B4AE2"
        fontFamily={`"Raleway", sans-serif`}
        fontWeight="400"
        letterSpacing={1.5}
        fontSize="md"
      >
        {subheading}
      </Text>
      <Heading
        color="#7B4AE2"
        fontFamily={`"Raleway", sans-serif`}
        fontWeight="700"
        fontSize="4xl"
      >
        {heading}
      </Heading>
    </VStack>
  );
};

export default ExpCardSub;
