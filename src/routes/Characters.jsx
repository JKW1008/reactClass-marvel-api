import {
  Box,
  Grid,
  GridItem,
  HStack,
  Image,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function Charaters() {
  return (
    <VStack w={"full"}>
      <Box w={"full"} h={"64"} overflow={"hidden"}>
        <Image
          w={"full"}
          h={"full"}
          objectFit={"cover"}
          src="https://wallpaperaccess.com/full/2930988.jpg"
          alt="Characters Img"
        />
      </Box>
      <VStack w={"7xl"}>
        {/** Title */}
        <HStack w={"full"} py={"16"} justifyContent={"space-between"}>
          <Box>
            <Text
              fontSize={"32"}
              fontWeight={"bold"}
              textTransform={"uppercase"}
            >
              characters
            </Text>
          </Box>
          <Select w={"32"}>
            <option value={"6"}>6</option>
            <option value={"12"}>12</option>
            <option value={"18"}>18</option>
            <option value={"24"}>24</option>
            <option value={"30"}>30</option>
            <option value={"36"}>36</option>
          </Select>
        </HStack>
        {/** Board */}
        <Grid templateColumns={"repeat(6, 1fr"} w={"full"} gap={"4"}>
          <GridItem w={"full"} bg={"red.500"}></GridItem>
        </Grid>
      </VStack>
    </VStack>
  );
}
