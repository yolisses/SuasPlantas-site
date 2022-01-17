import Spinner from 'react-spinner-material';

export function DevPage() {
  return (
    <div>
      <button
        className="icon-button"
      >
        <Spinner radius={120} color="#333" visible />
        <Spinner stroke={4} color="#16A34A" />
      </button>
      oi
    </div>
  );
}
