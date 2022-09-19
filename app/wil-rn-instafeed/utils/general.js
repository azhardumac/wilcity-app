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
export var getColumn = function (setting) {
    if (!setting) {
        return 0;
    }
    return setting.number_of_columns_mobile || setting.number_of_columns_tablet || setting.number_of_columns_desktop;
};
export var getRow = function (setting) {
    if (!setting) {
        return 0;
    }
    return setting.number_of_rows_mobile || setting.number_of_rows_tablet || setting.number_of_rows_desktop;
};
export var getGap = function (setting) {
    if (!setting) {
        return 0;
    }
    return setting.gap_mobile || setting.gap_tablet || setting.gap_desktop;
};
export var getInstaGridData = function (instaSection, row, column) {
    if (!instaSection.posts) {
        return [];
    }
    var len = instaSection.posts.length;
    return instaSection.posts.filter(function (_post, index) { return index >= 0 && index < Math.min(row * column, len); });
};
export function splitCarouselData(data, numCol, numRow) {
    if (data.length === 0) {
        return [];
    }
    var newData = data.map(function (item, index) { return (__assign(__assign({}, item), { index: index })); });
    var itemsInScreen = numCol * numRow;
    var pageTotal = data.length / itemsInScreen;
    pageTotal = data.length % itemsInScreen === 0 ? pageTotal : Math.floor(pageTotal) + 1;
    var newArr = Array(pageTotal).fill(null);
    var from = 0;
    return newArr.map(function (_, i) {
        var to = (i + 1) * itemsInScreen;
        var result = newData.filter(function (_, j) { return j >= from && j < to; });
        from = to;
        return result;
    });
}
