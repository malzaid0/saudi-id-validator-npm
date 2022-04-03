import {easternToWesternNumbers, isNumeric} from "./numberHandler";

const findBlockLength = (id: string, position: number) => {
    const temp_length = Number(id.substring(position, position + 1)) * 2;
    return temp_length.toString().length;
};

const evaluateBlock = (blockValue: number, id: string, position: number) => {
    const trimValue = Number(id.substring(position, position + 1));
    if (blockValue === 1) {
        return trimValue * 2;
    } else if (blockValue === 2) {
        const sum = trimValue * 2;
        const firstPlace = Number(sum.toString().substring(0, 1));
        let secondPlace = 0;
        if (sum.toString().length > 1) {
            secondPlace = Number(sum.toString().substring(1, 2));
        }
        return firstPlace + secondPlace;
    }
    return 0;
};

export const isValidSaudiID = (saudiID: string | number) => {
    const stringID = easternToWesternNumbers(saudiID.toString());

    if (stringID.length !== 10 || !isNumeric(stringID) || !"12".includes(stringID[0])) {
        return false;
    }

    let sum =
        Number(stringID.substring(1, 2)) +
        Number(stringID.substring(3, 4)) +
        Number(stringID.substring(5, 6)) +
        Number(stringID.substring(7, 8));

    for (let position = 0; position < stringID.length; position += 2) {
        sum += evaluateBlock(findBlockLength(stringID, position), stringID, position);
    }

    let remainder = 10 - (sum % 10);
    if (remainder === 10) {
        remainder = 0;
    }

    const tempS6 = Number(stringID.substring(9, 10));
    return tempS6 === remainder;
};
