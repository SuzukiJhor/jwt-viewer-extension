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
    <div style={{ marginTop: 45 }}>
      <input
        type="text"
        placeholder="Chave secreta"
        value={secret}
        onChange={e => setSecret(e.target.value)}
        style={{
          width: '70%',
          background: '#23272f',
          color: '#f1f1f1',
          border: '1px solid #333',
          borderRadius: 4,
          padding: 8,
          fontFamily: 'monospace',
          fontSize: 14,
          outline: 'none'
        }}
      />
      <button
        onClick={handleVerify}
        disabled={!secret || !token}
        style={{
          marginTop: 8,
          marginLeft: 8,
          background: '#27ae60',
          color: '#fff',
          border: 'none',
          borderRadius: 4,
          padding: '8px 16px',
          cursor: !secret || !token ? 'not-allowed' : 'pointer',
          fontWeight: 'bold'
        }}
      >
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