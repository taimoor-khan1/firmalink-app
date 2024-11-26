import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Icon, { IconType } from './Icons';
import { COLORS } from '../constants';


const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
];

const DropdownComponent = () => {
    const [value, setValue] = useState( null );
    const [isFocus, setIsFocus] = useState( false );

    const renderLabel = () => {
        if ( value || isFocus ) {
            return (
                <Text style={[styles.label, isFocus && { color: 'blue' }]}>
                    Dropdown label
                </Text>
            );
        }
        return null;
    };

    return (
        <View style={styles.container}>
            {/* {renderLabel()} */}
            <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select item' : '...'}
                searchPlaceholder="Search..."
                value={value}
                onFocus={() => setIsFocus( true )}
                onBlur={() => setIsFocus( false )}
                onChange={item => {
                    setValue( item.value );
                    setIsFocus( false );
                }}
            // renderLeftIcon={() => (
            //     <Icon
            //         type={IconType.AntDesign}
            //         style={styles.icon}
            //         color={isFocus ? 'blue' : 'black'}
            //         name="Safety"
            //         size={20}
            //     />
            // )}
            />
        </View>
    );
};

export default DropdownComponent;

const styles = StyleSheet.create( {
    container: {
        // backgroundColor: 'white',
        width: "100%",
        padding: 16,
    },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderBottomWidth: 1,
        paddingHorizontal: 8,
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: COLORS.primary,
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
        color: COLORS.secondary
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
} );