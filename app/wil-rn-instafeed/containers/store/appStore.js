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
import createState from "../../utils/createState";
import getHourDistance from "../../utils/getHourDistance";
var initialState = {};
var TIME_CACHE = 24;
var _a = createState(initialState), getState = _a.getState, setState = _a.setState, subscribe = _a.subscribe;
var appLoading = function (endpoint) {
    setState(function (state) {
        var _a;
        return (__assign(__assign({}, state), (_a = {}, _a[endpoint] = __assign(__assign({}, state[endpoint]), { isLoading: true }), _a)));
    });
    // ('getInstagram/request');
};
var appSuccess = function (_a) {
    var endpoint = _a.endpoint, posts = _a.posts, profile = _a.profile;
    setState(function (state) {
        var _a;
        return (__assign(__assign({}, state), (_a = {}, _a[endpoint] = {
            isLoading: false,
            posts: posts,
            profile: profile,
            prevTimestamp: Date.now(),
        }, _a)));
    });
    // ('getInstagram/success');
};
var appFailure = function (endpoint) {
    setState(function (state) {
        var _a;
        return (__assign(__assign({}, state), (_a = {}, _a[endpoint] = __assign(__assign({}, state[endpoint]), { isLoading: false, message: 'error' }), _a)));
    });
    // ('getInstagram/failure');
};
var getInstagram = function (endpoint) { return __awaiter(void 0, void 0, void 0, function () {
    var res, json, posts, profile, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                return [4 /*yield*/, fetch("https://instafeedhub.com/wp-json/wiloke/v1/instagram/me/insta-user/" + endpoint + "/media")];
            case 1:
                res = _a.sent();
                return [4 /*yield*/, res.json()];
            case 2:
                json = _a.sent();
                console.log(json);
                posts = json.posts, profile = json.profile;
                if (!(res.status !== 200)) return [3 /*break*/, 4];
                return [4 /*yield*/, Promise.reject('error')];
            case 3: return [2 /*return*/, _a.sent()];
            case 4:
                appSuccess({ endpoint: endpoint, posts: posts, profile: profile });
                return [3 /*break*/, 6];
            case 5:
                err_1 = _a.sent();
                console.log(err_1);
                appFailure(endpoint);
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
var loadInstagramFromCache = function (endpoint) {
    return new Promise(function (resolve) {
        queueMicrotask(function () {
            setState(function (state) {
                var _a;
                return (__assign(__assign({}, state), (_a = {}, _a[endpoint] = __assign(__assign({}, state[endpoint]), { isLoading: false }), _a)));
            });
            // ('getInstagram/success');
            resolve(undefined);
        });
    });
};
var getInstagramRequest = function (endpoint, callback) { return __awaiter(void 0, void 0, void 0, function () {
    var prevTimestamp;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                appLoading(endpoint);
                callback === null || callback === void 0 ? void 0 : callback();
                prevTimestamp = getState()[endpoint].prevTimestamp;
                if (!(!!prevTimestamp && getHourDistance(prevTimestamp) < TIME_CACHE)) return [3 /*break*/, 2];
                return [4 /*yield*/, loadInstagramFromCache(endpoint)];
            case 1:
                _a.sent();
                return [3 /*break*/, 4];
            case 2: return [4 /*yield*/, getInstagram(endpoint)];
            case 3:
                _a.sent();
                _a.label = 4;
            case 4: return [2 /*return*/];
        }
    });
}); };
var appStore = {
    getState: getState,
    subscribe: subscribe,
    getInstagramRequest: getInstagramRequest,
};
export default appStore;
