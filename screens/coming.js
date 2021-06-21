import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ScrollView,Image } from 'react-native';
import { Icon } from 'react-native-elements'

import ComingShow from './components/comingShows';

import rickMorty from '../assets/VideoThumb/rickMortyVideo.jpg'
import rV from '../assets/VideoThumb/rEvil.jpg'
import dADvo from '../assets/VideoThumb/dAdvo.jpg'
import aty from '../assets/VideoThumb/aty.jpg'
import thrR from '../assets/VideoThumb/13R.jpeg'

export default function comingSoonScreen() {
  return (
    <View style={styles.container}>
     
        <ScrollView style={styles.scroller}>
          <View style={styles.scrollWrapper}>

            <View style={styles.header}>
              <View style={styles.headContent}>
                <View style={styles.TextHolder}>
                    <Text style={styles.headerText}>Coming Soon</Text>
                </View>
                <View style={styles.headBtnHolder}>
                    <Icon type='entypo' color={'white'} size={25} name={'user'} style={styles.headLogo}/>
                    <Icon type='feather'  color={'white'} size={25} name={'search'} style={styles.headLogo}/>  
                </View>
              </View>
            </View>

            <ComingShow 
              showImage={rickMorty} 
              showName={'Rick and Morty'}
              showRel={'Season 5 coming on Monday'}
              showBio={"The fifth season of the animated television series Rick and Morty is currently in development at Adult Swim. It will consist of 10 episodes."}
              
              />

            <ComingShow 
              showImage={rV} 
              showName={'Resident Evil: Infinte Darkness'}
              showRel={'Season 1 coming on 8 July'}
              showBio={"Leon and Jason tasked by their government bosses with investigating an unexplained cyber attack on the White House and President Graham, which was then followed by zombies being let loose on the grounds"}
              
              />


            <ComingShow 
              showImage={dADvo} 
              showName={"The Devil's Advocate"}
              showRel={'Coming on 1 July'}
              showBio={"Kevin Lomax, a lawyer, gets a job with a law firm in New York. However, he soon realises that his employer is the devil himself and plans to torture him"}
              
              />

            <ComingShow 
              showImage={aty} 
              showName={"Atypical"}
              showRel={'Season 1 coming on 8 July'}
              showBio={"It focuses on the life of 18-year-old Sam Gardner (Keir Gilchrist), who has autism spectrum disorder. "}
              
              />


            <ComingShow 
              showImage={thrR} 
              showName={"13 Reasons Why"}
              showRel={'Season 1 coming on 8 July'}
              showBio={"13 Reasons Why follows teenager Clay Jensen as he returns home from school to find a mysterious box with his name on it lying on his porch. "}
              
              />

            

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





});
