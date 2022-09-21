import { StyleSheet } from "react-native";
import { colors } from '../../constants/colors'

export const styles = StyleSheet.create({
    container: {
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        backgroundColor: colors.background,
        borderRadius: 5,
    }
})