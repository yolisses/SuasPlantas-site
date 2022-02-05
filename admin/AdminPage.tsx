import { api } from '../api/api';

export function AdminPage() {
  async function setUserPreview() {
    try {
      const res = await api.post('preview');
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="p-2">
      <div className="text-lg">
        Olá Mr. Ulisses
      </div>
      <div>
        Opções
      </div>
      <div>
        <button onClick={setUserPreview}>
          Gerar convite para o usuário atual
        </button>
      </div>
    </div>
  );
}
