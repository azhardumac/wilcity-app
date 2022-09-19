var SI_SYMBOL = ['', 'k', 'm', 'g', 't', 'p', 'e'];
export default function numberFormat(num) {
    // what tier? (determines SI symbol)
    var tier = (Math.log10(num) / 3) | 0;
    // if zero, we don't need a suffix
    if (tier === 0)
        return num;
    // get suffix and determine scale
    var suffix = SI_SYMBOL[tier];
    var scale = Math.pow(10, tier * 3);
    // scale the num
    var scaled = num / scale;
    // format num and add suffix
    return scaled.toFixed(1) + suffix;
}
