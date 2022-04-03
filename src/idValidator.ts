import {easternToWesternNumbers, isNumeric} from "./numberHandler";

const findBlockLength = (id: string, position: number) => {
    return Number(id[position]) >= 5 ? 2 : 1
};

const evaluateBlock = (blockValue: number, id: string, position: number) => {
    const trimValue = Number(id[position]);
    if (blockValue === 1) {
        return trimValue * 2;
    }
    const sum = (trimValue * 2).toString();
    return Number(sum[0]) + Number(sum[1]);
};

export const isValidSaudiID = (saudiID: string | number) => {
    const stringID = easternToWesternNumbers(saudiID.toString());

    if (stringID.length !== 10 || !isNumeric(stringID) || !"12".includes(stringID[0])) {
        return false;
    }

    let sum = 0
    for (let position = 1; position < 8; position += 2) {
        sum += Number(stringID[position])
    }
    for (let position = 0; position < stringID.length; position += 2) {
        sum += evaluateBlock(findBlockLength(stringID, position), stringID, position);
    }

    let remainder = 10 - (sum % 10);
    if (remainder === 10) {
        remainder = 0;
    }

    return remainder === Number(stringID[9]);
};
