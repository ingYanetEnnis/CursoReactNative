import React, {Component} from "react";

import {Icon, Input, Divider, Card, Text} from 'react-native-elements';
import { Image, Alert, Button, TextInput, View, StyleSheet } from 'react-native';
const img = require('../../assets/logoP.jpg');
import { MaterialCommunityIcons } from 'react-native-vector-icons';

export default class Login extends Component{
    constructor(props){
        super(props)
        this.state={
            userName:'',
            userEmail:'',
            userPassword:''
        }
    }

    render() {
        return (
            <View style={{ flex: 1}}>

                <Image
                    source={require('../../assets/logoA.jpg')}
                    style={styles.backgroundImage}

                ></Image>
                <Card containerStyle = {{marginBottom: 400}}
                      title='Login'>
                    <Input
                        placeholder='Email'
                        leftIcon={
                            <Icon
                                type='Fontisto'

                                name='email'
                                size={24}
                                color='black'
                            />
                        }
                    />
                    <Input
                        placeholder='Password'
                        leftIcon={
                            <MaterialCommunityIcons name='textbox-password'  size={24}/>
                        }
                    />
                    <Button
                        icon={<Icon name='code' color='#ffffff' />}
                        title='Login' />
                </Card>
            </View>


        )
    }
}
const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
        alignItems: "center",
        justifyContent: "center",
        opacity: 0.2

    },
    view:{
        flex:1 ,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color:"#00a680",
        textTransform: "uppercase",
        textAlign: 'center',
        backgroundColor: 'rgba(0,0,0,0)',
        fontSize: 32
    },
    container: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        marginTop: 75,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
    },
})
