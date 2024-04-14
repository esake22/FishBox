import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const Messaging = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.messaging}>
      <View style={styles.messagingChild} />
      <Text style={[styles.shellyKidds, styles.sureThingITypo1]}>
        Shelly Kidds
      </Text>
      <View style={styles.iphoneStatusBarupperdark}>
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
            style={styles.wifiSignalLight}
            contentFit="cover"
            source={require("../assets/wifi-signal--light.png")}
          />
          <Image
            style={styles.batteryLight}
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
      <View style={styles.chatArea}>
        <View style={styles.bubbleschatParent}>
          <Image
            style={[styles.bubbleschatIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/bubbleschat.png")}
          />
          <Image
            style={styles.iconsbasicmore}
            contentFit="cover"
            source={require("../assets/iconsbasicmore.png")}
          />
          <Text style={[styles.minAgo, styles.agoTypo]}>1 min ago</Text>
          <Text style={[styles.sureThingI, styles.sureThingITypo]}>
            Sure thing! I can meet you on the quad at 4pm on Wednesday.
          </Text>
        </View>
        <View style={styles.groupParent}>
          <Image
            style={[styles.groupChild, styles.groupPosition]}
            contentFit="cover"
            source={require("../assets/group-3.png")}
          />
          <Image
            style={[styles.dotsIcon, styles.dotsIconPosition]}
            contentFit="cover"
            source={require("../assets/dots.png")}
          />
          <Text style={[styles.dayAgo, styles.agoTypo]}>1 day ago</Text>
          <Text style={[styles.hiShellyI, styles.hiShellyITypo]}>{`Hi Shelly!
I would like to pick up these fairy lights. Are you on campus this week?`}</Text>
        </View>
        <View style={styles.groupContainer}>
          <Image
            style={[styles.groupItem, styles.groupPosition]}
            contentFit="cover"
            source={require("../assets/group-31.png")}
          />
          <Image
            style={[styles.dotsIcon1, styles.dotsIconPosition]}
            contentFit="cover"
            source={require("../assets/dots1.png")}
          />
          <Text style={[styles.justNow, styles.agoTypo]}>Just now</Text>
          <Text style={[styles.seeYouThen, styles.hiShellyITypo]}>
            See you then, thanks!
          </Text>
        </View>
        <View style={[styles.textbox, styles.textboxBg]}>
          <Text style={[styles.sendMessage, styles.dms1Typo]}>
            Send message
          </Text>
        </View>
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icon7.png")}
        />
        <View style={styles.frameView}>
          <View style={[styles.frameWrapper, styles.frameWrapperLayout]}>
            <View
              style={[
                styles.heyDoesAnyoneHave1TbspOParent,
                styles.frameWrapperLayout,
              ]}
            >
              <Text style={[styles.heyDoesAnyone, styles.decorTypo]}>
                Getting rid of my fairy lights - it needs 2 AA batteries!
              </Text>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/ellipse-2.png")}
              />
              <View
                style={[
                  styles.fairyLights66Ft200LedWrapper,
                  styles.heyDoesAnyonePosition,
                ]}
              >
                <Text style={[styles.fairyLights66, styles.fairyLights66Typo]}>
                  Fairy lights (66 ft, 200 LED)
                </Text>
              </View>
              <Text style={[styles.savedBy2, styles.savedBy2Typo]}>
                Saved by 2 others
              </Text>
              <Text style={[styles.comments, styles.savedBy2Typo]}>
                23 Comments
              </Text>
              <Image
                style={[styles.catIcon, styles.iconLayout1]}
                contentFit="cover"
                source={require("../assets/cat2.png")}
              />
              <Text style={[styles.postedByShelly, styles.fairyLights66Typo]}>
                Posted by Shelly Kidds
              </Text>
            </View>
          </View>
          <View style={[styles.iconParent, styles.iconSpaceBlock]}>
            <Image
              style={styles.icon1}
              contentFit="cover"
              source={require("../assets/icon4.png")}
            />
            <Text style={[styles.decor, styles.decorTypo]}>Decor</Text>
          </View>
          <View style={[styles.iconGroup, styles.iconSpaceBlock]}>
            <Image
              style={styles.icon2}
              contentFit="cover"
              source={require("../assets/icon5.png")}
            />
            <Text style={[styles.decor, styles.decorTypo]}>Misc</Text>
          </View>
        </View>
      </View>
      <View style={[styles.homeParent, styles.textboxBg]}>
        <Pressable
          style={styles.home}
          onPress={() => navigation.navigate("PostFeed")}
        >
          <Text style={[styles.home1, styles.home1Typo]}>Home</Text>
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
            style={[styles.dmIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/dm.png")}
          />
        </Pressable>
        <Pressable
          style={styles.saved}
          onPress={() => navigation.navigate("Saved")}
        >
          <Text style={[styles.saved1, styles.home1Typo]}>Saved</Text>
          <Image
            style={styles.icon3}
            contentFit="cover"
            source={require("../assets/icon.png")}
          />
        </Pressable>
        <Pressable
          style={styles.profile}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={[styles.profile1, styles.home1Typo]}>Profile</Text>
          <Image
            style={styles.icon4}
            contentFit="cover"
            source={require("../assets/icon1.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sureThingITypo1: {
    display: "flex",
    alignItems: "center",
    color: Color.black,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  statusIconsFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  agoTypo: {
    color: Color.bodyLight,
    fontFamily: FontFamily.montserratMedium,
    fontSize: FontSize.size_xs,
    bottom: 0,
    fontWeight: "500",
    position: "absolute",
  },
  sureThingITypo: {
    fontSize: FontSize.size_mini,
    textAlign: "left",
  },
  groupPosition: {
    left: 21,
    right: 0,
    maxHeight: "100%",
    maxWidth: "100%",
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  dotsIconPosition: {
    left: "0%",
    right: "96.76%",
    width: "3.24%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  hiShellyITypo: {
    width: 355,
    textAlign: "left",
    fontSize: FontSize.size_mini,
    color: Color.black,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  textboxBg: {
    backgroundColor: Color.white,
    flexDirection: "row",
    borderStyle: "solid",
    position: "absolute",
  },
  dms1Typo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  iconLayout: {
    height: 22,
    width: 22,
    position: "absolute",
  },
  frameWrapperLayout: {
    height: 88,
    width: 275,
    position: "absolute",
  },
  decorTypo: {
    lineHeight: 15,
    letterSpacing: -0.1,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  heyDoesAnyonePosition: {
    left: 69,
    position: "absolute",
  },
  fairyLights66Typo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    color: Color.black,
  },
  savedBy2Typo: {
    display: "none",
    color: Color.colorDimgray,
    top: 70,
    lineHeight: 15,
    letterSpacing: -0.1,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  iconSpaceBlock: {
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_3xs,
    width: 60,
    top: 84,
    borderRadius: Border.br_8xs,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  home1Typo: {
    color: Color.colorLightsteelblue,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    left: 0,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  messagingChild: {
    left: 38,
    borderRadius: Border.br_3xs,
    width: 352,
    height: 33,
    borderColor: Color.black,
    borderStyle: "solid",
    top: 85,
    borderWidth: 1,
    backgroundColor: Color.colorPaleturquoise_200,
    position: "absolute",
  },
  shellyKidds: {
    left: 153,
    fontSize: FontSize.size_xl,
    lineHeight: 30,
    justifyContent: "center",
    width: 145,
    alignItems: "center",
    textAlign: "center",
    display: "flex",
    letterSpacing: -0.2,
    height: 33,
    top: 85,
  },
  notchIcon: {
    height: 54,
    zIndex: 0,
    width: 430,
  },
  networkSignalLight: {
    height: 14,
    width: 20,
  },
  wifiSignalLight: {
    marginLeft: 4,
    width: 16,
    height: 14,
  },
  batteryLight: {
    width: 25,
    marginLeft: 4,
    height: 14,
  },
  statusIcons: {
    top: 22,
    right: 36,
    zIndex: 1,
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
    left: 22,
    borderRadius: Border.br_xl,
    width: 54,
    height: 21,
    zIndex: 3,
    position: "absolute",
    overflow: "hidden",
  },
  iphoneStatusBarupperdark: {
    marginLeft: -215,
    height: 65,
    left: "50%",
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  bubbleschatIcon: {
    bottom: 22,
    right: 34,
    left: 0,
    top: 0,
  },
  iconsbasicmore: {
    marginTop: -21,
    top: "50%",
    height: 20,
    right: 0,
    width: 20,
    position: "absolute",
  },
  minAgo: {
    textAlign: "right",
    right: 34,
  },
  sureThingI: {
    top: 10,
    width: 325,
    height: 39,
    textAlign: "left",
    left: 32,
    alignItems: "center",
    display: "flex",
    color: Color.black,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  bubbleschatParent: {
    top: 293,
    right: 2,
    bottom: 292,
    left: 19,
    position: "absolute",
  },
  groupChild: {
    bottom: 27,
  },
  dotsIcon: {
    height: "2.52%",
    top: "37.82%",
    bottom: "59.66%",
  },
  dayAgo: {
    left: 29,
    textAlign: "left",
  },
  hiShellyI: {
    left: 33,
    top: 21,
  },
  groupParent: {
    top: 151,
    right: 12,
    bottom: 397,
    left: 20,
    position: "absolute",
  },
  groupItem: {
    bottom: 26,
  },
  dotsIcon1: {
    height: "3.7%",
    top: "55.56%",
    bottom: "40.74%",
  },
  justNow: {
    textAlign: "left",
    left: 32,
  },
  seeYouThen: {
    top: 18,
    left: 32,
  },
  groupContainer: {
    top: 398,
    right: 15,
    bottom: 188,
    left: 17,
    position: "absolute",
  },
  sendMessage: {
    fontFamily: FontFamily.interRegular,
    color: Color.gray,
    textAlign: "left",
    flex: 1,
  },
  textbox: {
    top: 645,
    borderRadius: Border.br_9xs,
    borderColor: Color.gray,
    width: 357,
    padding: Padding.p_5xs,
    height: 35,
    left: 19,
    alignItems: "center",
    backgroundColor: Color.white,
    borderWidth: 1,
  },
  icon: {
    top: 652,
    left: 394,
  },
  heyDoesAnyone: {
    top: 32,
    width: 236,
    left: 69,
    position: "absolute",
  },
  frameChild: {
    width: 58,
    height: 58,
    left: 0,
    top: 0,
    position: "absolute",
  },
  fairyLights66: {
    lineHeight: 23,
    textAlign: "left",
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    letterSpacing: -0.2,
  },
  fairyLights66Ft200LedWrapper: {
    top: 6,
    flexDirection: "row",
    alignItems: "center",
  },
  savedBy2: {
    left: 4,
    textAlign: "left",
  },
  comments: {
    left: 258,
    textAlign: "right",
  },
  catIcon: {
    height: "40.91%",
    width: "11.82%",
    top: "12.5%",
    right: "83.45%",
    bottom: "46.59%",
    left: "4.73%",
  },
  postedByShelly: {
    top: 78,
    lineHeight: 10,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: 0,
    textAlign: "center",
    position: "absolute",
  },
  heyDoesAnyoneHave1TbspOParent: {
    left: 0,
    top: 0,
  },
  frameWrapper: {
    top: 14,
    left: 18,
  },
  icon1: {
    width: 9,
    height: 10,
  },
  decor: {
    marginLeft: 4,
  },
  iconParent: {
    left: 205,
    backgroundColor: Color.colorLightblue,
  },
  icon2: {
    width: 11,
    height: 11,
  },
  iconGroup: {
    left: 274,
    backgroundColor: Color.colorPaleturquoise_200,
    paddingHorizontal: Padding.p_3xs,
    width: 60,
    top: 84,
  },
  frameView: {
    marginLeft: -176,
    top: -11,
    backgroundColor: Color.colorKhaki,
    width: 349,
    height: 116,
    borderRadius: Border.br_8xs,
    left: "50%",
    borderWidth: 1,
    borderColor: Color.black,
    borderStyle: "solid",
    position: "absolute",
    overflow: "hidden",
  },
  chatArea: {
    top: 165,
    height: 667,
    left: 0,
    width: 430,
    position: "absolute",
  },
  home1: {
    top: 25,
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
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  dmIcon: {
    left: 4,
    top: 0,
  },
  dms: {
    width: 29,
    height: 43,
    marginLeft: 75,
  },
  saved1: {
    top: 21,
  },
  icon3: {
    left: 8,
    width: 19,
    height: 18,
    top: 0,
    position: "absolute",
  },
  saved: {
    width: 36,
    height: 36,
    marginLeft: 75,
  },
  profile1: {
    top: 20,
  },
  icon4: {
    height: 17,
    width: 16,
  },
  profile: {
    width: 37,
    marginLeft: 75,
    height: 35,
  },
  homeParent: {
    marginLeft: -216,
    borderTopWidth: 1,
    alignItems: "flex-end",
    paddingHorizontal: Padding.p_16xl,
    paddingTop: Padding.p_mini,
    paddingBottom: Padding.p_xl,
    bottom: 0,
    backgroundColor: Color.white,
    left: "50%",
    borderColor: Color.black,
  },
  messaging: {
    width: "100%",
    height: 932,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.colorLightblue,
  },
});

export default Messaging;
