import React, { memo } from 'react';
import { Image, Linking, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
var InstaCardHeader = function (_a) {
    var avatarSrc = _a.avatarSrc, authorName = _a.authorName, authorProfileName = _a.authorProfileName, authorProfileLink = _a.authorProfileLink;
    var handleOpenProfileLink = function () {
        Linking.openURL(authorProfileLink);
    };
    return (React.createElement(TouchableOpacity, { style: styles.header, onPress: handleOpenProfileLink },
        React.createElement(Image, { source: { uri: avatarSrc }, style: styles.avatar }),
        React.createElement(View, null,
            React.createElement(Text, { style: styles.authorName, numberOfLines: 1 }, authorName),
            React.createElement(Text, { style: styles.authorLink, numberOfLines: 1 }, "@" + authorProfileName))));
};
export default memo(InstaCardHeader);
