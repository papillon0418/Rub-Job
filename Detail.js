import React, {useEffect, useState} from "react";
import {
  Animated,
  Text,
  View,
  StyleSheet,
  Button,
  Easing,
  Image,
  
} from "react-native";
import { firebase } from "./FirebaseDB";
import { onSnapshot, query, where, collection } from "firebase/firestore";
import Task from "../models/task";
import { Dummy } from "../data/test";
// import { db } from "./FirebaseDB";
const Detail = ({route, navigation,}) => {
  const taskId = route.params.taskId.toString();
  const [users, setUsers] = useState([]);
  // const tasks = [];
  const [task, setTask] = useState("");
  // const q = query(collection(db, "Fix_list"));
  // const dbRef = firebase.firestore().collection('Fix_test');
  const box = Dummy();
  console.log("box == " , box)
  const dataTask = box.filter((t) => t.id == taskId)
  console.log("Datatask === ", dataTask[0])
  // setTask(dataTask[0])
  useEffect(() => {
    // setId(taskId);
    // const q = query(collection(db, "Fix_test"));
    // onSnapshot(dbRef, (querySnapshot) => {
    //   const users = [];
    //   querySnapshot.forEach((doc) => {
    //     const {status, description, place, phone, time, url } = doc.data();
    //     users.push({
    //       id:doc.id,
    //       description,
    //       place,
    //       phone,
    //       status,
    //       time,
    //       url,
    //     });
    //   });
    //   setUsers(users);
    //   console.log(
    //     "Data fecth = ",
    //     users
    //   );
    //   const dataTask = users.filter((t) => t.id == taskId)
    //   setTask(dataTask[0])
    //   const tasks = Object.values(dataTask[0]);
    //   console.log(
    //     "task = ", tasks
    //   );
    //   console.log(dataTask[0].id)
    // //set Task
        
    // });
    // console.log("Data Detail Task == ", box)
    setTask(dataTask)
  }, []);
  // console.log("Detail Task === ", task)

  // console.log("Tasksss ===== ", task.id)
  
  
  // console.log("entries === " , )
  // const requestItem = users.filter((t) => t.status == "Request");
  // console.log("req item == " + requestItem)

  return (
    <View style={styles.container}>
      <View style={styles.topSec}>
        <Image
          style={{ width: 50, height: 50, marginLeft: "5%" }}
          source={require("../assets/image-19.png")}
        />
        <Text style={{ fontSize: 26, fontWeight: "bold", marginLeft: "3%" }}>
          Detail
        </Text>
      </View>
      <View style={styles.imageSec}>
        <Image
          style={{
            width: 230,
            height: 230,
            marginLeft: "5%",
            borderRadius: 15,
          }}
          // source={{uri:(task.url)}}
        />
      </View>
      <View style={styles.detailSec}>
        <View style={styles.detailSecLeft}>
          <Text style={styles.header}>คำอธิบายปัญหา</Text>

          <Text style={styles.header}>สถานที่</Text>

          <Text style={styles.header}>วันที่</Text>

          <Text style={styles.header}>ช่องทางการติดต่อ</Text>
        </View>
        <View style={styles.detailSecRight}>
          {/* <Text style={styles.subHeader}>{dataTask[0].description}</Text>

          <Text style={styles.subHeader}>{dataTask[0].place}</Text>

          <Text style={styles.subHeader}>{dataTask[0].time}</Text>

          <Text style={styles.subHeader}>{dataTask[0].phone}</Text> */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#F6F2EC",
  },
  topSec: {
    width: "100%",
    height: 75,
    backgroundColor: "#8EE2FD",
    flexDirection: "row",
    alignItems: "center",
  },
  imageSec: {
    width: "100%",
    height: "35%",
    marginTop: 20,
    // backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  detailSec: {
    marginTop: 15,
    width: "100%",
    height: "45%",
    // backgroundColor: "red",
    flexDirection: "row",
    // justifyContent: "space-around",
  },
  detailSecLeft: {
    height: "100%",
    width: "50%",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  detailSecRight: {
    height: "100%",
    width: "50%",
    flexDirection: "column",
    justifyContent: "space-around",
    // backgroundColor: "blue",
  },
  //   detailGrid: {
  //     flexDirection: "column",
  //   },
  header: {
    marginLeft: "10%",
    fontSize: 18,
    fontWeight: 600,
  },
  subHeader: {
    marginLeft: "12.5%",
    fontSize: 18,
    fontWeight: 500,
  },
});

export default Detail;
