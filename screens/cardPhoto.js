import * as React from 'react';
import { Text, View, TouchableOpacity, ScrollView, StyleSheet, Dimensions, FlatList, Modal, Image} from 'react-native';
import Layout from '../components/global/Layouts'
import ImageViewer from 'react-native-image-zoom-viewer';
import { dataPhotoStore } from '../components/store/photoData';
import { observer } from 'mobx-react';


class Lenta extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            navigation: props.navigation,
            // dataPhoto: props.route.params.dataPhoto,
            modalPhoto: false
        }
    }
    
    item(index){
        return(
            <TouchableOpacity style={{}}>
                <Image style={{width: deviceWidth, height: 300, resizeMode: 'cover',}} source={{uri: index.url}}/>
            </TouchableOpacity>
        )
    }
    
    render(){

        return(
            <Layout navigation={this.state.navigation}  title="Board" >
                <ScrollView style={{paddingHorizontal: 16, marginBottom: 10}}>
                    <View>
                        <TouchableOpacity onPress={()=>this.setState({modalPhoto: true})}>
                            <Image style={{width: deviceWidth, height: deviceWidth, resizeMode: 'contain',}} source={{uri: dataPhotoStore.data.url}}/>
                            {/* <Image style={{width: deviceWidth, height: deviceWidth, resizeMode: 'contain',}} source={{uri: this.state.dataPhoto.url}}/> */}
                        </TouchableOpacity>
                        <Text style={{fontFamily: Platform.OS === 'android' ? 'poppins_bold' : 'Poppins-Bold', textAlign: 'center', fontSize: 24, color: "#000",}}>{dataPhotoStore.data.title}</Text>
                        <Text style={{fontFamily: Platform.OS === 'android' ? 'poppins_regular' : 'Poppins-Regular', textAlign: 'center', fontSize: 20, color: "#000", marginTop: 10}}>{dataPhotoStore.data.description}</Text>
                        <Text style={{fontFamily: Platform.OS === 'android' ? 'poppins_regular' : 'Poppins-Regular', textAlign: 'center', fontSize: 16, color: "#000", marginTop: 10}}>User ID - {dataPhotoStore.data.user}</Text>
                        <Text style={{fontFamily: Platform.OS === 'android' ? 'poppins_regular' : 'Poppins-Regular', textAlign: 'center', fontSize: 16, color: "#000", marginTop: 10}}>Photo ID - {dataPhotoStore.data.id}</Text>
                    </View>
                </ScrollView>
                <Modal visible={this.state.modalPhoto} transparent={true}>
                    <TouchableOpacity onPress={()=>this.setState({modalPhoto: false})} style={{backgroundColor: '#000',width: 32, height: 32, position: 'absolute', right: 20, top: 20, zIndex: 1,}}>
                        <Image source={require("../assets/close.png")} style={{width: 24, height: 24}}/>
                        {/* <Text style={{fontFamily: Platform.OS === 'android' ? 'poppins_bold' : 'Poppins-Bold', fontSize: 80, color: "#fff",}}>X</Text> */}
                    </TouchableOpacity>
                    <ImageViewer imageUrls={[{url: dataPhotoStore.data.url,}]}>
                        

                    </ImageViewer>
                </Modal>
            </Layout>
        )
    }
    
}
export default Lenta
let deviceWidth = Dimensions.get('window').width
let deviceHeight = Dimensions.get('window').height