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
import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { COLORS } from "../../utils/constants";
var styles = StyleSheet.create({
    container: {
        position: 'relative',
    },
    pager: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 14,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    pagerItem: {
        width: 6,
        height: 6,
        borderRadius: 6,
        marginHorizontal: 3,
    },
});
var Carousel = function (_a) {
    var data = _a.data, onMomentumScrollEnd = _a.onMomentumScrollEnd, keyExtractor = _a.keyExtractor, renderItem = _a.renderItem, rest = __rest(_a, ["data", "onMomentumScrollEnd", "keyExtractor", "renderItem"]);
    var _b = useState(0), indexActive = _b[0], setIndexActive = _b[1];
    var handleDragEnd = function (event) {
        var _a;
        if (!!((_a = event.nativeEvent) === null || _a === void 0 ? void 0 : _a.contentOffset)) {
            var indexActive_1 = Math.floor(event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width);
            setIndexActive(indexActive_1);
        }
        onMomentumScrollEnd === null || onMomentumScrollEnd === void 0 ? void 0 : onMomentumScrollEnd(event);
    };
    return (React.createElement(View, { style: styles.container },
        React.createElement(FlatList, __assign({}, rest, { keyExtractor: keyExtractor, data: data, 
            // @ts-ignore
            renderItem: function (info) {
                return renderItem === null || renderItem === void 0 ? void 0 : renderItem(info, info.index === indexActive);
            }, onMomentumScrollEnd: handleDragEnd })),
        React.createElement(View, { pointerEvents: "none", style: styles.pager }, data === null || data === void 0 ? void 0 : data.map(function (item, index) {
            return (React.createElement(View, { key: keyExtractor === null || keyExtractor === void 0 ? void 0 : keyExtractor(item, index), style: [styles.pagerItem, { backgroundColor: index === indexActive ? COLORS.PRIMARY : '#fff' }] }));
        }))));
};
export default Carousel;
