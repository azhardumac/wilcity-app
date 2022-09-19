import React, { memo } from 'react';
import { Linking, Text, View } from 'react-native';
import styles from './styles';
var regExpUserTag = /@(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}/g;
var InstaCardContent = function (_a) {
    var linkColor = _a.linkColor, textColor = _a.textColor, hashtags = _a.hashtags, text = _a.text, date = _a.date;
    if (!text) {
        return null;
    }
    return (React.createElement(View, { style: styles.content },
        React.createElement(Text, { style: { color: textColor, lineHeight: 20 } }, text.split(' ').map(function (item, index) {
            if (hashtags === null || hashtags === void 0 ? void 0 : hashtags.includes(item)) {
                return (React.createElement(Text, { key: index, style: { color: linkColor }, onPress: function () {
                        Linking.openURL("https://www.instagram.com/explore/tags/" + item);
                    } }, item + " "));
            }
            if (regExpUserTag.test(item)) {
                return (React.createElement(Text, { key: index, style: { color: linkColor }, onPress: function () {
                        Linking.openURL("https://www.instagram.com/" + item.replace(/^@/g, ''));
                    } }, item + " "));
            }
            return item + " ";
        })),
        React.createElement(Text, { style: [styles.date, { color: textColor }] }, date)));
};
export default memo(InstaCardContent);
