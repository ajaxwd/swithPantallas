import React from "react";
import { View } from "react-native";
import { styles } from './style';

export const Card = ({ children, style }) => {
    return (
        <View style={{ ...styles.container, ...style }}>
            {children}
        </View>
    )
}