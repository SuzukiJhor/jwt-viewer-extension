import React from 'react';

function decodeJWT(token: string) {
  const parts = token.split('.');
  if (parts.length !== 3) throw new Error('Invalid JWT');

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
  const [output, setOutput] = React.useState('');

  const handleDecode = () => {
    try {
      const result = decodeJWT(jwt);
      setOutput(JSON.stringify(result, null, 2));
    } catch (err) {
      setOutput((err as Error).message);
    }
  };

  return (
    <div style={{ padding: 16, width: 350 }}>
      <h3>JWT Viewer</h3>
      <textarea
        style={{ width: '100%', height: 100 }}
        placeholder="Paste JWT here..."
        value={jwt}
        onChange={(e) => setJwt(e.target.value)}
      />
      <button onClick={handleDecode}>Decode</button>
      <pre>{output}</pre>
    </div>
  );
}
