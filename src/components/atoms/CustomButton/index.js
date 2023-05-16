import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AppColor } from '../../../utils/AppColor'

const CustomButton = ({ text, isReset, disabled, onPress }) => {
  return (
    <TouchableOpacity style={styles.container(isReset, disabled)} disabled={disabled} onPress={onPress}>
      <Text style={styles.text(isReset)}>{text}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
  container: (isReset, disabled) => ({
    width: '100%',
    height: 42,
    backgroundColor: isReset ? AppColor.whiteColor : disabled ? AppColor.greyColorButton : AppColor.blackColor,
    borderColor: isReset ? AppColor.blackColor : null,
    borderWidth: isReset ? 1 : null,
    borderRadius: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 11,
  }),
  text: isReset => ({
    color: isReset ? AppColor.blackColor : AppColor.whiteColor,
    fontSize: 16,
    fontFamily: 'FiraSans-Bold'
  })
})