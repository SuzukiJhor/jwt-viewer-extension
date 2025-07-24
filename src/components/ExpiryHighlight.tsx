
type ExpiryHighlightProps = {
  exp?: number; // timestamp em segundos
};

export default function ExpiryHighlight({ exp }: ExpiryHighlightProps) {
  if (!exp) return <span>Sem expiração</span>;

  const now = Math.floor(Date.now() / 1000);
  const expired = exp < now;
  const date = new Date(exp * 1000).toLocaleString();

  return (
    <span style={{ color: expired ? 'red' : 'green', fontWeight: 'bold' }}>
      exp: {date} {expired ? '(expirado)' : '(válido)'}
    </span>
  );
}