import React, { useEffect, useState } from 'react';
import { ActivityIndicator, TouchableOpacity, View, Image, StyleSheet, Linking, FlatList } from 'react-native';
import Grid from "../components/Grid/Grid";
import { getColumn, getGap, getInstaGridData, getRow, splitCarouselData } from "../utils/general";
import useSelector from "../utils/useSelector";
import Button from "../components/Button/Button";
import { __wilInstagramShopify__ } from './fakeSettings';
import appStore from './store/appStore';
import modalStore from './store/modalStore';
import ModalInsta from './ModalInsta';
var endpoints = new Set();
var styles = StyleSheet.create({
    imageWrap: {
        backgroundColor: '#eee',
    },
    image: {
        width: '100%',
        paddingTop: '100%',
    },
    loading: {
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadmore: { alignItems: 'center', marginTop: 15 },
});
var InstaFeed = function (_a) {
    var _b = _a.settings, settings = _b === void 0 ? __wilInstagramShopify__ : _b, slotId = _a.slotId, containerWidth = _a.containerWidth, _c = _a.useNavigation, useNavigation = _c === void 0 ? false : _c, navigation = _a.navigation, screenName = _a.screenName;
    var setting = settings.filter(function (setting) { return setting.slot_data_id === slotId; })[0];
    var row = getRow(setting);
    var _d = useState(row), rowState = _d[0], setRowState = _d[1];
    var appSelect = useSelector(appStore);
    var instaSection = !!(setting === null || setting === void 0 ? void 0 : setting.insta_username) ? appSelect[setting.insta_username] : {};
    var column = getColumn(setting);
    var gap = getGap(setting);
    var getInstaFeed = function () {
        settings.forEach(function (setting) {
            if (setting.insta_username) {
                var cond = !endpoints.has(setting.insta_username);
                endpoints.add(setting.insta_username);
                if (cond) {
                    appStore.getInstagramRequest(setting.insta_username);
                }
            }
        });
    };
    var handleLoadMore = function () {
        setRowState(function (rowState) { return rowState + column * 3; });
    };
    var handleOpenModal = function (id, link, index) { return function () {
        if (useNavigation) {
            navigation.navigate(screenName, {
                instaSection: instaSection,
                setting: setting,
                slotId: slotId,
            });
            return;
        }
        switch (setting.click_item_action) {
            case 'navigate_instagram':
                Linking.openURL(link);
                break;
            case 'open_modal':
                modalStore.handleOpenModal(id, slotId, index);
                break;
            case 'none':
            default:
                break;
        }
    }; };
    useEffect(function () {
        getInstaFeed();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    var renderInstaItem = function (item, index) {
        return (React.createElement(TouchableOpacity, { activeOpacity: 1, style: styles.imageWrap, onPress: handleOpenModal(item.shortcode, item.link, index) },
            React.createElement(Image, { source: { uri: item.thumbnailSrc }, resizeMode: "cover", style: styles.image })));
    };
    if (!instaSection || !!instaSection.message || !setting) {
        return null;
    }
    if (instaSection.isLoading) {
        return (React.createElement(View, { style: styles.loading },
            React.createElement(ActivityIndicator, { size: "small", color: "#666" })));
    }
    var renderContent = function () {
        var _a;
        switch (setting.template) {
            case 'grid':
            case 'grid-brick':
                return (React.createElement(View, { style: { width: containerWidth } },
                    React.createElement(Grid, { gap: gap, column: column, data: getInstaGridData(instaSection, rowState, column), keyExtractor: function (item) { return item.shortcode; }, renderItem: renderInstaItem }),
                    rowState * column < (((_a = instaSection.posts) === null || _a === void 0 ? void 0 : _a.length) || Infinity) && (React.createElement(View, { style: styles.loadmore },
                        React.createElement(Button, { borderRadius: "round", onPress: handleLoadMore, backgroundColor: setting.link_color, color: "#fff" }, setting.btn_action_loadmore.text)))));
            case 'slider':
                return (React.createElement(View, { style: { width: containerWidth, overflow: 'hidden' } },
                    React.createElement(FlatList, { horizontal: true, removeClippedSubviews: true, showsHorizontalScrollIndicator: false, data: splitCarouselData(instaSection.posts || [], column, rowState), keyExtractor: function (item) { return JSON.stringify(item); }, renderItem: function (_a) {
                            var item = _a.item;
                            return (React.createElement(View, { style: { width: containerWidth - 10, paddingHorizontal: gap / 2 } },
                                React.createElement(Grid, { gap: gap, column: column, data: item, keyExtractor: function (item) { return item.shortcode; }, renderItem: function (item) {
                                        return renderInstaItem(item, item.index);
                                    } })));
                        }, style: { width: containerWidth + gap, marginLeft: -gap } })));
            default:
                return null;
        }
    };
    return (React.createElement(React.Fragment, null,
        renderContent(),
        !useNavigation && React.createElement(ModalInsta, { instaSection: instaSection, setting: setting, slotId: slotId })));
};
export default InstaFeed;
