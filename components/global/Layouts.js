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
    const[uved, setUved] = React.useState(null)
    const[first, setFirst] = React.useState(null)
    const[second, setSecond] = React.useState(null)
    const[error, setError] = React.useState(null)
    const[token, setToken] = React.useState(null)
    const[id, setId] = React.useState(props.id)
    const[notific, setNotifics] = React.useState()
    let not;

    // React.useEffect(() => {
 
   
    return(
        <View style={styles.container}>
            
            <TopNav
                navigation={props.navigation}
                title={props.title}

                withBack={props.withBack ? true : false}
            />
        

            {props.children}
        
                
            
            {/* <BottomNav
                navigation={props.navigation}     
            /> */}
            
           
            
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
        
        // opacity: 0
    }
})