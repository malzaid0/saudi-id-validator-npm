export const easternToWesternNumbers = (nums: string) =>
  nums.replace(/[٠-٩]/g, (d) => "٠١٢٣٤٥٦٧٨٩".indexOf(d).toString());

export const isNumeric = (str: any) => {
  if (typeof str !== "string") {
    return false;
  }
  return [...str].every((char: string) => "0123456789".includes(char))
};
