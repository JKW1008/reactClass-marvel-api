import { Box, Grid, HStack, Image, Text, VStack } from "@chakra-ui/react";
import CarouselSlick from "../components/CarouselSlick";
import CardItems from "../components/CardItem";
import TitleImageSkew from "../components/TitleImageSkew";
import { useQuery } from "react-query";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { charactersList, comicsList, eventsList } from "../api";
import SkeletonList from "../components/SkeletonList";

const settings = {
  dots: false,
  autoplay: true,
  infinite: true,
  speed: 500,
  autoplaySpeed: 1500,
  slidesToShow: 7,
  slidesToScroll: 2,
  pauseOnHover: true,
};

const featuresLists = [
  {
    title: "Avengers age of Ultron",
    description: "Asseemble",
    buttonText: "See More",
  },
  {
    title: "The Last Avenger",
    description: "I can do this all day",
    buttonText: "See More",
  },
  {
    title: "Incredable HULK",
    description: "I'm allways angry",
    buttonText: "See More",
  },
];

export default function Home() {
  const { isLoading, data } = useQuery("repoData", comicsList);
  console.log("loading : ", isLoading, "comics data :", data);

  const { isLoading: eventsIsLoading, data: eventsData } = useQuery(
    "eventsData",
    eventsList
  );
  console.log(eventsData, eventsIsLoading);

  const { isLoading: characterIsLoading, data: characterData } = useQuery(
    "charactersData",
    charactersList
  );
  console.log(characterData, characterIsLoading);

  return (
    <>
      {/**캐러셀 */}
      <Box>
        <CarouselSlick />
      </Box>
      {/* 특장점 */}
      <HStack w={"full"} justifyContent={"center"} py={"16"} bg={"gray.100"}>
        <Grid w={"7xl"} templateColumns={"repeat(3, 1fr)"} gap={"4"}>
          {featuresLists.map((item, i) => (
            <CardItems key={i} item={item} />
          ))}
        </Grid>
      </HStack>
      <TitleImageSkew
        title="Comics"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi nulla culpa quidem minima sed, consectetur recusandae sapiente tenetur neque optio, totam repudiandae qui quibusdam deserunt, pariatur maiores quas voluptates tempora?"
        imgUrl="https://images.alphacoders.com/102/1026220.jpg"
      />
      {/**Comics 컨텐츠 리스트 */}
      <VStack w={"full"} position={"relative"} h={"400px"}>
        {/** 한박스 위로 올라오게 하는 범위 지정 */}
        <Box
          position={"absolute"}
          w={"7xl"}
          py={"4"}
          px={"2"}
          top={-16}
          bg={"white"}
        >
          {isLoading ? <SkeletonList /> : ""}
          <Slider {...settings}>
            {data?.data?.results?.map((item, i) => (
              <Link to={`/comics/${item.id}?type=comics`}>
                <VStack key={i} h={"full"} role="group" cursor={"pointer"}>
                  <Box
                    w={"170px"}
                    h={"240px"}
                    _groupHover={{ transform: "scale(1.1)" }}
                    transition={"0.4s"}
                    overflow={"hidden"}
                  >
                    <Image
                      src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                      alt={`Comics ${i}`}
                      w={"full"}
                      h={"full"}
                      objectFit={"cover"}
                    />
                  </Box>
                  <Text
                    _groupHover={{ color: "red.500", fontWeight: "600" }}
                    mt={"2"}
                    px={"2"}
                    color={"black"}
                  >
                    {item.title.substr(0, 38)}
                  </Text>
                </VStack>
              </Link>
            ))}
          </Slider>
        </Box>
      </VStack>
      {/** 이벤트 타이틀 */}
      <TitleImageSkew
        title="Comics"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi nulla culpa quidem minima sed, consectetur recusandae sapiente tenetur neque optio, totam repudiandae qui quibusdam deserunt, pariatur maiores quas voluptates tempora?"
        imgUrl="https://cdn.wallpapersafari.com/98/48/ceghZb.jpg"
      />
      {/** Events contents list */}
      <VStack w={"full"} position={"relative"} h={"400px"}>
        {/** 한박스 위로 올라오게 하는 범위 지정 */}
        <Box
          position={"absolute"}
          w={"7xl"}
          py={"4"}
          px={"2"}
          top={-16}
          bg={"white"}
        >
          {eventsIsLoading ? <SkeletonList /> : ""}

          <Slider {...settings}>
            {eventsData?.data?.results?.map((item, i) => (
              <Link to={`/events/${item.id}?type=events`}>
                <VStack key={i} h={"full"} role="group" cursor={"pointer"}>
                  <Box
                    w={"170px"}
                    h={"240px"}
                    _groupHover={{ transform: "scale(1.1)" }}
                    transition={"0.4s"}
                    overflow={"hidden"}
                  >
                    <Image
                      src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                      alt={`Comics ${i}`}
                      w={"full"}
                      h={"full"}
                      objectFit={"cover"}
                    />
                  </Box>
                  <Text
                    _groupHover={{ color: "red.500", fontWeight: "600" }}
                    mt={"2"}
                    px={"2"}
                    color={"black"}
                  >
                    {item.title.substr(0, 38)}
                  </Text>
                </VStack>
              </Link>
            ))}
          </Slider>
        </Box>
      </VStack>
      <TitleImageSkew
        title="Comics"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi nulla culpa quidem minima sed, consectetur recusandae sapiente tenetur neque optio, totam repudiandae qui quibusdam deserunt, pariatur maiores quas voluptates tempora?"
        imgUrl="https://wallpapers.com/images/featured/2beglb8ddgy0ar2w.jpg"
      />
      {/** Characters contents list */}
      <VStack w={"full"} position={"relative"} h={"400px"}>
        {/** 한박스 위로 올라오게 하는 범위 지정 */}
        <Box
          position={"absolute"}
          w={"7xl"}
          py={"4"}
          px={"2"}
          top={-16}
          bg={"white"}
        >
          {characterIsLoading ? <SkeletonList /> : ""}

          <Slider {...settings}>
            {characterData?.data?.results?.map((item, i) => (
              <Link to={`/characters/${item.id}?type=characters`}>
                <VStack key={i} h={"full"} role="group" cursor={"pointer"}>
                  <Box
                    w={"170px"}
                    h={"240px"}
                    _groupHover={{ transform: "scale(1.1)" }}
                    transition={"0.4s"}
                    overflow={"hidden"}
                  >
                    <Image
                      src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                      alt={`Comics ${i}`}
                      w={"full"}
                      h={"full"}
                      objectFit={"cover"}
                    />
                  </Box>
                  <Text
                    _groupHover={{ color: "red.500", fontWeight: "600" }}
                    mt={"2"}
                    px={"2"}
                    color={"black"}
                  >
                    {item.name}
                  </Text>
                </VStack>
              </Link>
            ))}
          </Slider>
        </Box>
      </VStack>
    </>
  );
}
