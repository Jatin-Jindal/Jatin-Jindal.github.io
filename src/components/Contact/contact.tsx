import { CopyIcon } from "@chakra-ui/icons";
import {
  Center,
  VStack,
  Flex,
  Heading,
  Icon,
  Box,
  Text,
  Button,
  Tooltip,
  ButtonGroup,
  IconButton,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowUp, FiSend } from "react-icons/fi";
import EmojiProvider from "../EmojiProvider";

interface contactProps {}

export const contact: React.FC<contactProps> = ({}) => {
  const [copyToolTip, setCopyToolTip] = useState("Copy to Clipboard");
  const [copyToolTipBg, setCopyToolTipBg] = useState("#101928");
  const [copyToolTipColor, setCopyToolTipColor] = useState("teal.300");
  return (
    <Center id="contact" my="14vh">
      <VStack spacing={5}>
        <Flex>
          <Box bgColor="#7B4AE21A" px="6" py="3" borderRadius="1em">
            <Heading
              size="md"
              color="#7B4AE2"
              fontFamily={`"Raleway", sans-serif`}
              fontWeight="700"
            >
              <EmojiProvider emoji="📬" alt="Skills" />
              Contact
            </Heading>
          </Box>
        </Flex>
        <Heading
          fontFamily={`"Raleway", sans-serif`}
          fontWeight="700"
          size="2xl"
        >
          Let's get in touch!
        </Heading>

        <Flex
          flexDir={{ base: "column", md: "row" }}
          justify="center"
          align="center"
          gap={"10vw"}
        >
          <Button
            leftIcon={<FaWhatsapp />}
            color="#7B4AE280"
            variant="outline"
            fontSize="2.5em"
            fontFamily={`"Raleway", sans-serif`}
            fontWeight="700"
            letterSpacing={"wide"}
            borderColor="#7B4AE280"
            borderRadius="0.5em"
            py="9"
            pl="6"
            pr="16"
          >
            <Text mt={1} fontSize="0.5em">
              Start Chatting
            </Text>
          </Button>
          <ButtonGroup size="sm" isAttached variant="outline">
            <Link href="mailto:jatinjindal.2003@gmail.com">
              <Button
                leftIcon={<FiSend />}
                color="#7B4AE280"
                variant="outline"
                fontSize="2.5em"
                fontFamily={`"Raleway", sans-serif`}
                fontWeight="700"
                letterSpacing={"wide"}
                borderColor="#7B4AE280"
                borderRadius="0.5em 0 0 0.5em"
                py="9"
                pl="6"
                pr="16"
              >
                <Text mt={1} fontSize="0.5em">
                  E-mail
                </Text>
              </Button>
            </Link>
            <Tooltip
              closeDelay={1000}
              label={copyToolTip}
              aria-label="Copy"
              hasArrow
              bg={copyToolTipBg}
              color={copyToolTipColor}
              fontFamily={`"Raleway", sans-serif`}
              fontWeight="800"
              letterSpacing={"wide"}
              borderRadius={"md"}
            >
              <IconButton
                size={"xl"}
                fontSize="2.5em"
                color="#7B4AE280"
                fontFamily={`"Raleway", sans-serif`}
                fontWeight="700"
                aria-label="Add to friends"
                borderColor="#7B4AE280"
                borderRadius="0 0.5em 0.5em 0"
                onClick={() => {
                  setCopyToolTip("Copied!");
                  setCopyToolTipColor("green.400");
                  setCopyToolTipBg("black");
                  navigator.clipboard.writeText(`jatinjindal.2003@gmail.com`);
                  setTimeout(() => {
                    setCopyToolTipBg("#101928");
                    setCopyToolTipColor("teal.300");
                    setCopyToolTip("Copy to Clipboard");
                  }, 1000);
                }}
                icon={<CopyIcon />}
                px={4}
              />
            </Tooltip>
          </ButtonGroup>
          {/* <VStack mt={{ base: 8, md: 0 }}>
            <Icon as={FiSend} w={10} h={10} color="#7B4AE280" />

            <Text
              fontSize="2xl"
              fontWeight={400}
              letterSpacing="wide"
              fontFamily={`"Raleway", sans-serif`}
              textAlign="center"
              color="#7B4AE2"
              mt="6vh"
              mb="3vh"
            >
              E-mail:
            </Text>
            <Flex
              flexDirection={{ base: "column", md: "row" }}
              align="center"
              gap={2}
            >
              <Text
                fontSize="2xl"
                color="gray.500"
                fontWeight={400}
                letterSpacing="wide"
                fontFamily={`"Raleway", sans-serif`}
                textAlign="center"
              >
                jatinjindal.2003@gmail.com
              </Text>
              <Tooltip
                closeDelay={1000}
                label={copyToolTip}
                aria-label="Copy"
                hasArrow
                bg={copyToolTipBg}
                color={copyToolTipColor}
                fontFamily={`"Raleway", sans-serif`}
                fontWeight="800"
                letterSpacing={"wide"}
                borderRadius={"md"}
              >
                <CopyIcon
                  color="#7B4AE280"
                  boxSize={"2em"}
                  onClick={() => {
                    setCopyToolTip("Copied!");
                    setCopyToolTipColor("green.400");
                    setCopyToolTipBg("black");
                    navigator.clipboard.writeText(`jatinjindal.2003@gmail.com`);
                    setTimeout(() => {
                      setCopyToolTipBg("#101928");
                      setCopyToolTipColor("teal.300");
                      setCopyToolTip("Copy to Clipboard");
                    }, 1000);
                  }}
                  cursor="pointer"
                />
              </Tooltip>
            </Flex>
          </VStack>  */}
        </Flex>
        <Flex mt="10vh" justify="center" align="center">
          <Flex
            justify="center"
            align="center"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            cursor="pointer"
          >
            <Text
              color="#7B4AE280"
              variant="outline"
              fontSize="2em"
              fontFamily={`"Raleway", sans-serif`}
              fontWeight="400"
              letterSpacing={"wide"}
              textAlign="center"
              py="9"
              mr={3}
            >
              Go to the top
            </Text>
            <FiArrowUp
              color="#7B4AE280"
              fontSize="2.5em"
              fontWeight="400"
              letterSpacing={"wide"}
            />
          </Flex>
        </Flex>
      </VStack>
    </Center>
  );
};

export default contact;
