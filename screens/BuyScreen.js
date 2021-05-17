import React from 'react'
import{View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import MyHeader from '../components/MyHeader'
export default class BuyScreen extends React.Component{
    render(){
        return(
            <View>
                <MyHeader title="NS App"/>
                <FlatList/>
            </View>
        )
    }
}