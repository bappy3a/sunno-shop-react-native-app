import { categoryData } from "@/constants/data";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

const HomeCategorys = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {categoryData.map((item) => (
        <View
          key={item.id}
          className="items-center justify-center flex gap-2 w-[80px] mr-4"
        >
          <View className="w-[74px] h-[74px] bg-[#f1f3f2] rounded-full flex items-center justify-center overflow-hidden">
            <Image
              source={item.image}
              style={{ width: "85%", height: "85%" }}
              resizeMode="contain"
            />
          </View>
          <Text className="text-ink font-inter text-[12px] font-medium text-center">
            {item.name}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default HomeCategorys;
