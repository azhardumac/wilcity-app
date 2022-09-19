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
import createState from "../../utils/createState";
var initialState = {};
var _a = createState(initialState), getState = _a.getState, setState = _a.setState, subscribe = _a.subscribe;
var handleOpenModal = function (id, slotId, index) {
    setState(function (state) {
        var _a;
        return (__assign(__assign({}, state), (_a = {}, _a[slotId] = __assign(__assign({}, state[slotId]), { isVisible: true, idActive: id, indexActive: index }), _a)));
    })('handleOpenModal');
};
var handleCloseModal = function (slotId) {
    setState(function (state) {
        var _a;
        return (__assign(__assign({}, state), (_a = {}, _a[slotId] = __assign(__assign({}, state[slotId]), { isVisible: false, idActive: '', indexActive: 0 }), _a)));
    })('handleCloseModal');
};
var modalStore = {
    getState: getState,
    subscribe: subscribe,
    handleOpenModal: handleOpenModal,
    handleCloseModal: handleCloseModal,
};
export default modalStore;
