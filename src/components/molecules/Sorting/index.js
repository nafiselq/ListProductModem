import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { ICSort } from '../../../assets'
import { AppColor } from '../../../utils/AppColor'
import DropDownPicker from 'react-native-dropdown-picker'

const Sorting = ({onChangeValue}) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Highest Prirce', value: 'high' },
        { label: 'Lowest Price', value: 'lowest' },
        { label: 'Name', value: 'name' }
    ]);

    return (
        <View style={{
            paddingHorizontal: 20
        }}>
            <View style={styles.content}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={ICSort} style={styles.icon} />
                    <Text style={styles.text}>Sort By:</Text>
                </View>
                <View style={{ marginBottom: 30}}>
                    <DropDownPicker
                        style={styles.dropdown}
                        listItemContainerStyle={styles.listDropdown}
                        listItemLabelStyle={{ color: AppColor.blackColor, fontSize: 13, fontFamily: 'FireSans-Regular' }}
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        onChangeValue={onChangeValue}
                        placeholder='Default'
                    />
                </View>
            </View>
            <View style={{ height: 1, width: '100%', backgroundColor: '#F0F0F0' }} />
        </View>
    )
}

export default Sorting

const styles = StyleSheet.create({
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    icon: {
        width: 12,
        height: 12,
        resizeMode: 'contain',
        marginRight: 8,
    },
    text: {
        fontSize: 16,
        fontFamily: 'FiraSans-Regular',
        color: AppColor.blackColor,
    },
    dropdown: {
        backgroundColor: AppColor.backgroundColorSorting,
        width: 120,
    },
    listDropdown: {
        backgroundColor: AppColor.whiteColor,
        width: 108
    }
})