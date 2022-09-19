var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import React, { memo, useRef } from 'react';
import { TouchableOpacity, FlatList, StyleSheet, Platform, View, Image } from 'react-native';
import InstaCard from "../components/InstaCard/InstaCard";
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import relativeTime from 'dayjs/plugin/relativeTime';
import useSelector from "../utils/useSelector";
import { COLORS } from "../utils/constants";
import { iconClose } from "../utils/icons";
import modalStore from './store/modalStore';
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(relativeTime);
var styles = StyleSheet.create({
    container: {
        position: 'relative',
        paddingTop: Platform.OS === 'android' ? 25 : 0,
    },
    flatlist: {
        backgroundColor: COLORS.DARK_6,
    },
    image: {
        paddingTop: '50%',
        borderWidth: 10,
    },
    close: {
        position: 'absolute',
        top: 15,
        right: 15,
        zIndex: 9,
        width: 40,
        height: 40,
        borderRadius: 40,
        backgroundColor: COLORS.DARK_1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconClose: {
        tintColor: '#fff',
        width: 20,
        height: 20,
    },
});
var InstaContent = function (_a) {
    var _b, _c, _d;
    var instaSection = _a.instaSection, setting = _a.setting, slotId = _a.slotId, _e = _a.useNavigation, useNavigation = _e === void 0 ? false : _e, navigation = _a.navigation;
    var listInstaRef = useRef(null);
    var modalSelect = useSelector(modalStore);
    var itemActive = (_b = instaSection.posts) === null || _b === void 0 ? void 0 : _b[(_c = modalSelect[slotId]) === null || _c === void 0 ? void 0 : _c.indexActive];
    var data = __spreadArrays((!!itemActive ? [itemActive] : []), (((_d = instaSection.posts) === null || _d === void 0 ? void 0 : _d.filter(function (item) { var _a; return item.shortcode !== ((_a = modalSelect[slotId]) === null || _a === void 0 ? void 0 : _a.idActive); })) || []));
    var handleCloseModal = function () {
        if (useNavigation) {
            navigation.goBack();
        }
        else {
            modalStore.handleCloseModal(slotId);
        }
    };
    var handleScrollEndDrag = function (event) {
        var contentOffset = event.nativeEvent.contentOffset;
        if (contentOffset.y <= -80 && !useNavigation) {
            modalStore.handleCloseModal(slotId);
        }
    };
    var renderInstaItem = function (_a) {
        var _b, _c, _d, _e;
        var item = _a.item;
        return (React.createElement(InstaCard, { imageSrc: item.thumbnailSrc, avatarSrc: ((_b = instaSection.profile) === null || _b === void 0 ? void 0 : _b.profilePicture) || '', authorName: ((_c = instaSection.profile) === null || _c === void 0 ? void 0 : _c.fullName) || '', authorProfileName: ((_d = instaSection.profile) === null || _d === void 0 ? void 0 : _d.userName) || '', authorProfileLink: "https://www.instagram.com/" + (((_e = instaSection.profile) === null || _e === void 0 ? void 0 : _e.userName) || ''), comment: item.comments, like: item.likes, text: item.caption, hashtags: item.hashtags, linkColor: setting.link_color_popup, textColor: setting.text_color_popup, followText: setting.btn_action_follow.status === 'enable' ? setting.btn_action_follow.text : '', shareText: setting.btn_action_share.status === 'enable' ? setting.btn_action_share.text : '', shareButtonFacebook: setting.btn_action_share_facebook.status === 'enable' ? setting.btn_action_share_facebook.text : '', shareButtonTwitter: setting.btn_action_share_twitter.status === 'enable' ? setting.btn_action_share_twitter.text : '', shareButtonMessenger: setting.btn_action_share_messenger.status === 'enable' ? setting.btn_action_share_messenger.text : '', shareButtonCopylink: setting.btn_action_copylink.status === 'enable' ? setting.btn_action_copylink.text : '', shareButtonEmail: setting.btn_action_share_email.status === 'enable' ? setting.btn_action_share_email.text : '', date: Platform.OS === 'android'
                ? dayjs(item.date.date).fromNow()
                : dayjs
                    .utc(item.date.date)
                    .tz(item.date.timezone)
                    .fromNow(), imageWidth: item.width, imageHeight: item.height, urlShare: item.link, gallery: item.gallery, isVideo: item.video, videoUrl: item.videoUrl || '' }));
    };
    return (React.createElement(View, { style: styles.container },
        React.createElement(TouchableOpacity, { onPress: handleCloseModal, style: styles.close },
            React.createElement(Image, { source: { uri: iconClose }, style: styles.iconClose })),
        React.createElement(FlatList, { removeClippedSubviews: true, contentContainerStyle: styles.flatlist, ref: listInstaRef, data: data, keyExtractor: function (item) { return item.shortcode; }, renderItem: renderInstaItem, onScrollEndDrag: handleScrollEndDrag, nestedScrollEnabled: true })));
};
export default memo(InstaContent);
