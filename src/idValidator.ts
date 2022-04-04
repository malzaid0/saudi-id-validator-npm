import { easternToWesternNumbers, isNumeric } from "./numberHandler";

const evaluateDigit = (currentDigit: number) => {
  if (currentDigit < 5) {
    return currentDigit * 2;
  }
  const sum = (currentDigit * 2).toString();
  return Number(sum[0]) + Number(sum[1]);
};

export const isValidSaudiID = (saudiID: string | number) => {
  const stringID = easternToWesternNumbers(saudiID.toString());

  if (
    stringID.length !== 10 ||
    !isNumeric(stringID) ||
    !"12".includes(stringID[0])
  ) {
    return false;
  }

  let sum = 0;
  for (let position = 0; position < stringID.length - 1; position++) {
    if (position % 2 === 0) {
      sum += evaluateDigit(Number(stringID[position]));
    } else {
      sum += Number(stringID[position]);
    }
  }

  let remainder = 10 - (sum % 10);
  if (remainder === 10) {
    remainder = 0;
  }

  return remainder === Number(stringID[9]);
};
