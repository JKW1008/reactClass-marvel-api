import {
  Box,
  Grid,
  GridItem,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillYoutube,
} from "react-icons/ai";

import { FaTumblr, FaSnapchatGhost, FaPinterest } from "react-icons/fa";

export default function Footer() {
  return (
    <HStack
      w={"full"}
      bg={"gray.800"}
      h={"300px"}
      py={"20"}
      justifyContent={"center"}
      alignItems={"flex-start"}
    >
      <Grid
        w={{
          md: "3xl",
          lg: "5xl",
          xl: "7xl",
        }}
        h={"full"}
        templateColumns={{
          sm: "1fr",
          xl: "1fr 1fr 1fr 1fr",
        }}
        gap={8}
      >
        <GridItem>
          <Box w={40}>
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/800px-Marvel_Logo.svg.png"
              alt="Main Logo"
            />
          </Box>
        </GridItem>
        <GridItem w={"full"}>
          <HStack w={"full"} spacing={8}>
            <VStack
              color={"gray.100"}
              fontWeight={600}
              alignItems={"flex-start"}
            >
              <Text>ABOUT MARVEL</Text>
              <Text>HELP/FAQS</Text>
              <Text>CAREERS</Text>
              <Text>INTERSHIPS</Text>
            </VStack>
            <VStack color={"gray.300"} alignItems={"flex-start"}>
              <Text>ADVERTISING</Text>
              <Text>DISNEY+</Text>
              <Text>MARVELHQ.COM</Text>
              <Text>REDEEM DIGITAL COMICS</Text>
            </VStack>
          </HStack>
        </GridItem>
        <GridItem w={"full"}>
          <VStack>
            <HStack spacing={6}>
              <Box w={16}>
                <Image
                  src="https://cdn.marvel.com/content/1x/marvel_insider-topnav-logo-large2x.png"
                  alt="footerImage"
                />
              </Box>
              <VStack alignItems={"flex-start"} spacing={0}>
                <Text fontWeight={600} color={"gray.100"}>
                  MARVEL INSIDER
                </Text>
                <Text color={"gray.400"}>
                  Get Rewarded for Being a Marvel Fan
                </Text>
              </VStack>
            </HStack>
            <HStack spacing={6}>
              <Box w={16}>
                <Image
                  src="https://cdn.marvel.com/content/1x/mu-logo-w-nav-2x-2021-02.png"
                  alt="footerImage2"
                />
              </Box>
              <VStack alignItems={"flex-start"} spacing={0}>
                <Text fontWeight={600} color={"gray.100"}>
                  MARVEL UNLIMITED
                </Text>
                <Text color={"gray.400"}>
                  Accesss Over 30,000+ Digital Comics
                </Text>
              </VStack>
            </HStack>
          </VStack>
        </GridItem>
        <GridItem w={"full"}>
          <VStack alignItems={"flex-start"} spacing={"4"}>
            <Text fontWeight={600} color={"gray.100"}>
              FOLLOW MARVEL
            </Text>
            <Grid
              color={"gray.500"}
              templateColumns={"repeat(4, 1fr)"}
              gap={6}
              fontSize={30}
            >
              <GridItem>
                <Box>
                  <AiFillFacebook />
                </Box>
              </GridItem>
              <GridItem>
                <Box>
                  <AiOutlineTwitter />
                </Box>
              </GridItem>
              <GridItem>
                <Box>
                  <AiOutlineInstagram />
                </Box>
              </GridItem>
              <GridItem>
                <Box>
                  <FaTumblr />
                </Box>
              </GridItem>
              <GridItem>
                <Box>
                  <AiFillYoutube />
                </Box>
              </GridItem>
              <GridItem>
                <Box>
                  <FaSnapchatGhost />
                </Box>
              </GridItem>
              <GridItem>
                <Box>
                  <FaPinterest />
                </Box>
              </GridItem>
            </Grid>
          </VStack>
        </GridItem>
      </Grid>
    </HStack>
  );
}
