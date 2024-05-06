import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { bodyParts } from '../constants';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { StatusBar } from 'expo-status-bar';

export default function BodyParts() {
    const router = useRouter();
  return (
    <View className="mx-4" style={{marginBottom:50}}>
      <StatusBar style="light" />
      <Text style={{fontSize: hp(3),marginBottom:10}} className="font-semibold text-neutral-100">
        Exercises
      </Text>

      <FlatList
        data={bodyParts}
        numColumns={2}
        keyExtractor={item=> item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 50, paddingTop: 20}}
        columnWrapperStyle={{
            justifyContent: 'space-between'
        }}
        renderItem={({item, index})=> <BodyPartCard router={router} index={index} item={item} />}
      />
    </View>
  )
}

const BodyPartCard = ({item, router, index})=>{
    return (
        <Animated.View entering={FadeInDown.duration(400).delay(index*200).springify()}>
            <TouchableOpacity
                onPress={()=> router.push({pathname: '/exercises', params: item})}
                style={{width: wp(44), height: wp(52)}}
                className="flex justify-end p-1 mb-4">
                    <Image 
                        source={item.image}
                        resizeMode='cover'
                        style={{width: wp(44), height: wp(52), borderWidth:3, borderColor:"white"}}
                        className="rounded-[10px] absolute"
                    />
                  

                    <Text
                        style={{fontSize: hp(2.3),textTransform:"capitalize",backgroundColor:"rgba(0, 0, 0, 0.5)",paddingBottom:8,paddingTop:8}}
                        className="text-white font-semibold text-center tracking-wide"
                    >
                        {item?.name}
                    </Text>
            </TouchableOpacity>
        </Animated.View>
    )
}