import useUserStore from "@/store/userStore";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";

export default function Index() {

  const {setUser} = useUserStore()

  const { data } = useQuery({
    queryKey : ['test'],
    queryFn : () => axios.get("https://official-joke-api.appspot.com/random_joke")
  })

  useEffect(() => {
    console.log(data?.data);
  }, [data]);

  const addUser = () => {
    console.log("user added")
    setUser({
      firstName : "rkelian",
      lastName : "quimson",
      email : "krel@gmail.com"
    })
  }

  return (
    <View
     className="text-red-500 bg-blue-500"
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-red-500 bg-green-500 text-xl" >{data?.data ? data.data.setup : "fetching"}</Text>
      <Text onPress={addUser} style={{backgroundColor: 'blue'}} > click me </Text>
      <Link href="/page/login"> go to login kiko</Link>
    </View>
  );
}
