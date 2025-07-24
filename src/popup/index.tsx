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
    <div style={{ padding: 16, width: 350 }}>
      <h3>JWT Viewer</h3>
      <JwtInput value={jwt} onChange={setJwt} />
      <JwtOutput decoded={decoded} error={error} />
      {decoded && <SignatureVerifier token={jwt} />}
    </div>
  );
}