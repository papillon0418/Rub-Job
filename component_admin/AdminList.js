import React, { useRef, useState } from "react";
import {
  View,
  StyleSheet,
  
} from "react-native";
import AdminItem from "./AdminItem";
import { FlatList } from "react-native-gesture-handler";
const AdminList = (props) =>{
    const renderAdminItem = (itemData) => {
        return (
        <AdminItem
        id={itemData.item.id}
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
            renderItem={renderAdminItem}
          />
        </View>
      )
}
export default AdminList;