# O Mistério do Hotel

Projeto de visual novel investigativa em HTML, CSS e JavaScript, ambientada em um hotel dos anos 1930.

## Direção visual
- Pixel art detalhada, atmosfera noir e art déco.
- Retratos de personagens em meio corpo, PNG com fundo transparente.
- Paleta: preto (#171719), bordô (#401D29), dourado envelhecido (#B18A52), bege antigo (#D2C2A5) e azul acinzentado (#53616A).
- Cenários planejados em 16:9 (referência: 1920×1080).

## Padrão dos sprites
Cada personagem terá cinco imagens:
- `neutro.png`: ouvindo a protagonista, boca fechada.
- `falando_01.png`, `falando_02.png`, `falando_03.png`: variações de fala.
- `nervoso.png`: expressão tensa.

Manter proporção, enquadramento, roupa, cabelo, acessórios e iluminação consistentes entre as cinco imagens.

## Personagens
Donna, Danni, Jassir, Matteo, Thomas, Jaqueline, Margaret, Snevak, Sullivan e Camilo.

## Cenários inicialmente previstos
1. Fachada do Hotel Belladonna (menu).
2. Recepção e saguão.
3. Elevador do térreo.
4. Salão de baile — visão geral.
5. Salão de baile — palco.
6. Bar do salão.
7. Corredor de serviço.
8. Quarto dos funcionários.
9. Cozinha.
10. Jardim.
11. Hall do elevador no andar superior.
12. Corredor do andar superior.
13. Quarto da protagonista — visão geral.
14. Quarto da protagonista — mesa de investigação.

A lista é um ponto de partida e será ampliada durante o planejamento da história. Nenhum enredo, culpado ou segredo foi definido como definitivo sem confirmação.

## Organização
- `assets/cenarios/`: fundos e ambientes.
- `assets/personagens/`: sprites dos personagens.
- `assets/objetos/`: itens investigáveis.
- `assets/documentos/`: cartas, registros e pistas em papel.
- `assets/interface/`: elementos visuais da interface.
- `assets/audio/`: músicas e efeitos.
- `css/`: folhas de estilo.
- `js/`: lógica do jogo, diálogos, navegação e investigação.

## Etapas
1. Planejar enredo, cronologia, personagens, relações e pistas.
2. Fechar o mapa do hotel e a lista de cenários.
3. Produzir e organizar os recursos visuais e sonoros.
4. Implementar a estrutura do jogo.
5. Testar navegação, diálogos e investigação.

O projeto antigo `O-Roubo-do-Museu` permanece separado e não deve ser alterado durante o desenvolvimento deste jogo.
