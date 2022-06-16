import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet, TouchableNativeFeedback, Platform } from 'react-native';

interface Props {
    title: string,
    onPress: () => void,
    position?: 'br' | 'bl'
}

const Fab = ({ title, onPress, position = 'bl' }: Props) => {

    const ios = () => {
        return <TouchableOpacity
            activeOpacity={0.5}
            style={[
                style.fabLocation,
                position === 'br' ? style.right : style.left
            ]}
            onPress={onPress}
        >

            <View
                style={style.fab}
            >
                <Text style={style.fabText}>{title}</Text>
            </View>
        </TouchableOpacity>
    }

    const android = () => {
        return (
            <View
                style={[
                    style.fabLocation,
                    position === 'br' ? style.right : style.left
                ]}
            >
                <TouchableNativeFeedback
                    onPress={onPress}
                    background={TouchableNativeFeedback.Ripple('black', false, 30)}
                >
                    <View
                        style={style.fab}
                    >
                        <Text style={style.fabText}>{title}</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    }

    return (Platform.OS === 'ios') ? ios() : android();
}

const style = StyleSheet.create({
    fabLocation: {
        position: 'absolute',
        bottom: 25,

    },
    right: {
        right: 25
    },
    left: {
        left: 25
    },
    fabLocationsBR: {
        position: 'absolute',
        bottom: 25,
        right: 25
    },
    fabLocationsBL: {
        position: 'absolute',
        bottom: 25,
        left: 25
    },
    fab: {
        backgroundColor: "#5856D6",
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },
    fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
})
export default Fab;