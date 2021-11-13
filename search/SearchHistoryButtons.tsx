import { observer } from "mobx-react";
import { FaTrash } from "react-icons/fa";
import { useData } from "../mobx/DataContext";
import { SearchButtonsGroup } from "./SearchButtonsGroup";

export const SearchHistoryButtons = observer(() => {
  const { searches } = useData();

  function clearHistory() {
    searches.searches = [];
  }

  if (!searches.searches.length) return null;

  return (
    <SearchButtonsGroup
      options={searches.searches}
      label="Histórico de busca"
      button={<FaTrash size={16} color="#aaa" onClick={clearHistory} />}
    />
  );
});
