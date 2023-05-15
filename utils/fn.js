export const HexToRgb = (str) => {
    let num = 0;
    return function () {
        const numStart = num;
        num += 2;
        return parseInt("0x" + str.slice(numStart, num));
    };
};
