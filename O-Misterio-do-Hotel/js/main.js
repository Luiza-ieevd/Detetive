import { dialogos, obterDialogosDaCena } from './dialogos.js';

// Elementos principais da interface
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
  navegacao: document.querySelector('#scene-navigation')
};

// Cadastro inicial de ambientes. Os caminhos podem receber imagens depois.
const cenarios = {
  recepcao: {
    nome: 'Recepção',
    imagem: '../assets/cenarios/terreo/recepcao.png',
    descricao: 'Saguão principal do Hotel Belladonna.',
    acessos: ['elevador', 'salao', 'jardim', 'corredor-servico']
  },
  elevador: {
    nome: 'Elevador — térreo',
    imagem: '../assets/cenarios/terreo/elevador-terreo.png',
    descricao: 'O elevador antigo conecta os andares do hotel.',
    acessos: ['recepcao', 'corredor-superior']
  },
  salao: {
    nome: 'Salão de baile',
    imagem: '../assets/cenarios/terreo/salao-baile.png',
    descricao: 'O salão preparado para a apresentação musical.',
    acessos: ['recepcao', 'bar']
  },
  bar: {
    nome: 'Bar',
    imagem: '../assets/cenarios/terreo/bar.png',
    descricao: 'O bar do salão.',
    acessos: ['salao']
  },
  'corredor-servico': {
    nome: 'Corredor de serviço',
    imagem: '../assets/cenarios/funcionarios/corredor-servico.png',
    descricao: 'Uma passagem reservada aos funcionários.',
    acessos: ['recepcao', 'cozinha', 'sala-funcionarios']
  },
  cozinha: {
    nome: 'Cozinha',
    imagem: '../assets/cenarios/funcionarios/cozinha.png',
    descricao: 'A cozinha do hotel.',
    acessos: ['corredor-servico']
  },
  'sala-funcionarios': {
    nome: 'Sala dos funcionários',
    imagem: '../assets/cenarios/funcionarios/sala-funcionarios.png',
    descricao: 'O espaço de descanso da equipe.',
    acessos: ['corredor-servico']
  },
  jardim: {
    nome: 'Jardim',
    imagem: '../assets/cenarios/exterior/jardim.png',
    descricao: 'O jardim do hotel, sob a chuva.',
    acessos: ['recepcao']
  },
  'corredor-superior': {
    nome: 'Corredor do andar superior',
    imagem: '../assets/cenarios/andar-superior/corredor.png',
    descricao: 'O corredor dos quartos.',
    acessos: ['elevador', 'quarto-investigacao']
  },
  'quarto-investigacao': {
    nome: 'Quarto de investigação',
    imagem: '../assets/cenarios/andar-superior/quarto-investigacao.png',
    descricao: 'Um quarto reservado para a investigação.',
    acessos: ['corredor-superior']
  }
};

let cenaAtual = 'recepcao';
let dialogoAtual = [];
let indiceDialogo = 0;
let temporizadorAnimacao = null;
let indiceCinematic = 0;
let temporizadorCinematic = null;

const quadrosIntroducao = [
  {
    titulo: 'A cena do crime',
    kicker: 'UMA NOITE QUE TERMINOU EM TRAGÉDIA',
    imagem: '../assets/cenarios/intro/cena-crime.png'
  },
  {
    titulo: 'A cantora de jazz',
    kicker: 'UMA VOZ ENTRE LÁGRIMAS',
    imagem: '../assets/cenarios/intro/margaret-chorando.png'
  },
  {
    titulo: 'Os suspeitos',
    kicker: 'CADA SOMBRA ESCONDE UMA HISTÓRIA',
    imagem: '../assets/cenarios/intro/silhuetas-suspeitos.png'
  }
];

function entrarNoHotel() {
  elementos.menu.classList.add('is-leaving');
  window.setTimeout(() => {
    elementos.menu.classList.add('is-hidden');
    iniciarCinematic();
  }, 850);
}

function iniciarCinematic() {
  indiceCinematic = 0;
  elementos.cinematic.classList.remove('is-hidden');
  exibirQuadroCinematic();
}

function exibirQuadroCinematic() {
  const quadro = quadrosIntroducao[indiceCinematic];
  if (!quadro) {
    finalizarCinematic();
    return;
  }

  elementos.cinematic.classList.remove('is-changing');
  void elementos.cinematic.offsetWidth;
  elementos.cinematic.classList.add('is-changing');
  elementos.cinematicImagem.style.backgroundImage =
    `linear-gradient(0deg, rgba(10,10,12,.82), rgba(10,10,12,.08) 65%), url("${quadro.imagem}")`;
  elementos.cinematicTitulo.textContent = quadro.titulo;
  elementos.cinematicKicker.textContent = quadro.kicker;
  elementos.cinematicProgresso.textContent =
    `0${indiceCinematic + 1} / 03`;
  elementos.cinematicPular.textContent =
    indiceCinematic === quadrosIntroducao.length - 1
      ? 'ENTRAR NO HOTEL →'
      : 'CONTINUAR →';

  window.clearTimeout(temporizadorCinematic);
  temporizadorCinematic = window.setTimeout(() => {
    if (indiceCinematic < quadrosIntroducao.length - 1) {
      indiceCinematic += 1;
      exibirQuadroCinematic();
    } else {
      finalizarCinematic();
    }
  }, 4300);
}

function avancarCinematic() {
  window.clearTimeout(temporizadorCinematic);
  if (indiceCinematic < quadrosIntroducao.length - 1) {
    indiceCinematic += 1;
    exibirQuadroCinematic();
  } else {
    finalizarCinematic();
  }
}

function finalizarCinematic() {
  window.clearTimeout(temporizadorCinematic);
  elementos.cinematic.classList.add('is-hidden');
  elementos.jogo.classList.remove('is-hidden');
  carregarCena(cenaAtual);
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

  cenaAtual = idCena;
  elementos.nomeLocal.textContent = cena.nome;
  elementos.placeholder.textContent = cena.descricao;
  elementos.personagem.classList.add('is-hidden');
  elementos.personagem.removeAttribute('src');

  // A imagem só é aplicada quando o arquivo do cenário existir.
  elementos.cena.style.backgroundImage =
    `linear-gradient(135deg, rgba(20, 18, 20, .35), rgba(17, 17, 20, .78)), url("${cena.imagem}")`;

  desenharNavegacao(cena.acessos);
  encerrarDialogo();
  mostrarNarracao(cena.descricao);
}

function desenharNavegacao(acessos) {
  elementos.navegacao.replaceChildren();

  acessos.forEach(id => {
    const destino = cenarios[id];
    if (!destino) return;

    const botao = document.createElement('button');
    botao.type = 'button';
    botao.className = 'location-button';
    botao.textContent = destino.nome;
    botao.addEventListener('click', () => carregarCena(id));
    elementos.navegacao.appendChild(botao);
  });
}

function mostrarNarracao(texto) {
  elementos.nomeFalante.textContent = 'NARRAÇÃO';
  elementos.texto.textContent = texto;
  elementos.continuar.disabled = true;
}

function iniciarDialogo(id) {
  const falas = obterDialogosDaCena(dialogos, id);
  if (!falas.length) return;

  dialogoAtual = falas;
  indiceDialogo = 0;
  exibirFala();
}

function avancarDialogo() {
  if (indiceDialogo + 1 >= dialogoAtual.length) {
    encerrarDialogo();
    return;
  }
  indiceDialogo += 1;
  exibirFala();
}

function exibirFala() {
  const fala = dialogoAtual[indiceDialogo];
  if (!fala) return;

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
  elementos.continuar.disabled = true;
}

elementos.entrar.addEventListener('click', entrarNoHotel);
elementos.cinematicPular.addEventListener('click', avancarCinematic);
elementos.voltarMenu.addEventListener('click', voltarAoMenu);
elementos.continuar.addEventListener('click', avancarDialogo);

// A tecla Enter também avança uma fala quando há diálogo ativo.
document.addEventListener('keydown', evento => {
  if (evento.key === 'Enter' && !elementos.cinematic.classList.contains('is-hidden')) {
    avancarCinematic();
    return;
  }
  if (evento.key === 'Enter' && !elementos.continuar.disabled &&
      !elementos.jogo.classList.contains('is-hidden')) {
    avancarDialogo();
  }
});

// Deixa as funções disponíveis para a próxima etapa de desenvolvimento.
window.hotelGame = {
  carregarCena,
  iniciarDialogo,
  avancarDialogo,
  cenarios
};
