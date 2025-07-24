
type JwtInputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export default function JwtInput({ value, onChange, placeholder }: JwtInputProps) {
  return (
    <textarea
      style={{ width: '100%', height: 100, fontFamily: 'monospace' }}
      placeholder={placeholder || 'Cole o JWT aqui...'}
      value={value}
      onChange={e => onChange(e.target.value)}
      spellCheck={false}
      autoCorrect="off"
      autoCapitalize="off"
    />
  );
}