export default function delay(ms) {
    if (ms === void 0) { ms = 0; }
    return new Promise(function (resolve) {
        var timeId = setTimeout(function () {
            resolve(undefined);
            clearTimeout(timeId);
        }, ms);
    });
}
