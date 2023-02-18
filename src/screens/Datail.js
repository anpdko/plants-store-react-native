import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {View, Text, Image} from 'react-native'
import SwiperComponent from '../components/SwiperComponent';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Datail = ({navigation}) => {
   return (
      <View style={{
         backgroundColor: '#fff',
         flex:1
      }}>
         <View style={{
            flexDirection: 'row',
            width: '100%',
            height: "90%",
         }}>
            <View style={{
               paddingLeft: 20,
               paddingRight: 5,
               marginTop: 20,
               position: 'absolute',
               zIndex: 2
            }}>
               <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Image
                     source={require('../images/17.png')}
                     style={{marginVertical: 30}}
                  />
               </TouchableOpacity>
               <View style={{
                  backgroundColor: '#fff',
                  height: 50,
                  width: 50,
                  borderRadius: 5,
                  elevation: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 50
               }}>
                  <Image 
                     source={require('../images/11.png')}
                  />
               </View>
               <View style={{
                  backgroundColor: '#fff',
                  height: 50,
                  width: 50,
                  borderRadius: 5,
                  elevation: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 50
               }}>
                  <Image 
                     source={require('../images/12.png')}
                  />
               </View>
               <View style={{
                  backgroundColor: '#fff',
                  height: 50,
                  width: 50,
                  borderRadius: 5,
                  elevation: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 50
               }}>
                  <Image 
                     source={require('../images/13.png')}
                  />
               </View>
               <View style={{
                  backgroundColor: '#fff',
                  height: 50,
                  width: 50,
                  borderRadius: 5,
                  elevation: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 50
               }}>
                  <Image 
                     source={require('../images/14.png')}
                  />
               </View>
            </View>
            <View style={{width:"100%"}}>
               <SwiperComponent/>
            </View>
         </View>
         <View style={{
            flexDirection: "row",
            marginTop: -80,
            marginHorizontal: 20,
            alignItems: "center",
            justifyContent: "space-between"
         }}>
            <Text style={{
               fontWeight: "bold",
               fontSize: 28,
               color: '#62636a'
            }}>
               Angelica
            </Text>
            <Text style={{
               fontWeight: "bold",
               color: "#00a46c",
               fontSize: 20
            }}>
               $400
            </Text>
         </View>
         <Text style={{
            paddingHorizontal: 20,
            fontWeight: "bold",
            color: "#b1e5d3",
            fontSize: 20
         }}>
            UKRAINE
         </Text>
         <View style={{
            flexDirection: 'row',
            width: '100%',
            height:  "10%"
         }}>
            <View style={{
               width: '50%',
               backgroundColor: '#00a46c',
               height: "90%",
               marginTop: 20,
               borderTopRightRadius: 20,
               alignItems: 'center',
               justifyContent: "center"
            }}>
               <Text style={{
                  color: '#fff',
                  fontSize: 17
               }}>Buy Now</Text>
            </View>
            <View style={{
               width: '50%',
               height: "100%",
               alignItems: "center",
               justifyContent: "center",
               marginTop: 20
            }}>
               <Text style={{
                  color: "#62636a",
                  fontWeight: "bold",
                  fontSize: 17
               }}>Description</Text>
            </View>
         </View>
         <StatusBar hidden />
      </View>
   )
}

export default Datail;