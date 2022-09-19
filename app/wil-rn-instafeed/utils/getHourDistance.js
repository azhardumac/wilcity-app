export default function getHourDistance(prevTimestamp) {
    return Math.floor((Date.now() - prevTimestamp) / 1000 / 60 / 60);
}
