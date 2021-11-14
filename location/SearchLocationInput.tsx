export function SearchLocationInput() {
  const options = [
    "coisa1",
    "coisa2",
    "coisa3",
    "coisa4",
    "coisa5",
    "coisa6",
    "coisa7",
  ];

  // useEffect(() => {
  //   const url =
  //     "https://api.mapbox.com/geocoding/v5/mapbox.places/Brasil.json?access_token=" +
  //     process.env.NEXT_PUBLIC_MAP_BOX_ACCESS_TOKEN;
  //   axios
  //     .get(url)
  //     .then((res) => console.error(res))
  //     .catch((err) => console.error(err));
  // });

  return (
    <div className="group">
      <div className="p-2 pt-0 relative z-40 group">
        <input
          type="text"
          placeholder="Pesquisar local"
          className="rounded-full p-2 px-3 shadow-lg ring-1 ring-gray-300"
        />
      </div>
      <div className="absolute z-30 w-full flex bg-white group-hocus:text-gray-500 shadow-lg rounded-b-2xl overflow-scroll max-h-screen">
        {options.map((option) => (
          <div className="w-full p-2">{option}</div>
        ))}
      </div>
    </div>
  );
}
