import {
  Avatar,
  Box,
  Grid,
  GridItem,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useQuery } from "react-query";
import { useLocation, useParams } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();
  const { search } = useLocation();
  const paramData = search.split("=");

  console.log(paramData[1]);

  // console.log(id);
  const { isLoading, error, data } = useQuery(paramData[1], () =>
    fetch(
      `https://gateway.marvel.com:443/v1/public/${paramData[1]}/${id}?apikey=b90d4e1df15e87e446504681586b49e4`
    ).then((res) => res.json())
  );
  console.log(isLoading, error, data);

  return (
    <>
      <Box>
        <VStack
          w={"full"}
          h={"650px"}
          backgroundImage={`${data?.data?.results[0].thumbnail.path}.${data?.data?.results[0].thumbnail.extension}`}
          backgroundSize={"cover"}
          backgroundPosition={"center"}
          backgroundRepeat={"no-repeat"}
          alignItems={"center"}
          position={"relative"}
        >
          <Box
            position={"absolute"}
            top={"0"}
            left={"0"}
            w={"full"}
            h={"full"}
            bg={"rgba(0,0,0,0.8)"}
          />
          <HStack w={"7xl"} h={"full"} zIndex={99} alignItems={"center"}>
            <Grid templateColumns={"350px 1fr"} gap={"16"}>
              <GridItem>
                <Box w={"full"} h={"500px"} transform={"translateY(20px)"}>
                  <Image
                    src={`${data?.data?.results[0].thumbnail.path}.${data?.data?.results[0].thumbnail.extension}`}
                    align={"Detail Image"}
                  />
                </Box>
              </GridItem>
              <GridItem>
                <VStack
                  h={"full"}
                  justifyContent={"flex-start"}
                  alignItems={"flex-start"}
                  spacing={"8"}
                  py={"16"}
                >
                  <Text color={"white"} fontWeight={"600"} fontSize={"xl"}>
                    {data?.data?.results[0].title}
                    {data?.data?.results[0].name}
                  </Text>
                  <Text color={"gray.200"} fontSize={"xl"}>
                    {data?.data?.results[0].variantDescription}
                  </Text>
                  <VStack alignItems={"flex-start"}>
                    <Text color={"white"} fontWeight={"600"} fontSize={"large"}>
                      Creator
                    </Text>
                    <HStack w={"full"} justifyContent={"flex-start"}>
                      {data?.data?.results[0].creators?.items?.map(
                        (item, i) => (
                          <VStack>
                            <Avatar
                              src={item.resourceURI}
                              name={item.name}
                            ></Avatar>
                            <Text
                              key={i}
                              color={"white"}
                              fontSize={"medium"}
                              fontWeight={"600"}
                            >
                              {item.name}
                            </Text>
                          </VStack>
                        )
                      )}
                    </HStack>
                  </VStack>
                </VStack>
              </GridItem>
            </Grid>
          </HStack>
        </VStack>
      </Box>
    </>
  );
}
