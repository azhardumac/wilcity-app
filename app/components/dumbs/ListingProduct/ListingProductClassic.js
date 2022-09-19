import _ from "lodash";
import PropTypes from "prop-types";
import React, { PureComponent } from "react";
import {
  Alert,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import * as Consts from "../../../constants/styleConstants";
import { adMobModal } from "../../../wiloke-elements";
import AnimatedView from "../AnimatedView/AnimatedView";
import ListingProductItemClassic from "../ProductItem/ListingProductItemClassic";

export default class ListingProductClassic extends PureComponent {
  static propTypes = {
    data: PropTypes.array,
    aSettings: PropTypes.object,
    colorPrimary: PropTypes.string,
    auth: PropTypes.object,
  };
  static defaultProps = {
    data: [],
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  _handleItem = (item) => () => {
    const { navigation, admob, auth } = this.props;
    const isAdmob = _.get(admob, "oFullWidth");
    !!isAdmob && adMobModal({ variant: admob.oFullWidth.variant });
    if (item.type === "booking" || item.type === "accommodation-booking") {
      auth.isLoggedIn
        ? navigation.navigate("PageScreen2", {
            uri: `${item.link}${
              item.link.includes("?") ? "&" : "?"
            }iswebview=yes&token=${auth.token ?? ""}`,
          })
        : this._handleAccountScreen();
      return;
    }
    navigation.navigate("ProductDetailScreen", {
      productID: item.ID,
      oFeaturedImg: item.oFeaturedImg.large,
      name: item.title,
    });
  };

  _handleAccountScreen = () => {
    const { translations, navigation } = this.props;
    Alert.alert(translations.login, translations.requiredLogin, [
      {
        text: translations.cancel,
        style: "cancel",
      },
      {
        text: translations.continue,
        onPress: () => navigation.navigate("AccountScreen"),
      },
    ]);
  };

  _keyExtractor = (item, index) => `${index}` + "listingProductClassic";

  _renderItem = ({ item, index }) => {
    const { colorPrimary } = this.props;
    const salePrice = _.get(item, "salePriceHTML", item.salePriceHtml);
    const regularPrice = _.get(item, "regularPriceHTML", item.regularPriceHtml);
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={{ padding: 5 }}
        onPress={this._handleItem(item)}
      >
        <ListingProductItemClassic
          productName={item.title}
          author={item.oAuthor.displayName}
          category={item.oCategories[0]}
          salePrice={item.salePrice}
          salePriceHtml={salePrice}
          priceHtml={regularPrice}
          src={item.oFeaturedImg.thumbnail}
          colorPrimary={colorPrimary}
        />
      </TouchableOpacity>
    );
  };

  render() {
    const { data } = this.props;
    return (
      <AnimatedView>
        <FlatList
          data={data}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          listKey={this._keyExtractor}
          scrollEnabled={false}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </AnimatedView>
    );
  }
}
const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: Consts.colorGray1,
  },
});
