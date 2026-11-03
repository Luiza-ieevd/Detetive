// Base do sistema de diálogos.
// Os textos definitivos serão adicionados após o planejamento do enredo.

export const dialogos = [];

export function obterDialogo(indice) {
  return dialogos[indice] ?? null;
}
