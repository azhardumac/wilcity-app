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
import { PureComponent } from 'react';
var RNSuspense = /** @class */ (function (_super) {
    __extends(RNSuspense, _super);
    function RNSuspense(props) {
        var _this = _super.call(this, props) || this;
        _this._handleLoaded = function () {
            _this.setState({
                isLoaded: true,
            });
        };
        _this.state = {
            isLoaded: false,
        };
        _this._req = requestAnimationFrame(_this._handleLoaded);
        return _this;
    }
    RNSuspense.prototype.componentWillUnmount = function () {
        cancelAnimationFrame(this._req);
    };
    RNSuspense.prototype.render = function () {
        var _a = this.props, children = _a.children, fallback = _a.fallback;
        var isLoaded = this.state.isLoaded;
        return isLoaded ? children : fallback;
    };
    RNSuspense.defaultProps = {
        fallback: null,
    };
    return RNSuspense;
}(PureComponent));
export default RNSuspense;
