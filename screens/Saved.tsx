import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const Saved = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.saved}>
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
      <Text style={[styles.savedPosts, styles.fishBoxClr]}>Saved Posts</Text>
      <View style={[styles.post, styles.postLayout]}>
        <Text
          style={[styles.heyDoesAnyone, styles.saved1Typo]}
        >{`Hey! Does anyone have 1 tbsp of sugar I can have? `}</Text>
        <Image
          style={styles.postChild}
          contentFit="cover"
          source={require("../assets/ellipse-2.png")}
        />
        <View style={[styles.fionaDrumsParent, styles.heyDoesAnyonePosition]}>
          <Text style={styles.fionaDrums}>Fiona Drums</Text>
          <Text style={[styles.hrsAgo, styles.hrsAgoTypo]}>2 hrs ago</Text>
          <Text style={[styles.request, styles.hrsAgoTypo]}>Request</Text>
        </View>
        <View style={styles.instanceParent}>
          <View style={styles.dmParent}>
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/dm1.png")}
            />
            <Text style={[styles.saved1, styles.saved1Typo]}>DM</Text>
          </View>
          <View style={styles.iconParentSpaceBlock}>
            <Image
              style={[styles.iconFavoriteStar, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/icon--favorite-star.png")}
            />
            <Text style={[styles.saved1, styles.saved1Typo]}>Save</Text>
          </View>
          <View style={styles.iconParentSpaceBlock}>
            <Image
              style={styles.iconCommentSpeech}
              contentFit="cover"
              source={require("../assets/icon--comment-speech.png")}
            />
            <Text style={[styles.saved1, styles.saved1Typo]}>Comment</Text>
          </View>
          <View
            style={[styles.iconFlagFlagpoleParent, styles.iconParentSpaceBlock]}
          >
            <Image
              style={styles.iconCommentSpeech}
              contentFit="cover"
              source={require("../assets/icon--flag-flagpole.png")}
            />
            <Text style={[styles.saved1, styles.saved1Typo]}>Share</Text>
          </View>
        </View>
        <Text style={[styles.savedBy2, styles.commentsTypo]}>
          Saved by 2 others
        </Text>
        <Text style={[styles.comments, styles.commentsFlexBox]}>
          2 Comments
        </Text>
        <Image
          style={styles.hedgehogIcon}
          contentFit="cover"
          source={require("../assets/hedgehog.png")}
        />
      </View>
      <Pressable
        style={[styles.post1, styles.postLayout]}
        onPress={() => navigation.navigate("IndividualPostView")}
      >
        <Text style={[styles.heyDoesAnyone, styles.saved1Typo]}>
          Getting rid of my fairy lights - it needs 2 AA batteries!
        </Text>
        <Image
          style={styles.postChild}
          contentFit="cover"
          source={require("../assets/ellipse-2.png")}
        />
        <View style={[styles.fionaDrumsParent, styles.heyDoesAnyonePosition]}>
          <Text style={styles.fionaDrums}>Shelly Kidds</Text>
          <Text style={[styles.hrsAgo, styles.hrsAgoTypo]}>3 hrs ago</Text>
          <Text style={[styles.request, styles.hrsAgoTypo]}>Gift</Text>
        </View>
        <View style={styles.instanceParent}>
          <View style={styles.dmParent}>
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/dm1.png")}
            />
            <Text style={[styles.saved1, styles.saved1Typo]}>DM</Text>
          </View>
          <View style={styles.iconParentSpaceBlock}>
            <Image
              style={[styles.iconFavoriteStar, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/icon--favorite-star.png")}
            />
            <Text style={[styles.saved1, styles.saved1Typo]}>Save</Text>
          </View>
          <View style={styles.iconParentSpaceBlock}>
            <Image
              style={styles.iconCommentSpeech}
              contentFit="cover"
              source={require("../assets/icon--comment-speech.png")}
            />
            <Text style={[styles.saved1, styles.saved1Typo]}>Comment</Text>
          </View>
          <View
            style={[styles.iconFlagFlagpoleParent, styles.iconParentSpaceBlock]}
          >
            <Image
              style={styles.iconCommentSpeech}
              contentFit="cover"
              source={require("../assets/icon--flag-flagpole.png")}
            />
            <Text style={[styles.saved1, styles.saved1Typo]}>Share</Text>
          </View>
        </View>
        <Text style={[styles.savedBy2, styles.commentsTypo]}>
          Saved by 2 others
        </Text>
        <Text style={[styles.comments1, styles.commentsFlexBox]}>
          23 Comments
        </Text>
        <Image
          style={styles.hedgehogIcon}
          contentFit="cover"
          source={require("../assets/cat.png")}
        />
      </Pressable>
      <View style={[styles.post2, styles.postLayout]}>
        <Text style={[styles.heyDoesAnyone, styles.saved1Typo]}>
          I have an interview tomorrow - is there any chance I can borrow a tie
          from someone?
        </Text>
        <Image
          style={styles.postChild}
          contentFit="cover"
          source={require("../assets/ellipse-2.png")}
        />
        <View style={[styles.fionaDrumsParent, styles.heyDoesAnyonePosition]}>
          <Text style={styles.fionaDrums}>Rainy Sun</Text>
          <Text style={[styles.hrsAgo, styles.hrsAgoTypo]}>3 hrs ago</Text>
          <Text style={[styles.request, styles.hrsAgoTypo]}>Request</Text>
        </View>
        <View style={styles.instanceParent}>
          <View style={styles.dmParent}>
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/dm1.png")}
            />
            <Text style={[styles.saved1, styles.saved1Typo]}>DM</Text>
          </View>
          <View style={styles.iconParentSpaceBlock}>
            <Image
              style={[styles.iconFavoriteStar, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/icon--favorite-star1.png")}
            />
            <Text style={[styles.saved1, styles.saved1Typo]}>Save</Text>
          </View>
          <View style={styles.iconParentSpaceBlock}>
            <Image
              style={styles.iconCommentSpeech}
              contentFit="cover"
              source={require("../assets/icon--comment-speech.png")}
            />
            <Text style={[styles.saved1, styles.saved1Typo]}>Comment</Text>
          </View>
          <View
            style={[styles.iconFlagFlagpoleParent, styles.iconParentSpaceBlock]}
          >
            <Image
              style={styles.iconCommentSpeech}
              contentFit="cover"
              source={require("../assets/icon--flag-flagpole.png")}
            />
            <Text style={[styles.saved1, styles.saved1Typo]}>Share</Text>
          </View>
        </View>
        <Text style={[styles.savedBy2, styles.commentsTypo]}>
          Saved by 5 others
        </Text>
        <Text style={[styles.comments, styles.commentsFlexBox]}>
          7 Comments
        </Text>
        <Image
          style={styles.hedgehogIcon}
          contentFit="cover"
          source={require("../assets/frog.png")}
        />
      </View>
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
            style={[styles.dmIcon3, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/dm.png")}
          />
        </Pressable>
        <Pressable
          style={styles.saved13}
          onPress={() => navigation.navigate("Saved")}
        >
          <Text style={styles.saved14}>Saved</Text>
          <Image
            style={[styles.icon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/icon.png")}
          />
        </Pressable>
        <Pressable
          style={styles.profile}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={[styles.profile1, styles.dms1Typo]}>Profile</Text>
          <Image
            style={styles.icon1}
            contentFit="cover"
            source={require("../assets/icon1.png")}
          />
        </Pressable>
      </View>
      <Text style={[styles.fishBox, styles.commentsFlexBox]}>FISH BOX</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  statusIconsFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  fishBoxClr: {
    display: "flex",
    color: Color.black,
    alignItems: "center",
  },
  postLayout: {
    height: 143,
    width: 363,
    borderWidth: 1,
    borderColor: Color.black,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    left: 32,
    position: "absolute",
  },
  saved1Typo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  heyDoesAnyonePosition: {
    left: 85,
    position: "absolute",
  },
  hrsAgoTypo: {
    marginLeft: 11,
    color: Color.colorGray_100,
    textAlign: "left",
    lineHeight: 15,
    letterSpacing: -0.1,
    fontSize: FontSize.size_3xs,
  },
  iconLayout: {
    height: 11,
    width: 11,
  },
  iconParentSpaceBlock: {
    marginLeft: 10,
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_3xs,
    backgroundColor: Color.white,
    borderRadius: Border.br_8xs,
    alignItems: "center",
    flexDirection: "row",
  },
  commentsTypo: {
    color: Color.colorDimgray,
    top: 83,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 15,
    letterSpacing: -0.1,
    fontSize: FontSize.size_3xs,
  },
  commentsFlexBox: {
    textAlign: "right",
    position: "absolute",
  },
  dms1Typo: {
    color: Color.colorLightsteelblue,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  iconPosition: {
    top: 0,
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
  savedPosts: {
    top: 108,
    left: 112,
    fontSize: FontSize.size_6xl,
    lineHeight: 25,
    textAlign: "center",
    justifyContent: "center",
    width: 206,
    height: 30,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    display: "flex",
    position: "absolute",
  },
  heyDoesAnyone: {
    top: 45,
    width: 236,
    textAlign: "left",
    lineHeight: 15,
    letterSpacing: -0.1,
    fontSize: FontSize.size_3xs,
    fontWeight: "500",
    color: Color.black,
    left: 85,
    position: "absolute",
  },
  postChild: {
    top: 13,
    left: 16,
    width: 58,
    height: 58,
    position: "absolute",
  },
  fionaDrums: {
    fontSize: FontSize.size_mini,
    letterSpacing: -0.2,
    lineHeight: 23,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  hrsAgo: {
    fontFamily: FontFamily.interRegular,
  },
  request: {
    fontStyle: "italic",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  fionaDrumsParent: {
    top: 18,
    alignItems: "center",
    flexDirection: "row",
  },
  saved1: {
    textAlign: "left",
    lineHeight: 15,
    letterSpacing: -0.1,
    fontSize: FontSize.size_3xs,
    fontWeight: "500",
    color: Color.black,
    marginLeft: 4,
  },
  dmParent: {
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_3xs,
    backgroundColor: Color.white,
    borderRadius: Border.br_8xs,
    alignItems: "center",
    flexDirection: "row",
  },
  iconFavoriteStar: {
    overflow: "hidden",
  },
  iconCommentSpeech: {
    width: 10,
    height: 10,
    overflow: "hidden",
  },
  iconFlagFlagpoleParent: {
    width: 60,
  },
  instanceParent: {
    top: 106,
    left: 17,
    flexDirection: "row",
    position: "absolute",
  },
  savedBy2: {
    left: 20,
    textAlign: "left",
    position: "absolute",
  },
  comments: {
    left: 281,
    color: Color.colorDimgray,
    top: 83,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 15,
    letterSpacing: -0.1,
    fontSize: FontSize.size_3xs,
  },
  hedgehogIcon: {
    height: "25.17%",
    width: "9.92%",
    top: "16.08%",
    right: "82.64%",
    bottom: "58.74%",
    left: "7.44%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  post: {
    top: 209,
    backgroundColor: Color.colorPaleturquoise_200,
    height: 143,
    width: 363,
    borderWidth: 1,
    borderColor: Color.black,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    left: 32,
  },
  comments1: {
    left: 274,
    color: Color.colorDimgray,
    top: 83,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 15,
    letterSpacing: -0.1,
    fontSize: FontSize.size_3xs,
  },
  post1: {
    top: 394,
    backgroundColor: Color.colorKhaki,
    height: 143,
    width: 363,
    borderWidth: 1,
    borderColor: Color.black,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    left: 32,
  },
  post2: {
    top: 579,
    backgroundColor: Color.colorPaleturquoise_200,
    height: 143,
    width: 363,
    borderWidth: 1,
    borderColor: Color.black,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    left: 32,
  },
  home1: {
    top: 25,
    left: 0,
    color: Color.colorLightsteelblue,
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
  dmIcon3: {
    left: 4,
    width: 22,
    height: 22,
  },
  dms: {
    width: 29,
    height: 43,
    marginLeft: 75,
  },
  saved14: {
    top: 21,
    fontSize: FontSize.size_xs,
    left: 0,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.black,
    position: "absolute",
  },
  icon: {
    left: 8,
    width: 19,
    height: 18,
  },
  saved13: {
    width: 36,
    height: 36,
    marginLeft: 75,
  },
  profile1: {
    top: 20,
    left: 0,
    color: Color.colorLightsteelblue,
  },
  icon1: {
    height: 17,
    width: 16,
  },
  profile: {
    width: 37,
    height: 35,
    marginLeft: 75,
  },
  homeParent: {
    marginLeft: -216,
    bottom: 0,
    borderTopWidth: 1,
    alignItems: "flex-end",
    paddingHorizontal: Padding.p_16xl,
    paddingTop: Padding.p_mini,
    paddingBottom: Padding.p_xl,
    backgroundColor: Color.white,
    borderColor: Color.black,
    borderStyle: "solid",
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  fishBox: {
    top: 33,
    left: 195,
    fontSize: FontSize.size_xl,
    lineHeight: 20,
    fontFamily: FontFamily.londrinaSolidRegular,
    width: 201,
    height: 47,
    display: "flex",
    color: Color.black,
    alignItems: "center",
  },
  saved: {
    backgroundColor: Color.colorLightblue,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default Saved;
