import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontSize, Padding, FontFamily } from "../GlobalStyles";

const CreatePostView = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.createPostView}>
      <View style={styles.createPostViewChild} />
      <View style={[styles.createPostViewItem, styles.createViewLayout]} />
      <View style={[styles.input, styles.inputPosition]}>
        <Text style={[styles.title, styles.titleTypo]}>Title</Text>
        <View style={[styles.textbox, styles.textboxBorder]}>
          <Text style={styles.textFieldData}>Text field data</Text>
        </View>
      </View>
      <View style={[styles.input1, styles.inputPosition]}>
        <Text style={[styles.title, styles.titleTypo]}>Description</Text>
        <View style={[styles.textbox, styles.textboxBorder]}>
          <Text style={styles.textFieldData}>Text field data</Text>
        </View>
      </View>
      <View style={[styles.textbox2, styles.textboxLayout]}>
        <Text style={[styles.chooseFromCamera, styles.cameraTypo]}>
          Choose from Camera Roll
        </Text>
      </View>
      <View style={[styles.textbox3, styles.textboxLayout]}>
        <Text style={[styles.accessCamera, styles.cameraTypo]}>
          Access Camera
        </Text>
      </View>
      <View style={[styles.textbox4, styles.textboxBorder]}>
        <Text style={styles.ddmmyy}>DD/MM/YY</Text>
      </View>
      <Text style={styles.createNewPost}>Create New Post</Text>
      <View style={styles.createPostViewInner}>
        <View style={styles.frameChild} />
      </View>
      <View style={[styles.tags, styles.tagsShadowBox3]}>
        <View style={[styles.tagsChild, styles.academicPosition]} />
        <Text style={[styles.academic, styles.academicPosition]}>Textbook</Text>
      </View>
      <View style={[styles.tags1, styles.tagsShadowBox2]}>
        <View style={[styles.tagsChild, styles.academicPosition]} />
        <Text style={[styles.academic, styles.academicPosition]}>Notes</Text>
      </View>
      <View style={[styles.tags2, styles.tagsShadowBox2]}>
        <View style={[styles.tagsChild, styles.academicPosition]} />
        <Text style={[styles.academic, styles.academicPosition]}>Clothes</Text>
      </View>
      <View style={[styles.tags3, styles.tagsShadowBox3]}>
        <View style={[styles.tagsChild, styles.academicPosition]} />
        <Text style={[styles.academic, styles.academicPosition]}>Beauty</Text>
      </View>
      <View style={[styles.tags4, styles.tagsShadowBox1]}>
        <View style={[styles.tagsChild, styles.academicPosition]} />
        <Text style={[styles.academic, styles.academicPosition]}>Decor</Text>
      </View>
      <View style={[styles.tags5, styles.tagsShadowBox1]}>
        <View style={[styles.tagsChild, styles.academicPosition]} />
        <Text style={[styles.academic, styles.academicPosition]}>Misc</Text>
      </View>
      <View style={[styles.tags6, styles.tagsShadowBox]}>
        <View style={[styles.tagsChild, styles.academicPosition]} />
        <Text style={[styles.academic, styles.academicPosition]}>Cooking</Text>
      </View>
      <View style={[styles.tags7, styles.tagsShadowBox]}>
        <View style={[styles.tagsChild, styles.academicPosition]} />
        <Text style={[styles.academic, styles.academicPosition]}>
          Furniture
        </Text>
      </View>
      <View style={[styles.tags8, styles.tagsShadowBox1]}>
        <View style={[styles.tagsChild, styles.academicPosition]} />
        <Text style={[styles.academic, styles.academicPosition]}>Academic</Text>
      </View>
      <Image
        style={[styles.rectangleIcon, styles.postPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-43.png")}
      />
      <Text style={[styles.post, styles.postFlexBox]}>Post</Text>
      <Text style={[styles.saveAsDraft, styles.saveAsDraftTypo]}>
        Save as Draft
      </Text>
      <Text style={[styles.gift, styles.giftTypo]}>Gift</Text>
      <Text style={[styles.uploadImages, styles.tags9Typo]}>Upload Images</Text>
      <Text style={[styles.tags9, styles.tags9Typo]}>Tags</Text>
      <Text style={[styles.postExpiration, styles.saveAsDraftTypo]}>
        Post Expiration
      </Text>
      <View style={[styles.createPostViewChild1, styles.createViewLayout]} />
      <Text style={[styles.request, styles.giftTypo]}>Request</Text>
      <View style={[styles.iphoneStatusBarupperdark, styles.iconPosition]}>
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
          style={styles.timeLight}
          contentFit="cover"
          source={require("../assets/time--light.png")}
        />
      </View>
      <Text style={styles.fishBox}>FISH BOX</Text>
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
          style={styles.profile}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={[styles.profile1, styles.postTypo]}>Profile</Text>
          <Image
            style={styles.icon1}
            contentFit="cover"
            source={require("../assets/icon1.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  createViewLayout: {
    width: 19,
    backgroundColor: Color.white,
    borderRadius: Border.br_7xs,
    top: 271,
    height: 19,
    borderWidth: 1,
    borderColor: Color.black,
    borderStyle: "solid",
    position: "absolute",
  },
  inputPosition: {
    width: 303,
    left: 64,
    position: "absolute",
  },
  titleTypo: {
    textAlign: "left",
    fontSize: FontSize.size_xs,
  },
  textboxBorder: {
    padding: Padding.p_5xs,
    borderColor: Color.gray,
    borderRadius: Border.br_9xs,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.white,
    borderWidth: 1,
    borderStyle: "solid",
  },
  textboxLayout: {
    height: 86,
    width: 138,
    top: 326,
    borderColor: Color.gray,
    borderRadius: Border.br_9xs,
    backgroundColor: Color.white,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  cameraTypo: {
    width: 122,
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    left: 8,
    color: Color.gray,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  tagsShadowBox3: {
    height: 13,
    width: 55,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 154,
    position: "absolute",
  },
  academicPosition: {
    left: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  tagsShadowBox2: {
    left: 222,
    height: 13,
    width: 55,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  tagsShadowBox1: {
    left: 86,
    height: 13,
    width: 55,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  tagsShadowBox: {
    left: 290,
    height: 13,
    width: 55,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  postPosition: {
    width: 73,
    left: 300,
    top: 714,
    position: "absolute",
  },
  postFlexBox: {
    lineHeight: 14,
    fontSize: FontSize.size_sm,
    height: 30,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    alignItems: "center",
  },
  saveAsDraftTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.black,
    position: "absolute",
  },
  giftTypo: {
    top: 275,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.black,
    lineHeight: 12,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  tags9Typo: {
    left: 65,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.black,
    lineHeight: 12,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  iconPosition: {
    top: 0,
    position: "absolute",
  },
  lightSpaceBlock: {
    marginLeft: 4,
    height: 14,
  },
  dms1Typo: {
    color: Color.colorLightsteelblue,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  postTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.black,
  },
  createPostViewChild: {
    top: 120,
    left: 36,
    borderRadius: 15,
    backgroundColor: Color.colorKhaki,
    width: 358,
    height: 641,
    borderWidth: 1,
    borderColor: Color.black,
    borderStyle: "solid",
    position: "absolute",
  },
  createPostViewItem: {
    left: 220,
    height: 19,
  },
  title: {
    color: Color.black,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
    lineHeight: 12,
    fontSize: FontSize.size_xs,
  },
  textFieldData: {
    color: Color.gray,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    flex: 1,
  },
  textbox: {
    alignSelf: "stretch",
    marginTop: 4,
  },
  input: {
    top: 151,
  },
  input1: {
    top: 209,
  },
  chooseFromCamera: {
    top: 28,
  },
  textbox2: {
    left: 64,
    height: 86,
    width: 138,
    top: 326,
  },
  accessCamera: {
    top: 36,
  },
  textbox3: {
    left: 236,
  },
  ddmmyy: {
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.gray,
    fontSize: FontSize.size_xs,
    flex: 1,
  },
  textbox4: {
    top: 601,
    left: 254,
    width: 116,
    height: 28,
    position: "absolute",
  },
  createNewPost: {
    top: 73,
    left: 111,
    fontSize: FontSize.size_6xl,
    lineHeight: 25,
    width: 206,
    height: 30,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    color: Color.black,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  frameChild: {
    borderRadius: 13,
    backgroundColor: "#8aabff",
    width: 305,
    height: 109,
  },
  createPostViewInner: {
    top: 449,
    left: 55,
    padding: Padding.p_3xs,
    position: "absolute",
  },
  tagsChild: {
    right: "0%",
    bottom: "0%",
    borderRadius: Border.br_10xs,
    backgroundColor: Color.colorPaleturquoise_200,
  },
  academic: {
    fontSize: FontSize.size_3xs,
    lineHeight: 10,
    justifyContent: "center",
    top: "0%",
    height: "100%",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    alignItems: "center",
    color: Color.black,
  },
  tags: {
    top: 484,
  },
  tags1: {
    top: 484,
  },
  tags2: {
    top: 507,
  },
  tags3: {
    top: 507,
  },
  tags4: {
    top: 507,
  },
  tags5: {
    top: 530,
  },
  tags6: {
    top: 484,
  },
  tags7: {
    top: 507,
  },
  tags8: {
    top: 484,
  },
  rectangleIcon: {
    borderRadius: Border.br_3xs,
    height: 29,
  },
  post: {
    width: 73,
    left: 300,
    top: 714,
    position: "absolute",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.black,
  },
  saveAsDraft: {
    top: 713,
    left: 173,
    width: 127,
    lineHeight: 14,
    fontSize: FontSize.size_sm,
    height: 30,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    alignItems: "center",
  },
  gift: {
    left: 247,
  },
  uploadImages: {
    top: 306,
  },
  tags9: {
    top: 439,
  },
  postExpiration: {
    top: 611,
    left: 68,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    lineHeight: 12,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  createPostViewChild1: {
    left: 285,
    height: 19,
  },
  request: {
    left: 312,
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
    alignItems: "center",
    flexDirection: "row",
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
    right: 0,
    height: 65,
    left: 0,
    overflow: "hidden",
  },
  fishBox: {
    top: 33,
    left: 327,
    fontSize: FontSize.size_xl,
    lineHeight: 20,
    fontFamily: FontFamily.londrinaSolidRegular,
    textAlign: "right",
    width: 69,
    height: 47,
    display: "flex",
    alignItems: "center",
    color: Color.black,
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
    left: 2,
    top: 28,
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
    height: 18,
    left: 8,
    top: 0,
    width: 19,
  },
  saved: {
    width: 36,
    height: 36,
    marginLeft: 75,
  },
  profile1: {
    top: 20,
    left: 0,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
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
    left: "50%",
    borderTopWidth: 1,
    alignItems: "flex-end",
    paddingHorizontal: Padding.p_16xl,
    paddingTop: Padding.p_mini,
    paddingBottom: Padding.p_xl,
    flexDirection: "row",
    backgroundColor: Color.white,
    borderColor: Color.black,
    borderStyle: "solid",
    position: "absolute",
  },
  createPostView: {
    backgroundColor: Color.colorLightblue,
    height: 932,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default CreatePostView;
