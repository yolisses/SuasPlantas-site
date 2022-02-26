import { useState } from 'react';
import { api } from '../api/api';
import { useUser } from '../auth/userContext';
import { useSnack } from '../snack/SnackContext';
import { defaultPosition } from './defaultPosition';
import { LocationField, SelectLocationResult } from './LocationField';

export function EditUserLocation() {
  const { setSnack } = useSnack();
  const { user, setUser } = useUser();
  const [loading, setLoading] = useState(false);

  async function submit({ position }:SelectLocationResult) {
    setLoading(true);
    try {
      const res = await api.patch('users/edit-location', {
        latitude: position[0],
        longitude: position[1],
      });
      setUser(res.data.user);

      if (res.data.locationFound) {
        setSnack({
          severity: 'success',
          text: 'Localização alterada com sucesso',
        });
        setLoading(false);
        return true;
      }

      setSnack({
        severity: 'error',
        text: 'Desculpe, mas não oferecemos suporte a esse local',
      });
    } catch (err) {
      setSnack({
        severity: 'error',
        text: 'Erro ao mudar localicação',
      });
    }
    setLoading(false);
    return false;
  }

  return (
    <LocationField
      submit={submit}
      loading={loading}
      title="Sua localização"
      text={`${user?.city}, ${user?.state}`}
      initialLocation={user?.location.coordinates || defaultPosition}
    />
  );
}
