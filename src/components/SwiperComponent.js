import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Swiper from 'react-native-swiper';

const SwiperComponent = () => {
   return(
      <Swiper
         style={styles.wrapper}
         dotStyle={{
            marginTop: -200,
            width: 15,
            height: 5,
            borderRadius: 10,
            backgroundColor: '#fff'
         }}
         activeDotColor="#fff"
         activeDotStyle={{
            marginTop: -200,
            width: 30,
            height: 6,
            borderRadius: 10,
            backgroundColor: '#fff',
            activeDotColor: '#fff'
         }}
      >
         <View style={styles.slide}>
            <Image
               source={require('../images/img.png')}
               style={{
                  marginLeft: 120,
                  marginBottom:130,
                  height: 720,
                  width: "120%",
                  marginTop: 60,
                  resizeMode: 'stretch'
               }}
            />
         </View>
         <View style={styles.slide}>
            <Image
               source={require('../images/img2.png')}
               style={{
                  marginLeft: 120,
                  marginBottom:130,
                  height: 720,
                  width: "120%",
                  marginTop: 60,
                  resizeMode: 'stretch'
               }}
            />
         </View>
         <View style={styles.slide}>
            <Image
               source={require('../images/img.png')}
               style={{
                  marginLeft: 120,
                  marginBottom:130,
                  height: 720,
                  width: "120%",
                  marginTop: 60,
                  resizeMode: 'stretch'
               }}
            />
         </View>

      </Swiper>
   )
}

const styles = StyleSheet.create({
   wrapper: {},
   slide: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff'
   }
})

export default SwiperComponent