import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize, Padding } from "../GlobalStyles";

const IndividualPostView = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.individualPostView}>
      <Image
        style={styles.individualPostViewChild}
        contentFit="cover"
        source={require("../assets/rectangle-26.png")}
      />
      <Text style={[styles.comments, styles.fishBoxFlexBox1]}>Comments</Text>
      <Text style={[styles.fionaDrums04032024Container, styles.containerTypo]}>
        <Text style={styles.fionaDrums04032024Container1}>
          <Text style={styles.fionaDrums04032024}>{`Fiona Drums 04/03/2024
`}</Text>
          <Text style={styles.doTheyChange}>{`Do they change color? Thanks!
`}</Text>
        </Text>
      </Text>
      <Text style={[styles.rainySun04032024Container, styles.containerTypo]}>
        <Text style={styles.fionaDrums04032024Container1}>
          <Text style={styles.fionaDrums04032024}>{`Rainy Sun 04/03/2024
`}</Text>
          <Text style={styles.doTheyChange}>{`Do the fairy lights flicker??
`}</Text>
        </Text>
      </Text>
      <View style={[styles.iphoneStatusBarupperdark, styles.iphoneLayout]}>
        <Image
          style={styles.notchIcon}
          contentFit="cover"
          source={require("../assets/notch.png")}
        />
        <View style={[styles.statusIcons, styles.statusPosition]}>
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
          style={[styles.timeLight, styles.timePosition]}
          contentFit="cover"
          source={require("../assets/time--light.png")}
        />
      </View>
      <View style={styles.iconFavoriteStarParent}>
        <Image
          style={styles.iconFavoriteStar}
          contentFit="cover"
          source={require("../assets/icon--favorite-star5.png")}
        />
        <Image
          style={[styles.iconCommentSpeech, styles.iconSpaceBlock1]}
          contentFit="cover"
          source={require("../assets/icon--comment-speech2.png")}
        />
        <Image
          style={[styles.iconFlagFlagpole, styles.iconSpaceBlock1]}
          contentFit="cover"
          source={require("../assets/icon--flag-flagpole1.png")}
        />
        <Image
          style={[styles.icon, styles.iconSpaceBlock1]}
          contentFit="cover"
          source={require("../assets/icon3.png")}
        />
      </View>
      <View style={[styles.input, styles.inputPosition]}>
        <Text style={styles.label}>Description</Text>
        <View style={styles.textbox}>
          <Text style={[styles.textFieldData, styles.home1Typo]}>
            Add Comment
          </Text>
        </View>
      </View>
      <View style={[styles.groupParent, styles.parentBorder]}>
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
              <Text style={[styles.fairyLights66, styles.commentsTypo]}>
                Fairy lights (66 ft, 200 LED)
              </Text>
            </View>
            <Text style={[styles.savedBy2, styles.savedBy2Typo]}>
              Saved by 2 others
            </Text>
            <Text style={[styles.comments1, styles.fishBoxFlexBox]}>
              23 Comments
            </Text>
            <Image
              style={[styles.catIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/cat2.png")}
            />
            <Text style={[styles.postedByShelly, styles.commentsTypo]}>
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
      <View style={[styles.iphoneStatusBarupperdark1, styles.iphoneLayout]}>
        <Image
          style={styles.notchIcon}
          contentFit="cover"
          source={require("../assets/notch.png")}
        />
        <View style={styles.statusPosition}>
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
          style={styles.timePosition}
          contentFit="cover"
          source={require("../assets/time--light.png")}
        />
      </View>
      <Pressable
        style={styles.icon3}
        onPress={() => navigation.navigate("Messaging")}
      >
        <Image
          style={[styles.icon4, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icon6.png")}
        />
      </Pressable>
      <View style={[styles.homeParent, styles.parentBorder]}>
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
            style={[styles.dmIcon, styles.dmIconPosition]}
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
            style={styles.icon5}
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
            style={styles.icon6}
            contentFit="cover"
            source={require("../assets/icon1.png")}
          />
        </Pressable>
      </View>
      <Text style={[styles.fishBox, styles.fishBoxFlexBox]}>FISH BOX</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  fishBoxFlexBox1: {
    alignItems: "center",
    display: "flex",
    color: Color.black,
  },
  containerTypo: {
    height: 52,
    width: 353,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.black,
    left: 44,
    position: "absolute",
  },
  iphoneLayout: {
    height: 65,
    position: "absolute",
    overflow: "hidden",
  },
  statusPosition: {
    zIndex: 1,
    right: 36,
    top: 22,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  timePosition: {
    zIndex: 3,
    width: 54,
    borderRadius: Border.br_xl,
    left: 22,
    top: 19,
    height: 21,
    position: "absolute",
    overflow: "hidden",
  },
  iconSpaceBlock1: {
    marginLeft: 13,
    height: 18,
  },
  inputPosition: {
    left: 44,
    position: "absolute",
  },
  home1Typo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  parentBorder: {
    borderColor: Color.black,
    borderStyle: "solid",
    left: "50%",
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
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.black,
  },
  heyDoesAnyonePosition: {
    left: 69,
    position: "absolute",
  },
  commentsTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  savedBy2Typo: {
    color: Color.colorDimgray,
    top: 70,
    lineHeight: 15,
    letterSpacing: -0.1,
    display: "none",
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  fishBoxFlexBox: {
    textAlign: "right",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
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
  dms1Typo: {
    color: Color.colorLightsteelblue,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  dmIconPosition: {
    left: 4,
    position: "absolute",
  },
  individualPostViewChild: {
    top: 254,
    borderRadius: 17,
    height: 284,
    width: 349,
    marginLeft: -175,
    left: "50%",
    position: "absolute",
  },
  comments: {
    top: 593,
    lineHeight: 14,
    width: 102,
    height: 24,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    left: 44,
    position: "absolute",
  },
  fionaDrums04032024: {
    fontSize: FontSize.size_3xs,
  },
  doTheyChange: {
    fontSize: FontSize.size_sm,
  },
  fionaDrums04032024Container1: {
    width: "100%",
  },
  fionaDrums04032024Container: {
    top: 661,
  },
  rainySun04032024Container: {
    top: 704,
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
    display: "none",
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
    display: "none",
  },
  iphoneStatusBarupperdark: {
    marginLeft: -215,
    top: 5,
    left: "50%",
    height: 65,
  },
  iconFavoriteStar: {
    width: 21,
    height: 21,
    overflow: "hidden",
  },
  iconCommentSpeech: {
    width: 18,
    overflow: "hidden",
  },
  iconFlagFlagpole: {
    width: 16,
    overflow: "hidden",
  },
  icon: {
    width: 18,
  },
  iconFavoriteStarParent: {
    top: 555,
    alignItems: "flex-end",
    flexDirection: "row",
    left: 44,
    position: "absolute",
  },
  label: {
    fontSize: FontSize.inputFieldLabel_size,
    letterSpacing: 1.8,
    textTransform: "uppercase",
    fontFamily: FontFamily.interRegular,
    display: "none",
    textAlign: "left",
    color: Color.black,
  },
  textFieldData: {
    color: Color.gray,
    fontFamily: FontFamily.interRegular,
    flex: 1,
  },
  textbox: {
    alignSelf: "stretch",
    borderRadius: Border.br_9xs,
    borderColor: Color.gray,
    padding: Padding.p_5xs,
    marginTop: 4,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.white,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    top: 622,
    width: 303,
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
    fontSize: FontSize.size_mini,
    letterSpacing: -0.2,
    lineHeight: 23,
    textAlign: "left",
    color: Color.black,
  },
  fairyLights66Ft200LedWrapper: {
    top: 6,
    flexDirection: "row",
    left: 69,
    alignItems: "center",
  },
  savedBy2: {
    left: 4,
    position: "absolute",
    textAlign: "left",
  },
  comments1: {
    left: 258,
    color: Color.colorDimgray,
    top: 70,
    lineHeight: 15,
    letterSpacing: -0.1,
    display: "none",
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  catIcon: {
    height: "40.91%",
    width: "11.82%",
    top: "12.5%",
    right: "83.45%",
    bottom: "46.59%",
    left: "4.73%",
    position: "absolute",
  },
  postedByShelly: {
    top: 78,
    lineHeight: 10,
    textAlign: "center",
    left: 0,
    fontSize: FontSize.size_3xs,
    color: Color.black,
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
  },
  groupParent: {
    top: 105,
    backgroundColor: Color.colorKhaki,
    height: 116,
    borderRadius: Border.br_8xs,
    borderColor: Color.black,
    borderWidth: 1,
    width: 349,
    marginLeft: -175,
    overflow: "hidden",
  },
  iphoneStatusBarupperdark1: {
    right: 0,
    left: 0,
    top: 0,
  },
  icon4: {
    height: "100%",
    width: "100%",
  },
  icon3: {
    left: "38.84%",
    top: "59.44%",
    right: "55.93%",
    bottom: "38.14%",
    width: "5.23%",
    height: "2.41%",
    position: "absolute",
  },
  home1: {
    top: 25,
    color: Color.colorGray_200,
    left: 0,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  unionIcon: {
    height: 19,
    width: 18,
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
    width: 22,
    height: 22,
    top: 0,
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
  icon5: {
    left: 8,
    width: 19,
    top: 0,
    height: 18,
    position: "absolute",
  },
  saved: {
    width: 36,
    height: 36,
    marginLeft: 75,
  },
  profile1: {
    top: 20,
    left: 0,
  },
  icon6: {
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
    paddingHorizontal: Padding.p_16xl,
    paddingTop: Padding.p_mini,
    paddingBottom: Padding.p_xl,
    borderColor: Color.black,
    backgroundColor: Color.white,
    alignItems: "flex-end",
    flexDirection: "row",
  },
  fishBox: {
    top: 33,
    left: 327,
    fontSize: FontSize.size_xl,
    lineHeight: 20,
    fontFamily: FontFamily.londrinaSolidRegular,
    width: 69,
    height: 47,
    alignItems: "center",
    display: "flex",
    color: Color.black,
  },
  individualPostView: {
    height: 932,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.colorLightblue,
  },
});

export default IndividualPostView;
