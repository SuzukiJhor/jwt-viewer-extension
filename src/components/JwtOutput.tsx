import ExpiryHighlight from './ExpiryHighlight';

type JwtDecoded = {
  header: object;
  payload: { [key: string]: any };
  signature: string;
};

type JwtOutputProps = {
  decoded?: JwtDecoded;
  error?: string;
};

export default function JwtOutput({ decoded, error }: JwtOutputProps) {
  const handleCopy = () => {
    if (decoded) {
      navigator.clipboard.writeText(JSON.stringify(decoded.payload, null, 2));
    }
  };

  if (error) {
    return <pre style={{ color: 'red' }}>{error}</pre>;
  }
  if (!decoded) {
    return <span>Nenhum JWT decodificado.</span>;
  }

  return (
    <div style={{ fontFamily: 'monospace', fontSize: 14 }}>
      <div>
        <strong>Header:</strong>
        <pre>{JSON.stringify(decoded.header, null, 2)}</pre>
      </div>
      <div>
        <strong>Payload:</strong>
        <pre>{JSON.stringify(decoded.payload, null, 2)}</pre>
        <button onClick={handleCopy} style={{ marginBottom: 8 }}>Copiar Payload</button>
        {'exp' in decoded.payload && (
          <ExpiryHighlight exp={decoded.payload.exp} />
        )}
        {'iat' in decoded.payload && (
          <div>
            <strong>iat:</strong> {new Date(decoded.payload.iat * 1000).toLocaleString()}
          </div>
        )}
        {'nbf' in decoded.payload && (
          <div>
            <strong>nbf:</strong> {new Date(decoded.payload.nbf * 1000).toLocaleString()}
          </div>
        )}
      </div>
      <div>
        <strong>Signature:</strong>
        <pre>{decoded.signature}</pre>
      </div>
    </div>
  );
}