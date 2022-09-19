import { StyleSheet } from 'react-native';
var styles = StyleSheet.create({
    container: {
        flexWrap: 'wrap',
    },
    touchable: {
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    inner: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    small: {
        paddingVertical: 6,
        paddingHorizontal: 12,
    },
    medium: {
        paddingVertical: 13,
        paddingHorizontal: 16,
    },
    large: {
        paddingVertical: 15,
        paddingHorizontal: 20,
    },
    default: {
        borderRadius: 0,
    },
    round: {
        borderRadius: 4,
    },
    pill: {
        borderRadius: 999,
    },
});
export default styles;
