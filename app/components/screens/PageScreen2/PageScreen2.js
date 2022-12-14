import React, { useEffect } from "react";
import { TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { WebView } from "react-native-webview";
import * as WebBrowser from "expo-web-browser";
import { Layout } from "../../dumbs";
import ContentWebView from "./ContentWebView";
import useWebViewLoadEnd from "./useWebViewLoadEnd";
import useWebViewMessage from "./useWebViewMessage";

const PageScreen2 = ({ navigation }) => {
    const { params } = navigation.state;
    const { webViewRef, onLoadEnd } = useWebViewLoadEnd(navigation);
    const { title, onMessage } = useWebViewMessage(navigation);
    const translations = useSelector((state) => state.translations);
    const settings = useSelector((state) => state.settings);

    return (
        <Layout
    navigation={navigation}
    {...(params.backButtonDisabled
        ? { textSearch: translations.search }
        : { headerType: "headerHasBack" })}
    title={title}
    goBack={() => navigation.goBack()}
    renderRight={() => (
    <TouchableOpacity
    activeOpacity={0.5}
    onPress={() => navigation.navigate("SearchScreen")}
>
<Feather name="search" size={20} color="#fff" />
        </TouchableOpacity>
)}
    renderContent={() => (
    <ContentWebView
    navigation={navigation}
    webViewRef={webViewRef}
    onLoadEnd={onLoadEnd}
    onMessage={onMessage}
    />
)}
    colorPrimary={settings.colorPrimary}
    scrollViewEnabled={false}
    />
);
};

export default PageScreen2;
