import { dialogos, obterDialogosDaCena } from './dialogos.js';

const elementos = {
  menu: document.querySelector('#menu-screen'),
  jogo: document.querySelector('#game-screen'),
  cinematic: document.querySelector('#cinematic-screen'),
  cinematicImagem: document.querySelector('#cinematic-image'),
  cinematicTitulo: document.querySelector('#cinematic-title'),
  cinematicKicker: document.querySelector('#cinematic-kicker'),
  cinematicProgresso: document.querySelector('#cinematic-progress'),
  cinematicPular: document.querySelector('#cinematic-skip'),
  entrar: document.querySelector('#enter-button'),
  voltarMenu: document.querySelector('#back-menu'),
  nomeLocal: document.querySelector('#location-name'),
  cena: document.querySelector('#scene'),
  placeholder: document.querySelector('#scene-placeholder'),
  personagem: document.querySelector('#character-sprite'),
  nomeFalante: document.querySelector('#speaker-name'),
  texto: document.querySelector('#dialogue-text'),
  continuar: document.querySelector('#next-dialogue'),
  navegacao: document.querySelector('#scene-navigation'),
  objetivo: document.querySelector('#objective-text'),
  acoes: document.querySelector('#scene-actions'),
  cartaoDialogo: document.querySelector('.dialogue-card')
};

const cenarios = {
  recepcao: {
    nome: 'Recepção',
    imagem: 'assets/cenarios/terreo/recepcao.png',
    descricao: 'O investigador acaba de chegar ao Hotel Belladonna. A chuva bate contra as janelas altas e o saguão parece mais silencioso do que deveria para uma noite com tantos hóspedes. A recepcionista está atrás do balcão, organizando alguns registros.',
    acessos: ['salao', 'jardim', 'corredor-servico'],
    andar: 'terreo'
  },
  salao: {
    nome: 'Salão de baile',
    imagem: 'assets/cenarios/terreo/salao-baile.png',
    descricao: 'O salão está preparado para a apresentação da noite. Mesas alinhadas, instrumentos no palco e funcionários terminando os últimos detalhes. Margaret e Camilo estão por perto.',
    acessos: ['recepcao', 'bar'],
    andar: 'terreo'
  },
  bar: {
    nome: 'Bar',
    imagem: 'assets/cenarios/terreo/bar.png',
    descricao: 'O bar fica ao lado do salão. Entre copos, garrafas e pedidos anotados às pressas, Sullivan parece conhecer o ritmo da casa de olhos fechados. Thomas passa por ali levando uma bandeja.',
    acessos: ['salao'],
    andar: 'terreo'
  },
  'corredor-servico': {
    nome: 'Corredor de serviço',
    imagem: 'assets/cenarios/funcionarios/corredor-servico.png',
    descricao: 'Longe dos olhos dos hóspedes, o corredor de serviço liga os espaços reservados à equipe. Há caixas encostadas na parede e passos apressados vindo de algum cômodo próximo.',
    acessos: ['recepcao', 'cozinha', 'sala-funcionarios'],
    andar: 'terreo'
  },
  cozinha: {
    nome: 'Cozinha',
    imagem: 'assets/cenarios/funcionarios/cozinha.png',
    descricao: 'A cozinha está quente e movimentada. Snevak supervisiona o preparo dos últimos pedidos e não parece gostar de visitas no meio do expediente.',
    acessos: ['corredor-servico'],
    andar: 'terreo'
  },
  'sala-funcionarios': {
    nome: 'Sala dos funcionários',
    imagem: 'assets/cenarios/funcionarios/sala-funcionarios.png',
    descricao: 'A sala dos funcionários oferece um raro momento de descanso longe do salão. Matteo está ali, conferindo algumas anotações antes de voltar ao trabalho.',
    acessos: ['corredor-servico'],
    andar: 'terreo'
  },
  jardim: {
    nome: 'Jardim',
    imagem: 'assets/cenarios/exterior/jardim.png',
    descricao: 'A chuva transformou o jardim em um lugar quase deserto. As luzes do hotel refletem nas pedras molhadas, e o jardineiro parece estar verificando se o temporal danificou alguma coisa.',
    acessos: ['recepcao'],
    andar: 'terreo'
  },
  elevador: {
    nome: 'Elevador',
    imagem: 'assets/cenarios/terreo/elevador-terreo.png',
    descricao: 'O elevador antigo range discretamente quando as portas se abrem. Ele dá acesso ao andar superior do hotel.',
    acessos: ['recepcao'],
    andar: 'transicao'
  },
  'corredor-superior': {
    nome: 'Corredor do andar superior',
    imagem: 'assets/cenarios/andar-superior/corredor.png',
    descricao: 'O andar superior é mais silencioso. As portas dos quartos se alinham pelo corredor, e a iluminação amarelada deixa o lugar com uma aparência acolhedora, embora um pouco melancólica.',
    acessos: ['elevador', 'quarto-investigacao'],
    andar: 'superior'
  },
  'quarto-investigacao': {
    nome: 'Quarto do investigador',
    imagem: 'assets/cenarios/andar-superior/quarto-investigacao.png',
    descricao: 'O hotel reservou um quarto para o investigador. Depois da viagem e de conhecer os ambientes, finalmente há um lugar para descansar. A noite parece tranquila por enquanto.',
    acessos: ['corredor-superior'],
    andar: 'superior'
  },
  'quarto-camilo': {
    nome: 'Quarto de Camilo',
    imagem: 'assets/cenarios/andar-superior/quarto-camilo.png',
    descricao: 'O investigador desperta com a movimentação incomum no corredor. No quarto de Camilo, a noite terminou de uma maneira terrível: o músico foi encontrado morto. A partir deste momento, cada pessoa no hotel pode ter algo importante a contar — ou algo a esconder.',
    acessos: ['corredor-superior'],
    andar: 'crime'
  }
};

const locaisTerreo = [
  'recepcao',
  'salao',
  'bar',
  'corredor-servico',
  'cozinha',
  'sala-funcionarios',
  'jardim'
];

const quadrosCrime = [
  {
    titulo: 'Uma noite interrompida',
    kicker: 'HOTEL BELLADONNA — MADRUGADA',
    imagem: 'assets/cenarios/intro/cena-crime.png'
  },
  {
    titulo: 'Margaret',
    kicker: 'O CHORO QUE ECOA PELOS CORREDORES',
    imagem: 'assets/cenarios/intro/margaret-chorando.png'
  },
  {
    titulo: 'Todos sob suspeita',
    kicker: 'NINGUÉM DEIXA O HOTEL',
    imagem: 'assets/cenarios/intro/silhuetas-suspeitos.png'
  }
];

let cenaAtual = 'recepcao';
let dialogoAtual = [];
let indiceDialogo = 0;
let temporizadorAnimacao = null;
let indiceCinematic = 0;
let temporizadorCinematic = null;
let locaisVisitados = new Set();
let conversasConcluidas = new Set();
let andarSuperiorLiberado = false;
let noiteEncerrada = false;
let crimeRevelado = false;

function entrarNoHotel() {
  elementos.menu.classList.add('is-leaving');
  window.setTimeout(() => {
    elementos.menu.classList.add('is-hidden');
    elementos.jogo.classList.remove('is-hidden');
    iniciarPrimeiraNoite();
  }, 850);
}

function iniciarPrimeiraNoite() {
  locaisVisitados = new Set();
  conversasConcluidas = new Set();
  andarSuperiorLiberado = false;
  noiteEncerrada = false;
  crimeRevelado = false;
  atualizarObjetivo();
  carregarCena('recepcao');
}

function atualizarObjetivo(mensagem = '') {
  if (crimeRevelado) {
    elementos.objetivo.textContent = mensagem || 'OBJETIVO: INVESTIGUE O QUARTO DE CAMILO';
  } else if (noiteEncerrada) {
    elementos.objetivo.textContent = 'A MADRUGADA — ALGO ACONTECEU NO HOTEL';
  } else if (andarSuperiorLiberado) {
    elementos.objetivo.textContent = 'OBJETIVO: SUBA, ENCONTRE SEU QUARTO E DESCANSE';
  } else {
    const faltam = locaisTerreo.filter(id => !locaisVisitados.has(id)).length;
    elementos.objetivo.textContent = mensagem ||
      (faltam === 0
        ? 'OBJETIVO: VOLTE À RECEPÇÃO'
        : `OBJETIVO: CONHEÇA OS AMBIENTES DO TÉRREO — ${locaisTerreo.length - faltam}/${locaisTerreo.length}`);
  }
}

function iniciarCinematicCrime() {
  indiceCinematic = 0;
  elementos.cinematic.classList.remove('is-hidden');
  exibirQuadroCrime();
}

function exibirQuadroCrime() {
  const quadro = quadrosCrime[indiceCinematic];
  if (!quadro) {
    finalizarCinematicCrime();
    return;
  }

  elementos.cinematic.classList.remove('is-changing');
  void elementos.cinematic.offsetWidth;
  elementos.cinematic.classList.add('is-changing');
  elementos.cinematicImagem.style.backgroundImage =
    `linear-gradient(0deg, rgba(10,10,12,.82), rgba(10,10,12,.08) 65%), url("${quadro.imagem}")`;
  elementos.cinematicTitulo.textContent = quadro.titulo;
  elementos.cinematicKicker.textContent = quadro.kicker;
  elementos.cinematicProgresso.textContent = `0${indiceCinematic + 1} / 03`;
  elementos.cinematicPular.textContent =
    indiceCinematic === quadrosCrime.length - 1 ? 'CONTINUAR →' : 'PRÓXIMO →';

  window.clearTimeout(temporizadorCinematic);
  temporizadorCinematic = window.setTimeout(() => {
    if (indiceCinematic < quadrosCrime.length - 1) {
      indiceCinematic += 1;
      exibirQuadroCrime();
    } else {
      finalizarCinematicCrime();
    }
  }, 4300);
}

function avancarCinematicCrime() {
  window.clearTimeout(temporizadorCinematic);
  if (indiceCinematic < quadrosCrime.length - 1) {
    indiceCinematic += 1;
    exibirQuadroCrime();
  } else {
    finalizarCinematicCrime();
  }
}

function finalizarCinematicCrime() {
  window.clearTimeout(temporizadorCinematic);
  elementos.cinematic.classList.add('is-hidden');
  elementos.jogo.classList.remove('is-hidden');
  crimeRevelado = true;
  carregarCena('quarto-camilo');
  atualizarObjetivo();
}

function dormir() {
  if (cenaAtual !== 'quarto-investigacao' || noiteEncerrada) return;
  noiteEncerrada = true;
  elementos.acoes.replaceChildren();
  elementos.cartaoDialogo.classList.remove('is-empty');
  elementos.nomeFalante.textContent = 'NARRAÇÃO';
  elementos.texto.textContent = 'O investigador apaga a luz e se deita. O cansaço vence pouco a pouco, enquanto a chuva continua a bater nas vidraças. Algumas horas depois, vozes e passos apressados no corredor interrompem o silêncio.';
  elementos.continuar.disabled = true;
  atualizarObjetivo();
  const botao = document.createElement('button');
  botao.type = 'button';
  botao.className = 'action-button';
  botao.textContent = 'ACORDAR E VER O QUE ACONTECEU →';
  botao.addEventListener('click', iniciarCinematicCrime);
  elementos.acoes.appendChild(botao);
}

function voltarAoMenu() {
  window.clearTimeout(temporizadorCinematic);
  elementos.cinematic.classList.add('is-hidden');
  elementos.jogo.classList.add('is-hidden');
  elementos.menu.classList.remove('is-hidden', 'is-leaving');
}

function carregarCena(idCena) {
  const cena = cenarios[idCena];
  if (!cena) return;

  if (idCena === 'elevador' && !andarSuperiorLiberado) return;
  if (idCena === 'corredor-superior' && !andarSuperiorLiberado) return;
  if (idCena === 'quarto-camilo' && !crimeRevelado) return;

  cenaAtual = idCena;
  elementos.nomeLocal.textContent = cena.nome;
  elementos.placeholder.textContent = cena.descricao;
  elementos.personagem.classList.add('is-hidden');
  elementos.personagem.removeAttribute('src');
  elementos.cena.style.backgroundImage =
    `linear-gradient(135deg, rgba(20, 18, 20, .35), rgba(17, 17, 20, .78)), url("${cena.imagem}")`;

  encerrarDialogo();
  if (cena.andar === 'terreo') locaisVisitados.add(idCena);

  if (idCena === 'recepcao' && !andarSuperiorLiberado &&
      locaisTerreo.every(id => locaisVisitados.has(id))) {
    andarSuperiorLiberado = true;
    atualizarObjetivo('TODOS OS AMBIENTES DO TÉRREO VISITADOS — O ELEVADOR FOI LIBERADO');
  } else {
    atualizarObjetivo();
  }

  desenharNavegacao(cena.acessos);
  desenharAcoesDaCena(idCena);
  mostrarNarracao(cena.descricao);
}

function desenharNavegacao(acessos) {
  elementos.navegacao.replaceChildren();
  acessos.forEach(id => {
    if (id === 'elevador' && !andarSuperiorLiberado) return;
    const destino = cenarios[id];
    if (!destino) return;
    const botao = document.createElement('button');
    botao.type = 'button';
    botao.className = 'location-button';
    botao.textContent = destino.nome;
    botao.addEventListener('click', () => carregarCena(id));
    elementos.navegacao.appendChild(botao);
  });

  if (cenaAtual === 'recepcao' && andarSuperiorLiberado) {
    // O acesso ao elevador aparece na recepção depois da visita a todo o térreo.
    const elevador = document.createElement('button');
    elevador.type = 'button';
    elevador.className = 'location-button';
    elevador.textContent = 'Elevador — andar superior';
    elevador.addEventListener('click', () => carregarCena('elevador'));
    elementos.navegacao.appendChild(elevador);
  }

  if (cenaAtual === 'elevador' && andarSuperiorLiberado) {
    const corredor = document.createElement('button');
    corredor.type = 'button';
    corredor.className = 'location-button';
    corredor.textContent = 'Subir ao corredor';
    corredor.addEventListener('click', () => carregarCena('corredor-superior'));
    elementos.navegacao.appendChild(corredor);
  }
}

function desenharAcoesDaCena(idCena) {
  elementos.acoes.replaceChildren();
  const conversas = obterDialogosDaCena(dialogos, idCena);

  conversas.forEach(conversa => {
    const chave = `${idCena}:${conversa.id}`;
    if (conversasConcluidas.has(chave)) return;
    const botao = document.createElement('button');
    botao.type = 'button';
    botao.className = 'action-button';
    botao.textContent = conversa.rotulo;
    botao.addEventListener('click', () => iniciarDialogo(idCena, conversa.id));
    elementos.acoes.appendChild(botao);
  });

  if (idCena === 'quarto-investigacao' && !noiteEncerrada) {
    const botaoDormir = document.createElement('button');
    botaoDormir.type = 'button';
    botaoDormir.className = 'action-button action-button-primary';
    botaoDormir.textContent = 'Apagar as luzes e dormir';
    botaoDormir.addEventListener('click', dormir);
    elementos.acoes.appendChild(botaoDormir);
  }

  if (idCena === 'quarto-camilo') {
    const aviso = document.createElement('span');
    aviso.className = 'action-note';
    aviso.textContent = 'A investigação começa agora.';
    elementos.acoes.appendChild(aviso);
  }
}

function mostrarNarracao(texto) {
  elementos.cartaoDialogo.classList.remove('is-empty');
  elementos.nomeFalante.textContent = 'NARRAÇÃO';
  elementos.texto.textContent = texto;
  elementos.continuar.disabled = true;
}

function iniciarDialogo(idCena, idConversa) {
  const conversas = obterDialogosDaCena(dialogos, idCena);
  const conversa = conversas.find(item => item.id === idConversa);
  if (!conversa || !Array.isArray(conversa.falas) || !conversa.falas.length) return;
  elementos.cartaoDialogo.classList.remove('is-empty');
  dialogoAtual = conversa.falas;
  indiceDialogo = 0;
  chaveConversaAtual = `${idCena}:${idConversa}`;
  exibirFala();
}

let chaveConversaAtual = null;

function avancarDialogo() {
  if (!dialogoAtual.length) return;
  if (indiceDialogo + 1 >= dialogoAtual.length) {
    conversasConcluidas.add(chaveConversaAtual);
    encerrarDialogo();
    desenharAcoesDaCena(cenaAtual);
    atualizarObjetivo();
    return;
  }
  indiceDialogo += 1;
  exibirFala();
}

function exibirFala() {
  const fala = dialogoAtual[indiceDialogo];
  if (!fala) return;
  elementos.cartaoDialogo.classList.remove('is-empty');
  elementos.nomeFalante.textContent = fala.personagem || 'NARRAÇÃO';
  elementos.texto.textContent = fala.texto || '';
  elementos.continuar.disabled = false;

  if (fala.sprite) {
    elementos.personagem.src = fala.sprite;
    elementos.personagem.alt = fala.personagem || 'Personagem';
    elementos.personagem.classList.remove('is-hidden');
    animarFala(fala.spriteFalando);
  } else {
    elementos.personagem.classList.add('is-hidden');
    pararAnimacao();
  }
}

function animarFala(spritesFalando = []) {
  pararAnimacao();
  if (!spritesFalando.length) return;
  let quadro = 0;
  temporizadorAnimacao = window.setInterval(() => {
    const fala = dialogoAtual[indiceDialogo];
    if (!fala || !fala.sprite) return;
    elementos.personagem.src = spritesFalando[quadro % spritesFalando.length];
    quadro += 1;
  }, 260);
}

function pararAnimacao() {
  if (temporizadorAnimacao) {
    window.clearInterval(temporizadorAnimacao);
    temporizadorAnimacao = null;
  }
}

function encerrarDialogo() {
  pararAnimacao();
  dialogoAtual = [];
  indiceDialogo = 0;
  chaveConversaAtual = null;
  elementos.cartaoDialogo.classList.add('is-empty');
  elementos.nomeFalante.textContent = '';
  elementos.texto.textContent = '';
  elementos.personagem.classList.add('is-hidden');
  elementos.personagem.removeAttribute('src');
  elementos.continuar.disabled = true;
}

elementos.entrar.addEventListener('click', entrarNoHotel);
elementos.cinematicPular.addEventListener('click', avancarCinematicCrime);
elementos.voltarMenu.addEventListener('click', voltarAoMenu);
elementos.continuar.addEventListener('click', avancarDialogo);

document.addEventListener('keydown', evento => {
  if (evento.key === 'Enter' && !elementos.cinematic.classList.contains('is-hidden')) {
    avancarCinematicCrime();
    return;
  }
  if (evento.key === 'Enter' && !elementos.continuar.disabled &&
      !elementos.jogo.classList.contains('is-hidden')) {
    avancarDialogo();
  }
});

window.hotelGame = {
  carregarCena,
  iniciarDialogo,
  avancarDialogo,
  dormir,
  cenarios,
  locaisVisitados,
  get andarSuperiorLiberado() { return andarSuperiorLiberado; },
  get crimeRevelado() { return crimeRevelado; }
};
