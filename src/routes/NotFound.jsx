import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <VStack w={"full"} justifyContent={"center"} h={"100vh"}>
      <Heading>404</Heading>
      <Text>Not Found</Text>
      <Link to={"/"}>
        <Button>GO HOME</Button>
      </Link>
    </VStack>
  );
}
