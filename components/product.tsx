import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { Image, Text, View } from "react-native";
const Product = ({ product }: { product: ProductType }) => {
  return (
    <View className="w-1/2 mt-4 grid grid-cols-2 gap-4">
      <View className="bg-[#f6f6f6] p-4">
        <Image
          source={{ uri: product.image }}
          style={{ width: 100, height: 100 }}
          resizeMode="contain"
        />
      </View>
      <View className="flex flex-row items-center justify-between">
        <Text className="font-inter-bold text-md text-ink">
          {product.title}
        </Text>
        <View className="text-sm font-inter-regular flex flex-row items-center gap-2">
          <AntDesign name="star" size={24} color="#fab020" />
          <Text>{product.rating}</Text>
        </View>
      </View>
    </View>
  );
};

export default Product;
