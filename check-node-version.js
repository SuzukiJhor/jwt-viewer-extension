const [major, minor, patch] = process.versions.node.split('.').map(Number);

if (
  major < 20 ||
  (major === 20 && minor < 17)
) {
  console.error(
    `\n[ERRO] Node.js 20.17.0 ou superior é obrigatório. Versão atual: ${process.versions.node}\n` +
    'Baixe a versão correta em https://nodejs.org/\n'
  );
  process.exit(1);
} else {
  console.log(`Node.js versão ${process.versions.node} OK!`);
}