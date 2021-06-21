import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image,TouchableOpacity ,FlatList} from 'react-native';
import { Icon } from 'react-native-elements'


const ShowItem = ({ url }) => (
    <TouchableOpacity style={styles.item}>
        <Image source={url} style={styles.showImage}/>
    </TouchableOpacity>
  );


export default function ShowThumbnails({showList}) {
const renderShow = ({ item }) => (
    <ShowItem url={item.showUrl}/>
    );

  return (
        <FlatList
            horizontal={true}
            data={showList}
            renderItem={renderShow}
            keyExtractor={item => item.id}
        />
  );
}

const styles = StyleSheet.create({
  

  item:{
    width:110,
    height:150,
    borderRadius:8,
    overflow:'hidden',
    margin:10,
  },

  showImage:{
    width:'100%',
    height:'100%',
    
  },




});
