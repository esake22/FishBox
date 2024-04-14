import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

export type OptionsBarType = {
  onClose?: () => void;
};

const OptionsBar = ({ onClose }: OptionsBarType) => {
  return (
    <View style={styles.optionsBar}>
      <Text style={styles.filter}>Filter:</Text>
      <Text style={[styles.request, styles.giftTypo]}>Request</Text>
      <Text style={[styles.gift, styles.giftTypo]}>Gift</Text>
      <Text style={[styles.clothes, styles.miscTypo]}>Clothes</Text>
      <Text style={[styles.decor, styles.miscTypo]}>Decor</Text>
      <Text style={[styles.textbooks, styles.miscTypo]}>Textbooks</Text>
      <Text style={[styles.furniture, styles.miscTypo]}>Furniture</Text>
      <Text style={[styles.beauty, styles.miscTypo]}>Beauty</Text>
      <Text style={[styles.misc, styles.miscTypo]}>Misc</Text>
      <Text style={[styles.active, styles.giftTypo]}>Active</Text>
      <Text style={[styles.ended, styles.giftTypo]}>Ended</Text>
      <View style={[styles.rectangleParent, styles.optionsChildPosition]}>
        <View style={styles.frameItemLayout} />
        <View style={[styles.frameItem, styles.frameItemLayout]} />
        <View style={[styles.frameItem, styles.frameItemLayout]} />
        <View style={[styles.frameItem, styles.frameItemLayout]} />
        <View style={[styles.frameItem, styles.frameItemLayout]} />
        <View style={[styles.frameItem, styles.frameItemLayout]} />
      </View>
      <View style={[styles.optionsBarChild, styles.frameItemLayout]} />
      <View style={[styles.optionsBarItem, styles.frameItemLayout]} />
      <View style={[styles.optionsBarInner, styles.frameItemLayout]} />
      <View style={[styles.optionsBarChild1, styles.frameItemLayout]} />
      <View style={[styles.lineView, styles.optionsChildLayout]} />
      <View style={[styles.lineView, styles.optionsChildLayout]} />
      <View style={[styles.optionsBarChild3, styles.optionsChildLayout]} />
      <View style={[styles.optionsBarChild4, styles.optionsChildLayout]} />
      <Image
        style={styles.iconFilterFunnel}
        contentFit="cover"
        source={require("../assets/icon--filter-funnel.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  giftTypo: {
    left: 52,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 30,
    letterSpacing: -0.2,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  miscTypo: {
    textAlign: "left",
    left: 52,
    color: Color.black,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 30,
    letterSpacing: -0.2,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  optionsChildPosition: {
    left: 22,
    position: "absolute",
  },
  frameItemLayout: {
    height: 19,
    width: 19,
    borderRadius: Border.br_7xs,
    borderWidth: 1,
    borderColor: Color.black,
    borderStyle: "solid",
    backgroundColor: Color.colorKhaki,
  },
  optionsChildLayout: {
    height: 1,
    width: 169,
    borderTopWidth: 1,
    borderColor: Color.colorDarkgray_100,
    position: "absolute",
    borderStyle: "solid",
  },
  filter: {
    top: 22,
    left: 58,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 30,
    letterSpacing: -0.2,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  request: {
    top: 72,
  },
  gift: {
    top: 103,
  },
  clothes: {
    top: 159,
  },
  decor: {
    top: 190,
  },
  textbooks: {
    top: 221,
  },
  furniture: {
    top: 252,
  },
  beauty: {
    top: 283,
  },
  misc: {
    top: 314,
  },
  active: {
    top: 375,
  },
  ended: {
    top: 406,
  },
  frameItem: {
    marginTop: 12,
  },
  rectangleParent: {
    top: 165,
  },
  optionsBarChild: {
    top: 381,
    left: 22,
    position: "absolute",
  },
  optionsBarItem: {
    top: 412,
    left: 22,
    position: "absolute",
  },
  optionsBarInner: {
    top: 78,
    left: 22,
    position: "absolute",
  },
  optionsBarChild1: {
    top: 109,
    left: 22,
    position: "absolute",
  },
  lineView: {
    top: 146,
    left: 0,
    height: 1,
    width: 169,
    borderTopWidth: 1,
    borderColor: Color.colorDarkgray_100,
  },
  optionsBarChild3: {
    top: 360,
    left: -2,
  },
  optionsBarChild4: {
    top: 65,
    left: 0,
    height: 1,
    width: 169,
    borderTopWidth: 1,
    borderColor: Color.colorDarkgray_100,
  },
  iconFilterFunnel: {
    top: 14,
    left: 7,
    width: 48,
    height: 48,
    position: "absolute",
    overflow: "hidden",
  },
  optionsBar: {
    borderRadius: Border.br_8xs,
    width: 168,
    height: 450,
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    borderWidth: 1,
    borderColor: Color.black,
    borderStyle: "solid",
    backgroundColor: Color.colorKhaki,
  },
});

export default OptionsBar;
