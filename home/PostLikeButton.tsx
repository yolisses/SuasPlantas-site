import { useEffect, useState } from 'react';
import { FaRegThumbsUp, FaThumbsUp } from 'react-icons/fa';
import { api } from '../api/api';
import { Modal } from '../modal/Modal';
import { gray400, green500, white } from '../common/colors';
import { useUser } from '../auth/UserContext';
import { SignInBox } from '../auth/SignInBox';
import { useModal } from '../modal/ModalContext';

interface PostLikeButtonProps{
  id:number
  active?:boolean
}

export function PostLikeButton({ id, active }:PostLikeButtonProps) {
  const size = 20;
  const { user } = useUser();
  const { setModal } = useModal();
  const [isActive, setIsActive] = useState(active || false);

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
        await api.post(`plants/${id}/like`);
      } else {
        await api.delete(`plants/${id}/like`);
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
      className={`secondary-button center-row gap-1 ${isActive ? 'text-green-600' : 'text-gray-500'}`}
    >
      {user && isActive
        ? (
          <FaThumbsUp
            size={size}
            color={green500}
          />
        ) : (
          <FaRegThumbsUp
            size={size}
            color={gray400}
          />
        )}
      {user && isActive ? 'Curtido' : 'Curtir'}
    </button>
  );
}
