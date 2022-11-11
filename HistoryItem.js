import React, { useRef, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
const HistoryItem = (props) => {
  return(
    <View>
      <TouchableOpacity onPress={props.onSelectTask}>
        <View>
          {/* <Text
            style={{
              color: "#FF922E",
              fontSize: 18,
              marginBottom: "1%",
              marginLeft: "2%",
            }}
          >
            {props.status}
          </Text> */}
          {/* <View
            style={{
              borderBottomColor: "grey",
              borderBottomWidth: StyleSheet.hairlineWidth,
              marginBottom: "2%",
            }}
          /> */}
          <View style={styles.detail}>
            <Image
              style={{ width: 87, height: 87, marginLeft: "3%" }}
              source={{uri:(props.url)}}
            />
            <View style={styles.inner_detail}>
              <Text style={{ fontWeight: "500", fontSize: 18 }}>
                {props.description}
              </Text>
              <Text style={{ fontWeight: "500", fontSize: 18 }}>{props.place}</Text>
            </View>
            <Text style={{ fontWeight: "500", fontSize: 12, marginTop:15}}>{props.time}</Text>
          </View>
        </View>
      {/* </ScrollView> */}
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F6F2EC",
    height: "100%",
    width: "100%",
    //   alignItems: "center",
    //   justifyContent: "space-around",
  },
  nav: {
    // flex: 1,
    flexDirection: "row",
    width: "100%",
    height: 75,
    backgroundColor: "#8EE2FD",
    alignItems: "center",
    // flexWrap: "nowrap"
  },
  request_head: {
    width: 98,
    height: 22,
    left: 22,
    top: 82,

    // color: "#FF922E",
  },
  detail: {
    backgroundColor: "#D9D9D9",
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
    width:100,
    height:100,
    justifyContent: "space-around",
  },
});

export default HistoryItem;
