import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const Profile = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.profile}>
      <View style={styles.profileChild} />
      <View style={styles.profileItem} />
      <View style={[styles.iphoneStatusBarupperdark, styles.iconPosition]}>
        <Image
          style={styles.notchIcon}
          contentFit="cover"
          source={require("../assets/notch.png")}
        />
        <View style={[styles.statusIcons, styles.statusIconsFlexBox]}>
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
          style={styles.timeLight}
          contentFit="cover"
          source={require("../assets/time--light.png")}
        />
      </View>
      <Text style={[styles.iAmA, styles.iAmAClr]}>
        I am a junior studying Nursing! I love crafting and baking
      </Text>
      <View style={[styles.memberSince2024Parent, styles.statusIconsFlexBox]}>
        <Text style={styles.giftsTypo}>Member since 2024</Text>
        <Text style={[styles.gifts, styles.giftsTypo]}>15 Gifts</Text>
        <Text style={[styles.gifts, styles.giftsTypo]}>20 Posts</Text>
      </View>
      <Text style={styles.annaLee}>Anna Lee</Text>
      <Text style={[styles.aboutMe, styles.aboutMeTypo]}>About me</Text>
      <Text style={[styles.myStats, styles.aboutMeTypo]}>My Stats</Text>
      <Image
        style={styles.profileInner}
        contentFit="cover"
        source={require("../assets/frame-3303.png")}
      />
      <View style={styles.homeParent}>
        <Pressable
          style={styles.home}
          onPress={() => navigation.navigate("PostFeed")}
        >
          <Text style={[styles.home1, styles.dms1Typo]}>Home</Text>
          <Image
            style={styles.unionIcon}
            contentFit="cover"
            source={require("../assets/union.png")}
          />
        </Pressable>
        <Pressable
          style={styles.dms}
          onPress={() => navigation.navigate("AllMessages")}
        >
          <Text style={[styles.dms1, styles.dms1Typo]}>DMs</Text>
          <Image
            style={[styles.dmIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/dm.png")}
          />
        </Pressable>
        <Pressable
          style={styles.saved}
          onPress={() => navigation.navigate("Saved")}
        >
          <Text style={[styles.saved1, styles.dms1Typo]}>Saved</Text>
          <Image
            style={[styles.icon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/icon.png")}
          />
        </Pressable>
        <Pressable
          style={styles.profile1}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={styles.profile2}>Profile</Text>
          <Image
            style={styles.icon1}
            contentFit="cover"
            source={require("../assets/icon1.png")}
          />
        </Pressable>
      </View>
      <Text style={[styles.fishBox, styles.iAmAClr]}>FISH BOX</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    top: 0,
    position: "absolute",
  },
  statusIconsFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  lightSpaceBlock: {
    marginLeft: 4,
    height: 14,
  },
  iAmAClr: {
    display: "flex",
    color: Color.black,
    lineHeight: 20,
    fontSize: FontSize.size_xl,
    alignItems: "center",
    position: "absolute",
  },
  giftsTypo: {
    fontFamily: FontFamily.latoLight,
    fontWeight: "500",
    textAlign: "left",
    color: Color.black,
    lineHeight: 20,
    fontSize: FontSize.size_xl,
  },
  aboutMeTypo: {
    lineHeight: 12,
    fontSize: FontSize.size_xs,
    left: 55,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  dms1Typo: {
    color: Color.colorLightsteelblue,
    fontFamily: FontFamily.interMedium,
    fontSize: FontSize.size_xs,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  profileChild: {
    height: 89,
    top: 281,
    width: 330,
    borderWidth: 1,
    borderColor: Color.black,
    borderStyle: "solid",
    backgroundColor: Color.colorPaleturquoise_100,
    borderRadius: Border.br_3xs,
    left: 52,
    position: "absolute",
  },
  profileItem: {
    top: 423,
    height: 272,
    width: 330,
    borderWidth: 1,
    backgroundColor: Color.colorPaleturquoise_100,
    borderRadius: Border.br_3xs,
    left: 52,
    borderColor: Color.black,
    borderStyle: "solid",
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
    left: 22,
    borderRadius: Border.br_xl,
    width: 54,
    height: 21,
    zIndex: 3,
    position: "absolute",
    overflow: "hidden",
  },
  iphoneStatusBarupperdark: {
    right: 0,
    height: 65,
    left: 0,
    overflow: "hidden",
  },
  iAmA: {
    left: 63,
    fontFamily: FontFamily.interRegular,
    width: 311,
    textAlign: "left",
    display: "flex",
    color: Color.black,
    lineHeight: 20,
    fontSize: FontSize.size_xl,
    height: 89,
    top: 281,
  },
  gifts: {
    marginTop: 29,
  },
  memberSince2024Parent: {
    top: 456,
    left: 129,
  },
  annaLee: {
    top: 206,
    left: 112,
    fontSize: FontSize.size_6xl,
    lineHeight: 25,
    textAlign: "center",
    justifyContent: "center",
    width: 206,
    height: 29,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    display: "flex",
    color: Color.black,
    alignItems: "center",
    position: "absolute",
  },
  aboutMe: {
    top: 259,
  },
  myStats: {
    top: 401,
  },
  profileInner: {
    top: 88,
    left: 169,
    width: 95,
    height: 95,
    position: "absolute",
  },
  home1: {
    top: 25,
    left: 0,
  },
  unionIcon: {
    width: 18,
    height: 19,
  },
  home: {
    width: 34,
    height: 40,
  },
  dms1: {
    top: 28,
    left: 2,
  },
  dmIcon: {
    left: 4,
    width: 22,
    height: 22,
  },
  dms: {
    width: 29,
    height: 43,
    marginLeft: 75,
  },
  saved1: {
    top: 21,
    left: 0,
  },
  icon: {
    left: 8,
    width: 19,
    height: 18,
  },
  saved: {
    width: 36,
    height: 36,
    marginLeft: 75,
  },
  profile2: {
    top: 20,
    fontFamily: FontFamily.interMedium,
    fontSize: FontSize.size_xs,
    fontWeight: "500",
    textAlign: "left",
    color: Color.black,
    left: 0,
    position: "absolute",
  },
  icon1: {
    height: 17,
    width: 16,
  },
  profile1: {
    width: 37,
    height: 35,
    marginLeft: 75,
  },
  homeParent: {
    marginLeft: -216,
    bottom: 0,
    left: "50%",
    backgroundColor: Color.white,
    borderTopWidth: 1,
    alignItems: "flex-end",
    paddingHorizontal: Padding.p_16xl,
    paddingTop: Padding.p_mini,
    paddingBottom: Padding.p_xl,
    flexDirection: "row",
    borderColor: Color.black,
    borderStyle: "solid",
    position: "absolute",
  },
  fishBox: {
    top: 33,
    left: 195,
    fontFamily: FontFamily.londrinaSolidRegular,
    textAlign: "right",
    width: 201,
    height: 47,
    display: "flex",
    color: Color.black,
    lineHeight: 20,
    fontSize: FontSize.size_xl,
  },
  profile: {
    backgroundColor: Color.colorLightblue,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default Profile;
