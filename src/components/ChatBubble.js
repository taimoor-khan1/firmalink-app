import { View, Text, Image } from 'react-native'
import { COLORS, SIZES, width } from '../constants'
import React, { useState } from 'react';
import moment from 'moment/moment';

export function ChatBubbleReceived( { item } ) {
    return (
        <View style={{ alignSelf: 'flex-start', maxWidth: width * .8, marginTop: SIZES.ten }}>
            <View style={{
                backgroundColor: '#E7E7E8',
                borderTopRightRadius: 10,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                padding: 10,
                marginTop: 2,
                flexDirection: "row"
            }}>


                {item.type === 1 ? <><Text style={{

                    color: COLORS.black,
                    fontSize: 13,

                    maxWidth: width * .55
                }}>{item?.message}</Text>
                    <Text style={{
                        marginTop: SIZES.five,

                        textAlign: "left",
                        color: COLORS.black,
                        fontSize: 10,
                        alignSelf: "flex-end",
                        marginLeft: SIZES.ten,
                    }}>{moment( item?.time ).fromNow()}</Text></> : <Image source={{ uri: item.message }} style={{ height: 80, width: 80 }} />}
            </View>

        </View>
    )
}

export function ChatBubbleSent( { item } ) {
    return (
        <View style={{ alignSelf: 'flex-end', maxWidth: width * .8, marginTop: SIZES.ten }}>
            <View style={{
                backgroundColor: COLORS.black,
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                padding: 10,
                marginTop: 2,
                flexDirection: "row"
            }}>

                {item.type === 1 ? <>
                    <Text style={{
                        color: '#fff',
                        fontSize: 13,
                        maxWidth: width * .55
                    }}>{item?.message}</Text>
                    <Text style={{
                        marginTop: SIZES.five,
                        textAlign: "right",
                        alignSelf: "flex-end",
                        marginLeft: SIZES.ten,
                        color: COLORS.white, fontSize: 10
                    }}>{moment( item?.time ).fromNow()}</Text></> : <Image source={{ uri: item.message }} style={{ height: 80, width: 80 }} />}

            </View>

        </View>
    )
}