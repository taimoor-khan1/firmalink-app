
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { COLORS, SIZES, STYLES } from '../../constants';
import HeaderWithArrow from '../../components/HeaderWithArrow';
import { Icon, IconType } from '../../components';
import DropdownComponent from '../../components/DropdownComponent';
import CustomButton from '../../components/CustomButton';

export default function PriceSetting() {
    const [selected, setSelected] = useState( [
        { serviceType: null, price: null }, // Initial row
    ] );
    console.log( selected )
    const serviceType = [
        { label: 'Wills and Trusts', value: 'Wills and Trusts' },
        { label: 'Loan Signing', value: 'Loan Signing' },
        { label: 'Power of Attorney', value: 'Power of Attorney' },
        { label: 'Real Estate Documents', value: 'Real Estate Documents' },
    ];

    const pricing = [
        { label: '10', value: 10 },
        { label: '20', value: 20 },
        { label: '50', value: 50 },
        { label: '100', value: 100 },
    ];

    const handleAddRow = () => {
        setSelected( ( prevSelected ) => [
            ...prevSelected,
            { serviceType: null, price: null }, // Add a new empty row
        ] );
    };

    const handleDeleteRow = ( index ) => {
        setSelected( ( prevSelected ) =>
            prevSelected.filter( ( _, idx ) => idx !== index )
        );
    };

    const handleChange = ( index, field, value ) => {
        setSelected( ( prevSelected ) =>
            prevSelected.map( ( item, idx ) =>
                idx === index ? { ...item, [field]: value } : item
            )
        );
    };

    const AddRowBtn = () => (
        <TouchableOpacity
            style={styles.addRowBtn}
            onPress={handleAddRow}
        >
            <Icon
                name={'diff-added'}
                type={IconType.Octicons}
                color={COLORS.white}
            />
            <Text style={styles.addRowBtnText}>Add Row</Text>
        </TouchableOpacity>
    );

    return (
        <View style={STYLES.container}>
            <HeaderWithArrow hasBackArrow title={'Pricing Setting'} />
            <ScrollView style={{ flex: 1 }}>

                {selected.map( ( item, index ) => (
                    <View
                        key={index}
                        style={styles.row}
                    >
                        <DropdownComponent
                            value={item.serviceType} // Keep the value tied to state
                            onChange={( selectedItem ) =>
                                handleChange( index, 'serviceType', selectedItem.value )
                            }
                            label={'Service Type'}
                            data={serviceType}
                            style={{ width: '45%' }}
                        />
                        <DropdownComponent
                            value={item.price} // Keep the value tied to state
                            onChange={( selectedItem ) =>
                                handleChange( index, 'price', selectedItem.value )
                            }
                            isDeleteRow={index > 0}
                            onPressDelete={() => handleDeleteRow( index )}
                            label={'Price'}
                            data={pricing}
                            style={{ width: '45%' }}
                            dollar
                        />

                    </View>
                ) )}
                <AddRowBtn />
            </ScrollView>

            <CustomButton title={"Save"}
                btnStyle={styles.btnStyle}
            />
        </View>
    );
}

const styles = StyleSheet.create( {
    addRowBtn: {
        backgroundColor: '#051E33',
        padding: SIZES.twenty,
        borderRadius: SIZES.fifty,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: SIZES.twenty,
    },
    addRowBtnText: {
        color: COLORS.white,
        marginLeft: SIZES.ten,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: SIZES.ten,
    },

    btnStyle: {
        marginVertical: SIZES.twentyFive
    }
} );
