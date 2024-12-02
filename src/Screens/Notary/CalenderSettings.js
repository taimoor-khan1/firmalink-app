import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES, STYLES } from '../../constants'
import HeaderWithArrow from '../../components/HeaderWithArrow'
import { Icon, IconType } from '../../components'
import GradientText from '../../components/GradientText'
import CustomButton from '../../components/CustomButton'
import DropdownComponent from '../../components/DropdownComponent'

export default function CalenderSettings() {
    const [mondayDate, setMondayDate] = useState( [
        { from: null, to: null }, // Initial row
    ] );
    const [tuesdayDate, setTuesdayDate] = useState( [
        { from: null, to: null }, // Initial row
    ] );
    const [wednesdayDate, setWednesdayDate] = useState( [
        { from: null, to: null }, // Initial row
    ] );
    const [thuesdayDate, setThuesdayDate] = useState( [
        { from: null, to: null }, // Initial row
    ] );
    const [fridayDate, setFridayDate] = useState( [
        { from: null, to: null }, // Initial row
    ] );
    const [saturdayDate, setSaturdayDate] = useState( [
        { from: null, to: null }, // Initial row
    ] );

    const Timings = [
        { label: '09:00 AM', value: "09:00 AM" },
        { label: '10:00 AM', value: "10:00 AM" },
        { label: '11:00 AM', value: "11:00 AM" },
        { label: '12:00 AM', value: '12:00 AM' },
    ];

    const Header = () => {
        return (
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: SIZES.fifteen }}>
                <TouchableOpacity style={styles.sideBtn}>
                    <Icon
                        name={"chevron-left"}
                        type={IconType.Entypo}
                        color={COLORS.white}
                        size={SIZES.twentyFive}
                    />
                </TouchableOpacity>
                <View style={[styles.sideBtn, { paddingHorizontal: SIZES.fifty, alignItems: "center", justifyContent: "center" }]} >
                    <Text style={{ fontSize: SIZES.fifteen + 2, color: COLORS.white, fontWeight: "600" }}>
                        July
                    </Text>
                    <GradientText style={{ fontSize: SIZES.fifteen + 2, fontWeight: "500" }}>
                        2024
                    </GradientText>

                </View>
                <TouchableOpacity style={styles.sideBtn}>
                    <Icon
                        name={"chevron-right"}
                        type={IconType.Entypo}
                        color={COLORS.white}
                        size={SIZES.twentyFive}
                    />
                </TouchableOpacity>

            </View>
        )
    }
    const AddRowBtn = ( { onPress } ) => (
        <TouchableOpacity
            style={styles.addRowBtn}
            onPress={onPress}
        >
            <Icon
                name={'diff-added'}
                type={IconType.Octicons}
                color={COLORS.white}
            />
            <Text style={styles.addRowBtnText}>Add Row</Text>
        </TouchableOpacity>
    );

    const handleAddRow = () => {
        setSelected( ( prevSelected ) => [
            ...prevSelected,
            { serviceType: null, price: null }, // Add a new empty row
        ] );
    };

    return (
        <View style={STYLES.container}>

            <HeaderWithArrow
                hasBackArrow
                title={"Availability Setting"}
            />
            <Header />
            <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, }}>

                {/* ===========Monday ================= */}
                <View style={styles.innerContainer}>
                    <Text style={styles.heading}>
                        Monday
                    </Text>
                    {mondayDate.map( ( item, index ) => (
                        <View
                            key={index}
                            style={styles.row}
                        >
                            <DropdownComponent
                                value={item.from} // Keep the value tied to state
                                onChange={( selectedItem ) =>
                                    setMondayDate( ( prevSelected ) =>
                                        prevSelected.map( ( item, idx ) =>
                                            idx === index ? { ...item, ["from"]: selectedItem.value } : item
                                        )
                                    )
                                }
                                label={Timings[0].label}
                                data={Timings}
                                style={{ width: '45%' }}
                            />
                            <DropdownComponent
                                value={item.to} // Keep the value tied to state
                                onChange={( selectedItem ) =>
                                    setMondayDate( ( prevSelected ) =>
                                        prevSelected.map( ( item, idx ) =>
                                            idx === index ? { ...item, ["to"]: selectedItem.value } : item
                                        )
                                    )
                                }
                                isDeleteRow={index > 0}
                                onPressDelete={() =>
                                    setMondayDate( ( prevSelected ) =>
                                        prevSelected.filter( ( _, idx ) => idx !== index )
                                    )}
                                label={Timings[0].value}
                                data={Timings}
                                style={{ width: '45%' }}

                            />

                        </View>
                    ) )}
                    <AddRowBtn onPress={() => {
                        setMondayDate( ( prevSelected ) => [
                            ...prevSelected,
                            { from: null, to: null }, // Add a new empty row
                        ] );
                    }} />
                </View>
                {/* ===========Tuesday ================= */}

                <View style={styles.innerContainer}>
                    <Text style={styles.heading}>
                        Tuesday
                    </Text>
                    {tuesdayDate.map( ( item, index ) => (
                        <View
                            key={index}
                            style={styles.row}
                        >
                            <DropdownComponent
                                value={item.from} // Keep the value tied to state
                                onChange={( selectedItem ) =>
                                    setTuesdayDate( ( prevSelected ) =>
                                        prevSelected.map( ( item, idx ) =>
                                            idx === index ? { ...item, ["from"]: selectedItem.value } : item
                                        )
                                    )
                                }
                                label={Timings[0].label}
                                data={Timings}
                                style={{ width: '45%' }}
                            />
                            <DropdownComponent
                                value={item.to} // Keep the value tied to state
                                onChange={( selectedItem ) =>
                                    setTuesdayDate( ( prevSelected ) =>
                                        prevSelected.map( ( item, idx ) =>
                                            idx === index ? { ...item, ["to"]: selectedItem.value } : item
                                        )
                                    )
                                }
                                isDeleteRow={index > 0}
                                onPressDelete={() =>
                                    setTuesdayDate( ( prevSelected ) =>
                                        prevSelected.filter( ( _, idx ) => idx !== index )
                                    )}
                                label={Timings[0].value}
                                data={Timings}
                                style={{ width: '45%' }}

                            />

                        </View>
                    ) )}
                    <AddRowBtn onPress={() => {
                        setTuesdayDate( ( prevSelected ) => [
                            ...prevSelected,
                            { from: null, to: null }, // Add a new empty row
                        ] );
                    }} />
                </View>
                {/* ===========Wednesday ================= */}

                <View style={styles.innerContainer}>
                    <Text style={styles.heading}>
                        Wednesday
                    </Text>
                    {wednesdayDate.map( ( item, index ) => (
                        <View
                            key={index}
                            style={styles.row}
                        >
                            <DropdownComponent
                                value={item.from} // Keep the value tied to state
                                onChange={( selectedItem ) =>
                                    setWednesdayDate( ( prevSelected ) =>
                                        prevSelected.map( ( item, idx ) =>
                                            idx === index ? { ...item, ["from"]: selectedItem.value } : item
                                        )
                                    )
                                }
                                label={Timings[0].label}
                                data={Timings}
                                style={{ width: '45%' }}
                            />
                            <DropdownComponent
                                value={item.to} // Keep the value tied to state
                                onChange={( selectedItem ) =>
                                    setWednesdayDate( ( prevSelected ) =>
                                        prevSelected.map( ( item, idx ) =>
                                            idx === index ? { ...item, ["to"]: selectedItem.value } : item
                                        )
                                    )
                                }
                                isDeleteRow={index > 0}
                                onPressDelete={() =>
                                    setWednesdayDate( ( prevSelected ) =>
                                        prevSelected.filter( ( _, idx ) => idx !== index )
                                    )}
                                label={Timings[0].value}
                                data={Timings}
                                style={{ width: '45%' }}

                            />

                        </View>
                    ) )}
                    <AddRowBtn onPress={() => {
                        setWednesdayDate( ( prevSelected ) => [
                            ...prevSelected,
                            { from: null, to: null }, // Add a new empty row
                        ] );
                    }} />
                </View>
                {/* ===========thuesday ================= */}

                <View style={styles.innerContainer}>
                    <Text style={styles.heading}>
                        Thuesday
                    </Text>
                    {thuesdayDate.map( ( item, index ) => (
                        <View
                            key={index}
                            style={styles.row}
                        >
                            <DropdownComponent
                                value={item.from} // Keep the value tied to state
                                onChange={( selectedItem ) =>
                                    setThuesdayDate( ( prevSelected ) =>
                                        prevSelected.map( ( item, idx ) =>
                                            idx === index ? { ...item, ["from"]: selectedItem.value } : item
                                        )
                                    )
                                }
                                label={Timings[0].label}
                                data={Timings}
                                style={{ width: '45%' }}
                            />
                            <DropdownComponent
                                value={item.to} // Keep the value tied to state
                                onChange={( selectedItem ) =>
                                    setThuesdayDate( ( prevSelected ) =>
                                        prevSelected.map( ( item, idx ) =>
                                            idx === index ? { ...item, ["to"]: selectedItem.value } : item
                                        )
                                    )
                                }
                                isDeleteRow={index > 0}
                                onPressDelete={() =>
                                    setThuesdayDate( ( prevSelected ) =>
                                        prevSelected.filter( ( _, idx ) => idx !== index )
                                    )}
                                label={Timings[0].value}
                                data={Timings}
                                style={{ width: '45%' }}

                            />

                        </View>
                    ) )}
                    <AddRowBtn onPress={() => {
                        setThuesdayDate( ( prevSelected ) => [
                            ...prevSelected,
                            { from: null, to: null }, // Add a new empty row
                        ] );
                    }} />
                </View>
                {/* ===========Friday ================= */}

                <View style={styles.innerContainer}>
                    <Text style={styles.heading}>
                        Friday
                    </Text>
                    {fridayDate.map( ( item, index ) => (
                        <View
                            key={index}
                            style={styles.row}
                        >
                            <DropdownComponent
                                value={item.from} // Keep the value tied to state
                                onChange={( selectedItem ) =>
                                    setFridayDate( ( prevSelected ) =>
                                        prevSelected.map( ( item, idx ) =>
                                            idx === index ? { ...item, ["from"]: selectedItem.value } : item
                                        )
                                    )
                                }
                                label={Timings[0].label}
                                data={Timings}
                                style={{ width: '45%' }}
                            />
                            <DropdownComponent
                                value={item.to} // Keep the value tied to state
                                onChange={( selectedItem ) =>
                                    setFridayDate( ( prevSelected ) =>
                                        prevSelected.map( ( item, idx ) =>
                                            idx === index ? { ...item, ["to"]: selectedItem.value } : item
                                        )
                                    )
                                }
                                isDeleteRow={index > 0}
                                onPressDelete={() =>
                                    setFridayDate( ( prevSelected ) =>
                                        prevSelected.filter( ( _, idx ) => idx !== index )
                                    )}
                                label={Timings[0].value}
                                data={Timings}
                                style={{ width: '45%' }}

                            />

                        </View>
                    ) )}
                    <AddRowBtn onPress={() => {
                        setFridayDate( ( prevSelected ) => [
                            ...prevSelected,
                            { from: null, to: null }, // Add a new empty row
                        ] );
                    }} />
                </View>
                {/* ===========Saturday ================= */}

                <View style={styles.innerContainer}>
                    <Text style={styles.heading}>
                        Saturday
                    </Text>
                    {saturdayDate.map( ( item, index ) => (
                        <View
                            key={index}
                            style={styles.row}
                        >
                            <DropdownComponent
                                value={item.from} // Keep the value tied to state
                                onChange={( selectedItem ) =>
                                    setSaturdayDate( ( prevSelected ) =>
                                        prevSelected.map( ( item, idx ) =>
                                            idx === index ? { ...item, ["from"]: selectedItem.value } : item
                                        )
                                    )
                                }
                                label={Timings[0].label}
                                data={Timings}
                                style={{ width: '45%' }}
                            />
                            <DropdownComponent
                                value={item.to} // Keep the value tied to state
                                onChange={( selectedItem ) =>
                                    setSaturdayDate( ( prevSelected ) =>
                                        prevSelected.map( ( item, idx ) =>
                                            idx === index ? { ...item, ["to"]: selectedItem.value } : item
                                        )
                                    )
                                }
                                isDeleteRow={index > 0}
                                onPressDelete={() =>
                                    setSaturdayDate( ( prevSelected ) =>
                                        prevSelected.filter( ( _, idx ) => idx !== index )
                                    )}
                                label={Timings[0].value}
                                data={Timings}
                                style={{ width: '45%' }}

                            />

                        </View>
                    ) )}
                    <AddRowBtn onPress={() => {
                        setSaturdayDate( ( prevSelected ) => [
                            ...prevSelected,
                            { from: null, to: null }, // Add a new empty row
                        ] );
                    }} />
                </View>

                <CustomButton title={"Save"}
                    btnStyle={styles.btnStyle}
                />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create( {
    sideBtn: {
        backgroundColor: COLORS.primaryLight,
        paddingHorizontal: SIZES.twenty,
        borderRadius: SIZES.fifty,
        height: SIZES.fifty,
        alignItems: "center",
        justifyContent: "center"
    },
    btnStyle: {
        marginVertical: SIZES.twentyFive
    },
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
    heading: {
        color: COLORS.white,
        fontSize: SIZES.twenty
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: SIZES.ten,
    },
    innerContainer: {

        paddingVertical: SIZES.fifteen,
        borderColor: COLORS.gray,
        borderBottomWidth: 1
    }
} )