import { useState } from "react";
import { Spinner } from "../common/Spinner";

interface EmphasisButtonProps {
  text: string;
  onClick?: () => void | Promise<any>;
  loadingText?: string;
}

export function EmphasisButton({
  text,
  onClick,
  loadingText,
}: EmphasisButtonProps) {
  async function handleClick() {
    if (onClick) {
      setLoading(true);
      try {
        await onClick();
        setLoading(false);
      } catch (e) {
        setLoading(false);
        throw e;
      }
    }
  }

  const [loading, setLoading] = useState(false);

  return (
    <div
      onClick={handleClick}
      className="flex flex-row items-center shadow-md justify-center bg-green-700 rounded-lg w-full text-white cursor-pointer p-3 gap-2 "
    >
      {!!loading && (
        <div>
          <Spinner />
        </div>
      )}
      {loading && loadingText ? loadingText : text}
    </div>
  );
}
