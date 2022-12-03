import React, { useState, PropTypes } from 'react'
// import icon from '../Assets/Icon'
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, Pressable } from 'react-native'

const Header = ({ title, navigation}) => {
    const [mode, setMode] = useState('mintcream');
    const openMenu = () => {

        navigation.openDrawer();

    }
    const changeTheme = () => {
        if (mode === 'mintcream') {
            setMode('black');

        }
        else {
            setMode('mintcream')
        }
        // console.log(mode)
    }
    return (
        <View>

            <View source={require('../Assets/bg_img1.jpg')} style={styles.header}>
                <TouchableOpacity onPress={openMenu}
                    style={styles.Image}>
                    <Image
                        source={require('../Assets/Icon.png')}

                    />
                </TouchableOpacity>
                <View>
                    <Text style={{
                        color: mode === 'mintcream' ? 'black' : 'green',
                        fontWeight: 'bold',
                        fontSize: 20,
                        letterSpacing: 1,

                    }}>{title}</Text>
                </View>
                <TouchableOpacity onPress={changeTheme}
                    style={styles.themeIcon}>
                    <Image
                        source={mode === 'mintcream' ? require('../Assets/darkIcon.png') : require('../Assets/brightIcon.png')}

                    />
                </TouchableOpacity>
            </View>


        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

    },
    Image: {
        position: 'absolute',
        left: 16,
    },
    themeIcon: {
        right: 16,
        position: 'absolute'
    },
})
export default Header