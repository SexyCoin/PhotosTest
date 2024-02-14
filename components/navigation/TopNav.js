import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Image,
  View,
  TouchableOpacity
} from 'react-native';


import { StackActions, CommonActions } from '@react-navigation/native';

export default function(props)
{
    const [openDopMenu, setOpenDopMenu] = useState(false)
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
                
               
                    {/* <View style={{flexDirection: 'row',width: 24, height: 24, }}> 
                    </View>     */}
            </View>
        </View>
    );
}