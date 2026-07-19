import React from "react";
import { Dimensions, Image, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";

const { width } = Dimensions.get("window");

const images = [
  { id: "1", image: "https://picsum.photos/800/400?1" },
  { id: "2", image: "https://picsum.photos/800/400?2" },
  { id: "3", image: "https://picsum.photos/800/400?3" },
];

export default function HomeSlider() {
  return (
    <Carousel
      loop
      width={width - 24}
      height={180}
      autoPlay
      autoPlayInterval={3000}
      data={images}
      scrollAnimationDuration={800}
      renderItem={({ item }) => (
        <View style={{ flex: 1 }}>
          <Image
            source={{ uri: item.image }}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 12,
            }}
            resizeMode="cover"
          />
        </View>
      )}
    />
  );
}
