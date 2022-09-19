var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
import React, { Component as RComponent } from 'react';
function getStates(mapStateToProps) {
    return Object.keys(mapStateToProps).reduce(function (obj, key) {
        var _a;
        return __assign(__assign({}, obj), (_a = {}, _a[key] = mapStateToProps[key].getState(), _a));
    }, {});
}
function withStore(mapStateToProps) {
    return function (Component) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1(props) {
                var _this = _super.call(this, props) || this;
                _this.handleSubscribe = function () {
                    _this.setState(__assign({}, getStates(mapStateToProps)));
                };
                _this.state = __assign({}, getStates(mapStateToProps));
                _this.unsubs = Object.keys(mapStateToProps).map(function (key) {
                    return mapStateToProps[key].subscribe(_this.handleSubscribe);
                });
                return _this;
            }
            class_1.prototype.componentWillUnmount = function () {
                this.unsubs.forEach(function (unsub) {
                    unsub();
                });
            };
            class_1.prototype.render = function () {
                return React.createElement(Component, __assign({}, this.state, this.props));
            };
            return class_1;
        }(RComponent));
    };
}
export default withStore;
