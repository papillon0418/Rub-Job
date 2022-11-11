import Task from "../models/task";
import React from "react";
import { useEffect, useState } from "react";
import { onSnapshot } from "firebase/firestore";
import { firebase } from "../screens/FirebaseDB";
import { doc, getDocs } from "firebase/firestore";
import { View } from "react-native";

export const Dummy = () => {
  const [tasks, setTesks] = useState([]);
  const bobo = [];
  // const q = query(collection(db, "Fix_list"));
  const q = firebase.firestore().collection("Fix_test");
  useEffect(() => {
    onSnapshot(q, (querySnapshot) => {
      const taskin = [];
      querySnapshot.forEach((doc) => {
        const { status, description, place, phone, time, url } = doc.data();
        taskin.push({
          id: doc.id,
          description,
          place,
          phone,
          status,
          time,
          url,
        });
      });
      setTesks(taskin);
      // console.log(
      //   "Task List = ",
      //   taskin.filter((t) => t.status == "Request")
      // );
    });
  }, []);
  // console.log("ttttt === ", tasks);

  // const  querySnapshot = await getDocs(q);
  // querySnapshot.forEach((doc) => {
  // // console.log(doc.id, " => ", doc.data(), "------", doc.data().time );
  // console.log(doc.data())
  // return doc.data()
  // });

  // return querySnapshot;

  // console.log("Data task ===",tasks)
  return tasks;
};
