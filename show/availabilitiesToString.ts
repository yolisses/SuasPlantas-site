interface Availabilities {
  price: string | null;
  swap: boolean;
  donate: boolean;
}

export function availabilitiesToString({
  price,
  swap,
  donate,
}: Availabilities) {
  let result = "";
  const translate: { [key: string]: string } = {
    donate: "Doação",
    swap: "Troca",
  };
  Object.entries({ donate, swap, price })
    .filter((entry) => entry[1])
    .map(([key, value], index, array) => {
      if (value) {
        result += key === "price" ? "R$" + value : translate[key];

        if (index === array.length - 2) {
          result += " ou ";
        } else if (index < array.length - 2) {
          result += ", ";
        }
      }
      return value;
    });
  return result;
}
