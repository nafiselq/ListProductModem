import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { CustomButton } from '../../atoms'
import { AppColor } from '../../../utils/AppColor'

const Footer = ({ total, onPressSubmit, onPressReset}) => {
    const [disabled, setDisabled] = useState(false);
    const [reset, setReset] = useState(false);

    useEffect(() => {
        if (total === 0 || total <= 0) {
            setDisabled(true);
            setReset(false);
        } else {
            setDisabled(false);
            setReset(true);
        }
    }, [disabled, reset, total]);

    return (
        <View style={styles.container}>
            <View style={styles.footerPrice}>
                <Text style={styles.total}>Total</Text>
                <Text style={styles.total}>Rp. {total}</Text>
            </View>
            <CustomButton text='Checkout' disabled={disabled} onPress={onPressSubmit} />
            {reset && <CustomButton text='Reset' isReset={reset} onPress={onPressReset} />}
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 'auto',
        backgroundColor: AppColor.whiteColor,
        padding: 24
    },
    footerPrice: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 6
    },
    total: {
        fontFamily: 'FiraSans-Bold',
        fontSize: 18,
        color: AppColor.blackColorPrice
    },
})