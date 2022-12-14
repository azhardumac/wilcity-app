import React, { PureComponent, Fragment } from "react";
import {
  View,
  Dimensions,
  Alert,
  RefreshControl,
  StyleSheet,
  Text,
} from "react-native";
import { get } from "lodash";
import * as Consts from "../../constants/styleConstants";
import { Layout } from "../dumbs";
import {
  ImageCircleAndText,
  ListItemTouchable,
  ViewWithLoading,
  Switch,
  ImageCache,
  ModalPicker,
  Modal,
  wait,
  InputMaterial,
} from "../../wiloke-elements";
import { connect } from "react-redux";
import {
  logout,
  getAccountNav,
  getMyProfile,
  resetMyFavorites,
  getCountNotifications,
  setUserConnection,
  getProductsCart,
  setLocale,
} from "../../actions";
import { LoginFormContainer } from "../smarts";
import _ from "lodash";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Updates from "expo-updates";
import Axios from "axios";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

class AccountScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      modalDeleteAccountVisible: false,
      password: "",
    };
    this.refreshing = false;
  }

  getAccount = async () => {
    try {
      const { auth, getMyProfile, getAccountNav } = this.props;
      const { isLoggedIn } = auth;
      if (isLoggedIn) {
        await Promise.all([getMyProfile(), getAccountNav()]);
      }
      this.setState({ isLoading: false });
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount() {
    const { navigation } = this.props;
    navigation.addListener("didFocus", () => {
      this.getAccount();
    });
  }

  _handleRefresh = async () => {
    try {
      const { getMyProfile, getAccountNav, auth } = this.props;
      const { isLoggedIn } = auth;
      this.refreshing = true;
      this.forceUpdate();
      isLoggedIn && (await Promise.all([getMyProfile(), getAccountNav()]));
      this.refreshing = false;
      this.forceUpdate();
    } catch (err) {
      console.log(err);
    }
  };

  _getFormLoginStyle = () => {
    const { auth } = this.props;
    const { isLoggedIn } = auth;
    return !isLoggedIn
      ? {
          flex: 1,
          height: SCREEN_HEIGHT - 100,
          backgroundColor: Consts.colorGray2,
        }
      : {};
  };

  _renderAvatar = () => {
    const { myProfile } = this.props;
    const _myProfile = Object.values(myProfile).reduce(
      (acc, cur) => ({
        ...acc,
        ...cur,
      }),
      {}
    );
    const preview = {
      uri: _myProfile.cover_image,
    };
    const uri = _myProfile.cover_image;
    return (
      <Fragment>
        <View
          style={{
            backgroundColor: Consts.colorGray2,
            height: (50 * SCREEN_WIDTH) / 100,
          }}
        >
          {!!uri && (
            <ImageCache
              {...{ preview, uri }}
              tint="light"
              resizeMode="cover"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          )}
        </View>
        <ImageCircleAndText
          image={_myProfile.avatar}
          title={_myProfile.display_name}
          text={_myProfile.position}
          imageSize={80}
          style={{ marginTop: -40 }}
          styleImage={{ borderWidth: 3, borderColor: "#fff" }}
        />
        <View
          style={{
            height: 20,
            borderBottomWidth: 1,
            borderBottomColor: Consts.colorGray1,
          }}
        />
      </Fragment>
    );
  };

  _getNavigateName = (endpoint, postType) => {
    if (!postType) {
      switch (endpoint) {
        case "get-profile":
          return "ProfileScreen";
        case "favorites":
          return "FavoritesScreen";
        case "events":
          return "MyEventsScreen";
        case "notifications":
          return "NotificationsScreen";
        case "messages":
          return "MessageScreenInAccount";
        case "wc/products/wishlist":
          return "ProductWishListScreen";
        case "wc/orders":
          return "ShopOrderScreen";
        case "wc/bookings":
          return "BookingScreen";
        case "dokan/sub-menus":
          return "DokanScreen";
        case "me/reviews":
          return "MyReviewScreen";
        default:
          return null;
      }
    } else {
      return "MyListingsScreen";
    }
  };

  _handleLogin = async () => {
    const { auth, getProductsCart } = this.props;
    const { isLoggedIn } = auth;
    if (isLoggedIn) {
      await getProductsCart(auth.token);
    }
  };

  _handleNavItemPress = (item, text) => (_) => {
    const { navigation, auth } = this.props;
    item.endpoint === "notifications" && this.props.getCountNotifications();
    const postType = get(item, "postType", false);
    if (this._getNavigateName(item.endpoint, postType) !== null) {
      navigation.navigate(this._getNavigateName(item.endpoint, postType), {
        endpoint: item.endpoint,
        name: text,
        postType,
      });
      return;
    }
    if (item.endpoint.includes("http")) {
      navigation.navigate("PageScreen2", {
        uri: `${item.endpoint}${
          item.endpoint.includes("?") ? "&" : "?"
        }iswebview=yes&token=${auth.token}`,
      });
      return;
    }
    Alert.alert("Invalid Menu!");
  };

  _renderNavItem = (item) => {
    const { navigation } = this.props;
    const text = `${item.name} ${
      item.count &&
      item.count !== undefined &&
      item.endpoint !== "get-my-notifications"
        ? `(${item.count})`
        : ""
    }`;
    const postType = get(item, "postType", false);
    return (
      <ListItemTouchable
        key={item.name}
        iconName={item.icon}
        text={text}
        onPress={this._handleNavItemPress(item, text)}
        onLayout={() => {
          navigation.addListener("didFocus", async () => {
            const hasDetailPreview = await AsyncStorage.getItem(
              "hasDetailPreview"
            );
            if (postType === hasDetailPreview) {
              this._handleNavItemPress(item, text)();
            }
          });
        }}
      />
    );
  };

  _renderNotificationToggle = () => {
    const { settings, translations } = this.props;
    return (
      <View style={styles.notification}>
        <Switch
          checked
          name="notification_toggle"
          size={24}
          swipeActiveColor={settings.colorPrimary}
          circleAnimatedColor={[Consts.colorDark4, settings.colorPrimary]}
          colorActive={settings.colorPrimary}
          label="Enable Notification"
          onPress={this._handleNotificationToggle}
        />
      </View>
    );
  };

  _handleSettings = () => {
    const { navigation, translations } = this.props;
    navigation.navigate("SettingScreen", {
      name: translations.settings,
    });
  };

  _handleDeleteAccount = () => {
    this.setState({
      modalDeleteAccountVisible: true,
    });
  };

  _handleReportFormBackdropPress = () => {
    this.setState({ modalDeleteAccountVisible: false });
  };

  handleLogout = (myID) => () => {
    const { logout, resetMyFavorites } = this.props;
    logout(myID);
    resetMyFavorites();
    setUserConnection(myID, false);
    setTimeout(
      () =>
        this._scrollView.scrollTo({
          x: 0,
          y: 0,
          animated: false,
        }),
      1
    );
  };

  renderSelectLang = () => {
    const { translations, selectLang, setLocale, settings } = this.props;
    return (
      !!selectLang && (
        <ModalPicker
          matterial
          clearSelectEnabled={false}
          label={translations.language}
          options={selectLang.options ?? []}
          cancelText={translations.cancel}
          doneText={translations.ok}
          onChangeOptions={async (_, selected) => {
            if (
              !selectLang.options.find((item) => item.id === selected[0].id)
                ?.selected
            ) {
              await setLocale(selected[0].locale);
              await wait(300);
              Updates.reloadAsync();
            }
          }}
          colorPrimary={settings.colorPrimary}
        />
      )
    );
  };

  renderContent = () => {
    const {
      navigation,
      auth,
      logout,
      accountNav,
      translations,
      resetMyFavorites,
      setUserConnection,
      shortProfile,
      settings,
    } = this.props;
    const { isLoggedIn, token } = auth;
    const { isLoading } = this.state;
    const myID = shortProfile.userID;
    return (
      <View
        style={[
          isLoggedIn ? {} : { padding: 10 },
          { ...this._getFormLoginStyle() },
          {
            width: Consts.screenWidth,
          },
        ]}
      >
        <View style={{ display: isLoggedIn ? "none" : "flex" }}>
          <LoginFormContainer
            navigation={navigation}
            onLogin={this._handleLogin}
          />
          <View style={{ marginTop: 10 }}>{this.renderSelectLang()}</View>
        </View>
        {isLoggedIn && (
          <View>
            {this._renderAvatar()}
            <ViewWithLoading
              isLoading={isLoading}
              contentLoader="header"
              contentLoaderItemLength={5}
              gap={0}
            >
              {!_.isEmpty(accountNav) &&
                accountNav
                  .filter((item) => item.endpoint !== "get-my-messages")
                  .map(this._renderNavItem)}
              {!_.isEmpty(accountNav) && (
                <View>
                  <ListItemTouchable
                    iconName="settings"
                    text={translations.settings}
                    onPress={this._handleSettings}
                  />
                  <Modal
                    isVisible={this.state.modalDeleteAccountVisible}
                    headerIcon="user-x"
                    headerTitle={translations.confirmDeleteAccount}
                    colorPrimary={settings.colorPrimary}
                    cancelText={translations.cancel}
                    submitText={translations.deleteMyAccount}
                    onBackdropPress={this._handleReportFormBackdropPress}
                    renderButtonTextToggle={() => (
                      <ListItemTouchable
                        disabled
                        iconName="user-x"
                        text={translations.deleteMyAccount}
                      />
                    )}
                    onButtonTextToggle={this._handleDeleteAccount}
                    onSubmitAsync={async () => {
                      try {
                        await Axios.delete("users", {
                          data: { current_password: this.state.password },
                        });
                        this.handleLogout(myID)();
                        Promise.resolve();
                      } catch (error) {
                        console.log(error);
                      }
                    }}
                  >
                    <InputMaterial
                      secureTextEntry
                      placeholder={translations.password}
                      colorPrimary={settings.colorPrimary}
                      onChangeText={(text) => {
                        this.setState({
                          password: text,
                        });
                      }}
                    />
                  </Modal>
                  <ListItemTouchable
                    iconName="skip-back"
                    text={translations.logout}
                    onPress={() => {
                      Alert.alert(
                        translations.logout,
                        translations.logoutDesc,
                        [
                          {
                            text: translations.cancel,
                            style: "cancel",
                          },
                          {
                            text: translations.logout,
                            onPress: this.handleLogout(myID),
                          },
                        ]
                      );
                    }}
                    style={{ marginBottom: 10 }}
                  />
                  <View style={{ paddingHorizontal: 10, paddingBottom: 20 }}>
                    {this.renderSelectLang()}
                  </View>
                </View>
              )}
            </ViewWithLoading>
          </View>
        )}
      </View>
    );
  };
  render() {
    const { navigation, settings, translations, auth } = this.props;
    const { isLoggedIn } = auth;
    return (
      <Layout
        navigation={navigation}
        renderContent={this.renderContent}
        colorPrimary={settings.colorPrimary}
        textSearch={translations.search}
        isLoggedIn={isLoggedIn}
        scrollViewRef={(c) => (this._scrollView = c)}
        refreshControl={
          <RefreshControl
            refreshing={this.refreshing}
            onRefresh={this._handleRefresh}
            tintColor={settings.colorPrimary}
            progressBackgroundColor={Consts.colorGray1}
          />
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  notification: {
    borderBottomWidth: 1,
    borderBottomColor: Consts.colorGray1,
    backgroundColor: Consts.colorGray3,
    padding: 15,
  },
});

const mapStateToProps = (state) => ({
  auth: state.auth,
  settings: state.settings,
  translations: state.translations,
  accountNav: state.accountNav,
  myProfile: state.myProfile,
  shortProfile: state.shortProfile,
  selectLang: state.settings.WPML
    ? {
        localeNameActive: state.settings.WPML.lang[state.locale]?.nativeName,
        options: Object.values(state.settings.WPML.lang).map((item) => ({
          id: item.id,
          name: item.nativeName,
          locale: item.code,
          selected: !!state.settings.WPML.lang[state.locale]
            ? state.locale === item.code
            : state.settings.WPML.defaultLang === item.code,
        })),
      }
    : undefined,
});

const mapDispatchToProps = {
  logout,
  getAccountNav,
  getMyProfile,
  resetMyFavorites,
  getCountNotifications,
  setUserConnection,
  getProductsCart,
  setLocale,
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountScreen);
