import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { Image, Text, View } from "react-native";
const Product = ({ product }: { product: ProductType }) => {
  return (
    <View className="mb-4 w-[48%]">
      <View className="items-center bg-[#f6f6f6] p-4">
        <Image
          source={{ uri: product.image }}
          style={{ width: 100, height: 100 }}
          resizeMode="contain"
        />
      </View>
      <View className="mt-2 flex flex-row items-center justify-between">
        <Text
          className="text-md mr-2 flex-1 font-inter-bold text-ink"
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          {product.title}
        </Text>
        <View className="text-sm font-inter-regular flex flex-row items-center gap-2">
          <AntDesign name="star" size={16} color="#fab020" />
          <Text className="text-ink text-sm">{product.rating}</Text>
        </View>
      </View>
      <Text className="text-md mt-1 font-bold text-brand">${product.price.toFixed(2)}</Text>
    </View>
  );
};

export default Product;
