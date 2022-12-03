import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Clipboard, Alert } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const Home = (props) => {
    const [text, setText] = useState('')

    const onchangeHandler = (val) => {
        setText(val)
    }

    const uppercaseHandler = () => {
        let newtext = text.toUpperCase();
        setText(newtext)
    }

    const lowercaseHandler = () => {
        let newtext = text.toLowerCase();
        setText(newtext)

    }
    const delHandler = () => {
        Alert.alert(
            "Are Sure You To Delete Text",
            text,
            [
                {
                    text: "No",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "Yes", onPress: () => {
                        let newtext = ""
                        setText(newtext)
                    }
                }
            ]
        )
    }
    const copyHandler = () => {
        Alert.alert(
            "Your Copied Text Below",
            text,
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "Copy", onPress: () => {
                        let newtext = Clipboard.setString(text)
                        setText('')
                    }
                }
            ]
        )
    }
    const removeSpaces = () => {
        let newstr = text.replace(/\s+/g, ' ').trim(" ");
        setText(newstr);
    }
    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
        }}>
            <ScrollView style={{
                padding: 40,
                // backgroundColor:'blue'
                // backgroundColor: props.mode === 'mintcream' ? 'black' : 'mintcream'

            }}>
                {/* <Button  title='Toggle Drawer' onPress={()=>navigation.toggleDrawer()}/> */}
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        marginTop: 10,
                        color: 'black'
                    }}>
                    Text Utils
                </Text>
                <TextInput
                    multiline={true}
                    numberOfLines={10}
                    textAlignVertical='top'
                    placeholder='Start Writing.....'
                    style={styles.input}
                    onChangeText={onchangeHandler}
                    value={text}

                />
                <View style={styles.btn_group}>
                    <TouchableOpacity disabled={text.length === 0 ? true : false} onPress={removeSpaces}>
                        <Text style={styles.removespaces}>Remove Spaces</Text>
                    </TouchableOpacity>
                    <TouchableOpacity disabled={text.length === 0 ? true : false} onPress={uppercaseHandler}>
                        <Text style={styles.upper}>A</Text>
                    </TouchableOpacity>
                    <TouchableOpacity disabled={text.length === 0 ? true : false} onPress={lowercaseHandler}>
                        <Text style={styles.lower}>a</Text>
                    </TouchableOpacity>
                    <TouchableOpacity disabled={text.length === 0 ? true : false} onPress={delHandler}>
                        <Text style={styles.clear}>X</Text>
                    </TouchableOpacity>
                    <TouchableOpacity disabled={text.length === 0 ? true : false} onPress={copyHandler}>
                        <Text style={styles.copy}>C</Text>
                    </TouchableOpacity>

                </View>
                <View>
                    <Text style={styles.mheading}>Text Summary</Text>
                    <Text style={styles.heading}>{.008 * 60 * text.split(" ").length} Seconds Required to Read.</Text>
                </View>
                <View>
                    <Text style={styles.heading}>
                        {text.length} Characters And {text.split(" ").filter((element) => { return element.length !== 0 }).length} Words.
                    </Text>
                </View>
            </ScrollView>
        </TouchableWithoutFeedback>
    )

}

const styles = StyleSheet.create({
    input: {
        borderColor: 'black',
        borderWidth: 1,
        // borderRadius: 10,
        padding: 10,
        marginTop: 10,

    },
    heading: {
        fontSize: 15,
        fontWeight: '300',
        marginTop: 10,
        color: 'black'
    },
    mheading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        color: 'black'
        // alignSelf:'center'
    },
    btn_group: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'flex-start',
        marginBottom: 6,
        borderWidth: 1,
        borderTopWidth: 0,
        backgroundColor: 'mintcream',

    },
    removespaces: {
        fontSize: 15,
        fontWeight: "600",
        borderRightWidth: 1,
        paddingRight: 10,
        paddingLeft: 10,
        color: "black",
    }
    ,
    upper: {
        fontSize: 15,
        fontWeight: "600",
        borderRightWidth: 1,
        paddingRight: 10,
        paddingLeft: 10,
        color: "black",

    },
    lower: {
        fontSize: 15,
        fontWeight: "600",
        borderRightWidth: 1,
        paddingRight: 10,
        paddingLeft: 10,
        color: "black",
    },
    clear: {
        fontSize: 15,
        fontWeight: "600",
        borderRightWidth: 1,
        paddingRight: 10,
        paddingLeft: 10,
        color: "black",
    },
    copy: {
        fontSize: 15,
        fontWeight: "600",
        // borderRightWidth: 1,
        paddingRight: 10,
        paddingLeft: 10,
        color: "black",
    },
})

export default Home