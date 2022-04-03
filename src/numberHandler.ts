export const easternToWesternNumbers = (nums: string) =>
  nums.replace(/[٠-٩]/g, (d) => "٠١٢٣٤٥٦٧٨٩".indexOf(d).toString());

export const isNumeric = (str: any) => {
  if (typeof str !== "string") {
    return false;
  }
  return (
    !isNaN(Number(str)) &&
    !isNaN(parseFloat(str)) &&
    !str.includes(".") &&
    !str.includes(",")
  );
};
