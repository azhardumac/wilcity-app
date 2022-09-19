import React from 'react';
import { View } from 'react-native';
import styles from './styles';
export default function Grid(_a) {
    var data = _a.data, _b = _a.column, column = _b === void 0 ? 1 : _b, _c = _a.gap, gap = _c === void 0 ? 5 : _c, renderItem = _a.renderItem, _d = _a.keyExtractor, keyExtractor = _d === void 0 ? function (_, index) { return String(index); } : _d;
    var _renderItem = function (item, index) {
        return (React.createElement(View, { key: keyExtractor(item, index), style: [styles.item, { width: 100 / column + "%", padding: gap / 2 }] }, renderItem(item, index)));
    };
    return React.createElement(View, { style: [styles.container, { marginHorizontal: -gap / 2 }] }, data.map(_renderItem));
}
