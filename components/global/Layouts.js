import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,Dimensions
} from 'react-native';
import TopNav from '../navigation/TopNav';
import BottomNav from '../navigation/BottomNav';

export default function (props){
    return(
        <View style={styles.container}>
            
            <TopNav
                navigation={props.navigation}
                title={props.title}
                withBack={props.withBack ? true : false}
            />
        

                {props.children}
        
                
            
            <BottomNav
                navigation={props.navigation}     
            />
            
           
            
        </View>
    )
}
let deviceWidth = Dimensions.get('window').width
let deviceHeight = Dimensions.get('window').height
const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
    }
})