import { useEffect, useState } from 'react';
import { FaRegThumbsUp, FaThumbsUp } from 'react-icons/fa';
import { api } from '../api/api';
import { Modal } from '../modal/Modal';
import { white } from '../common/colors';
import { useUser } from '../auth/UserContext';
import { SignInBox } from '../auth/SignInBox';
import { useModal } from '../modal/ModalContext';

interface LikeButtonProps{
  url:string
  active?:boolean
}

export function LikeButton({ url, active }:LikeButtonProps) {
  const [isActive, setIsActive] = useState(active || false);
  const { user } = useUser();
  const { setModal } = useModal();
  const size = 20;

  async function handleClick() {
    if (!user) {
      setModal(
        <Modal>
          <SignInBox />
        </Modal>,
      );
      return;
    }
    setIsActive((value) => !value);
    try {
      if (!isActive) {
        await api.post(url);
      } else {
        await api.delete(url);
      }
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    setIsActive(!!active);
  }, [active]);

  return (
    <button
      onClick={handleClick}
      className="main-button"
    >
      {user && isActive
        ? (
          <FaThumbsUp
            size={size}
            color={white}
          />
        ) : (
          <FaRegThumbsUp
            size={size}
            color={white}
          />
        )}
      {user && isActive ? 'Curtido' : 'Curtir'}
    </button>
  );
}
