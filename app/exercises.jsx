import {View,Text, TouchableOpacity } from 'react-native';

import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { fetchExercisesByBodypart } from '../api/exerciseDB';
import { demoExercises } from '../constants';
import { StatusBar } from 'expo-status-bar';
import { Image } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ExerciseList from '../components/ExerciseList';
import { ScrollView } from 'react-native-virtualized-view'

export default function Exercises() {
    const router = useRouter();
    const [exercises, setExercises] = useState([]);
    const item = useLocalSearchParams();
    // console.log('got item: ', item);

    useEffect(()=>{
        if(item) getExercises(item.name);
    },[item]);

    const getExercises = async (bodypart)=>{
        let data = await fetchExercisesByBodypart(bodypart);
        setExercises(data);
    }
  return (
    <ScrollView style={{backgroundColor:"black"}}>
        <StatusBar style="light" />
        <View style={{borderBottomWidth:2, borderColor:"white"}}>
        <Image 
            source={item.image}
            style={{width: wp(100), height: hp(45),}}
        />
        </View>
        <TouchableOpacity
            onPress={()=> router.back()}
            className="bg-rose-500 mx-4 absolute flex justify-center items-center pr-1 rounded-full"
            style={{height: hp(5.5), width: hp(5.5), marginTop: hp(7)}}
        >
                 <Ionicons name="caret-back-outline" size={hp(4)} color="white" />
        </TouchableOpacity>

        {/* Exercises */}
        <View className="mx-4 space-y-3 mt-4">
            <Text style={{fontSize: hp(2.6),textAlign:"center",paddingBottom:10,paddingTop:15}} className="font-semibold text-neutral-100">
                {item.name.toUpperCase()} EXERCISES
            </Text>
            <View className="mb-10">
                <ExerciseList data={exercises} />
            </View>
        </View>
    </ScrollView>
  )
}