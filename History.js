import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Text,
  View,
  StyleSheet,
  Button,
  Easing,
  SafeAreaView,
  ScrollView,
  SectionList,
  StatusBar,
  Image,
} from "react-native";
import {
  collection,
  query,
  where,
  onSnapshot,
  getDocs,
} from "firebase/firestore";
// import { collection, query, where, onSnapshot } from "firebase/firestore";
// import { db } from "./FirebaseDB";
import HistoryTile from "../components/HistoryTile";
// import { TASKS } from "../data/dummy-task";
import { firebase } from "./FirebaseDB";
import {Dummy} from "../data/test";
const History = ({ route, navigation }) => {
  const [users, setUsers] = useState([]);
  // const DataTest = [tasks.map(=> x) ]
  const q = firebase.firestore().collection("Fix_test");
  let box = Dummy();

  // useEffect(() => {

  //   const unsubscribe = onSnapshot(q, (querySnapshot) => {
  //     const users = [];
  //     querySnapshot.forEach((doc) => {
  //       const {status, description, place, phone, time, url } = doc.data();
  //       users.push({
  //         id:doc.id,
  //         description,
  //         place,
  //         phone,
  //         status,
  //         time,
  //         url,
  //       });
  //     });
  //     setUsers(users);
  //     console.log(
  //       "Fix List = ",
  //       users.filter((t) => t.status == "Request")
  //     );
  //   });
  //   // const querySnapshot = getDocs(q);
  //   // querySnapshot.forEach((doc) => {
  //   //   // doc.data() is never undefined for query doc snapshots
  //   //   console.log(doc.id, " => ", doc.data());
  //   // });

  // }, []);
  // console.log("data === ", box)

  const requestItem = box.filter((t) => t.status == "Request");
  const pendingItem = box.filter((t) => t.status == "Pending");
  const successItem = box.filter((t) => t.status == "Success");
  const rejectItem = box.filter((t) => t.status == "Reject");
  
  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <Image
          style={{ width: 50, height: 50, marginLeft: "5%" }}
          source={require('../assets/his-nav.png')}
        />
        {/* <Image
          style={{ width: 50, height: 50, marginLeft: "5%" }}
          source={hisnav_img}
        /> */}
        <Text style={{ fontSize: 26, fontWeight: "bold", marginLeft: "3%" }}>
          My History
        </Text>
      </View>
      <ScrollView>
        <View>
          {requestItem.length > 0 && (
            <View>
              <Text
                style={{
                  color: "#FF922E",
                  fontSize: 18,
                  margin:10,
                  marginLeft: "2%",
                }}
              >
                {"Request" + "(" + requestItem.length + ")"}
              </Text>
              <View
                style={{
                  borderBottomColor: "grey",
                  borderBottomWidth: StyleSheet.hairlineWidth,
                  // marginBottom: "2%",
                }}
              />
            </View>
          )}
          <HistoryTile listData={requestItem} navigation={navigation}/>
        </View>
        <View>
          {pendingItem.length > 0 && (
            <View>
              <Text
                style={{
                  color: "#FF922E",
                  fontSize: 18,
                  margin:10,
                  marginLeft: "2%",
                }}
              >
                {"Pending" + "(" + pendingItem.length + ")"}
              </Text>
              <View
                style={{
                  borderBottomColor: "grey",
                  borderBottomWidth: StyleSheet.hairlineWidth,
                  // marginBottom: "2%",
                }}
              />
            </View>
          )}
          <HistoryTile listData={pendingItem} navigation={navigation}/>
        </View>
        <View>
          {successItem.length > 0 && (
            <View>
              <Text
                style={{
                  color: "#FF922E",
                  fontSize: 18,
                  margin:10,
                  marginLeft: "2%",
                }}
              >
                {"Success" + "(" + successItem.length + ")"}
              </Text>
              <View
                style={{
                  borderBottomColor: "grey",
                  borderBottomWidth: StyleSheet.hairlineWidth,
                  // marginBottom: "2%",
                }}
              />
            </View>
          )}
          <HistoryTile listData={successItem} navigation={navigation}/>
        </View>
        <View>
          {rejectItem.length > 0 && (
            <View>
              <Text
                style={{
                  color: "#FF922E",
                  fontSize: 18,
                  margin:10,
                  marginLeft: "2%",
                }}
              >
                {"Reject" + "(" + rejectItem.length + ")"}
              </Text>
              <View
                style={{
                  borderBottomColor: "grey",
                  borderBottomWidth: StyleSheet.hairlineWidth,
                  // marginBottom: "2%",
                }}
              />
            </View>
          )}
          <HistoryTile listData={rejectItem} navigation={navigation}/>
        </View>
      </ScrollView>
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

export default History;
