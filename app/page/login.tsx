import useUserStore from "@/store/userStore";
import { Link } from "expo-router";
import { Text, View } from "react-native";


export default function Index() {

    const {firstName, lastName, clearUser} = useUserStore()
    const clear = () => {
        clearUser()
    }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text onPress={clear}>{firstName ? firstName : "no firstname"}</Text>
       <Link href="/"> go to login </Link>
    </View>
  );
}
