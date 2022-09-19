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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { memo } from 'react';
import { TouchableOpacity, ActivityIndicator, View, Text } from 'react-native';
import styles from './styles';
function Button(_a) {
    var children = _a.children, _b = _a.borderRadius, borderRadius = _b === void 0 ? 'default' : _b, _c = _a.size, size = _c === void 0 ? 'medium' : _c, _d = _a.block, block = _d === void 0 ? false : _d, _e = _a.activeOpacity, activeOpacity = _e === void 0 ? 0.8 : _e, _f = _a.backgroundColor, backgroundColor = _f === void 0 ? '#eee' : _f, _g = _a.color, color = _g === void 0 ? '#333' : _g, _h = _a.borderWidth, borderWidth = _h === void 0 ? 1 : _h, _j = _a.borderColor, borderColor = _j === void 0 ? 'transparent' : _j, _k = _a.loading, loading = _k === void 0 ? false : _k, _l = _a.loadingColor, loadingColor = _l === void 0 ? 'light' : _l, LoadingComponent = _a.LoadingComponent, style = _a.style, rest = __rest(_a, ["children", "borderRadius", "size", "block", "activeOpacity", "backgroundColor", "color", "borderWidth", "borderColor", "loading", "loadingColor", "LoadingComponent", "style"]);
    return (React.createElement(View, { style: block ? {} : { flexWrap: 'wrap' } },
        React.createElement(TouchableOpacity, __assign({}, rest, { style: [styles.touchable, styles[size], styles[borderRadius], { backgroundColor: backgroundColor, borderColor: borderColor, borderWidth: borderWidth }, style], activeOpacity: activeOpacity }),
            React.createElement(View, { style: styles.inner }, loading ? (LoadingComponent !== null && LoadingComponent !== void 0 ? LoadingComponent : React.createElement(ActivityIndicator, { size: "small", color: loadingColor })) : typeof children === 'string' ? (React.createElement(Text, { style: [{ color: color, textAlign: 'center', fontSize: 13 }] }, children)) : (children)))));
}
export default memo(Button);
