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
        {'exp' in decoded.payload && (
          <ExpiryHighlight exp={decoded.payload.exp} />
        )}
      </div>
      <div>
        <strong>Signature:</strong>
        <pre>{decoded.signature}</pre>
      </div>
    </div>
  );
}