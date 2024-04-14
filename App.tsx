const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import HomeSignUp from "./screens/HomeSignUp";
import HomeSignUpInfo from "./screens/HomeSignUpInfo";
import Profile from "./screens/Profile";
import Saved from "./screens/Saved";
import PostFeed from "./screens/PostFeed";
import IndividualPostView from "./screens/IndividualPostView";
import CreatePostView from "./screens/CreatePostView";
import Messaging from "./screens/Messaging";
import AllMessages from "./screens/AllMessages";
import OptionsBar from "./components/OptionsBar";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "LondrinaSolid-Regular": require("./assets/fonts/LondrinaSolid-Regular.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Lato-Light": require("./assets/fonts/Lato-Light.ttf"),
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
    "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
    "Mulish-Medium": require("./assets/fonts/Mulish-Medium.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "JetBrainsMono-Regular": require("./assets/fonts/JetBrainsMono-Regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="HomeSignUp"
              component={HomeSignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomeSignUpInfo"
              component={HomeSignUpInfo}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Saved"
              component={Saved}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PostFeed"
              component={PostFeed}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IndividualPostView"
              component={IndividualPostView}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CreatePostView"
              component={CreatePostView}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Messaging"
              component={Messaging}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AllMessages"
              component={AllMessages}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
