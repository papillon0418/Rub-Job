import React, { useEffect ,useRef, useState } from "react";
import {
  Animated,
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import { DATA } from "../data/dummy-data";
import { firebase } from "./FirebaseDB";
import StaffList from "../component_staff/staffList";
import { collection, query, where, onSnapshot, getDocs } from "firebase/firestore";
const Staff = (props) => {
  const [users, setUsers] = useState([]);
  // const q = query(collection(db, "Fix_list"));
  const q = firebase.firestore().collection("Fix_test");
  useEffect(() => {
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const users = [];
      querySnapshot.forEach((doc) => {
        const { status, description, place, phone, time, url } = doc.data();
        users.push({
          id: doc.id,
          description,
          place,
          phone,
          status,
          time,
          url,
        });
      });
      setUsers(users);
      console.log(
        "Fix List = ",
        users.filter((t) => t.status == "Pending")
      );
    });
  }, []);

  const pendingItem = users.filter((t) => t.status == "Pending");

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <Image
          style={{ width: 50, height: 50, marginLeft: "5%" }}
          source={require("../assets/image-15.png")}
        />
        <Text style={{ fontSize: 26, fontWeight: "bold", marginLeft: "3%" }}>
          Staff
        </Text>
      </View>
      <ScrollView>
        <View>
            {pendingItem.length > 0 &&
            <View>
            <Text
              style={{
                color: "black",
                fontSize: 18,
                margin:10,
                marginLeft: "2%",
                fontWeight: "500",
              }}
            >
              {"Pending (" + pendingItem.length + ")"}
            </Text>
            <View
              style={{
                borderBottomColor: "grey",
                borderBottomWidth: StyleSheet.hairlineWidth,
                // marginBottom: "2%",
              }}
            />
          </View>
          }
          <StaffList listData={pendingItem}></StaffList>
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

export default Staff;
