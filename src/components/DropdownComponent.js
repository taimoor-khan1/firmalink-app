import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Icon, { IconType } from './Icons';
import { COLORS } from '../constants';
import GradientText from './GradientText';




const DropdownComponent = ( props ) => {
    const { label, style, data, dollar, onPressDelete, isDeleteRow, value, onChange } = props

    const [isFocus, setIsFocus] = useState( false );

    const renderLabel = () => {
        if ( value || isFocus ) {
            return (
                <GradientText style={[styles.label, isFocus && { color: 'blue' }]}>
                    {label}
                </GradientText>
                // <Text style={[styles.label, isFocus && { color: 'blue' }]}>

                // </Text>
            );
        }
        return null;
    };

    return (
        <View style={[styles.container, style]}>
            {renderLabel()}
            <Dropdown
                style={[styles.dropdown]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                containerStyle={styles.dropdownContainer}
                data={data}
                // search
                itemTextStyle={{ color: COLORS.white, }}

                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? label : '...'}
                searchPlaceholder="Search..."
                value={value}
                onFocus={() => setIsFocus( true )}
                onBlur={() => setIsFocus( false )}
                onChange={
                    onChange
                    // setIsFocus( false );
                }
                renderItem={( item ) => (
                    <View
                        style={[
                            styles.dropdownItem,
                            value === item.value && styles.selectedTextStyle, // Apply selected style
                        ]}
                    >
                        <Text
                            style={[
                                styles.itemText,
                                value === item.value && styles.selectedItemText, // Change text style if selected
                            ]}
                        >
                            {item.label}
                        </Text>
                    </View>
                )}

                renderRightIcon={() => (
                    dollar && <Icon
                        type={IconType.FontAwesome}
                        style={styles.icon}
                        color={COLORS.white}
                        name="dollar"
                        size={20}
                    />

                )}
            />

            <View style={{ flexDirection: "row", justifyContent: "space-between", }}>
                {dollar &&

                    <Text style={{ color: COLORS.gray, fontSize: 11 }}>
                        /Signature
                    </Text>
                }

                {
                    isDeleteRow &&
                    <TouchableOpacity style={{}} onPress={onPressDelete}>
                        <Text style={{ color: COLORS.red, fontSize: 11, textDecorationLine: "underline", }}>
                            Delete Row
                        </Text>
                    </TouchableOpacity>

                }


            </View>




        </View>
    );
};

export default DropdownComponent;

const styles = StyleSheet.create( {
    label: {
        fontSize: 10
    },
    container: {
        // width: "50%",
        padding: 16,
    },
    dropdown: {
        height: 50,

        borderColor: 'gray',
        borderBottomWidth: 1,
        paddingHorizontal: 8,
    },
    placeholderStyle: {
        fontSize: 16,
        color: COLORS.white,
    },
    selectedTextStyle: {
        fontSize: 16,
        color: COLORS.white,

    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    dropdownContainer: {
        backgroundColor: COLORS.primary,
        borderRadius: 10,
        paddingVertical: 10,
    },
    dropdownItem: {
        padding: 16,
        backgroundColor: COLORS.primary, // Default background color for items
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
    },
    selectedItem: {
        backgroundColor: COLORS.secondary, // Background color when the item is selected
    },
    itemText: {
        fontSize: 16,
        color: COLORS.white,
    },
    selectedItemText: {
        color: COLORS.white, // Text color when the item is selected
    },
} );
