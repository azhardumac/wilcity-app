import React, { useEffect } from "react";
import { View, Platform, Alert } from "react-native";
import { Button } from "../../../wiloke-elements";
import Svg, { G, Path } from "react-native-svg";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import configureApp from "../../../../configureApp.json";

WebBrowser.maybeCompleteAuthSession();
const useProxy = Platform.select({ default: false });

export default function GoogleButton2(props) {
  const {
    isLoading = false,
    textButton = "Login with Google",
    containerStyle = {},
    onAction = () => {},
    width = 250,
    height = 40,
  } = props;
  const { googleLogin } = configureApp;
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: googleLogin.webClientId,
    ...(googleLogin.iosStandaloneAppClientId
      ? { iosClientId: googleLogin.iosStandaloneAppClientId }
      : {}),
    ...(googleLogin.androidStandaloneAppClientId
      ? { androidClientId: googleLogin.androidStandaloneAppClientId }
      : {}),
    webClientId: googleLogin.webClientId,
    scopes: ["profile", "email"],
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      getGoogleUser(authentication.accessToken);
    }
  }, [response]);

  const getGoogleUser = async (accessToken) => {
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      const user = await response.json();
      if (user?.email) {
        onAction(accessToken, user);
      }
    } catch (error) {
      Alert.alert("Google login error.");
    }
  };

  const _renderGoogleIcon = () => {
    return (
      <View style={{ marginRight: 10 }}>
        <Svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="18px"
          height="18px"
          viewBox="0 0 48 48"
          className="abcRioButtonSvg"
        >
          <G>
            <Path
              fill="#EA4335"
              d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
            ></Path>
            <Path
              fill="#4285F4"
              d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
            ></Path>
            <Path
              fill="#FBBC05"
              d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
            ></Path>
            <Path
              fill="#34A853"
              d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
            ></Path>
            <Path fill="none" d="M0 0h48v48H0z"></Path>
          </G>
        </Svg>
      </View>
    );
  };

  return (
    <View style={containerStyle}>
      <Button
        {...props}
        backgroundColor="light"
        color="dark"
        size="md"
        block={true}
        isLoading={isLoading}
        textStyle={{ fontSize: 17 }}
        onPress={() => {
          promptAsync({
            useProxy,
            showInRecents: true,
          });
        }}
        renderBeforeText={_renderGoogleIcon}
      >
        {textButton}
      </Button>
    </View>
  );
}
