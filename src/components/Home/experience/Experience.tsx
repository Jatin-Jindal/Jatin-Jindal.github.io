import { Grid, GridItem, Heading } from "@chakra-ui/react";
import React from "react";

interface ExperienceProps {
  image?: string;
}

export const Experience: React.FC<ExperienceProps> = ({}) => {
  return (
    <Grid
      templateColumns="repeat(3, 1fr)"
      templateRows="repeat(2, 1fr)"
      gap={6}
    >
      <GridItem colSpan={2} rowSpan={1} bg="tomato">
        <Heading fontSize="xl">Experience</Heading>
      </GridItem>
    </Grid>
  );
};

export default Experience;
