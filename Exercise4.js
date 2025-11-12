// Exercise4
import React from "react";
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'whitesmoke',
        marginTop: 30,
        justifyContent: 'space-evenly',
        alignItems: 'center',

    },
    child: {
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

const Exercise4 = () => {
    return (
        <View style={styles.parent}>
            <View style={[styles.child, {backgroundColor:'skyblue'}]}>
                <Text>Square 1</Text>
            </View>
            <View style={[styles.child, {backgroundColor:'mediumseagreen'}]}>
                <Text >Square 2</Text>
            </View>
            <View style={[styles.child, {backgroundColor:'lightcoral'}]}>
                <Text>Square 3</Text>
            </View>
        </View>
    );
};

export default Exercise4;

