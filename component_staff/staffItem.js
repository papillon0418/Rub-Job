import React, { useRef, useState, } from "react";
import { Text, View, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
const StaffItem = (props) => {
  return (
    <View>
      <View>
        <View style={styles.detail}>
          <Image
            style={{ width: 87, height: 87, marginLeft: "3%" }}
            source={{uri:(props.url)}}
          />
          <View style={styles.inner_detail}>
            <Text style={{ fontWeight: "500", fontSize: 14 }}>{props.description}</Text>
            <Text style={{ fontWeight: "500", fontSize: 14 }}>{props.place}</Text>
          </View>
          <View style={styles.inner_right}>
            <Text style={{ fontWeight: "500", fontSize: 14 }}>{props.time}</Text>
            <TouchableOpacity activeOpacity={0.5}>
              <Image
                style={{ width: 30, height: 30 }}
                source={require("../assets/image-13.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* </ScrollView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F6F2EC",
    height: "100%",
    width: "100%",
    //   alignItems: "center",
    //   justifyContent: "space-around",
  },
  detail: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "2%",
    height: 110,
    // border: "1px solid rgba(0, 0, 0, 0.1)",
    // border: "1px solid rgba(0, 0, 0, 0.2)",
    borderBottomColor: "rgba(0, 0, 0, 0.1)",
    borderBottomWidth: 2,
  },
  inner_detail: {
    // flexDirection: "column"
    justifyContent: "space-around",
  },
  inner_right: {
    justifyContent: "space-around",
  },
});

export default StaffItem;
