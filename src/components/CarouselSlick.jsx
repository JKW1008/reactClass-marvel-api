import { Box, HStack } from "@chakra-ui/react";
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

  return (
    <Box w={"full"} h={"full"}>
      <Slider {...settings}>
        <HStack
          w={"full"}
          h={"450px"}
          backgroundImage={`url("https://wallpapers.com/images/featured/bte9zcsa9pvyzpvk.jpg")`}
          backgroundSize={"cover"}
          backgroundPosition={"center"}
        ></HStack>
        <HStack
          w={"full"}
          h={"450px"}
          backgroundImage={`url("https://wallpaperset.com/w/full/a/c/7/369420.jpg")`}
          backgroundSize={"cover"}
          backgroundPosition={"center"}
        ></HStack>
        <HStack
          w={"full"}
          h={"450px"}
          backgroundImage={`url("https://cdn.wallpapersafari.com/41/85/JgLroC.jpg")`}
          backgroundSize={"cover"}
          backgroundPosition={"center"}
        ></HStack>{" "}
        <HStack
          w={"full"}
          h={"450px"}
          backgroundImage={`url("https://images.hdqwalls.com/wallpapers/marvel-4k-artwork-ep.jpg")`}
          backgroundSize={"cover"}
          backgroundPosition={"center"}
        ></HStack>
      </Slider>
    </Box>
  );
}
