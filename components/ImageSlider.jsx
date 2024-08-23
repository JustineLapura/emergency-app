// import { View, Text } from "react-native";
// import React from "react";
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from "react-native-responsive-screen";
// import Carousel, { ParallaxImage } from "react-native-snap-carousel";
// import { sliderImages } from "../constants";

// const ImageSlider = () => {
//   return (
//     <Carousel
//       data={sliderImages}
//       loop={true}
//       autoplay={true}
//       renderItem={ItemCard}
//       hasParallaxImages={true}
//       sliderWidth={wp(100)}
//       firstItem={1}
//       autoplayInterval={4000}
//       itemWidth={wp(100) - 70}
//       slideStyle={{ display: "flex", alignItems: "center" }}
//     />
//   );
// };

// const ItemCard = ({ item, index }, parallaxProps) => {
//   return (
//     <View>
//       <ParallaxImage
//         source={item} // Assumes item is the image source
//         containerStyle={{ flex: 1 }}
//         style={{ ...someImageStyle }} // Replace with actual styles
//         parallaxFactor={0.4}
//         {...parallaxProps}
//       />
//     </View>
//   );
// };

// export default ImageSlider;
