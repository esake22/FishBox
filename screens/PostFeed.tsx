import React, { useState, useCallback } from "react";
import { Text, StyleSheet, View, Pressable, Modal } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import OptionsBar from "../components/OptionsBar";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const PostFeed = () => {
  const [iconFilterFunnelVisible, setIconFilterFunnelVisible] = useState(false);
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const openIconFilterFunnel = useCallback(() => {
    setIconFilterFunnelVisible(true);
  }, []);

  const closeIconFilterFunnel = useCallback(() => {
    setIconFilterFunnelVisible(false);
  }, []);

  return (
    <>
      <View style={styles.postFeed}>
        <View style={styles.posts}>
          <View style={styles.post}>
            <Text
              style={[styles.heyDoesAnyone, styles.savedTypo]}
            >{`Hey! Does anyone have 1 tbsp of sugar I can have? `}</Text>
            <Image
              style={styles.postChild}
              contentFit="cover"
              source={require("../assets/ellipse-2.png")}
            />
            <View style={[styles.fionaDrumsParent, styles.parentFlexBox]}>
              <Text style={styles.fionaDrums}>Fiona Drums</Text>
              <Text style={[styles.hrsAgo, styles.hrsAgoTypo]}>2 hrs ago</Text>
              <Text style={[styles.request, styles.hrsAgoTypo]}>Request</Text>
            </View>
            <View style={[styles.instanceParent, styles.parentFlexBox]}>
              <View style={styles.dmParent}>
                <Image
                  style={styles.iconLayout1}
                  contentFit="cover"
                  source={require("../assets/dm1.png")}
                />
                <Text style={[styles.saved, styles.savedTypo]}>DM</Text>
              </View>
              <View style={styles.iconParentSpaceBlock}>
                <Image
                  style={[styles.iconFavoriteStar, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/icon--favorite-star2.png")}
                />
                <Text style={[styles.saved, styles.savedTypo]}>Save</Text>
              </View>
              <View style={styles.iconParentSpaceBlock}>
                <Image
                  style={[styles.iconCommentSpeech, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/icon--comment-speech.png")}
                />
                <Text style={[styles.saved, styles.savedTypo]}>Comment</Text>
              </View>
              <View
                style={[
                  styles.iconFlagFlagpoleParent,
                  styles.iconParentSpaceBlock,
                ]}
              >
                <Image
                  style={[styles.iconCommentSpeech, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/icon--flag-flagpole.png")}
                />
                <Text style={[styles.saved, styles.savedTypo]}>Share</Text>
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
            <Text style={[styles.heyDoesAnyone, styles.savedTypo]}>
              Getting rid of my fairy lights - it needs 2 AA batteries!
            </Text>
            <Image
              style={styles.postChild}
              contentFit="cover"
              source={require("../assets/ellipse-2.png")}
            />
            <View style={[styles.fionaDrumsParent, styles.parentFlexBox]}>
              <Text style={styles.fionaDrums}>Shelly Kidds</Text>
              <Text style={[styles.hrsAgo, styles.hrsAgoTypo]}>3 hrs ago</Text>
              <Text style={[styles.request, styles.hrsAgoTypo]}>Gift</Text>
            </View>
            <View style={[styles.instanceParent, styles.parentFlexBox]}>
              <View style={styles.dmParent}>
                <Image
                  style={styles.iconLayout1}
                  contentFit="cover"
                  source={require("../assets/dm1.png")}
                />
                <Text style={[styles.saved, styles.savedTypo]}>DM</Text>
              </View>
              <View style={styles.iconParentSpaceBlock}>
                <Image
                  style={[styles.iconFavoriteStar, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/icon--favorite-star2.png")}
                />
                <Text style={[styles.saved, styles.savedTypo]}>Save</Text>
              </View>
              <View style={styles.iconParentSpaceBlock}>
                <Image
                  style={[styles.iconCommentSpeech, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/icon--comment-speech.png")}
                />
                <Text style={[styles.saved, styles.savedTypo]}>Comment</Text>
              </View>
              <View
                style={[
                  styles.iconFlagFlagpoleParent,
                  styles.iconParentSpaceBlock,
                ]}
              >
                <Image
                  style={[styles.iconCommentSpeech, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/icon--flag-flagpole.png")}
                />
                <Text style={[styles.saved, styles.savedTypo]}>Share</Text>
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
              source={require("../assets/cat1.png")}
            />
          </Pressable>
          <View style={[styles.post2, styles.postLayout]}>
            <Text style={[styles.heyDoesAnyone, styles.savedTypo]}>
              I have an interview tomorrow - is there any chance I can borrow a
              tie from someone?
            </Text>
            <Image
              style={styles.postChild}
              contentFit="cover"
              source={require("../assets/ellipse-2.png")}
            />
            <View style={[styles.fionaDrumsParent, styles.parentFlexBox]}>
              <Text style={styles.fionaDrums}>Rainy Sun</Text>
              <Text style={[styles.hrsAgo, styles.hrsAgoTypo]}>3 hrs ago</Text>
              <Text style={[styles.request, styles.hrsAgoTypo]}>Request</Text>
            </View>
            <View style={[styles.instanceParent, styles.parentFlexBox]}>
              <View style={styles.dmParent}>
                <Image
                  style={styles.iconLayout1}
                  contentFit="cover"
                  source={require("../assets/dm1.png")}
                />
                <Text style={[styles.saved, styles.savedTypo]}>DM</Text>
              </View>
              <View style={styles.iconParentSpaceBlock}>
                <Image
                  style={[styles.iconFavoriteStar, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/icon--favorite-star3.png")}
                />
                <Text style={[styles.saved, styles.savedTypo]}>Save</Text>
              </View>
              <View style={styles.iconParentSpaceBlock}>
                <Image
                  style={[styles.iconCommentSpeech, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/icon--comment-speech.png")}
                />
                <Text style={[styles.saved, styles.savedTypo]}>Comment</Text>
              </View>
              <View
                style={[
                  styles.iconFlagFlagpoleParent,
                  styles.iconParentSpaceBlock,
                ]}
              >
                <Image
                  style={[styles.iconCommentSpeech, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/icon--flag-flagpole.png")}
                />
                <Text style={[styles.saved, styles.savedTypo]}>Share</Text>
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
              source={require("../assets/frog1.png")}
            />
          </View>
          <View style={[styles.post1, styles.postLayout]}>
            <Text style={[styles.heyDoesAnyone, styles.savedTypo]}>
              I‘m giving away old pillows if anyone needs any!
            </Text>
            <Image
              style={styles.postChild}
              contentFit="cover"
              source={require("../assets/ellipse-2.png")}
            />
            <View style={[styles.fionaDrumsParent, styles.parentFlexBox]}>
              <Text style={styles.fionaDrums}>Lena Stevens</Text>
              <Text style={[styles.hrsAgo, styles.hrsAgoTypo]}>5 hrs ago</Text>
              <Text style={[styles.request, styles.hrsAgoTypo]}>Gift</Text>
            </View>
            <View style={[styles.instanceParent, styles.parentFlexBox]}>
              <View style={styles.dmParent}>
                <Image
                  style={styles.iconLayout1}
                  contentFit="cover"
                  source={require("../assets/dm1.png")}
                />
                <Text style={[styles.saved, styles.savedTypo]}>DM</Text>
              </View>
              <View style={styles.iconParentSpaceBlock}>
                <Image
                  style={[styles.iconFavoriteStar, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/icon--favorite-star2.png")}
                />
                <Text style={[styles.saved, styles.savedTypo]}>Save</Text>
              </View>
              <View style={styles.iconParentSpaceBlock}>
                <Image
                  style={[styles.iconCommentSpeech, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/icon--comment-speech.png")}
                />
                <Text style={[styles.saved, styles.savedTypo]}>Comment</Text>
              </View>
              <View
                style={[
                  styles.iconFlagFlagpoleParent,
                  styles.iconParentSpaceBlock,
                ]}
              >
                <Image
                  style={[styles.iconCommentSpeech, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/icon--flag-flagpole.png")}
                />
                <Text style={[styles.saved, styles.savedTypo]}>Share</Text>
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
              source={require("../assets/koala.png")}
            />
          </View>
          <View style={[styles.post1, styles.postLayout]}>
            <Text style={[styles.heyDoesAnyone, styles.savedTypo]}>
              I bought an extra jar of honey from costco. Does anyone want some?
            </Text>
            <Image
              style={styles.postChild}
              contentFit="cover"
              source={require("../assets/ellipse-2.png")}
            />
            <View style={[styles.fionaDrumsParent, styles.parentFlexBox]}>
              <Text style={styles.fionaDrums}>Kelly Cherry</Text>
              <Text style={[styles.hrsAgo, styles.hrsAgoTypo]}>5 hrs ago</Text>
              <Text style={[styles.request, styles.hrsAgoTypo]}>Gift</Text>
            </View>
            <View style={[styles.instanceParent, styles.parentFlexBox]}>
              <View style={styles.dmParent}>
                <Image
                  style={styles.iconLayout1}
                  contentFit="cover"
                  source={require("../assets/dm1.png")}
                />
                <Text style={[styles.saved, styles.savedTypo]}>DM</Text>
              </View>
              <View style={styles.iconParentSpaceBlock}>
                <Image
                  style={[styles.iconFavoriteStar, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/icon--favorite-star2.png")}
                />
                <Text style={[styles.saved, styles.savedTypo]}>Save</Text>
              </View>
              <View style={styles.iconParentSpaceBlock}>
                <Image
                  style={[styles.iconCommentSpeech, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/icon--comment-speech.png")}
                />
                <Text style={[styles.saved, styles.savedTypo]}>Comment</Text>
              </View>
              <View
                style={[
                  styles.iconFlagFlagpoleParent,
                  styles.iconParentSpaceBlock,
                ]}
              >
                <Image
                  style={[styles.iconCommentSpeech, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/icon--flag-flagpole.png")}
                />
                <Text style={[styles.saved, styles.savedTypo]}>Share</Text>
              </View>
            </View>
            <Text style={[styles.savedBy2, styles.commentsTypo]}>
              Saved by 15 others
            </Text>
            <Text style={[styles.comments4, styles.commentsFlexBox]}>
              10 Comments
            </Text>
            <Image
              style={styles.hedgehogIcon}
              contentFit="cover"
              source={require("../assets/cow.png")}
            />
          </View>
          <View style={[styles.post2, styles.postLayout]}>
            <Text style={[styles.heyDoesAnyone, styles.savedTypo]}>
              I’m cooking and need a little bit of brown sugar for my recipe.
              Does anybody have some sugar?
            </Text>
            <Image
              style={styles.postChild}
              contentFit="cover"
              source={require("../assets/ellipse-2.png")}
            />
            <View style={[styles.fionaDrumsParent, styles.parentFlexBox]}>
              <Text style={styles.fionaDrums}>Stacy Rum</Text>
              <Text style={[styles.hrsAgo, styles.hrsAgoTypo]}>7 hrs ago</Text>
              <Text style={[styles.request, styles.hrsAgoTypo]}>Request</Text>
            </View>
            <View style={[styles.instanceParent, styles.parentFlexBox]}>
              <View style={styles.dmParent}>
                <Image
                  style={styles.iconLayout1}
                  contentFit="cover"
                  source={require("../assets/dm1.png")}
                />
                <Text style={[styles.saved, styles.savedTypo]}>DM</Text>
              </View>
              <View style={styles.iconParentSpaceBlock}>
                <Image
                  style={[styles.iconFavoriteStar, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/icon--favorite-star2.png")}
                />
                <Text style={[styles.saved, styles.savedTypo]}>Save</Text>
              </View>
              <View style={styles.iconParentSpaceBlock}>
                <Image
                  style={[styles.iconCommentSpeech, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/icon--comment-speech.png")}
                />
                <Text style={[styles.saved, styles.savedTypo]}>Comment</Text>
              </View>
              <View
                style={[
                  styles.iconFlagFlagpoleParent,
                  styles.iconParentSpaceBlock,
                ]}
              >
                <Image
                  style={[styles.iconCommentSpeech, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/icon--flag-flagpole.png")}
                />
                <Text style={[styles.saved, styles.savedTypo]}>Share</Text>
              </View>
            </View>
            <Text style={[styles.savedBy2, styles.commentsTypo]}>
              Saved by 1 other
            </Text>
            <Text style={[styles.comments5, styles.commentsFlexBox]}>
              1 Comment
            </Text>
            <Image
              style={styles.hedgehogIcon}
              contentFit="cover"
              source={require("../assets/pig.png")}
            />
          </View>
          <View style={[styles.post1, styles.postLayout]}>
            <Text style={[styles.heyDoesAnyone, styles.savedTypo]}>
              SOS - I ran out of toilet paper! Can I please get a roll from
              someone?
            </Text>
            <Image
              style={styles.postChild}
              contentFit="cover"
              source={require("../assets/ellipse-2.png")}
            />
            <View style={[styles.fionaDrumsParent, styles.parentFlexBox]}>
              <Text style={styles.fionaDrums}>Lena Stevens</Text>
              <Text style={[styles.hrsAgo, styles.hrsAgoTypo]}>9 hrs ago</Text>
              <Text style={[styles.request, styles.hrsAgoTypo]}>Request</Text>
            </View>
            <View style={[styles.instanceParent, styles.parentFlexBox]}>
              <View style={styles.dmParent}>
                <Image
                  style={styles.iconLayout1}
                  contentFit="cover"
                  source={require("../assets/dm1.png")}
                />
                <Text style={[styles.saved, styles.savedTypo]}>DM</Text>
              </View>
              <View style={styles.iconParentSpaceBlock}>
                <Image
                  style={[styles.iconFavoriteStar, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/icon--favorite-star4.png")}
                />
                <Text style={[styles.saved, styles.savedTypo]}>Save</Text>
              </View>
              <View style={styles.iconParentSpaceBlock}>
                <Image
                  style={[styles.iconCommentSpeech, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/icon--comment-speech.png")}
                />
                <Text style={[styles.saved, styles.savedTypo]}>Comment</Text>
              </View>
              <View
                style={[
                  styles.iconFlagFlagpoleParent,
                  styles.iconParentSpaceBlock,
                ]}
              >
                <Image
                  style={[styles.iconCommentSpeech, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/icon--flag-flagpole.png")}
                />
                <Text style={[styles.saved, styles.savedTypo]}>Share</Text>
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
              source={require("../assets/panda.png")}
            />
          </View>
        </View>
        <Pressable
          style={[styles.framePressable, styles.iconParentPosition]}
          onPress={() => navigation.navigate("CreatePostView")}
        >
          <Image
            style={[styles.iconCommentSpeech, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icon--comment-speech1.png")}
          />
          <Text style={[styles.saved, styles.savedTypo]}>New Post</Text>
        </Pressable>
        <View style={[styles.iconParent, styles.iconParentPosition]}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/icon2.png")}
          />
          <Text style={[styles.saved, styles.savedTypo]}>Search</Text>
        </View>
        <Pressable
          style={[styles.iconFilterFunnel, styles.timeLightPosition]}
          onPress={openIconFilterFunnel}
        >
          <Image
            style={styles.icon1}
            contentFit="cover"
            source={require("../assets/icon--filter-funnel.png")}
          />
        </Pressable>
        <Text style={[styles.fishBox, styles.commentsFlexBox]}>FISH BOX</Text>
        <View style={styles.homeParent}>
          <View style={styles.home}>
            <Text style={styles.home1}>Home</Text>
            <Image
              style={styles.unionIcon}
              contentFit="cover"
              source={require("../assets/union.png")}
            />
          </View>
          <Pressable
            style={styles.dms}
            onPress={() => navigation.navigate("AllMessages")}
          >
            <Text style={[styles.dms1, styles.dms1Typo]}>DMs</Text>
            <Image
              style={[styles.dmIcon7, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/dm.png")}
            />
          </Pressable>
          <Pressable
            style={styles.saved28}
            onPress={() => navigation.navigate("Saved")}
          >
            <Text style={[styles.saved29, styles.dms1Typo]}>Saved</Text>
            <Image
              style={[styles.icon2, styles.iconPosition]}
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
              style={styles.icon3}
              contentFit="cover"
              source={require("../assets/icon1.png")}
            />
          </Pressable>
        </View>
        <View style={[styles.iphoneStatusBarupperdark, styles.iconPosition]}>
          <Image
            style={styles.notchIcon}
            contentFit="cover"
            source={require("../assets/notch.png")}
          />
          <View style={[styles.statusIcons, styles.parentFlexBox]}>
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
            style={[styles.timeLight, styles.timeLightPosition]}
            contentFit="cover"
            source={require("../assets/time--light.png")}
          />
        </View>
      </View>

      <Modal animationType="fade" transparent visible={iconFilterFunnelVisible}>
        <View style={styles.iconFilterFunnelOverlay}>
          <Pressable
            style={styles.iconFilterFunnelBg}
            onPress={closeIconFilterFunnel}
          />
          <OptionsBar onClose={closeIconFilterFunnel} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  savedTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  parentFlexBox: {
    flexDirection: "row",
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
  iconLayout1: {
    height: 11,
    width: 11,
  },
  iconLayout: {
    height: 10,
    width: 10,
  },
  iconParentSpaceBlock: {
    marginLeft: 10,
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_3xs,
    backgroundColor: Color.white,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_8xs,
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
  postLayout: {
    marginTop: 42,
    height: 143,
    width: 363,
    borderWidth: 1,
    borderColor: Color.black,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
  },
  iconParentPosition: {
    top: 123,
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_3xs,
    backgroundColor: Color.white,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  timeLightPosition: {
    left: 22,
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
  heyDoesAnyone: {
    top: 45,
    width: 236,
    textAlign: "left",
    color: Color.black,
    lineHeight: 15,
    letterSpacing: -0.1,
    fontSize: FontSize.size_3xs,
    fontWeight: "500",
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
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    textAlign: "left",
    color: Color.black,
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
    left: 85,
  },
  saved: {
    marginLeft: 4,
    textAlign: "left",
    color: Color.black,
    lineHeight: 15,
    letterSpacing: -0.1,
    fontSize: FontSize.size_3xs,
    fontWeight: "500",
  },
  dmParent: {
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_3xs,
    backgroundColor: Color.white,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_8xs,
  },
  iconFavoriteStar: {
    overflow: "hidden",
  },
  iconCommentSpeech: {
    overflow: "hidden",
  },
  iconFlagFlagpoleParent: {
    width: 60,
  },
  instanceParent: {
    top: 106,
    left: 17,
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
    overflow: "hidden",
    position: "absolute",
  },
  post: {
    height: 143,
    width: 363,
    borderWidth: 1,
    borderColor: Color.black,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorPaleturquoise_200,
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
    backgroundColor: Color.colorKhaki,
  },
  post2: {
    backgroundColor: Color.colorPaleturquoise_200,
    marginTop: 42,
  },
  comments4: {
    left: 276,
    color: Color.colorDimgray,
    top: 83,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 15,
    letterSpacing: -0.1,
    fontSize: FontSize.size_3xs,
  },
  comments5: {
    left: 287,
    color: Color.colorDimgray,
    top: 83,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 15,
    letterSpacing: -0.1,
    fontSize: FontSize.size_3xs,
  },
  posts: {
    marginLeft: -182,
    top: 181,
    left: "50%",
    position: "absolute",
  },
  framePressable: {
    left: 316,
  },
  iconParent: {
    left: 33,
    width: 230,
  },
  iconFilterFunnelOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  iconFilterFunnelBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  icon1: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  iconFilterFunnel: {
    top: 48,
    width: 48,
    height: 48,
  },
  fishBox: {
    top: 54,
    left: 208,
    fontSize: 40,
    lineHeight: 40,
    fontFamily: FontFamily.londrinaSolidRegular,
    display: "flex",
    width: 188,
    height: 44,
    alignItems: "center",
    color: Color.black,
  },
  home1: {
    top: 25,
    color: Color.colorGray_200,
    fontSize: FontSize.size_xs,
    left: 0,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
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
  dmIcon7: {
    left: 4,
    width: 22,
    height: 22,
  },
  dms: {
    width: 29,
    height: 43,
    marginLeft: 75,
  },
  saved29: {
    top: 21,
    left: 0,
  },
  icon2: {
    left: 8,
    width: 19,
    height: 18,
  },
  saved28: {
    width: 36,
    height: 36,
    marginLeft: 75,
  },
  profile1: {
    top: 20,
    left: 0,
  },
  icon3: {
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
    flexDirection: "row",
    borderColor: Color.black,
    borderStyle: "solid",
    left: "50%",
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
    height: 14,
    width: 16,
    marginLeft: 4,
  },
  batteryLight: {
    width: 25,
    height: 14,
    marginLeft: 4,
  },
  statusIcons: {
    top: 22,
    right: 36,
    zIndex: 1,
    alignItems: "center",
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
    right: 0,
    height: 65,
    left: 0,
    overflow: "hidden",
  },
  postFeed: {
    backgroundColor: Color.colorLightblue,
    flex: 1,
    height: 932,
    width: "100%",
  },
});

export default PostFeed;
