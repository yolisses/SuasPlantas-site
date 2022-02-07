import { TextField } from '../common/TextField';
import { ImagesInput } from '../images/ImagesInput';

export function AddUserPage() {
  return (
    <div className="p-2 flex flex-col items-center">
      <h1>Adicionar usuário</h1>
      <div className="w-full max-w-md flex flex-col gap-4">
        <TextField label="nome" />
        <ImagesInput onChange={(e) => console.log(e)} />
        <button className="main-button">Adicionar</button>
      </div>
    </div>
  );
}
