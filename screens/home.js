import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ScrollView,Image,TouchableOpacity,FlatList } from 'react-native';
import { Icon } from 'react-native-elements'
import { LinearGradient } from 'expo-linear-gradient';


import ShowGrid from './components/showGrid';

import logo from '../assets/netflixN.png'
import banner from '../assets/thumbs/johnWick.jpg'
import bB from '../assets/thumbs/breakingBad.jpg'
import bN from '../assets/thumbs/brooklynNine.jpg'
import dD from '../assets/thumbs/dareDevil.jpg'
import dark from '../assets/thumbs/dark.png'
import dS from '../assets/thumbs/demonSlayer.jpg'
import frN from '../assets/thumbs/friends.jpg'
import jW from '../assets/thumbs/johnWick.jpg'
import jK from '../assets/thumbs/jujutsuKaisen.jpg'
import luCi from '../assets/thumbs/lucifer.jpg'
import mH from '../assets/thumbs/moneyHeist.jpg'
import nT from '../assets/thumbs/naruto.jpg'
import pB from '../assets/thumbs/peakyBlinder.jpg'
import pnS from '../assets/thumbs/punisher.jpg'
import rM from '../assets/thumbs/rickMorty.jpg'
import sT from '../assets/thumbs/strangerThings.jpg'
import suits from '../assets/thumbs/suits.jpeg'

const TVshows = [
  {id: 'tv1',showUrl: bB,},
  {id: 'tv2',showUrl: bN,},
  {id: 'tv3',showUrl: dD,},
  {id: 'tv4',showUrl: dark,},
  {id: 'tv5',showUrl: dS,},
  {id: 'tv6',showUrl: frN,},
  {id: 'tv7',showUrl: jW,},
  {id: 'tv8',showUrl: sT,},
  {id: 'tv9',showUrl: pB,},
  {id: 'tv10',showUrl: jK,},
  {id: 'tv11',showUrl: mH,},
]

const TrendingNow = [
  {id: 'trending1',showUrl: sT,},
  {id: 'trending2',showUrl: pB,},
  {id: 'trending3',showUrl: jK,},
  {id: 'trending4',showUrl: dark,},
  {id: 'trending5',showUrl: mH,},
  {id: 'trending6',showUrl: frN,},
  {id: 'trending7',showUrl: rM,},
]

const MyList = [
  {id: 'my1',showUrl: luCi,},
  {id: 'my2',showUrl: nT,},
  {id: 'my3',showUrl: pnS,},
  {id: 'my4',showUrl: suits,},
  {id: 'my5',showUrl: mH,},
  {id: 'my6',showUrl: frN,},
  {id: 'my7',showUrl: rM,},
]

const Recommended = [
  {id: 'rec1',showUrl: suits,},
  {id: 'rec2',showUrl: dark,},
  {id: 'rec3',showUrl: frN,},
  {id: 'rec4',showUrl: suits,},
  {id: 'rec5',showUrl: jK,},
  {id: 'rec6',showUrl: frN,},
  {id: 'rec7',showUrl: sT,},
]


export default function homeScreen() {




  return (
    <View style={styles.container}>
     
        <ScrollView style={styles.scroller}>
          <View style={styles.scrollWrapper}>

            <View style={styles.bigFrame}>
              <Image source={banner} style={styles.bannerPic}/>
              <LinearGradient colors={['black',"transparent" ]} style={styles.header}>
                <View style={styles.headContent}>
                    <View style={styles.logoHolder}>
                        <Image source={logo} style={{width:50,height:50}}/>
                    </View>
                    <View style={styles.headBtnHolder}>
                        <Icon type='entypo' color={'white'} size={25} name={'user'} style={styles.headLogo}/>
                        <Icon type='feather'  color={'white'} size={25} name={'search'} style={styles.headLogo}/>  
                    </View>

                </View>
                

                <View style={styles.catBtn}>
                  <Text style={styles.catText}>TV Shows</Text>
                  <Text style={styles.catText}>Movies</Text>
                  <Text style={styles.catText}>My List</Text>
                </View>

              </LinearGradient>  
              
              <LinearGradient colors={['transparent','#0008',"black" ]} style={styles.bannerPlay}>
                  <View style={styles.gener}>
                    <Text style={styles.genreText}>Action</Text>
                    <Text style={styles.genreText}>Neo-noir</Text>
                    <Text style={styles.genreText}>Thriller</Text>
                    <Text style={styles.genreText}>Crime</Text>
            
                  </View>
                  <View style={styles.BannerBox}>
                    <TouchableOpacity style={styles.bannerBtnSide}>
                      <Icon type='ant-design' color={'white'} size={25} name={'plus'}/>
                      <Text style={styles.sideBtnText}>My List</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.showPlay}>
                      <Icon type='entypo' color={'black'} size={35} name={'controller-play'}/>
                      <Text style={styles.playBtn}>Play</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.bannerBtnSide}>
                      <Icon type='feather' color={'white'} size={25} name={'info'}/>
                      <Text style={styles.sideBtnText}>My List</Text>
                    </TouchableOpacity>
            
                  </View>
              </LinearGradient>
              
            </View>

            <View style={styles.thumbFrame}>
              <ShowGrid title={'TV Shows'} showList={TVshows} />
              <ShowGrid title={'Trending Now'} showList={TrendingNow} />
              <ShowGrid title={'My List'} showList={MyList} />
              <ShowGrid title={'Recommended'} showList={Recommended} />
              
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

  bigFrame:{
    width:'98%',
    height:530,
    backgroundColor:'black',
    marginTop:30,
  },

  bannerPic:{
    width:'100%',
    height:'100%',
    resizeMode: 'stretch',
  },

  header:{
    position:'absolute',
    top:0,
    left:0,
    right:0,
    
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  headContent:{
    flexDirection:'row',
  },

  logoHolder:{
    alignSelf:'flex-start',
    paddingLeft:20,
   flex:1,
   
  },

  headBtnHolder:{
  
    flexDirection:'row-reverse',
  
    flex:1,
    alignItems: 'center',
    
  },

  headLogo:{
    paddingHorizontal:10,
  },


  catBtn:{
    flexDirection:'row',

    width:'80%',
    alignItems: 'center',
    justifyContent: 'center',
    height:50,
    paddingTop:10,

  },

  catText:{
    flex:1,
    fontSize:18,
    color:'white',
    textAlign:'center',
  },


  bannerPlay:{
    position: 'absolute', //Here is the trick
      bottom: 0, //Here is the trick
      width:"100%",
      height:100,
      alignItems: 'center',
    justifyContent: 'center',
  },

  gener:{
    flexDirection:'row',
    width:'90%',
    alignItems: 'center',
    justifyContent: 'center',
  
    
    
  },

  BannerBox:{
    flexDirection:'row',
    width:'90%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:20,
    
    
  },

  genreText:{
    flex:1,
    fontSize:15,
    color:'white',
    textAlign:'center',
  },

  bannerBtnSide:{
    flex:1
  },

  sideBtnText:{
    color:'white',
    textAlign:'center',
  },

  showPlay:{

    width:'30%',
    height:'90%',
    flexDirection:'row',
    backgroundColor:'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:5,

  },

  playBtn:{
    fontWeight:'bold',
    fontSize:18,
  },




  thumbFrame:{
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical:10,
    marginTop:10,
  },

  

  







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
