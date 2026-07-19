import HomeCategorys from "@/components/home/homeCategorys";
import HomeSlider from "@/components/home/homeSlider";
import Octicons from "@expo/vector-icons/Octicons";
import React from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
const Index = () => {
  return (
    <ScrollView className="h-full bg-white p-4">
      <View className="flex flex-row gap-2">
        <View className="w-10/12">
          <TextInput
            className="text-brand bg-[#f6f6f6] h-[50px] rounded-lg p-2"
            placeholder="Search Your products"
            placeholderTextColor={"#3C5A5D"}
          />
        </View>
        <View className="w-2/12">
          <TouchableOpacity className=" bg-brand flex justify-center items-center h-[50px] rounded-lg">
            <Octicons name="search" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <View className="w-full mt-4">
        <HomeSlider />
      </View>
      <View className="w-full mt-8">
        <View className="mb-4 flex flex-row items-center justify-between">
          <Text className="font-inter-bold text-2xl text-ink">Category</Text>
          <TouchableOpacity>
            <Text className="text-brand text-md ">See All</Text>
          </TouchableOpacity>
        </View>
        <View className="flex flex-row flex-wrap justify-between">
          <HomeCategorys />
        </View>
      </View>
    </ScrollView>
  );
};

export default Index;
