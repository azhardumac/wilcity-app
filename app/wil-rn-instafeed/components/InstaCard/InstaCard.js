import React, { memo } from 'react';
import { Dimensions, View } from 'react-native';
import { COLORS } from "../../utils/constants";
import styles from './styles';
import InstaCardHeader from './InstaCardHeader';
import InstaCardContent from './InstaCardContent';
import InstaCardActions from './InstaCardActions';
import ImageCardFeatured from './ImageCardFeatured';
var SCREEN_WIDTH = Dimensions.get('window').width;
var InstaCard = function (_a) {
    var imageSrc = _a.imageSrc, avatarSrc = _a.avatarSrc, authorName = _a.authorName, authorProfileLink = _a.authorProfileLink, authorProfileName = _a.authorProfileName, comment = _a.comment, date = _a.date, followText = _a.followText, imageHeight = _a.imageHeight, imageWidth = _a.imageWidth, isVideo = _a.isVideo, like = _a.like, shareText = _a.shareText, text = _a.text, urlShare = _a.urlShare, videoUrl = _a.videoUrl, gallery = _a.gallery, hashtags = _a.hashtags, _b = _a.linkColor, linkColor = _b === void 0 ? COLORS.SECONDARY : _b, _c = _a.textColor, textColor = _c === void 0 ? COLORS.DARK_2 : _c;
    return (React.createElement(View, { style: styles.container },
        React.createElement(ImageCardFeatured, { imageSrc: imageSrc, height: (imageHeight * SCREEN_WIDTH) / imageWidth, width: SCREEN_WIDTH, isVideo: isVideo, videoUrl: videoUrl, gallery: gallery }),
        React.createElement(View, { style: styles.body },
            React.createElement(InstaCardHeader, { avatarSrc: avatarSrc, authorName: authorName, authorProfileName: authorProfileName, authorProfileLink: authorProfileLink }),
            React.createElement(InstaCardActions, { textColor: textColor, authorProfileLink: authorProfileLink, like: like, comment: comment, shareText: shareText, followText: followText, urlShare: urlShare }),
            React.createElement(InstaCardContent, { text: text, linkColor: linkColor, textColor: textColor, hashtags: hashtags, date: date }))));
};
export default memo(InstaCard);
