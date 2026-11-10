import { StatusBar } from "expo-status-bar";
import { Button, Text  , Pressable} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (

    <SafeAreaView>
      <Text> HI THERE </Text>
      <Pressable onPress={() => console.log("Pressed!")}>
        <Text> Submit </Text>
      </Pressable>
      {/* <Button title="Submit" /> */}
      <StatusBar backgroundColor="#010709" style="light" />
    </SafeAreaView>
   
  )
 
}
