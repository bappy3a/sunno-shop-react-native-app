import SafeAreaView from "@/components/SafeAreaView";
import React, { Component } from "react";
import { Text, View } from "react-native";

export class Wishlist extends Component {
  render() {
    return (
      <SafeAreaView>
        <View>
          <Text>This is a wishlist page</Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default Wishlist;
