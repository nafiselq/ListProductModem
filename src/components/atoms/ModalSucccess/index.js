import { Dimensions, Modal, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppColor } from '../../../utils/AppColor'
import CustomButton from '../CustomButton'

const ModalSuccess = ({ visibility, onPress, sumProducts, totalPrice }) => {
    return (
        <Modal
            animationType='fade'
            visible={visibility}
            transparent={true}
        >
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.label}>Success!</Text>
                    <Text style={styles.title}>You have successfully purchase {sumProducts} products with total of Rp. {totalPrice}. Click close to buy another modems</Text>
                    {/* <Image source={SuccessRating} style={{ width: 236, height: 236 }} /> */}
                    <CustomButton text='Close' onPress={onPress} />
                </View>
            </View>
        </Modal>
    )
}

export default ModalSuccess

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0, 25, 62, 0.5)'
    },
    content: {
        // margin: 20,
        backgroundColor: "white",
        borderRadius: 8,
        padding: 16,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: Dimensions.get('window').width - 30,
        height: 'auto'
    },
    label: {
        fontSize: 20,
        fontFamily: 'FiraSans-Bold',
        color: AppColor.blackColor,
        marginBottom: 14    
    },
    title: {
        fontFamily: 'FiraSans-Regular',
        fontSize: 16,
        color: AppColor.blackColor,
        textAlign: 'auto',
        marginBottom: 24
    },
})