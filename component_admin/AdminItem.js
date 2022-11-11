import React, { useEffect, useRef, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  Modal
} from "react-native";
import {firebase} from '../screens/FirebaseDB';
import {doc, updateDoc} from 'firebase/firestore'
import { Button } from "react-native-web";
const AdminItem = (props) => {
    const [id, setId] = useState("");
    const [status, setStatus] = useState("Pending");
    const [isPending, setIsPending] = useState(false);
    const [isReject, setIsReject] = useState(false);
    const [showModal, setShowModal] = useState(false)
    const dbRef = firebase.firestore().collection('Fix_test');
    const [ isPress, setIsPress ] = React.useState(false);
    let ref_id = "";

    const ChangeStatusPending = () =>{
        ref_id = props.id;
        const dref = doc(dbRef, ref_id)  
        updateDoc(dref,{
           status : "Pending"
        })
        console.log("ref id ====" + ref_id)  
    }

    const setShow = () =>{
        ChangeStatusPending()
    }
    const ChangeReject = () =>{
        ref_id = props.id;
        // console.log(ref_id)
        const dref = doc(dbRef, ref_id)
         // console.log("Match!!!")
        updateDoc(dref,{
           status : "Reject"
        })
        console.log(props) 
    }
    
    useEffect(()=>{
        setId(props.id);
        console.log(id);
        if(props.status == "Pending"){
            setIsPending(true)
            setIsReject(true);
        }
        if(props.status == "Reject"){
            setIsReject(true);
            setIsPending(true);
        }
        // setIsPending(isPending);
        
    },[])
    // onPress={ChangeReject}
  return (
    <View>
      <Modal transparent={true} visible={showModal} >
        <View style={styles.modal}>
          <View style={styles.modal_inner}>
            <View style={{backgroundColor: "#ffffff", }}>
              <Text >Are u sure about that?</Text>
            </View>
            <View>
              <Button title="Confirm" onPress={ChangeStatusPending} ></Button>
              <Button title="Cancel" onPress={() => setShowModal(false)}></Button>
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.detail}>
        <View >
        <Image
          style={{ width: 100, height: 100, marginLeft: "3%"}}
          source={{uri:(props.url)}}
        />
        </View>
        <View style={styles.inner_detail}>
          <Text style={{ fontWeight: "500", fontSize: 14 }}>{props.description}</Text>
          <Text style={{ fontWeight: "500", fontSize: 14 }}>{props.place}</Text>
        </View>
        <View style={styles.inner_right}>
          <Text style={{ fontWeight: "500", fontSize: 14, marginLeft: 15 , marginTop:10}}>
            {props.time}
          </Text>
          <View style={styles.button_c}>
            <TouchableHighlight onPress={() => setShowModal(true)} disabled={isPending}>
              {isPending?<Image
                style={styles.button_hide}
                source={require("../assets/image-7.png")}
              /> : 
              <Image
              style={styles.button}
              source={require("../assets/image-7.png")}
            /> } 
                         
            </TouchableHighlight>
            {/* Cancel */}
            <TouchableOpacity onPress={() => setShowModal(true)} disabled={isReject}>
                {isReject?<Image
                style={styles.button_hide}
                source={require("../assets/image-9.png")}
              />:<Image
                style={styles.button}
                source={require("../assets/image-9.png")}
              />}
              
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = new StyleSheet.create({
    detail:{
        backgroundColor: "#FFFFFF",  
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 15,
        height: 131,
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
    margin:10,
    },
    button_hide:{
        width: 30,
    height: 30,
    margin:10,
    opacity:0
    },
    modal:{
      backgroundColor: "rgba(0, 0, 0, 0.1)", 
      flex:1, 
      // margin:50
    },
    modal_inner:{
      width: 331,
      height: 238,
      borderRadius: 10
    }
})
export default AdminItem;
