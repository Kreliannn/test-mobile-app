import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <View>
        <Text> login </Text>
      <Button 
        title="Go to First Page" 
        onPress={() => router.push("/(drawer)/firstPage")} 
      />
    </View>
  );
}
