import React, { useRef, useState, useEffect } from "react";
import {Text, View, StyleSheet, Button, TouchableOpacity, SafeAreaView, ScrollView, SectionList, StatusBar, Image } from "react-native";
import {DATA} from "../data/dummy-data";
import { collection, query, where, onSnapshot, getDocs } from "firebase/firestore";
import {firebase} from './FirebaseDB';
import AdminList from "../component_admin/AdminList";

const Admin = (props) => {
        const [users, setUsers] = useState([]);
        // const q = query(collection(db, "Fix_list"));
        const q = firebase.firestore().collection('Fix_test')
        useEffect( () =>{
          const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const users = [];
            querySnapshot.forEach((doc) => {
              const {status, description, place, phone, time, url} = doc.data();
                users.push({
                  id:doc.id,
                  description, place, phone, status, time, url
                });
                });
                setUsers(users)
                console.log("Fix List = ", users);  
          });
        },[])
        const requestItem = users.filter((t) => t.status == "Request");
        const pendingItem = users.filter((t) => t.status == "Pending");
        const successItem = users.filter((t) => t.status == "Success");
        const rejectItem = users.filter((t) => t.status == "Reject");
    return (
        <View style={styles.container}>
            <View style={styles.nav}>
                <Image
                style={{ width: 50, height: 50, marginLeft: "5%"}}
                source={require("../assets/image-15.png")}/>
                <Text style={{fontSize: 26, fontWeight: "bold", marginLeft: "3%"}}>Admin</Text>
            </View>
            <ScrollView>
                {/* <!--Request--> */}
            <View>
                {requestItem.length > 0 &&
                <View>
                    <Text style={{color: "black", fontSize:18, margin:10,marginLeft: "2%", fontWeight: "500"}}>{"Request (" + requestItem.length + ")"}</Text>
                    <View
                    style={{
                        borderBottomColor: 'grey',
                        borderBottomWidth: StyleSheet.hairlineWidth,
                        // marginBottom: "2%"
                    }}
                    />
                </View>
                } 
            <AdminList listData={requestItem} />     
            </View>
                {/* <!--Pending--> */}
            <View>
                {pendingItem.length > 0 &&
                <View>
                    <Text style={{color: "black", fontSize:18, margin:10,marginLeft: "2%", fontWeight: "500"}}>{"Pending (" + pendingItem.length + ")"}</Text>
                    <View
                    style={{
                        borderBottomColor: 'grey',
                        borderBottomWidth: StyleSheet.hairlineWidth,
                        // marginBottom: "2%"
                    }}
                    />
                </View>
                } 
            <AdminList listData={pendingItem} />     
            </View>
                {/* <!--Success--> */}
            <View>
                {successItem.length > 0 &&
                <View>
                    <Text style={{color: "black", fontSize:18, margin:10,marginLeft: "2%", fontWeight: "500"}}>{"Success (" + successItem.length + ")"}</Text>
                    <View
                    style={{
                        borderBottomColor: 'grey',
                        borderBottomWidth: StyleSheet.hairlineWidth,
                        // marginBottom: "2%"
                    }}
                    />
                </View>
                } 
            <AdminList listData={successItem} />     
            </View>
                {/* <!--Reject--> */}
            <View>
                {rejectItem.length > 0 &&
                <View>
                    <Text style={{color: "black", fontSize:18, margin:10, fontWeight: "500"}}>{"Reject (" + rejectItem.length + ")"}</Text>
                    <View
                    style={{
                        borderBottomColor: 'grey',
                        borderBottomWidth: StyleSheet.hairlineWidth,
                        // marginBottom: "2%"
                    }}
                    />
                </View>
                } 
            <AdminList listData={rejectItem} />     
            </View>
            </ScrollView>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#F6F2EC",
      height: "100%",
      width: "100%"
    //   alignItems: "center",
    //   justifyContent: "space-around",
    },
    nav:{
        // flex: 1,
        flexDirection: "row",
        width: "100%",
        height: 75,
        backgroundColor: "#8EE2FD",
        alignItems: "center"
        // flexWrap: "nowrap"
    },
    request_head:{
        width: 98,
        height: 22,
        left: 22,
        top: 82,
        
        // color: "#FF922E",
        
        
    },
    detail:{
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
    inner_detail:{
        // flexDirection: "column"
        justifyContent: "space-around",
        
    },
    inner_right:{
        justifyContent: "space-around"
    },
    button_c:{
        flexDirection: "row",
        // justifyContent: "space-between"
    },
    button:{
        
    // borderRadius: 20,
    // padding: 10,
    // marginBottom: 20,
    // shadowColor: '#303838',
    // shadowOffset: { width: 0, height: 5 },
    // shadowRadius: 10,
    // shadowOpacity: 0.35,
    width: 30,
    height: 30,
    margin:10
    }
});


export default Admin;