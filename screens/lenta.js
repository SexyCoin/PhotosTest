import * as React from 'react';
import { Text, View, TouchableOpacity, ScrollView, StyleSheet, Dimensions, FlatList, ImageBackground, Image, TextInput} from 'react-native';
import Layout from '../components/global/Layouts'
import { dataPhotoStore } from '../components/store/photoData';
export default class Lenta extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            navigation: props.navigation,
            dataPhotos: [],
            dataAllPhotos: [],
            searchedPtotos: [],
            limits: 10,
            offset: 0,
            maxLimits: 0,
            collum: 1,
            search: '',
            found: false,
            // noInterPhoto: []
        }
    }
    componentDidMount(){
        fetch('https://api.slingacademy.com/v1/sample-data/photos?offset=0&limit=10',{
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
        }).then((res)=>res.json()).then((res)=>{
            console.log('asdsad')
            console.log(res.total_photos)
            this.setState({dataPhotos: res.photos, maxLimits: res.total_photos, offset: this.state.limits, limits: this.state.limits+10})
            
            fetch('https://api.slingacademy.com/v1/sample-data/photos?offset=0&limit='+res.total_photos,{
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
            }).then((res)=>res.json()).then((res)=>{
                this.setState({dataAllPhotos: res.photos})
                
            }),
            (error) => {
                console.log(error);
            }  
        }),
        (error) => {
            console.log(error);
        }  
    }
    onSubmitted(){
        console.log(this.state.search)
        let srch = this.state.search
        function foundPhoto(value) {
            if(value.title.includes(srch) || value.description.includes(srch))
                return value
        }
        if(this.state.search)
        {
            let filtered = this.state.dataAllPhotos.filter(foundPhoto);
            if(filtered.length > 0)
                this.setState({searchedPtotos: filtered, found: true})
            else
                this.setState({searchedPtotos: filtered, found: true})
        }
        else
            this.setState({found: false})
        // console.log(filtered)
    }
    getNextPhotos(){
        if(this.state.maxLimits >= this.state.offset || this.state.maxLimits <= this.state.limits)
        {
            fetch('https://api.slingacademy.com/v1/sample-data/photos??offset='+ this.state.offset +'&limit='+this.state.limits ,{
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
            }).then((res)=>res.json()).then((res)=>{
                let dataPhotos = this.state.dataPhotos
                let newPhoto = res.photos

                let stepLastPhoto = []
                stepLastPhoto = this.state.dataPhotos.concat(res.photos);
                this.setState({dataPhotos: res.photos, offset: this.state.limits, limits: this.state.limits+10})
            }),
            (error) => {
                console.log(error);
            } 
        }
        
    }
    
    item(index){
        return(
            <TouchableOpacity style={{marginBottom: 10,}} onPress={()=> {dataPhotoStore.addDataPhoto(index), this.state.navigation.navigate('CardPhoto')}}>
                <Image style={this.state.collum == 1 ? {width: deviceWidth, height: 300, resizeMode: 'cover',} : {width: (deviceWidth-32)/2, height: 150, resizeMode: 'cover',}} source={{uri: index.url}}/>
            </TouchableOpacity>
        )
    }
    
    render(){
        
        return(
            <Layout navigation={this.state.navigation}  title="Lenta" >
                <View style={{paddingHorizontal: 16, flex: 1}}>

                    <View style={{flexDirection: 'row'}}>
                        <View style={{justifyContent: 'space-between', flexDirection: 'row', width: 50, borderBlockColor: '#000', borderWidth: 1, marginBottom: 10}}>
                            <TouchableOpacity onPress={()=>this.setState({collum: 1})} style={{ padding: 5}}>
                                <Text style={{fontSize: 20, color: '#000',fontFamily: Platform.OS === 'android' ? 'poppins_bold' : 'Poppins-Bold'}}>1</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.setState({collum: 2})} style={{ borderLeftWidth: 1, borderLeftColor: '#000', padding: 5}}>
                                <Text style={{fontSize: 20, color: '#000',fontFamily: Platform.OS === 'android' ? 'poppins_bold' : 'Poppins-Bold'}}>2</Text>
                            </TouchableOpacity>
                        </View>
                        <TextInput 
                              name="search"
                              autoComplete='username'
                              placeholder='Search'
                              placeholderTextColor={'#ACACAC'}
                              value={this.state.search}
                              onChangeText={(value) => this.setState({search: value})}
                              style={{width: '100%', color: '#000', fontSize: 24}}
                              onSubmitEditing = {() => this.onSubmitted()}
                        />
                    </View>
                    <View>
                        {
                            this.state.found ?
                                <FlatList  
                                    data={this.state.searchedPtotos}
                                    renderItem={({item}) =>this.item(item)}
                                    style={[{height: deviceHeight-190},this.state.collum == 2 && {width: deviceWidth,}, {marginBottom: 140}]}
                                    horizontal={false}
                                    numColumns={2}
                                    keyExtractor={item => item.id}
                                    contentContainerStyle={{}}
                                    onEndReachedThreshold={1}
                                    onMomentumScrollBegin = {() => {this.onEndReached = false;}}
                                    progressViewOffset={10}
                                    
                                />
                            :
                                <FlatList  
                                    data={this.state.dataPhotos}
                                    renderItem={({item}) =>this.item(item)}
                                    style={[{height: deviceHeight-190},this.state.collum == 2 && {width: deviceWidth,}, {marginBottom: 140}]}
                                    horizontal={false}
                                    numColumns={2}
                                    keyExtractor={item => item.id}
                                    contentContainerStyle={{}}
                                    onEndReachedThreshold={1}
                                    onMomentumScrollBegin = {() => {this.onEndReached = false;}}
                                    progressViewOffset={10}
                                    onEndReached = {() =>this.getNextPhotos()}
                                    
                                />
                        }
                    </View>
                </View>
            </Layout>
        )
    }
    
}
let deviceWidth = Dimensions.get('window').width
let deviceHeight = Dimensions.get('window').height