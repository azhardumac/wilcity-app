var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { StyleSheet } from 'react-native';
import { COLORS } from "../../utils/constants";
var styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        backgroundColor: '#fff',
    },
    image: {
        backgroundColor: '#eee',
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 40,
        marginRight: 10,
    },
    body: {
        padding: 15,
    },
    icon: {
        width: 14,
        height: 14,
        marginRight: 4,
        tintColor: COLORS.DARK_1,
    },
    buttonTextFollow: {
        fontSize: 13,
        color: '#fff',
    },
    buttonTextShare: {
        fontSize: 13,
        color: COLORS.DARK_1,
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 8,
    },
    actionsLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '50%',
    },
    actionsRight: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: '50%',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonFollow: {
        marginLeft: 5,
    },
    authorName: {
        color: COLORS.DARK_1,
        fontSize: 13,
        fontWeight: '600',
    },
    authorLink: {
        color: COLORS.PRIMARY,
        fontSize: 12,
    },
    content: {
        marginTop: 10,
    },
    date: {
        fontSize: 12,
        textTransform: 'uppercase',
        color: COLORS.DARK_2,
        letterSpacing: 0.3,
        marginTop: 15,
    },
    iconText: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 8,
    },
    iconLike: {
        width: 14,
        height: 14,
        marginRight: 3,
        tintColor: COLORS.DARK_2,
    },
    iconComment: {
        width: 12,
        height: 12,
        marginRight: 3,
        tintColor: COLORS.DARK_2,
    },
    actionsLeftText: {
        fontSize: 13,
    },
    webviewWrap: {
        position: 'relative',
    },
    imageUnderlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 9,
    },
    videoLoading: __assign(__assign({}, StyleSheet.absoluteFillObject), { zIndex: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }),
});
export default styles;
