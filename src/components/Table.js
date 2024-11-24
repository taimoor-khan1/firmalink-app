import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Row from "./Row";
import { COLORS, FONTFAMILY, IMAGES, SIZES, width } from "../constants";
import EditText from "./EditText";
import Icon, { IconType } from "./Icons";

const DynamicTable = ({ table }) => {
    // const [dimensions, setDimensions] = useState([2, 3, 4]);

    // // Function to generate nested loops based on the current dimension
    // const generateTable = (index, currentCombination) => {
    //     if (index === dimensions.length) {
    //         // If this is the last dimension, return a table cell
    //         return <Text key={currentCombination.join('-')}>Cell {currentCombination.join(',')}</Text>;
    //     }

    //     const tableRows = [];
    //     for (let i = 0; i < dimensions[index]; i++) {
    //         const newCombination = [...currentCombination, i];
    //         // Recursively generate rows for the next dimension
    //         tableRows.push(generateTable(index + 1, newCombination));
    //     }

    //     // Return a table row for the current dimension
    //     return <View key={currentCombination.join('-')} style={styles.row}>{tableRows}</View>;
    // };

    return (
        <>
            <View style={{ marginVertical: SIZES.fifteen }} >
                <Row style={{ justifyContent: "space-evenly" }}>
                    <Text style={[styles.title]}></Text>
                    <Text style={[styles.title]}>
                        Price
                    </Text>
                    <Text style={[styles.title]}>
                        Quantity
                    </Text>
                    <Text style={[styles.title]}>
                        Picture
                    </Text>
                </Row>
                {table.map((val, ind) => {
                    return (
                        <Row key={ind} style={{ justifyContent: "space-evenly", alignItems: 'center' }}>
                            <Text
                                style={{
                                    fontSize: SIZES.body14,
                                    marginTop: SIZES.twentyFive,
                                    width: "20%",
                                }}
                            >
                                {val}
                            </Text>
                            <EditText
                                // dollarSign
                                styleContainer={{ width: width * .18 }}
                            // title="Title"
                            />
                            <EditText
                                // dollarSign
                                styleContainer={{ width: width * .18 }}
                            // title="Title"
                            />
                            <EditText
                                // dollarSign
                                styleContainer={{ width: width * .18 }}
                            // title="Title"
                            />
                            <View style={{ marginTop: SIZES.twentyFive, }} >
                                <Icon name={'trash'} type={IconType.FontAwesome} color={COLORS.primary} size={SIZES.twenty} />
                            </View>
                        </Row>
                    )
                })}
            </View>
        </>
    );
};

export default DynamicTable;


const styles = StyleSheet.create({
    title: {
        fontFamily: FONTFAMILY.Medium,
        fontSize: SIZES.body14,
        fontWeight: "bold",
        color: COLORS.black,
    },
    container: {
        padding: 10,
    },
    row: {
        flexDirection: 'row',
    },
});