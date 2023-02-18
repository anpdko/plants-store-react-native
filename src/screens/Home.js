import React, { useState } from 'react';
import {View, Text, Image, SafeAreaView, StyleSheet} from 'react-native'
import { TextInput, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';

const Home = ({navigation}) => {
   const [data, setData] = useState([
      { 
         id: 1, title: 'SAMANTHA', price: 300, 
         img: require('../images/4.png'), 
         navigate: 'datail1',
         country: 'UKRAINE'
      },
      { 
         id: 2, title: 'ANGELICA', price: 200, 
         img: require('../images/6.png'), 
         navigate: 'datail2',
         country: 'UKRAINE'
      },
      { 
         id: 3, title: 'SAMANTHA', price: 500, 
         img: require('../images/5.png'),
         navigate: 'datail3',
         country: 'UKRAINE'
      }
   ])

   const [imgs, setImges] = useState([
      {id: 1, img: require("../images/18.png")},
      {id: 2, img: require("../images/19.png")}
   ])

   return (
      <SafeAreaView style={styles.container}>
         <View style={{
            backgroundColor: "#fff",
            flex: 1
         }}>
            <View style={styles.header}>
               <Image
                  source={require('../images/1.png')}
                  style={styles.imgBurgerMenu}
               />
               <View style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 25,
                  width: "100%"
               }}>
                  <View style={{ width: "50%" }}>
                     <Text style={styles.headerText}>
                        Hi Uishopy
                     </Text>
                  </View>
                  <View style={{width:"50%", alignItems: "flex-end"}}>
                     <Image
                        source={require('../images/g.png')}
                        style={{height: 60, width: 60}}
                     />
                  </View>
               </View>
            </View>
            <LinearGradient
               colors={["rgba(0,164,109,0.4)", "transparent"]}
               style={{ left: 0, right: 0, height: 90, marginTop:-45 }}
            >
               <View style={styles.boxShearch}> 
                  <TextInput 
                     placeholder='Shearch'
                     placeholderTextColor="#b1e5d3"
                     style={styles.inputShearch}
                  />
                  <Image
                     source={require('../images/3.png')}
                     style={{height: 20, width: 20}}
                  />
               </View>
            </LinearGradient>

            <ScrollView>
               <View style={styles.boxSubTitle}>
                  <View>
                     <Text style={styles.subTitleText}>
                        Recommended
                     </Text>
                     <View style={styles.lineText}></View>
                  </View>
                  <View style={styles.btnMore}>
                     <Text style={styles.btnMoreText}>More</Text>
                  </View>
               </View>

               <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
               >
                  <LinearGradient
                     colors={["rgba(0,164,109,0.09)", "transparent"]}
                     style={styles.cardsGradient}
                  />
                  {data.map(item => 
                     <TouchableOpacity
                        onPress={()=> navigation.navigate('datail')}
                        style={styles.cardRecom}
                        key={item.id}
                     >
                        <Image
                           source={item.img}
                           style={{}}
                        />
                        <View style={styles.boxInfoCard}>
                           <Text style={styles.titleText}>
                              {item.title}
                           </Text>
                           <Text style={styles.priceText}>
                              ${item.price}
                           </Text>
                        </View>
                        <Text style={styles.countryText}>
                           {item.country}
                        </Text>
                     </TouchableOpacity> 
                  )}
                  <View style={{marginLeft: 20}}></View>
               </ScrollView>
               <View style={styles.boxSubTitle}>
                  <View>
                     <Text style={styles.subTitleText}>
                        Featured Plants
                     </Text>
                     <View style={styles.lineText}></View>
                  </View>
                  <View style={styles.btnMore}>
                     <Text style={styles.btnMoreText}>More</Text>
                  </View>
               </View>
               <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  style={styles.scrollBoxImg}
               >
                  {imgs.map(item =>
                     <Image
                        key={item.id}
                        source={item.img}
                        style={{
                           borderRadius: 10, 
                           marginRight: 20
                        }}
                     />
                  )}
               </ScrollView>
            </ScrollView>
         <StatusBar hidden />
      </View>
      </SafeAreaView>
   )
}

export default Home;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
   },
   scrollView: {
     backgroundColor: 'pink',
     marginHorizontal: 20,
   },
   headerText: {
      fontSize: 28,
      color: "#fff",
      fontWeight: "bold",
   },
   titleText: {
      fontWeight: 'bold',
   },
   priceText:{
      fontWeight: 'bold',
      color: "#00a46c"
   },
   countryText:{
      paddingHorizontal: -10,
      fontWeight: 'bold',
      color: '#b1e5d3',
      paddingTop: 3,
      paddingHorizontal: 10
   },
   header: {
      backgroundColor: "#00a46c",
      height: "25%",
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      paddingHorizontal: 20
   },
   imgBurgerMenu: {
      height: 10,
      width: 20,
      marginTop: 30
   },
   inputShearch: {
      fontWeight: "bold",
      fontSize: 18,
      width: 260
   },
   cardsGradient: {
      position: "absolute",
      left: 0,
      right: 0,
      height: 100,
      marginTop: 210,
      top: 0
   },
   cardRecom: {
      height: 250,
      elevation: 2,
      backgroundColor: '#fff',
      marginLeft: 20,
      marginTop: 20,
      borderRadius: 15,
      marginBottom: 10,
      width: 160
   },
   boxInfoCard: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop: 10,
      paddingHorizontal: 10
   },
   btnMore: {
      backgroundColor: '#00a46c',
      paddingHorizontal: 20,
      paddingVertical: 5,
      borderRadius: 15,
   },
   btnMoreText:{
      fontWeight: "bold",
      fontSize: 13,
      color: "#fff"
   },
   lineText: {
      height: 3,
      backgroundColor: '#b1e5d3',
      width: "100%",
      marginTop: -3
   },
   subTitleText:{
      fontWeight: 'bold',
      fontSize: 17,
      color: "#585a61"
   },
   boxShearch:{
      backgroundColor:"#fff",
      paddingVertical: 8,
      paddingHorizontal: 20,
      marginHorizontal: 20,
      borderRadius: 15,
      marginTop: 25,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: 'space-between'
   },
   boxSubTitle:{
      flexDirection: 'row',
      paddingHorizontal: 20,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-between'
   },
   scrollBoxImg: {
      marginBottom: -100,
      paddingLeft: 20,
      marginTop: 20,
      height: 300
   }
 });