import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AppColor } from '../../../utils/AppColor'

const ItemListProducts = ({ label, price, count, handleDecrement, handleIncrement }) => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <Text style={styles.label}>{label}</Text>
                <Text style={styles.price}>{price}</Text>
            </View>
            <View style={{ backgroundColor: '#F6F6F6', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 177, paddingHorizontal: 8, borderRadius: 8 }}>
                <TouchableOpacity style={styles.box} onPress={handleDecrement}>
                    <Text style={styles.func}>-</Text>
                </TouchableOpacity>
                <Text style={styles.count}>{count}</Text>
                <TouchableOpacity style={styles.box} onPress={handleIncrement}>
                    <Text style={styles.func}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ItemListProducts

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 25
    },
    label: {
        fontFamily: 'FiraSans-Bold',
        fontSize: 16,
        marginBottom: 7,
        color: AppColor.blackColor
    },
    price: {
        fontFamily: 'FiraSans-Bold',
        fontSize: 14,
        color: AppColor.greyColorText
    },
    box: {
        height: 32,
        width: 32,
        backgroundColor: AppColor.blackColor,
        borderRadius: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    func: {
        color: AppColor.whiteColor,
        fontSize: 18
    },
    count: {
        fontFamily: 'FiraSans-Regular',
        fontSize: 20,
        color: AppColor.blackColor
    }
})