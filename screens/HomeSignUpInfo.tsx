import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const HomeSignUpInfo = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.homesignUpInfo, styles.iconLayout]}>
      <View style={styles.iphoneStatusBarupperdark}>
        <Image
          style={styles.notchIcon}
          contentFit="cover"
          source={require("../assets/notch.png")}
        />
        <View style={styles.statusIcons}>
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
      <Text
        style={[styles.easilyGiftOr, styles.whatIsFishFlexBox]}
      >{`Easily gift or request commonly (or unique!) items on and off campus. Whether it is a cup of sugar or a semester’s worth of notes, you can easily reach your peers `}</Text>
      <Text style={[styles.whatIsFish, styles.whatIsFishFlexBox]}>
        What is Fish Box?
      </Text>
      <Pressable
        style={[styles.iconArrowLeft, styles.timeLightPosition]}
        onPress={() => navigation.navigate("HomeSignUp")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icon--arrow-left.png")}
        />
      </Pressable>
      <Text
        style={[styles.builtByAnd, styles.whatIsFishFlexBox]}
      >{`Built by and for students `}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  lightSpaceBlock: {
    marginLeft: 4,
    height: 14,
  },
  timeLightPosition: {
    left: 22,
    position: "absolute",
  },
  whatIsFishFlexBox: {
    textAlign: "center",
    color: Color.black,
    position: "absolute",
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
    flexDirection: "row",
    zIndex: 1,
    alignItems: "center",
    position: "absolute",
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
    left: "50%",
    height: 65,
    position: "absolute",
    overflow: "hidden",
  },
  easilyGiftOr: {
    top: 334,
    right: 63,
    display: "flex",
    justifyContent: "center",
    width: 318,
    height: 174,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.black,
    lineHeight: 20,
    fontSize: FontSize.size_xl,
    alignItems: "center",
  },
  whatIsFish: {
    top: 182,
    right: 101,
    fontSize: 30,
    lineHeight: 30,
    width: 241,
    height: 83,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.black,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  iconArrowLeft: {
    top: 65,
    width: 48,
    height: 48,
  },
  builtByAnd: {
    top: 840,
    left: 107,
    fontStyle: "italic",
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    width: 202,
    height: 43,
    lineHeight: 20,
    fontSize: FontSize.size_xl,
  },
  homesignUpInfo: {
    backgroundColor: Color.colorLightblue,
    flex: 1,
    height: 932,
    overflow: "hidden",
  },
});

export default HomeSignUpInfo;
