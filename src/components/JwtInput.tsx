type JwtInputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export default function JwtInput({ value, onChange, placeholder }: JwtInputProps) {
  return (
    <textarea
      style={{
        width: '90%',
        height: 50,
        fontFamily: 'monospace',
        background: '#181818',
        color: '#f1f1f1',
        border: '1px solid #333',
        borderRadius: 4,
        padding: 8,
        resize: 'vertical'
      }}
      placeholder={placeholder || 'Cole o JWT aqui...'}
      value={value}
      onChange={e => onChange(e.target.value)}
      spellCheck={false}
      autoCorrect="off"
      autoCapitalize="off"
    />
  );
}