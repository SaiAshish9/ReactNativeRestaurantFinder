 import React from 'react'
import {View,Text,TextInput,StyleSheet} from 'react-native'
import {Feather} from '@expo/vector-icons'
import {withNavigation} from 'react-navigation'

const SearchScreen = ({ navigation}) => {
    return (
        <View style={styles.background}>
            <Feather 
            style={styles.iconStyle}
            name="search"
            size={30}
            />
            <TextInput
            style={styles.inputStyle}
            placeholder="Search"
            value={navigation.getParam('name')}
            />
        </View>
    )
}

const styles=StyleSheet.create({
    background:{
        backgroundColor:'#F0EEEE',
        padding:20,
        flexDirection:'row',
        borderRadius:5,
        margin:10,
    
    },
    inputStyle:{
        flex:1,
        fontSize:18
    },
    iconStyle:{
        fontSize:35,
        alignSelf:'center',
        marginHorizontal:15
    }
})

export default withNavigation(SearchScreen)
