import React, { useRef, useState } from "react";
import {
  View,
  StyleSheet,
  
} from "react-native";
import StaffItem from "./staffItem";
import { FlatList } from "react-native-gesture-handler";
const StaffList = (props) => {
  const renderStaffItem = (itemData) => {
    return (
    <StaffItem
      status={itemData.item.status}
      description={itemData.item.description}
      place={itemData.item.place}
      phone={itemData.item.phone}
      time={itemData.item.time}
      url={itemData.item.url}
    />
  );
  }

  return(
    <View>
      <FlatList
        //เขียนโค้ดเพิ่ม
        style={{ width: "100%" }}
        data={props.listData}
        renderItem={renderStaffItem}
      />
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
    justifyContent: "space-around",
  },
});

export default StaffList;
