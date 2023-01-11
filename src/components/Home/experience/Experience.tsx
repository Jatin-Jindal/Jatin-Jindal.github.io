import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import ExpCard from "./ExpCard";
import CodeIcon from "./assets/CodeIcon.svg";
import DesignIcon from "./assets/DesignIcon.svg";
import ProjectsIcon from "./assets/ProjectsIcon.svg";
import ExpCardSub from "./ExpCardSub";

interface ExperienceProps {
  id?: string;
}

export const Experience: React.FC<ExperienceProps> = ({ id }) => {
  return (
    <Center id={id || "experience"}>
      <Grid
        mt="6em"
        templateColumns="repeat(3, 1fr)"
        templateRows="repeat(2, 1fr)"
        columnGap={20}
        rowGap={10}
      >
        <GridItem colSpan={1} rowSpan={1}>
          <ExpCard numYears={5} activity="Programming" icon={CodeIcon} />
        </GridItem>
        <GridItem colSpan={1} rowSpan={1}>
          <ExpCard
            numYears={7}
            activity="Learning"
            icon={ProjectsIcon}
            filled={true}
          />
        </GridItem>
        <GridItem colSpan={1} rowSpan={1}>
          <ExpCard numYears={4} activity="Coding" icon={DesignIcon} />
        </GridItem>
        <GridItem colSpan={3} rowSpan={1}>
          <Flex backgroundColor="#7B4AE21A" px={12} py={8} borderRadius="3xl">
            <ExpCardSub subheading="Developing" heading="Full-Stack" />
            <Spacer />
            <ExpCardSub
              subheading="Dozens of projects &"
              heading="Experience"
            />
            <Spacer />
            <ExpCardSub subheading="Freelancing and" heading="outsourcing" />
          </Flex>
        </GridItem>
      </Grid>
    </Center>
  );
};

export default Experience;
