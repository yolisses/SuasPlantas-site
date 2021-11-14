import Router from "next/router";
import { FaChevronLeft } from "react-icons/fa";

interface GoBackButtonProps {
  color?: string;
}

export function GoBackButton({ color }: GoBackButtonProps) {
  function handleClick() {
    Router.back();
  }

  return (
    <FaChevronLeft onClick={handleClick} size={20} color={color || "gray"} />
  );
}
