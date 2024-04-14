import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const HomeSignUp = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.homesignUp, styles.iconLayout]}>
      <View style={[styles.iphoneStatusBarupperdark, styles.logoPosition]}>
        <Image
          style={styles.notchIcon}
          contentFit="cover"
          source={require("../assets/notch.png")}
        />
        <View style={[styles.statusIcons, styles.logoItemPosition]}>
          <Image
            style={styles.networkSignalLight}
            contentFit="cover"
            source={require("../assets/network-signal-light.png")}
          />
          <Image
            style={[styles.wifiSignalLight, styles.lightSpaceBlock]}
            contentFit="cover"
            source={require("../assets/wifi-signal--light.png")}
          />
          <Image
            style={[styles.batteryLight, styles.lightSpaceBlock]}
            contentFit="cover"
            source={require("../assets/battery--light.png")}
          />
        </View>
        <Image
          style={styles.indicatorIcon}
          contentFit="cover"
          source={require("../assets/indicator.png")}
        />
        <Image
          style={[styles.timeLight, styles.timeLightPosition]}
          contentFit="cover"
          source={require("../assets/time--light.png")}
        />
      </View>
      <Text style={[styles.fishBox, styles.fishBoxFlexBox]}>FISH BOX</Text>
      <Pressable
        style={[styles.diveInWrapper, styles.fishBoxFlexBox]}
        onPress={() => navigation.navigate("PostFeed")}
      >
        <Text style={[styles.diveIn, styles.diveInTypo]}>Dive in!</Text>
      </Pressable>
      <Pressable
        style={styles.iconLightBulbLightbulbId}
        onPress={() => navigation.navigate("HomeSignUpInfo")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icon--light-bulb-lightbulb-idea.png")}
        />
      </Pressable>
      <Text style={[styles.giftAndRequest, styles.diveInTypo]}>
        Gift and request items within your campus
      </Text>
      <View style={[styles.logo, styles.logoPosition]}>
        <Image
          style={styles.logoChild}
          contentFit="cover"
          source={require("../assets/ellipse-3.png")}
        />
        <Image
          style={[styles.logoItem, styles.logoItemPosition]}
          contentFit="cover"
          source={require("../assets/frame-34.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  logoPosition: {
    left: "50%",
    position: "absolute",
  },
  logoItemPosition: {
    zIndex: 1,
    position: "absolute",
  },
  lightSpaceBlock: {
    marginLeft: 4,
    height: 14,
  },
  timeLightPosition: {
    left: 22,
    position: "absolute",
  },
  fishBoxFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    left: "50%",
    position: "absolute",
  },
  diveInTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.black,
  },
  notchIcon: {
    width: 430,
    height: 54,
    zIndex: 0,
  },
  networkSignalLight: {
    width: 20,
    height: 14,
  },
  wifiSignalLight: {
    width: 16,
  },
  batteryLight: {
    width: 25,
  },
  statusIcons: {
    top: 22,
    right: 36,
    alignItems: "center",
    zIndex: 1,
    flexDirection: "row",
  },
  indicatorIcon: {
    top: 8,
    right: 71,
    width: 6,
    height: 6,
    zIndex: 2,
    position: "absolute",
  },
  timeLight: {
    top: 19,
    borderRadius: Border.br_xl,
    width: 54,
    height: 21,
    zIndex: 3,
    overflow: "hidden",
  },
  iphoneStatusBarupperdark: {
    marginLeft: -215,
    top: 0,
    height: 65,
    overflow: "hidden",
  },
  fishBox: {
    marginLeft: -108,
    top: 213,
    fontSize: 64,
    lineHeight: 64,
    fontFamily: FontFamily.londrinaSolidRegular,
    display: "flex",
    width: 215,
    height: 44,
    textAlign: "center",
    color: Color.black,
    justifyContent: "center",
  },
  diveIn: {
    fontSize: FontSize.size_6xl,
    lineHeight: 25,
    textAlign: "left",
  },
  diveInWrapper: {
    marginLeft: -115,
    top: 623,
    borderRadius: 9,
    backgroundColor: Color.colorPaleturquoise_200,
    borderStyle: "solid",
    borderColor: Color.black,
    borderWidth: 2,
    paddingHorizontal: 71,
    paddingVertical: 21,
    flexDirection: "row",
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  iconLightBulbLightbulbId: {
    left: 373,
    top: 872,
    width: 48,
    height: 48,
    position: "absolute",
  },
  giftAndRequest: {
    top: 780,
    fontSize: FontSize.size_xl,
    lineHeight: 20,
    width: 390,
    height: 87,
    textAlign: "center",
    left: 22,
    position: "absolute",
  },
  logoChild: {
    width: 266,
    height: 266,
    zIndex: 0,
  },
  logoItem: {
    top: 98,
    left: 63,
    width: 140,
    height: 71,
  },
  logo: {
    marginLeft: -133,
    top: 307,
    flexDirection: "row",
  },
  homesignUp: {
    backgroundColor: Color.colorLightblue,
    flex: 1,
    height: 932,
    overflow: "hidden",
  },
});

export default HomeSignUp;
