module.exports = function reverse (n) {
    const numberArr = String(n).split('');
    let result = ''
    for (let i = numberArr.length - 1; i > -1; --i) {
        if (numberArr[i] !== '-') {
            result += numberArr[i];
        }
    }
    return Number(result);
}