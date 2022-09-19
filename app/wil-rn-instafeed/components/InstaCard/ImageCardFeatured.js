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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import React, { useRef, memo, useState, useEffect } from 'react';
import { WebView } from 'react-native-webview';
import { ActivityIndicator, Image, StatusBar, View } from 'react-native';
import Carousel from "../Carousel/Carousel";
import delay from "../../utils/delay";
import styles from './styles';
var getHtmlVideo = function (videoUrl, imageSrc, width, height) { return "\n    <body style=\"margin: 0;padding:0;overflow: hidden\">\n      <div style=\"position: relative; width: 100%; background-size: cover; background-position: 50% 50%; background-image: url('" + imageSrc + "')\">\n        <video style=\"position: absolute;top:0;left:0;width: 100%;height: 100%\" controls=\"true\" name=\"media\"><source src=" + videoUrl + " type=\"video/mp4\" /></video>\n        <div style=\"padding-top: " + (height / width) * 100 + "%\"></div>\n      </div>\n    </body>\n  "; };
var ImageCardFeatured = function (_a) {
    var imageSrc = _a.imageSrc, height = _a.height, width = _a.width, isVideo = _a.isVideo, videoUrl = _a.videoUrl, gallery = _a.gallery;
    var videoRef = useRef(null);
    var _b = useState({}), videosLoaded = _b[0], setVideosLoaded = _b[1];
    useEffect(function () {
        return function () {
            setVideosLoaded({});
        };
    }, []);
    var renderImage = function (uri) {
        return React.createElement(Image, { source: { uri: uri }, style: [styles.image, { width: width, height: height }] });
    };
    var renderVideo = function (videoUrl, imageSrc, isActive) {
        if (isActive === void 0) { isActive = true; }
        return (React.createElement(View, { style: styles.webviewWrap },
            !videosLoaded[videoUrl] && (React.createElement(View, { style: styles.imageUnderlay },
                renderImage(imageSrc),
                React.createElement(View, { style: styles.videoLoading },
                    React.createElement(ActivityIndicator, { size: "large", color: "#fff" })))),
            isActive ? (React.createElement(WebView, { ref: videoRef, source: { html: getHtmlVideo(videoUrl, imageSrc, width, height) }, onLoadEnd: function () {
                    var _a;
                    (_a = videoRef.current) === null || _a === void 0 ? void 0 : _a.injectJavaScript("\n              const videoEl = document.querySelector('video');\n              videoEl.addEventListener('pause', () => {\n                window.ReactNativeWebView.postMessage();\n              })\n            ");
                    setVideosLoaded(function (videosLoaded) {
                        var _a;
                        return (__assign(__assign({}, videosLoaded), (_a = {}, _a[videoUrl] = true, _a)));
                    });
                }, scrollEnabled: false, style: { width: width, height: height }, onMessage: function () {
                    StatusBar.setHidden(true);
                } })) : (React.createElement(View, { style: { width: width, height: height } }))));
    };
    if (!!gallery) {
        return (React.createElement(Carousel, { horizontal: true, pagingEnabled: true, removeClippedSubviews: true, showsHorizontalScrollIndicator: false, nestedScrollEnabled: true, data: gallery, keyExtractor: function (item) { return item.shortcode; }, renderItem: function (_a, isActive) {
                var item = _a.item;
                if (item.video) {
                    return renderVideo(item.videoUrl, item.thumbnails[1].src, isActive);
                }
                return renderImage(item.thumbnails[1].src);
            }, onScrollEndDrag: function () { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, delay(200)];
                        case 1:
                            _a.sent();
                            setVideosLoaded({});
                            return [2 /*return*/];
                    }
                });
            }); } }));
    }
    if (isVideo) {
        return renderVideo(videoUrl, imageSrc);
    }
    return renderImage(imageSrc);
};
export default memo(ImageCardFeatured);
