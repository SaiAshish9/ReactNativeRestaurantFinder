import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

import ImageDetail from '../components/ImageDetail'

const ImageScreen = () => {
    return (
        <View>
           
                    <ImageDetail
                    title={'beach'}
                    image={require('../assets/images/forest.jpg')}
                    />
                          <ImageDetail
                    title={'forest'}
                    image={require('../assets/images/beach.jpg')}
                    />
                              <ImageDetail
                    title={'mountain'}
                    image={require('../assets/images/mountain.jpg')}
                    />
            
        </View>
    )
}

const styles=StyleSheet.create({

})

export default ImageScreen
