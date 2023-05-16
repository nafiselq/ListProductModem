import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ICHandphoneBlack } from '../../../assets'
import { AppColor } from '../../../utils/AppColor'

const Loading = () => {
  return (
    <View style={styles.container}>
      <Image source={ICHandphoneBlack} style={styles.icon} />
      <Text style={styles.textTitle}>Loading Product Data</Text>
      <Text style={styles.subText}>Please wait...</Text>
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -100
    },
    icon: {
        width: 48,
        height: 76,
        resizeMode: 'contain',
        marginBottom: 28
    },
    textTitle: {
     fontFamily: 'FiraSans-Bold',
     fontSize: 20,
     color: AppColor.blackColor   
    },
    subText: {
        fontFamily: 'FiraSans-Regular',
        fontSize:16,
        color: AppColor.greyColorText
    }
})