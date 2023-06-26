import { Box, Button, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { RxEnter } from "react-icons/rx";

export default function TitleImageSkew({ title, description, imgUrl }) {
  return (
    <>
      {/** 기울어진 이미지 타이틀 */}
      <HStack
        w={"full"}
        height={"400px"}
        bg={"gray.800"}
        position={"relative"}
        overflow={"hidden"}
      >
        {/** 1번째 자식 (왼쪽) */}
        <Box w={"50%"} h={"full"}>
          {/** 기울어진 빈 박스 */}
          <Box
            bg={"gray.800"}
            w={"full"}
            h={"full"}
            transform={"rotate(-10deg) scale(1.5) translateY(40px)"}
          />
        </Box>
        {/** 2번째 자식 (오른쪽) */}

        <Box w={"50%"} h={"full"} bg={"blue.100"}>
          <Image
            w={"full"}
            h={"full"}
            objectFit={"cover"}
            objectPosition={"center"}
            src={imgUrl}
            align={"avengers"}
          />
        </Box>
        <VStack
          position={"absolute"}
          top={"0"}
          left={"0"}
          w={"full"}
          h={"full"}
          alignItems={"center"}
        >
          <VStack
            w={"7xl"}
            h={"full"}
            alignItems={"flex-start"}
            justifyContent={"center"}
          >
            <Text
              color={"white"}
              fontWeight={"700"}
              fontSize={"32"}
              textTransform={"uppercase"}
            >
              {title}
            </Text>
            <Text color={"white"} w={"4xl"} fontSize={"20"} fontWeight={"600"}>
              {description}
            </Text>
            <Button
              mt={6}
              textTransform={"uppercase"}
              variant={"outline"}
              colorScheme="red"
              aria-label="Comics Button"
              rightIcon={<RxEnter />}
            >
              List More
            </Button>
          </VStack>
        </VStack>
      </HStack>
    </>
  );
}
