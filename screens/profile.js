import * as React from 'react';
import { Text, View, TouchableOpacity, ScrollView, StyleSheet, Dimensions, FlatList, ImageBackground, Image, TextInput} from 'react-native';
import Layout from '../components/global/Layouts';
export default class Authorization extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            navigation: props.navigation,
            password: '',
            login: '',
            errorLogin: false,
            errorPassword: false,
            authorization: false
        }

    }

    login(){
        if(this.state.login != "login")
        {
            this.setState({errorLogin: true})
        }
        else if(this.state.password != "password")
        {
            this.setState({errorPassword: true, errorLogin: false})
        }
        else{
            this.setState({errorPassword: false, errorLogin: false, authorization: true})
        }
    }
    render() {
        return(
                <ScrollView style={{paddingHorizontal: 10}}>
                    {this.state.authorization ?
                    <View>
                        <Text style={{fontFamily: Platform.OS === 'android' ? 'poppins_bold' : 'Poppins-Bold', textAlign: 'center', fontSize: 24, color: "#000",marginBottom: 20, marginTop: 20}}>Вы авторизовались</Text>
                    </View>
                    :
                    <View style={{}}>

                            <Text style={{fontFamily: Platform.OS === 'android' ? 'poppins_bold' : 'Poppins-Bold', textAlign: 'center', fontSize: 24, color: "#000",marginBottom: 20, marginTop: 20}}>Авторизация</Text>
                            
                            <TextInput 
                                name="search"
                                autoComplete='username'
                                placeholder='Login'
                                placeholderTextColor={'#ACACAC'}
                                value={this.state.login}
                                onChangeText={(value) => this.setState({login: value})}
                                style={{width: '100%', color: '#000', fontSize: 24, }}
                                onSubmitEditing = {() => this.onSubmitted()}
                            />
                            <View style={{width: deviceWidth, height: 2, backgroundColor: '#000'}}></View>
                            <Text style={this.state.errorLogin ? {fontFamily: Platform.OS === 'android' ? 'poppins_medium' : 'Poppins-Medium', textAlign: 'center', fontSize: 18, color: "#FF4500", marginTop: 10} : {display: 'none'}}>Неверный логин</Text>
                            <TextInput 
                                name="search"
                                autoComplete='username'
                                placeholder='Password'
                                placeholderTextColor={'#ACACAC'}
                                value={this.state.password}
                                onChangeText={(value) => this.setState({password: value})}
                                style={{width: '100%', color: '#000', fontSize: 24, marginTop: 20}}
                                onSubmitEditing = {() => this.onSubmitted()}
                            />
                            <View style={{width: deviceWidth, height: 2, backgroundColor: '#000'}}></View>
                            <Text style={this.state.errorPassword ? {fontFamily: Platform.OS === 'android' ? 'poppins_medium' : 'Poppins-Medium', textAlign: 'center', fontSize: 18, color: "#FF4500", marginTop: 10} : {display: 'none'}}>Неверный пароль</Text>

                            <TouchableOpacity style={{borderRadius: 15, borderBlockColor: "#000", borderWidth: 2,marginTop: 30, paddingVertical: 10}} onPress={()=>this.login()}>
                                <Text style={{fontFamily: Platform.OS === 'android' ? 'poppins_bold' : 'Poppins-Bold', textAlign: 'center', fontSize: 24, color: "#4682B4", }}>Авторизироваться</Text>
                            </TouchableOpacity>
                    </View>
                    }
                </ScrollView>
        )
    }
}
let deviceWidth = Dimensions.get('window').width
let deviceHeight = Dimensions.get('window').height