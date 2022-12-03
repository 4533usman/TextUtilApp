import React, { useState } from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
const About = () => {
    const [dev, setDev] = useState('none')
    const [about, setAbout] = useState('none')
    const aboutDeveloper = () => {
        if (dev === 'none') {
            setDev('flex')
        }
        else {
            setDev('none')
        }
    }
    const aboutApp = () => {
        if (dev === 'none') {
            setAbout('flex')
        }
        else {
            setAbout('none')
        }
    }
    return (
        <ScrollView
            style={{
                padding: 40
            }}>
            <View>
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        marginTop: 10,
                        color: 'black',
                        marginBottom: 10
                    }}>
                    Text UtilsApp
                </Text>
                <TouchableOpacity onPress={aboutApp}>
                    <Text
                        style={{
                            backgroundColor: 'lightseagreen',
                            fontSize: 17,
                            fontWeight: 'bold',
                            padding: 10,
                            borderBottomWidth: 1
                        }}>About The App</Text>
                </TouchableOpacity>
                <Text
                    style={{
                        display: about,
                    }}>
                    Here We Write The Text About The App
                </Text>
                <TouchableOpacity onPress={aboutDeveloper}>
                    <Text
                        style={{
                            backgroundColor: 'lightseagreen',
                            fontSize: 17,
                            fontWeight: 'bold',
                            padding: 10,
                            borderBottomWidth: 1
                        }}
                    >Developed By</Text>

                </TouchableOpacity>
                <Text style={{
                    display: dev,

                }}>
                    Here We Write The Text About The Developer
                </Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

})
export default About