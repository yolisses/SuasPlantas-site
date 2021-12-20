import { FaTrash } from 'react-icons/fa';
import { SearchButtonsGroup } from './SearchButtonsGroup';

export function SearchHistoryButtons() {
  let searches :any[] = [];

  function clearHistory() {
    searches = [];
  }

  if (!searches.length) return null;

  return (
    <SearchButtonsGroup
      options={searches}
      label="Histórico de busca"
      button={<FaTrash size={16} color="#aaa" onClick={clearHistory} />}
    />
  );
}
