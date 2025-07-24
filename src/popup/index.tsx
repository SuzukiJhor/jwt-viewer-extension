import React from 'react';
import JwtInput from '../components/JwtInput';
import JwtOutput from '../components/JwtOutput';
import SignatureVerifier from '../components/SignatureVerifier';

function decodeJWT(token: string) {
  const parts = token.split('.');
  if (parts.length !== 3) throw new Error('JWT inválido');
  const decode = (str: string) =>
    JSON.parse(atob(str.replace(/-/g, '+').replace(/_/g, '/')));
  return {
    header: decode(parts[0]),
    payload: decode(parts[1]),
    signature: parts[2],
  };
}

export default function Popup() {
  const [jwt, setJwt] = React.useState('');
  const [decoded, setDecoded] = React.useState<any>();
  const [error, setError] = React.useState<string>();

  React.useEffect(() => {
    if (!jwt) {
      setDecoded(undefined);
      setError(undefined);
      return;
    }
    try {
      setDecoded(decodeJWT(jwt));
      setError(undefined);
    } catch (err) {
      setDecoded(undefined);
      setError((err as Error).message);
    }
  }, [jwt]);

  return (
     <div
      style={{
        padding: 16,
        width: 400,
        minHeight: 300,   
        background: '#181818',
        color: '#f1f1f1',
        borderRadius: 8,
        boxShadow: '0 2px 8px #0003'
      }}
    >
      <h3 style={{ color: '#f1f1f1' }}>Decodificando segredos... ou só tokens mesmo 😅</h3>
      <JwtInput value={jwt} onChange={setJwt} />
      <JwtOutput decoded={decoded} error={error} />
      {decoded && <SignatureVerifier token={jwt} />}
    </div>
  );
}