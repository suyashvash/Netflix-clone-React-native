import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ScrollView,FlatList,TouchableOpacity,Image } from 'react-native';
import { Icon } from 'react-native-elements'
import nT from '../assets/thumbs/naruto.jpg'
import pB from '../assets/thumbs/peakyBlinder.jpg'

const ShowDownloads = ({ url }) => (
  <TouchableOpacity style={styles.item}>
      <Image source={url} style={styles.showImage}/>
  </TouchableOpacity>
);


export default function downloadScreen() {
  return (
    <View style={styles.container}>
     
      <ScrollView style={styles.scroller}>
        <View style={styles.scrollWrapper}>
          <View style={styles.header}>
            <View style={styles.headContent}>
              <View style={styles.TextHolder}>
                  <Text style={styles.headerText}>Downloads</Text>
                  
              </View>
              <View style={styles.headBtnHolder}>
                  <Icon type='entypo' color={'white'} size={25} name={'user'} style={styles.headLogo}/>
                  <Icon type='feather'  color={'white'} size={25} name={'search'} style={styles.headLogo}/>  
              </View>
            </View>
          </View>

          <View style={styles.downloadFrame}>
            <View style={styles.downloadHolder}>
              <View style={styles.downloadImage}>
                    <Image source={nT} style={styles.showImage}/>
              </View>
              <View style={styles.downloadData}>
                <Text style={styles.showHead}>Naruto</Text>
                <Text style={styles.showEpi}>720 episodes</Text>
              </View>
            </View>

            <View style={styles.downloadHolder}>
              <View style={styles.downloadImage}>
                    <Image source={pB} style={styles.showImage}/>
              </View>
              <View style={styles.downloadData}>
                <Text style={styles.showHead}>Peaky Blinders</Text>
                <Text style={styles.showEpi}>30 episodes</Text>
              </View>
            </View>
            
            
          </View>




        </View>
      </ScrollView>

      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  scroller:{
    width:'99%',
    backgroundColor:'black',
  },

  scrollWrapper:{
    alignItems: 'center',
    justifyContent: 'center',
    
    
  },

  header:{
   
    
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',

    marginTop:30,
    height:50,
    
    
  },

  headContent:{
    flexDirection:'row',
  },

  TextHolder:{
    alignSelf:'flex-start',
    paddingLeft:20,
   flex:1,
   
  },

  headerText:{
    fontSize:21,
    color:'white',
    fontWeight:'bold',
  },

  headBtnHolder:{
  
    flexDirection:'row-reverse',
  
    flex:1,
    alignItems: 'center',
    
  },

  headLogo:{
    paddingHorizontal:10,
  },

  downloadFrame:{
  
    height:500,
    width:'100%',
    alignItems: 'center',
    marginTop:10,
    paddingTop:10,
    
  },

  downloadHolder:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    width:'80%',
    
    marginTop:15,
  },

  downloadImage:{
    height:150,
    width:110,
    borderRadius:8,
    overflow:'hidden',
    
  },

  downloadData:{
    width:'75%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft:20,
 
  },

  showHead:{
    color:'white',
    fontSize:23,
    marginVertical:10,
    fontWeight:'bold',
    

  },

  showEpi:{
    color:'grey',
    fontSize:18,
    
    
  },


  showImage:{
    width:'100%',
    height:'100%',
    
  },




});
