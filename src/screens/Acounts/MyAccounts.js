import React, {useStatem, useEffect, useState} from "react";
import * as firebase from "firebase";
import UserGuest from "./UserGuest";
import UserLogged from "./UserLogged";
import {View, Text} from 'react-native';
import Loading from "../../components/Loading";


export default function MyAccounts() {

    const [login, setLogin ] = useState(null);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            !user ? setLogin(false) : setLogin(true);
        })
    }, [])

    if (login ===  null){
        return (<Loading isVisible={true} text="Cargando"/>)
    }
    return  login ? <UserLogged/> : <UserGuest/>
}