import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
import ReactNativeModal from 'react-native-modal';
import { COLORS } from '../constants';

const Loader = () => {
    const { loading } = useSelector(state => state.utiltities);

    return (
        <ReactNativeModal isVisible={loading} style={{ flex: 1 }}>
            <ActivityIndicator size={"large"} color={COLORS.primary} />
        </ReactNativeModal>
    );
};

export default Loader;