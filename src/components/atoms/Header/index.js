import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppColor } from '../../../utils/AppColor'
import { ICHandphoneWhite } from '../../../assets'

const Header = ({ isLoading, totalProduct}) => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Image source={ICHandphoneWhite} style={styles.icon} />
                <View>
                    <Text style={styles.title}>Product List</Text>
                    {
                        !isLoading
                            ?
                            <Text style={styles.subTitle}>{totalProduct} Products</Text>
                            :
                            null
                    }
                </View>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColor.headerColor,
        height: 94,
        width: Dimensions.get('window').width,
        paddingLeft: 20,
        justifyContent: 'center',
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        width: 19,
        height: 29,
        resizeMode: 'contain',
        marginRight: 22
    },
    title: {
        fontFamily: 'FiraSans-Bold',
        color: AppColor.whiteColor,
        fontSize: 20
    },
    subTitle: {
        fontFamily: 'FiraSans-Regular',
        fontSize: 16,
        color: AppColor.whiteColor
    }
})