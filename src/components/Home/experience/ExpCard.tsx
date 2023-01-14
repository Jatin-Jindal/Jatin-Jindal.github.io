import { Card, Heading, CardBody, Text, Stack, Center } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import FadeInSection from "../../FadeInSection";

interface ExpCardProps {
  icon: string;
  numYears: number;
  activity: string;
  filled?: boolean;
}

export const ExpCard: React.FC<ExpCardProps> = ({
  icon,
  numYears,
  activity,
  filled,
}) => {
  return (
    <FadeInSection>
      <Card
        variant={filled ? "filled" : "outline"}
        maxW="sm"
        align="center"
        borderRadius="1em"
        backgroundColor={filled ? "#7B4AE21A" : "transparent"}
        borderColor="#7B4AE280"
      >
        <CardBody my={6}>
          <Center>
            <Image src={icon} alt="icon" />
          </Center>
          <Stack mt="6" spacing="-2" align="center">
            <Text
              fontFamily={`"Raleway", sans-serif`}
              fontWeight="400"
              fontSize="lg"
              letterSpacing="0.05em"
              color="white"
            >
              {`${numYears} ${numYears > 1 ? "years" : "year"} of`}
            </Text>
            <Heading
              fontFamily={`"Raleway", sans-serif`}
              fontWeight="700"
              size="xl"
            >
              {activity}
            </Heading>
          </Stack>
        </CardBody>
      </Card>
    </FadeInSection>
  );
};

export default ExpCard;
