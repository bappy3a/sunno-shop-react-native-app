import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-surface px-6">
      <View className="w-full max-w-sm rounded-3xl bg-ink p-8">
        <View className="mb-6 h-1 w-14 rounded-full bg-brand" />
        <Text className="font-inter-bold text-3xl text-surface">
          Welcome to Shop
        </Text>
        <Text className="mt-3 font-inter text-base leading-6 text-muted">
          Discover products selected for you.
        </Text>
        <View className="mt-8 items-center rounded-2xl bg-brand px-5 py-4">
          <Text className="font-inter-semibold text-surface">
            Start shopping
          </Text>
        </View>
      </View>
    </View>
  );
}
