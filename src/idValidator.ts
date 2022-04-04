import { easternToWesternNumbers, isNumeric } from "./numberHandler";

const evaluateDigit = (currentDigit: number) => {
  if (currentDigit < 5) {
    return currentDigit * 2;
  }
  const sum = (currentDigit * 2).toString();
  return Number(sum[0]) + Number(sum[1]);
};

export const isValidSaudiID = (saudiID: string | number) => {
  const stringID = easternToWesternNumbers(saudiID.toString()).trim();

  if (
    stringID.length !== 10 ||
    !isNumeric(stringID) ||
    !"12".includes(stringID[0])
  ) {
    return false;
  }

  let sum = 0;
  for (let idx = 0; idx < stringID.length; idx++) {
    if (idx % 2 === 0) {
      sum += evaluateDigit(Number(stringID[idx]));
    } else {
      sum += Number(stringID[idx]);
    }
  }

  return sum % 10 === 0;
};
