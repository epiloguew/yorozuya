import { HexToRgb } from "../utils/fn.js";
/**
 * @param str  string 6位Hex
 * @param strOp string 透明度
 * @returns string rgba||rgb
 */
const HexToR = (str, strOp = 1) => {
    const hex = str.split("#")[1];
    console.log(hex, "33");
    if (hex.length === 6) {
        let fnColor = HexToRgb(hex);
        const strFinal = `${fnColor()},${fnColor()},${fnColor()}${strOp ? "," + strOp : ""}`;
        fnColor = null;
        return strFinal;
    } else {
        throw new Error(`${hex.length === 3 ? "need full options" : "need true options"}`);
    }
};

export { HexToR };
