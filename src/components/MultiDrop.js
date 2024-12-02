import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { COLORS, FONTFAMILY, SIZES } from '../constants';

const MultiDrop = ( { attributes, setParentAtt, parentAtt } ) => {
    const [selected, setSelected] = useState( [] );
    const [open, setOpen] = useState( false );
    const [value, setValue] = useState( [] );

    const sizeData = [
        {
            id: 1,
            title: "Small",
            value: "small"
        },
        {
            id: 2,
            title: "Medium",
            value: "medium"
        },
        {
            id: 3,
            title: "Large",
            value: "large"
        },
    ];

    const colorData = [
        {
            id: 1,
            title: "Red",
            value: "red"
        },
        {
            id: 2,
            title: "Green",
            value: "green"
        },
        {
            id: 3,
            title: "Blue",
            value: "blue"
        },
    ];

    const typeData = [
        {
            id: 1,
            title: "Cotton",
            value: "cotton"
        },
        {
            id: 2,
            title: "Linen",
            value: "linen"
        },
        // {
        //     id: 3,
        //     title: "Slippery",
        //     value: "slippery"
        // },
    ];

    // const newFunc = (val) => {
    //     // console.log('newFunc', val)
    //     setSelected(val);
    //     // setParentAtt([...parentAtt, val]);
    // };

    // Function to update or add values based on ID in state
    const updateValuesById = ( val ) => {
        // console.log('updateValuesById', val);
        setSelected( val );
        // setParentAtt(prevState => {
        //     // Check if the object with the specified ID already exists
        //     const indexToUpdate = prevState.findIndex(obj => obj.id === attributes.id);
        //     if (indexToUpdate !== -1) {
        //         // If the object exists, update its values array
        //         return prevState.map(obj => {
        //             if (obj.id === attributes.id) {
        //                 return { ...obj, values: val };
        //             }
        //             return obj;
        //         });
        //     } else {
        //         // If the ID is not found, add a new object to the state
        //         return [...prevState, { id: attributes.id, values: val }];
        //     }
        // });

        setParentAtt( prevState => {
            const indexToUpdate = prevState.findIndex( item => item.id === attributes.id );
            if ( indexToUpdate !== -1 ) {
                // If the ID is present, update the value array
                const updatedArray = prevState.map( item => {
                    if ( item.id === attributes.id ) {
                        return { ...item, value: val };
                    }
                    return item;
                } );
                return updatedArray;
            } else {
                // If the ID is not present, add a new entry
                return [...prevState, { parent_id: attributes.id, name: attributes.name, value: val }];
            }
        } );

        setOpen( !open );
    };

    // // Function to convert an array to an object using a key from each object
    // const arrayToObj = (arr) => {
    //     return arr.reduce((acc, item) => {
    //         acc[item.key] = item;
    //         return acc;
    //     }, {});
    // };

    // console.log(`MultiDrop selected ${attributes.title}`, selected);

    return (
        <>
            <Text style={[styles.title, { marginVertical: SIZES.ten, }]}>
                {attributes.name}
            </Text>
            <DropDownPicker
                placeholder={`Select ${attributes.name}`}
                schema={{
                    label: 'title', // required
                    value: 'value', // required
                }}
                onSelectItem={val => updateValuesById( val )}
                open={open}
                value={value}
                items={attributes.id == attributes.attribute_values?.[0].attribute_id && attributes.attribute_values}
                setOpen={setOpen}
                setValue={setValue}
                itemSeparator={true}
                // setItems={setItems}
                multiple={true}
                min={0}
                style={{ marginBottom: 10, zIndex: -99, backgroundColor: "#F8F8F8", }}
                dropDownContainerStyle={{ zIndex: 99 }}
                autoScroll={true}
                listMode='SCROLLVIEW'
                mode='BADGE'
            // onChangeValue={val => newFunc(val)}
            />
        </>
    );
};

export default MultiDrop;

const styles = StyleSheet.create( {
    title: {
        fontFamily: FONTFAMILY.Medium,
        fontSize: SIZES.body14,
        fontWeight: "bold",
        color: COLORS.black,
    },
} );