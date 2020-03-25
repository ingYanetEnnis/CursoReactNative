import * as React from 'react';
import {StyleSheet, View, ScrollView, Text, Image} from "react-native";
import {Button} from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';

function UserGuest() {
    const navigation = useNavigation();
    //quiero saber pq aqui funciona asi y no pasando props o en la documentacion que dice que debo poner
    // UserGuest({navigation})
    //
    return (
        <ScrollView style={styles.viewBody} centerContent={true}>
            <Image style={styles.image}
                source={require('../../../assets/logoA.jpg')}
                resizeMode="contain"
            />
            <Text style={styles.title}>
                Consulta tu perfil
            </Text>
            <View style={styles.viewBtn}>
                <Button
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    title="Ver tu perfil"
                    onPress={() => console.log("Hello ")}
                >

                </Button>
            </View>
        </ScrollView>
    );
}
export default UserGuest;
const styles = StyleSheet.create({
    viewBody:{
        marginLeft: 30,
        marginRight: 30
    },
    image:{
        height: 300,
        width:"100%"
    },
    title:{
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 20,
        marginTop: 20,
        textAlign: "center"
    },
    viewBtn:{
        flex: 1,
        alignItems: "center"
    },
    btnStyle: {
        backgroundColor: "#00a680"
    },
    btnContainer:{
        width: "70%"
    }
})