import { FlatList, Image, StyleSheet, Text, Touchable, TouchableOpacity, View, useColorScheme } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import RNPickerSelect from 'react-native-picker-select';
import { COLORS, height, IMAGES, SIZES, width } from '../constants';
import Icon, { IconType } from './Icons';
import LinearGradient from 'react-native-linear-gradient';

export default function AppointmentCards( props ) {
    const { title, dateShow } = props
    const colorScheme = useColorScheme();
    const [dates, setDates] = useState( [] );
    const flatListRef = useRef( null );
    const [selectedDate, setSelectedDate] = useState( null );

    useEffect( () => {
        // Generate dates for the current month
        const generateDatesForCurrentMonth = () => {
            const today = new Date();
            const currentYear = today.getFullYear();
            const currentMonth = today.getMonth(); // 0-indexed (0 = January)
            const daysInMonth = new Date( currentYear, currentMonth + 1, 0 ).getDate(); // Get total days in the current month

            const generatedDates = [];
            for ( let day = 1; day <= daysInMonth; day++ ) {
                const date = new Date( currentYear, currentMonth, day );
                generatedDates.push( {
                    day: day.toString().padStart( 2, "0" ), // Format day as 01, 02, etc.
                    label: date.toLocaleDateString( "en-US", { weekday: "short" } ), // Get short weekday name
                } );
            }
            return generatedDates;
        };

        const dates = generateDatesForCurrentMonth();
        setDates( dates );

        // Default to today's date and scroll to it
        const todayDate = new Date().getDate().toString().padStart( 2, "0" );
        setSelectedDate( todayDate );

        // Focus on today's date
        const todayIndex = dates.findIndex( ( item ) => item.day === todayDate );
        setTimeout( () => {
            if ( flatListRef.current && todayIndex >= 0 ) {
                flatListRef.current.scrollToIndex( { index: todayIndex, animated: true } );
            }
        }, 100 ); // Delay to allow FlatList to render
    }, [] );

    const handleDateSelection = ( day ) => {
        setSelectedDate( day );

        // Scroll to the selected date
        const index = dates.findIndex( ( item ) => item.day === day );
        if ( flatListRef.current && index >= 0 ) {
            flatListRef.current.scrollToIndex( { index, animated: true } );
        }
    };
    const renderDateItem = ( { item } ) => {
        const isSelected = item.day === selectedDate;

        return (
            <TouchableOpacity
                style={styles.dateItemWrapper}
                onPress={() => handleDateSelection( item.day )}
            >
                {isSelected ? (
                    <LinearGradient
                        start={{ x: 0, y: 1 }}
                        end={{ x: 1, y: 0 }}

                        colors={["#4BB5FF", COLORS.secondary]}
                        style={styles.dateItem}
                    >
                        <Text style={[styles.dateText, styles.selectedDateText]}>
                            {item.day}
                        </Text>
                        <Text style={[styles.labelText, styles.selectedLabelText]}>
                            {item.label}
                        </Text>
                    </LinearGradient>
                ) : (
                    <View style={styles.dateItem}>
                        <Text style={styles.dateText}>{item.day}</Text>
                        <Text style={styles.labelText}>{item.label}</Text>
                    </View>
                )}
            </TouchableOpacity>
        );
    };


    const placeholder = {
        label: 'Sort by',
        value: null,
        color: colorScheme === 'dark' ? COLORS.white : COLORS.black,

    };
    const RenderCard = () => {
        return (
            <View style={styles.CardConatiner}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderBottomWidth: .8, borderBottomColor: COLORS.gray1, paddingBottom: SIZES.fifteen }}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image source={IMAGES.user} style={styles.img} />
                        <Text style={{ color: COLORS.white, fontSize: SIZES.fifteen, marginLeft: SIZES.ten }}>Martin Edward</Text>
                    </View>
                    <TouchableOpacity style={{ borderColor: COLORS.red, borderWidth: .8, borderStyle: "solid", paddingHorizontal: SIZES.fifteen, paddingVertical: SIZES.ten, borderRadius: SIZES.ten }}>
                        <Text style={{ color: COLORS.red }}>
                            Cancel Appointment
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", marginTop: SIZES.fifteen }}>
                    <Icon
                        name={"clock"}
                        type={IconType.MaterialCommunityIcons}
                        color={COLORS.white}
                        size={SIZES.twentyFive}
                    />
                    <Text style={{ color: COLORS.gray, fontSize: SIZES.fifteen, marginLeft: SIZES.five }}>12:00 PM</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", marginTop: SIZES.fifteen }}>
                    <Icon
                        name={"calendar"}
                        type={IconType.Ionicons}
                        color={COLORS.white}
                        size={SIZES.twentyFive}
                    />
                    <Text style={{ color: COLORS.gray, fontSize: SIZES.fifteen, marginLeft: SIZES.five }}>April-24-2024</Text>
                </View>
                <TouchableOpacity style={styles.downloadBtn}>
                    <Image source={IMAGES.downloadIcon} style={{ width: SIZES.twentyFive, height: SIZES.twentyFive, position: "absolute", left: SIZES.twenty }} resizeMode="contain" />
                    <Text style={{ color: "#1877F2", textAlign: "center", fontWeight: "600", fontSize: SIZES.fifteen }}>
                        Document.pdf
                    </Text>
                </TouchableOpacity>

            </View>
        )
    }
    return (
        <View style={{ flex: 1 }} >
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginVertical: SIZES.twenty }}>
                <Text style={styles.heading}>
                    Todays Appointment!
                </Text>

                <RNPickerSelect

                    onValueChange={( value ) => console.log( value )}
                    items={[
                        { label: 'Sort by ', value: 'name' },
                        { label: 'Sort by Price (Low to High)', value: 'priceAsc' },
                        { label: 'Sort by Price (High to Low)', value: 'priceDesc' },
                    ]}
                    Icon={() => {
                        return (
                            <Icon
                                name="chevron-down-outline"
                                size={24}
                                type={IconType.Ionicons}
                                color={COLORS.white}
                                style={styles.icon}

                            />
                        );
                    }}
                    placeholder={placeholder}
                    style={{


                        inputAndroid: {
                            color: colorScheme === 'dark' ? COLORS.white : COLORS.black,

                        },
                        inputIOS: {

                            color: colorScheme === 'dark' ? COLORS.white : COLORS.black,
                        },
                        ...pickerSelectStyles,// Merges input styles
                        modalViewBottom: {
                            backgroundColor: COLORS.black, // Popup background color (Android)
                        },
                    }}
                    useNativeAndroidPickerStyle={false}
                />
            </View>
            {dateShow &&
                <FlatList
                    ref={flatListRef} // Attach the ref to the FlatList
                    data={dates}
                    horizontal
                    keyExtractor={( item ) => item.day}
                    renderItem={renderDateItem}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.dateList}
                    getItemLayout={( data, index ) => ( {
                        length: 70, // Approximate width of each date item
                        offset: 70 * index,
                        index,
                    } )} // Optimize scrolling
                />
            }

            <FlatList
                data={[1, 2, 3, 45, 5, 6, 7, 7]}
                keyExtractor={item => item.id}
                renderItem={RenderCard}

            />

        </View>
    )
}


const pickerSelectStyles = {
    inputIOS: {

        fontSize: 16,
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 8,
        backgroundColor: COLORS.primary,

    },
    inputAndroid: {

        fontSize: SIZES.fifteen * .9,
        paddingVertical: SIZES.five,
        paddingHorizontal: SIZES.twenty,
        borderWidth: 1,
        borderColor: COLORS.white,

        borderRadius: SIZES.twentyFive,
        // color: COLORS.white,
        backgroundColor: COLORS.primary,
        paddingRight: SIZES.twentyFive * 1.5,

    },
};
const styles = StyleSheet.create( {
    icon: {
        margin: 10,

    },
    heading: {
        color: COLORS.white,
        fontSize: SIZES.fifteen,

    },
    CardConatiner: {
        backgroundColor: "#092C47",
        padding: SIZES.ten,
        borderRadius: SIZES.ten,
        marginBottom: SIZES.twenty
    },
    img: {
        width: SIZES.fifty * .7,
        height: SIZES.fifty * .7,
        resizeMode: "cover"
    },
    downloadBtn: {
        justifyContent: "center",
        backgroundColor: "#1877F2" + 50,
        padding: SIZES.fifteen,
        borderRadius: SIZES.ten,
        marginTop: SIZES.twenty,
        borderWidth: 1,
        borderColor: "#1877F2",
        borderStyle: "dashed"
    },

    dateList: {
        alignItems: "center",
    },
    dateItem: {
        paddingHorizontal: SIZES.ten,
        paddingVertical: SIZES.twenty,
        justifyContent: "space-between",
        alignItems: "center",
        height: height * .1,
        marginHorizontal: 5,
        borderRadius: 30,
        marginVertical: SIZES.twentyFive,
        borderColor: COLORS.gray,
        borderWidth: 1,
        backgroundColor: COLORS.primary
    },
    selectedDateItem: {
        backgroundColor: "linear-gradient(to right, #00FFB9, #4C88FF)", // Simulated gradient

    },
    dateText: {
        fontSize: 16,
        color: "#FFF",
    },
    selectedDateText: {
        fontWeight: "bold",
    },
    labelText: {
        fontSize: 12,
        color: "#999",
    },
    selectedLabelText: {
        color: "#FFF",
    },
} )