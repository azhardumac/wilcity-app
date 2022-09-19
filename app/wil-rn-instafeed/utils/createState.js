import stateLog from './stateLog';
var defaultConfig = {
    useLocalStorage: false,
    stateName: '@state',
};
var CreateState = /** @class */ (function () {
    function CreateState(initialState, config) {
        var _this = this;
        if (config === void 0) { config = defaultConfig; }
        this.updateStateFromLocalStorage = function () {
            var _a = _this.config, useLocalStorage = _a.useLocalStorage, stateName = _a.stateName;
            var state = !!window.localStorage ? window.localStorage.getItem(stateName) : _this.state;
            if (useLocalStorage && !!state) {
                try {
                    _this.state = typeof state === 'string' ? JSON.parse(state) : state;
                }
                catch (_b) {
                    _this.state = state;
                }
            }
        };
        this.callListeners = function () {
            _this.listeners.forEach(function (listener) {
                listener(_this.state);
            });
        };
        this.callCompare = function () {
            if (!_this.compareFunc) {
                return _this.callListeners();
            }
            var isUpdate = _this.compareFunc(_this.prevState, _this.state);
            isUpdate && _this.callListeners();
        };
        this.getState = function () {
            return _this.state;
        };
        this.setState = function (state) {
            var _a = _this.config, useLocalStorage = _a.useLocalStorage, stateName = _a.stateName;
            _this.prevState = _this.state;
            if (typeof state === 'function') {
                _this.state = state(_this.prevState);
            }
            else {
                _this.state = state;
            }
            if (useLocalStorage && !!window.localStorage) {
                window.localStorage.setItem(stateName, JSON.stringify(_this.state));
            }
            _this.callCompare();
            return function (actionName) {
                if (actionName === void 0) { actionName = 'setState'; }
                stateLog(actionName, _this.prevState, _this.state);
            };
        };
        this.subscribe = function (listener) {
            _this.updateStateFromLocalStorage();
            _this.listeners.push(listener);
            return function () {
                _this.listeners = _this.listeners.filter(function (_listener) { return _listener !== listener; });
            };
        };
        this.shouldUpdate = function (compareFunc) {
            _this.compareFunc = compareFunc;
        };
        this.state = initialState;
        this.config = config;
        this.listeners = [];
        if (!config.useLocalStorage && !!window.localStorage) {
            window.localStorage.removeItem(config.stateName);
        }
        this.updateStateFromLocalStorage();
    }
    return CreateState;
}());
export { CreateState };
export default function createState(initialState, config) {
    if (config === void 0) { config = defaultConfig; }
    return new CreateState(initialState, config);
}
