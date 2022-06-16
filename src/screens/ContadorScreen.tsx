import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import Fab from '../components/Fab';

const ContadorScreen = () => {

    const [contador, setContador] = useState<number>(10);
    return (
        <View
            style={style.container}
        >
            <Text
                style={style.title}
            >
                Contador: {contador}
            </Text>

            <Fab
                title="-1"
                onPress={ () => setContador(contador + 1) }
            />  
              
            <Fab
                title="+1"
                onPress={ () => setContador(contador + 1) }
                position= "br"
            />            
            
        </View>
    );
}


//Stylesb 
const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        textAlign: 'center',
        fontSize: 40,
        top: -15
    }
})

export default ContadorScreen