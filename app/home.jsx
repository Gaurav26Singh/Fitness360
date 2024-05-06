import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImageSlider from '../components/ImageSlider';
import BodyParts from '../components/BodyParts';
import { ViewPropTypes } from 'deprecated-react-native-prop-types';
export default function Home() {
 
  return (
    <SafeAreaView className="flex-1 bg-black flex space-y-5" edges={['top']}>
      
      <StatusBar barStyle="light"></StatusBar>

      {/* punchilne and avatar */}
      <View className="flex-row justify-between items-center mx-5">
        <View className="space-y-2">
            <Text
                style={{fontSize: hp(4.5)}}
                className="font-bold tracking-wider text-neutral-100"
            >
                READY TO
            </Text>
            <Text
                style={{fontSize: hp(4.5)}}
                className="font-bold tracking-wider text-rose-500"
            >
                SWEAT-HARD...
            </Text>
        </View>

        <View className="flex justify-center items-center space-y-2">
            <Image 
                source={require('../assets/images/logoo.png')}
                style={{height: hp(7), width: hp(7)}} 
                className="rounded-full"
            />
           
        </View>
      </View>

      {/* image slider */}
      <View>
        <ImageSlider />
      </View>

        {/* body parts list */}
      <View className="flex-1">
        <BodyParts />
      </View>


    </SafeAreaView>
  )
}