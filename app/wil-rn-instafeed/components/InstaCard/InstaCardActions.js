import Button from "../Button/Button";
import React, { memo } from 'react';
import { Image, Linking, Platform, Share, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from "../../utils/constants";
import { iconComment, iconFollow, iconLike, iconShare } from "../../utils/icons";
import numberFormat from "../../utils/numberFormat";
import styles from './styles';
var InstaCardActions = function (_a) {
    var textColor = _a.textColor, comment = _a.comment, like = _a.like, authorProfileLink = _a.authorProfileLink, followText = _a.followText, shareText = _a.shareText, urlShare = _a.urlShare;
    var shareContentIOS = {
        message: '',
        url: urlShare,
    };
    var shareContentAndroid = {
        message: urlShare,
    };
    var shareContent = Platform.OS === 'ios' ? shareContentIOS : shareContentAndroid;
    var handleShare = function () {
        try {
            Share.share(shareContent);
        }
        catch (_a) {
            console.log('share error');
        }
    };
    var handleOpenProfileLink = function () {
        Linking.openURL(authorProfileLink);
    };
    return (React.createElement(View, { style: styles.actions },
        React.createElement(TouchableOpacity, { style: styles.actionsLeft, onPress: handleOpenProfileLink },
            React.createElement(View, { style: styles.iconText },
                React.createElement(Image, { source: { uri: iconLike }, style: [styles.iconLike, { tintColor: textColor }] }),
                React.createElement(Text, { style: [styles.actionsLeftText, { color: textColor }] }, numberFormat(like))),
            React.createElement(View, { style: styles.iconText },
                React.createElement(Image, { source: { uri: iconComment }, style: [styles.iconComment, { tintColor: textColor }] }),
                React.createElement(Text, { style: [styles.actionsLeftText, { color: textColor }] }, numberFormat(comment)))),
        React.createElement(View, { style: styles.actionsRight },
            React.createElement(Button, { backgroundColor: COLORS.DARK_6, borderRadius: "pill", size: "small", onPress: handleShare },
                React.createElement(Image, { source: { uri: iconShare }, style: styles.icon }),
                React.createElement(Text, { style: styles.buttonTextShare }, shareText)),
            React.createElement(View, { style: styles.buttonFollow },
                React.createElement(Button, { backgroundColor: COLORS.PRIMARY, borderRadius: "pill", size: "small", onPress: function () {
                        Linking.openURL(authorProfileLink);
                    } },
                    React.createElement(Image, { source: { uri: iconFollow }, style: [styles.icon, { tintColor: '#fff' }] }),
                    React.createElement(Text, { style: styles.buttonTextFollow }, followText))))));
};
export default memo(InstaCardActions);
