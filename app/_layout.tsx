import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Stack } from "expo-router";
import "../global.css";


const queryClient = new QueryClient();


export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack >
        <Stack.Screen name="index" options={{ title : "index"}} />
        <Stack.Screen name="login" options={{ title : "login"}} />
      </Stack>
    </QueryClientProvider>
  );
}
