import profile from "@/assets/images/profile.jpg";
import SafeAreaView from "@/components/SafeAreaView";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Octicons from "@expo/vector-icons/Octicons";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

function Account() {
  return (
    <SafeAreaView className=" bg-white p-4">
      <ScrollView>
        <View className="flex items-center">
          <Image
            source={profile}
            className="rounded-full mt-5"
            style={{ width: 150, height: 150 }}
          />
          <Text className="text-2xl font-bold mt-2 text-inherit">
            Ahmed Bappy
          </Text>
        </View>
        <View className="flex mt-10">
          <TouchableOpacity className="w-full flex flex-row justify-between items-center border-b-2 border-[#f7f7f7] p-2">
            <View className="flex flex-row items-center">
              <FontAwesome
                name="user-o"
                size={26}
                color="#3C5A5D"
                className="mr-3"
              />
              <Text className="text-xl font-semibold">Your profile</Text>
            </View>
            <View>
              <FontAwesome6 name="angle-right" size={26} color="#3C5A5D" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="w-full flex flex-row justify-between items-center border-b-2 border-[#f7f7f7] p-2 mt-2">
            <View className="flex flex-row items-center">
              <Octicons
                name="location"
                size={26}
                color="#3C5A5D"
                className="mr-3"
              />
              <Text className="text-xl font-semibold">Manage Addresses</Text>
            </View>
            <View>
              <FontAwesome6 name="angle-right" size={26} color="#3C5A5D" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="w-full flex flex-row justify-between items-center border-b-2 border-[#f7f7f7] p-2 mt-2">
            <View className="flex flex-row items-center">
              <MaterialIcons
                name="payment"
                size={26}
                color="#3C5A5D"
                className="mr-3"
              />
              <Text className="text-xl font-semibold">Payment Methods</Text>
            </View>
            <View>
              <FontAwesome6 name="angle-right" size={26} color="#3C5A5D" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="w-full flex flex-row justify-between items-center border-b-2 border-[#f7f7f7] p-2 mt-2">
            <View className="flex flex-row items-center">
              <MaterialCommunityIcons
                name="invoice-list-outline"
                size={26}
                color="#3C5A5D"
                className="mr-3"
              />
              <Text className="text-xl font-semibold">My Orders</Text>
            </View>
            <View>
              <FontAwesome6 name="angle-right" size={26} color="#3C5A5D" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="w-full flex flex-row justify-between items-center border-b-2 border-[#f7f7f7] p-2 mt-2">
            <View className="flex flex-row items-center">
              <Ionicons
                name="pricetags-outline"
                size={26}
                color="#3C5A5D"
                className="mr-3"
              />
              <Text className="text-xl font-semibold">My Coupons</Text>
            </View>
            <View>
              <FontAwesome6 name="angle-right" size={26} color="#3C5A5D" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="w-full flex flex-row justify-between items-center border-b-2 border-[#f7f7f7] p-2 mt-2">
            <View className="flex flex-row items-center">
              <Feather
                name="settings"
                size={26}
                color="#3C5A5D"
                className="mr-3"
              />
              <Text className="text-xl font-semibold">Settings</Text>
            </View>
            <View>
              <FontAwesome6 name="angle-right" size={26} color="#3C5A5D" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="w-full flex flex-row justify-between items-center border-b-2 border-[#f7f7f7] p-2 mt-2">
            <View className="flex flex-row items-center">
              <Ionicons
                name="help-circle-outline"
                size={26}
                color="#3C5A5D"
                className="mr-3"
              />
              <Text className="text-xl font-semibold">Help Center</Text>
            </View>
            <View>
              <FontAwesome6 name="angle-right" size={26} color="#3C5A5D" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="w-full flex flex-row justify-between items-center border-b-2 border-[#f7f7f7] p-2 mt-2">
            <View className="flex flex-row items-center">
              <Ionicons
                name="lock-closed-outline"
                size={26}
                color="#3C5A5D"
                className="mr-3"
              />
              <Text className="text-xl font-semibold">Privacy Policy</Text>
            </View>
            <View>
              <FontAwesome6 name="angle-right" size={26} color="#3C5A5D" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="w-full flex flex-row justify-between items-center border-b-2 border-[#f7f7f7] p-2 mt-2">
            <View className="flex flex-row items-center">
              <AntDesign
                name="logout"
                size={26}
                color="#dc2626"
                className="mr-3"
              />
              <Text className="text-xl font-semibold">Logout</Text>
            </View>
            <View>
              <FontAwesome6 name="angle-right" size={26} color="#3C5A5D" />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Account;
