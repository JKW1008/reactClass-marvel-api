import { Box, HStack, Text } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CarouselSlick() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const image = [
    {
      title: "AVENGERS",
      image: "https://wallpapers.com/images/featured/bte9zcsa9pvyzpvk.jpg",
    },
    {
      title: "END GAME",
      image: "https://wallpaperset.com/w/full/a/c/7/369420.jpg",
    },
    {
      title: "AVENGERS: THE INITIATIVE #1",
      image: "https://cdn.wallpapersafari.com/41/85/JgLroC.jpg",
    },
    {
      title: "IT'S THE AVENGERS",
      image: "https://images.hdqwalls.com/wallpapers/marvel-4k-artwork-ep.jpg",
    },
  ];
  return (
    <Box w={"full"} h={"full"}>
      <Slider {...settings}>
        {image.map((item) => (
          <Box w={"full"} justifyContent={"center"}>
            <HStack
              w={"full"}
              h={"450px"}
              backgroundImage={item.image}
              backgroundSize={"cover"}
              backgroundPosition={"center"}
            >
              <Text
                w={"full"}
                fontSize={"80px"}
                fontWeight={800}
                textAlign={"center"}
              >
                {item.title}
              </Text>
            </HStack>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
