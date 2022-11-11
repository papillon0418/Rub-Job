import React, { useRef, useState } from "react";
import {
  View,
  StyleSheet,
} from "react-native";
import Historyitem from "../components/HistoryItem";
import { FlatList } from "react-native-gesture-handler";
const HistoryTile = (props) => {
  const renderHistoryItem = (itemData) => {
    return (
    <Historyitem
      id={itemData.item.id}
      status={itemData.item.status}
      description={itemData.item.description}
      place={itemData.item.place}
      phone={itemData.item.phone}
      time={itemData.item.time}
      url={itemData.item.url}
      onSelectTask={() => {
        props.navigation.navigate("Detail", {taskId: itemData.item.id})
      }}
    />
  );
  }

  return(
    <View>
      <FlatList
        //เขียนโค้ดเพิ่ม
        style={{ width: "100%" }}
        data={props.listData}
        renderItem={renderHistoryItem}
      />
    </View>
    // <View>
    //     <View data={props.listData}>
    //       {/* <Text
    //         style={{
    //           color: "#FF922E",
    //           fontSize: 18,
    //           marginBottom: "1%",
    //           marginLeft: "2%",
    //         }}
    //       >
    //         {props.status}
    //       </Text> */}
    //       <View
    //         style={{
    //           borderBottomColor: "grey",
    //           borderBottomWidth: StyleSheet.hairlineWidth,
    //           marginBottom: "2%",
    //         }}
    //       />
    //       <View style={styles.detail}>
    //         <Image
    //           style={{ width: 87, height: 87, marginLeft: "3%" }}
    //           source={require("../assets/cat.jpg")}
    //         />
    //         <View style={styles.inner_detail}>
    //           <Text style={{ fontWeight: "500", fontSize: 18 }}>
    //             {props.description}
    //           </Text>
    //           <Text style={{ fontWeight: "500", fontSize: 18 }}>{props.place}</Text>
    //         </View>
    //         <Text style={{ fontWeight: "500", fontSize: 12 }}>{props.phone}</Text>
    //       </View>
    //     </View>
    //   {/* </ScrollView> */}
    // </View>
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

export default HistoryTile;
