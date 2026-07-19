import HomeCategorys from "@/components/home/homeCategorys";
import HomeSlider from "@/components/home/homeSlider";
import Product from "@/components/product";
import { PRODUCTS } from "@/constants/products";
import Octicons from "@expo/vector-icons/Octicons";
import clsx from "clsx";
import React from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import CountDown from "react-native-countdown-component";

const Index = () => {
  const productTag = ["All", "Newest", "Popular", "Sale", "Top", "Best Seller"];
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
      <View className="w-full mt-8">
        <View className="mb-4 flex flex-row items-center justify-between">
          <Text className="font-inter-bold text-2xl text-ink">Flash Sele</Text>
          <View className="flex flex-row gap-2 items-center">
            <Text className="text-md text-[#818181]">Closing in: </Text>
            <Text className="text-brand text-md font-semibold">
              <CountDown
                size={10}
                until={300000}
                digitStyle={{
                  backgroundColor: "#efefef",
                }}
                digitTxtStyle={{ color: "#3C5A5D" }}
                timeLabelStyle={{ color: "red", fontWeight: "bold" }}
                separatorStyle={{ color: "#3C5A5D" }}
                timeToShow={["H", "M", "S"]}
                timeLabels={{ m: null, s: null }}
                showSeparator
              />
            </Text>
          </View>
        </View>
        <View className="flex flex-row flex-wrap justify-between">
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="mt-2"
          >
            {productTag.map((item, index) => (
              <TouchableOpacity
                key={index}
                className={clsx(
                  index === 1 ? "bg-brand" : "bg-[#f6f6f6]",
                  " px-5 py-2   flex justify-center items-center rounded-full mr-3",
                )}
              >
                <Text
                  className={clsx(
                    index === 1 ? "text-white" : "text-ink",
                    "font-inter-semibold",
                  )}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View className="">
          {PRODUCTS.slice(0, 10).map((product, index) => (
            <Product key={index} product={product} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Index;
