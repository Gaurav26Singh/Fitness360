import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Image } from 'expo-image';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Anticons from 'react-native-vector-icons/AntDesign';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { ViewPropTypes } from 'deprecated-react-native-prop-types';
import { StatusBar } from 'expo-status-bar';
const val=""; 
export default function exerciseDetails() {
    const item = useLocalSearchParams();
    const router = useRouter();
  return (
    <View className="flex flex-1" style={{backgroundColor:"black"}}>
        <StatusBar barStyle="dark"></StatusBar>
        <View className="shadow-md bg-white rounded-b-[40px]">
            <Image  
                source={item.gifUrl}
                contentFit='cover'
                style={{width:wp(100), height: wp(100) }}
            />
        </View>

        <TouchableOpacity 
            onPress={()=> router.back()}
            className="mx-2 absolute rounded-full mt-12 right-0"
        >
            <Anticons name="closecircle" size={hp(4)} color="#f43f5e" />
        </TouchableOpacity>

        {/* details */}

        <ScrollView className="mx-4 space-y-2 mt-3" showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 60}}>
            <Animated.Text
                entering={FadeInDown.duration(300).springify()}
                style={{fontSize: hp(2.7), textTransform:"capitalize",textAlign:"center",paddingTop:12,paddingBottom:20}}
                className="font-bold tracking-wider text-rose-500"
            >
                {item.name}
            </Animated.Text>
            <Animated.Text
                entering={FadeInDown.delay(100).duration(300).springify()}
                style={{fontSize: hp(2)}}
                className=" text-neutral-100 tracking-wide"
            >
                Equipment: <Text className="font-bold text-neutral-100" style={{textTransform:"capitalize"}}>
                    {item?.equipment}
                </Text>
            </Animated.Text>
            <Animated.Text
                entering={FadeInDown.delay(200).duration(300).springify()}
                style={{fontSize: hp(2)}}
                className=" text-neutral-100 tracking-wide"
            >
                Secondary Muscles: <Text className="font-bold text-neutral-100" style={{textTransform:"capitalize"}}>
                    {item?.secondaryMuscles}
                </Text>
            </Animated.Text>
            <Animated.Text
                entering={FadeInDown.delay(300).duration(300).springify()}
                style={{fontSize: hp(2)}}
                className=" text-neutral-100 tracking-wide"
            >
                Target: <Text className="font-bold text-neutral-100" style={{textTransform:"capitalize"}}>
                    {item?.target}
                </Text>
            </Animated.Text>

            <Animated.Text
                entering={FadeInDown.delay(400).duration(300).springify()}
                style={{fontSize: hp(3.25) , paddingTop:20}}
                className="font-bold tracking-wider text-rose-500"
            >
                Instructions
            </Animated.Text>

            

            {
                item.instructions?.split(',').map((instruction, index)=>{
                    return (
                        <Animated.Text
                            entering={FadeInDown.delay((index+5)*100).duration(300).springify()}
                            key={instruction}
                            style={{fontSize: hp(1.8),textAlign:"justify",width:"95%"}}
                            className="text-neutral-100"
                        >
                           <Text className="font-bold tracking-wider text-rose-500" style={{fontSize:hp(2.2),lineHeight:40}} >Step {index}: </Text>{"\n"}{value = instruction.trim().charAt(0).toUpperCase() + instruction.trim().slice(1)}{value}
                        </Animated.Text>
                    )
                })
            }
        </ScrollView>
      
    </View>
  )
}