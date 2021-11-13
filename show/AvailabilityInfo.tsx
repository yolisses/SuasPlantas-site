interface AvailabilityInfoProps {
  price: string | null;
  swap: boolean;
  donate: boolean;
}

export function AvailabilityInfo({
  price,
  swap,
  donate,
}: AvailabilityInfoProps) {
  function formatPrice(value: string) {
    return "R$" + value.replace(".00", "").replace(".", ",");
  }

  const word: { [key: string]: string } = {
    donate: "Doação",
    swap: "Troca",
  };

  return (
    <div>
      {Object.entries({ donate, swap, price })
        .filter((entry) => entry[1])
        .map(([key, value], index, array) => {
          const text =
            key === "price"
              ? formatPrice(value as string)
              : word[key as string];

          return (
            <>
              <strong className="font-semibold text-lg">{text}</strong>
              {index < array.length - 1 && (
                <span className="text-gray-800">
                  {index === array.length - 2 ? " ou " : ", "}
                </span>
              )}
            </>
          );
        })}
    </div>
  );
}
