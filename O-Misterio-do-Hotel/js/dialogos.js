// Estrutura dos diálogos. O roteiro definitivo será inserido depois
// que a história, a cronologia e as falas forem aprovadas.
//
// Exemplo de formato para uma fala (não é diálogo oficial):
// {
//   personagem: 'Nome',
//   texto: 'Texto da fala.',
//   sprite: 'assets/personagens/nome/neutro.png',
//   spriteFalando: [
//     'assets/personagens/nome/falando_01.png',
//     'assets/personagens/nome/falando_02.png',
//     'assets/personagens/nome/falando_03.png'
//   ]
// }

export const dialogos = {
  // recepcao: [
//   { personagem: 'Jaqueline', texto: '...', sprite: 'assets/personagens/jaqueline/neutro.png' }
// ]
};

export function obterDialogosDaCena(base, idCena) {
  const resultado = base[idCena];
  return Array.isArray(resultado) ? resultado : [];
}
