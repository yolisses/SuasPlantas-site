import { Button, TextField } from '@mui/material';

export function AdminPage() {
  return (
    <div className="flex flex-col p-4">
      <div className="text-xl mb-10">Bem vindo, senhor Ulisses!</div>
      <div className="flex flex-col gap-4">
        <div>Adicionar usuário pelo do Facebook</div>
        <div className="flex flex-row gap-2">
          <TextField label="id do usuário" />
          <Button variant="contained">Vamos lá</Button>
        </div>
      </div>
    </div>
  );
}
