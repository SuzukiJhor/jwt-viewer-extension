import React from 'react';
import { jwtVerify } from 'jose';

type Props = {
  token: string;
};

export default function SignatureVerifier({ token }: Props) {
  const [secret, setSecret] = React.useState('');
  const [result, setResult] = React.useState<string | null>(null);

  const handleVerify = async () => {
    try {
      await jwtVerify(token, new TextEncoder().encode(secret));
      setResult('Assinatura VÁLIDA ✔️');
    } catch (e) {
        console.log(e);
      setResult('Assinatura INVÁLIDA ❌');
    }
  };

  return (
    <div style={{ marginTop: 16 }}>
      <input
        type="text"
        placeholder="Chave secreta"
        value={secret}
        onChange={e => setSecret(e.target.value)}
        style={{ width: '70%' }}
      />
      <button onClick={handleVerify} disabled={!secret || !token}>
        Verificar assinatura
      </button>
      {result && (
        <div style={{ marginTop: 8, fontWeight: 'bold' }}>
          {result}
        </div>
      )}
    </div>
  );
}