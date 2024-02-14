import * as React from 'react';
import {
  Text,
  Image,
  View,
  TouchableOpacity
} from 'react-native';
import {StackActions} from '@react-navigation/native';
export default function(props)
{
    return (
        <View
            style={{
                height: 60,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                backgroundColor: '#fff',
                alignItems: 'center',
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
                zIndex: 17,
                overflow: 'hidden',
                elevation: 50,
                shadowColor: '#000',    
            }}
        >
            <TouchableOpacity
                style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                // onPress={props.token ? ()=>props.navigation.dispatch(StackActions.replace('Profile')) : ()=>props.navigation.navigate('Main')}  
            >
                <Text style={{color: '#444444', fontSize: 14,fontFamily: Platform.OS === 'android' ? 'poppins_medium' : 'Poppins-Medium'}}>Lenta</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
                style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                // onPress={()=>props.navigation.navigate('Board',{id: props.id})}
            >
                <Text style={{color: '#444444', fontSize: 14, fontFamily: Platform.OS === 'android' ? 'poppins_medium' : 'Poppins-Medium'}}>Login</Text>
            </TouchableOpacity>
            
        </View>
    );
}