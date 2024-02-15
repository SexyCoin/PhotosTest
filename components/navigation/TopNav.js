import React, {useState} from 'react';
import {
  Text,
  View,
} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function(props)
{
    const Tab = createBottomTabNavigator();
    return (
        <View>
            <View
                style={{
                    height: 60,
                    flexDirection: 'row',
                    backgroundColor: '#fff',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingHorizontal: 8,
                }}
            >

                
                
                    {/* {props.withBack ?
                        <TouchableOpacity onPress={ ()=>props.navigation.goBack()} style={{flexDirection: 'row',  alignItems: 'center'}}>
                            <Image style={{width: 20, height: 20, }} source={require("../../assets/left-arrow.png")}/>
                        </TouchableOpacity>
                        :
                        <View></View>    
                    } */}
                    
                    
                    <Text  style={{fontSize: 24, color: '#17093a', justifyContent: 'center', fontFamily: Platform.OS === 'android' ? 'poppins_bold' : 'Poppins-Bold', textAlign: 'center'}}>
                        PhotoTest 
                    </Text>
            
            </View>
        </View>
    );
}