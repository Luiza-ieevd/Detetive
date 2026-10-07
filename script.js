/* =========================================================
   O ROUBO DO MUSEU
   SCRIPT.JS
   Jogo point-and-click
========================================================= */


/* =========================================================
   ESTADO DO JOGO
========================================================= */

let localAtual = "entrada";

let evidenciasEncontradas = [];

let jogoIniciado = false;

let evidenciaAtual = null;


/* =========================================================
   CAMINHOS DAS IMAGENS DOS CENÁRIOS
========================================================= */

const imagensCenarios = {

    entrada:
        "assets/imagens/cenarios/entrada.png",

    galeria:
        "assets/imagens/cenarios/galeria.png",

    seguranca:
        "assets/imagens/cenarios/seguranca.png",

    restauracao:
        "assets/imagens/cenarios/restauracao.png",

    diretoria:
        "assets/imagens/cenarios/diretoria.png"

};


/* =========================================================
   DADOS DOS LOCAIS
========================================================= */

const locais = {

    entrada: {
        nome: "Entrada do Museu",
        numero: "1/5"
    },

    galeria: {
        nome: "Galeria Principal",
        numero: "2/5"
    },

    seguranca: {
        nome: "Sala de Segurança",
        numero: "3/5"
    },

    restauracao: {
        nome: "Sala de Restauração",
        numero: "4/5"
    },

    diretoria: {
        nome: "Diretoria",
        numero: "5/5"
    }

};


/* =========================================================
   EVIDÊNCIAS
========================================================= */

const evidencias = {


    /* -------------------------
       ENTRADA
    ------------------------- */

    porta: {

        id: "porta",

        titulo: "Porta da Entrada",

        descricao:
            "A porta principal não apresenta sinais de arrombamento. " +
            "Isso indica que quem entrou no museu provavelmente possuía acesso autorizado.",

        local: "entrada"

    },


    camera: {

        id: "camera",

        titulo: "Câmera da Entrada",

        descricao:
            "A câmera registra movimentações próximas à entrada do museu. " +
            "Esses registros podem ser comparados com os depoimentos dos funcionários.",

        local: "entrada"

    },


    balcao: {

        id: "balcao",

        titulo: "Balcão da Recepção",

        descricao:
            "Há registros de movimentação próximos à recepção. " +
            "A área pode ajudar a descobrir quem entrou e saiu do museu.",

        local: "entrada"

    },


    /* -------------------------
       GALERIA
    ------------------------- */

    cameraCorredor: {

        id: "cameraCorredor",

        titulo: "Câmera do Corredor — 21:47",

        descricao:
            "A gravação mostra Rafael próximo à sala onde a pintura estava exposta às 21:47.",

        local: "galeria"

    },


    fotoMarcos: {

        id: "fotoMarcos",

        titulo: "Fotografia de Marcos — 21:40",

        descricao:
            "Uma fotografia feita por Marcos às 21:40 mostra a pintura ainda em seu lugar.",

        local: "galeria"

    },


    portaGaleria: {

        id: "portaGaleria",

        titulo: "Porta da Sala da Pintura — 21:56",

        descricao:
            "O registro eletrônico mostra que a porta da sala da pintura foi aberta às 21:56.",

        local: "galeria"

    },


    mochilaMarcos: {

        id: "mochilaMarcos",

        titulo: "Mochila de Marcos",

        descricao:
            "Uma câmera mostra que Marcos deixou sua mochila na recepção. " +
            "Isso enfraquece a hipótese de que ele tenha usado a mochila para retirar a obra.",

        local: "galeria"

    },


    /* -------------------------
       SEGURANÇA
    ------------------------- */

    computadorRafael: {

        id: "computadorRafael",

        titulo: "Computador de Segurança — 21:53",

        descricao:
            "O computador de segurança foi acessado às 21:53 pelo usuário RAFAEL.S.",

        local: "seguranca"

    },


    camerasOffline: {

        id: "camerasOffline",

        titulo: "Câmeras Offline — 21:55",

        descricao:
            "A câmera principal ficou desligada por aproximadamente sete minutos, " +
            "justamente durante o período crítico do roubo.",

        local: "seguranca"

    },


    depoimentoRafael: {

        id: "depoimentoRafael",

        titulo: "Depoimento de Rafael",

        descricao:
            "Rafael afirmou que estava na entrada principal às 21:55. " +
            "A gravação da câmera contradiz essa versão.",

        local: "seguranca"

    },


    /* -------------------------
       RESTAURAÇÃO
    ------------------------- */

    cartaoClara: {

        id: "cartaoClara",

        titulo: "Registro do Cartão de Clara — 21:52",

        descricao:
            "O sistema registra o uso do cartão de Clara na sala de restauração às 21:52. " +
            "O registro comprova o acesso, mas não prova que Clara tenha cometido o roubo.",

        local: "restauracao"

    },


    alarme: {

        id: "alarme",

        titulo: "Sistema de Alarme",

        descricao:
            "O alarme não disparou quando a pintura foi retirada. " +
            "Isso sugere que alguém conhecia o funcionamento do sistema ou possuía acesso autorizado.",

        local: "restauracao"

    },


    /* -------------------------
       DIRETORIA
    ------------------------- */

    mensagem: {

        id: "mensagem",

        titulo: "Mensagem Suspeita",

        descricao:
            'Uma mensagem diz: "Quando as câmeras apagarem, você sabe o que fazer." ' +
            "O conteúdo relaciona o desligamento das câmeras com uma ação planejada.",

        local: "diretoria"

    },


    documento: {

        id: "documento",

        titulo: "Documentos da Diretoria",

        descricao:
            "Os documentos administrativos ajudam a verificar os horários " +
            "e as atividades dos funcionários durante o período do roubo.",

        local: "diretoria"

    }

};


/* =========================================================
   TEXTOS DOS CENÁRIOS
========================================================= */

const textosCenarios = {

    entrada: {

        titulo: "Entrada do Museu",

        descricao:
            "A entrada está silenciosa. A recepção parece intacta."

    },

    galeria: {

        titulo: "Galeria Principal",

        descricao:
            "É aqui que a obra estava exposta antes de desaparecer."

    },

    seguranca: {

        titulo: "Sala de Segurança",

        descricao:
            "Monitores exibem as câmeras e os registros do museu."

    },

    restauracao: {

        titulo: "Sala de Restauração",

        descricao:
            "Materiais e equipamentos de restauração estão espalhados pela sala."

    },

    diretoria: {

        titulo: "Diretoria",

        descricao:
            "Documentos e registros da administração estão sobre a mesa."

    }

};


/* =========================================================
   OBJETOS CLICÁVEIS
========================================================= */

/*
   IMPORTANTE:

   Os valores "left", "top", "width" e "height"
   representam a posição dos objetos na imagem.

   Se futuramente você quiser ajustar o lugar
   de um objeto, altere somente esses valores.
*/

const objetosCenarios = {


    /* =====================================================
       ENTRADA
    ===================================================== */

    entrada: [

        {

            id: "objeto-porta",

            evidencia: "porta",

            titulo: "Porta principal",

            left: "13%",

            top: "42%",

            width: "12%",

            height: "38%"

        },

        {

            id: "objeto-camera",

            evidencia: "camera",

            titulo: "Câmera de segurança",

            left: "73%",

            top: "13%",

            width: "10%",

            height: "14%"

        },

        {

            id: "objeto-balcao",

            evidencia: "balcao",

            titulo: "Balcão da recepção",

            left: "43%",

            top: "59%",

            width: "24%",

            height: "24%"

        }

    ],


    /* =====================================================
       GALERIA
    ===================================================== */

    galeria: [

        {

            id: "objeto-camera-corredor",

            evidencia: "cameraCorredor",

            titulo: "Câmera do corredor",

            left: "75%",

            top: "13%",

            width: "10%",

            height: "15%"

        },

        {

            id: "objeto-foto",

            evidencia: "fotoMarcos",

            titulo: "Fotografia da obra",

            left: "40%",

            top: "24%",

            width: "20%",

            height: "30%"

        },

        {

            id: "objeto-porta-galeria",

            evidencia: "portaGaleria",

            titulo: "Porta da sala da pintura",

            left: "84%",

            top: "32%",

            width: "13%",

            height: "45%"

        },

        {

            id: "objeto-mochila",

            evidencia: "mochilaMarcos",

            titulo: "Mochila de Marcos",

            left: "20%",

            top: "70%",

            width: "13%",

            height: "18%"

        }

    ],


    /* =====================================================
       SALA DE SEGURANÇA
    ===================================================== */

    seguranca: [

        {

            id: "objeto-computador",

            evidencia: "computadorRafael",

            titulo: "Computador de segurança",

            left: "27%",

            top: "48%",

            width: "25%",

            height: "25%"

        },

        {

            id: "objeto-cameras",

            evidencia: "camerasOffline",

            titulo: "Sistema de câmeras",

            left: "57%",

            top: "18%",

            width: "30%",

            height: "30%"

        },

        {

            id: "objeto-depoimento",

            evidencia: "depoimentoRafael",

            titulo: "Depoimento de Rafael",

            left: "10%",

            top: "70%",

            width: "20%",

            height: "18%"

        }

    ],


    /* =====================================================
       SALA DE RESTAURAÇÃO
    ===================================================== */

    restauracao: [

        {

            id: "objeto-cartao",

            evidencia: "cartaoClara",

            titulo: "Registro do cartão de Clara",

            left: "58%",

            top: "42%",

            width: "17%",

            height: "20%"

        },

        {

            id: "objeto-alarme",

            evidencia: "alarme",

            titulo: "Sistema de alarme",

            left: "76%",

            top: "18%",

            width: "14%",

            height: "22%"

        }

    ],


    /* =====================================================
       DIRETORIA
    ===================================================== */

    diretoria: [

        {

            id: "objeto-mensagem",

            evidencia: "mensagem",

            titulo: "Mensagem suspeita",

            left: "38%",

            top: "55%",

            width: "20%",

            height: "18%"

        },

        {

            id: "objeto-documento",

            evidencia: "documento",

            titulo: "Documentos da diretoria",

            left: "64%",

            top: "50%",

            width: "22%",

            height: "25%"

        }

    ]

};


/* =========================================================
   TROCAR DE TELA
========================================================= */

function mostrarTela(idTela) {

    const telas =
        document.querySelectorAll(".tela");


    telas.forEach(function (tela) {

        tela.classList.remove("ativa");

    });


    const tela =
        document.getElementById(idTela);


    if (tela) {

        tela.classList.add("ativa");

    }

}


/* =========================================================
   INICIAR NOVO JOGO
========================================================= */

function iniciarJogo() {

    jogoIniciado = true;

    localAtual = "entrada";

    evidenciasEncontradas = [];

    evidenciaAtual = null;


    localStorage.removeItem(
        "rouboMuseuProgresso"
    );


    atualizarLocal();

    atualizarContadorEvidencias();

    atualizarListaEvidencias();

    configurarCenario();


    mostrarTela(
        "tela-introducao"
    );

}


/* =========================================================
   COMEÇAR INVESTIGAÇÃO
========================================================= */

function começarInvestigacao() {

    jogoIniciado = true;


    mudarLocal("entrada");


    mostrarTela(
        "tela-jogo"
    );

}


/* =========================================================
   ATUALIZAR NOME DO LOCAL
========================================================= */

function atualizarLocal() {

    const dados =
        locais[localAtual];


    if (!dados) {

        return;

    }


    const nomeLocal =
        document.getElementById(
            "nome-local"
        );


    const statusLocal =
        document.getElementById(
            "status-local"
        );


    if (nomeLocal) {

        nomeLocal.textContent =
            dados.nome;

    }


    if (statusLocal) {

        statusLocal.textContent =
            dados.numero;

    }

}


/* =========================================================
   MUDAR DE LOCAL
========================================================= */

function mudarLocal(local) {

    if (!locais[local]) {

        return;

    }


    localAtual = local;


    atualizarLocal();

    configurarCenario();

    salvarProgresso();


    mostrarTela(
        "tela-jogo"
    );

}


/* =========================================================
   CONFIGURAR CENÁRIO
========================================================= */

function configurarCenario() {

    const cenario =
        document.getElementById(
            "cenario"
        );


    if (!cenario) {

        return;

    }


    const imagem =
        imagensCenarios[localAtual];


    const texto =
        textosCenarios[localAtual];


    /* -----------------------------------------
       Remove classes dos outros cenários
    ----------------------------------------- */

    cenario.classList.remove(

        "entrada",

        "galeria",

        "seguranca",

        "restauracao",

        "diretoria"

    );


    /* -----------------------------------------
       Adiciona classe do cenário atual
    ----------------------------------------- */

    cenario.classList.add(
        localAtual
    );


    /* -----------------------------------------
       COLOCA A IMAGEM DE FUNDO
    ----------------------------------------- */

    if (imagem) {

        cenario.style.backgroundImage =
            `url("${imagem}")`;

    }


    cenario.style.backgroundSize =
        "cover";


    cenario.style.backgroundPosition =
        "center center";


    cenario.style.backgroundRepeat =
        "no-repeat";


    /* -----------------------------------------
       Remove objetos anteriores
    ----------------------------------------- */

    cenario
        .querySelectorAll(
            ".objeto-clicavel"
        )
        .forEach(function (objeto) {

            objeto.remove();

        });


    /* -----------------------------------------
       Remove placeholder antigo
    ----------------------------------------- */

    const placeholder =
        cenario.querySelector(
            ".cenario-placeholder"
        );


    if (placeholder) {

        placeholder.remove();

    }


    /* -----------------------------------------
       Acessibilidade
    ----------------------------------------- */

    if (texto) {

        cenario.setAttribute(
            "aria-label",
            texto.titulo +
            ". " +
            texto.descricao
        );

    }


    /* -----------------------------------------
       Cria os objetos clicáveis
    ----------------------------------------- */

    criarObjetosDoCenario();

}


/* =========================================================
   CRIAR OBJETOS CLICÁVEIS
========================================================= */

function criarObjetosDoCenario() {

    const cenario =
        document.getElementById(
            "cenario"
        );


    if (!cenario) {

        return;

    }


    const objetos =
        objetosCenarios[localAtual] || [];


    objetos.forEach(function (objeto) {


        const botao =
            document.createElement(
                "button"
            );


        botao.type = "button";


        botao.id =
            objeto.id;


        botao.className =
            "objeto-clicavel";


        botao.title =
            objeto.titulo;


        botao.setAttribute(
            "aria-label",
            "Examinar " +
            objeto.titulo
        );


        /* -----------------------------------------
           POSIÇÃO
        ----------------------------------------- */

        botao.style.left =
            objeto.left;


        botao.style.top =
            objeto.top;


        botao.style.width =
            objeto.width;


        botao.style.height =
            objeto.height;


        /* -----------------------------------------
           CLIQUE
        ----------------------------------------- */

        botao.addEventListener(
            "click",
            function () {

                abrirEvidencia(
                    objeto.evidencia
                );

            }
        );


        cenario.appendChild(
            botao
        );

    });

}


/* =========================================================
   ABRIR EVIDÊNCIA
========================================================= */

function abrirEvidencia(
    idEvidencia
) {

    const evidencia =
        evidencias[idEvidencia];


    if (!evidencia) {

        return;

    }


    evidenciaAtual =
        evidencia;


    const titulo =
        document.getElementById(
            "titulo-evidencia"
        );


    const nome =
        document.getElementById(
            "nome-evidencia"
        );


    const descricao =
        document.getElementById(
            "descricao-evidencia"
        );


    if (titulo) {

        titulo.textContent =
            "EVIDÊNCIA";

    }


    if (nome) {

        nome.textContent =
            evidencia.titulo;

    }


    if (descricao) {

        descricao.textContent =
            evidencia.descricao;

    }


    const botaoGuardar =
        document.getElementById(
            "guardar-evidencia"
        );


    if (botaoGuardar) {

        if (
            evidenciasEncontradas.includes(
                evidencia.id
            )
        ) {

            botaoGuardar.textContent =
                "EVIDÊNCIA JÁ GUARDADA";

        } else {

            botaoGuardar.textContent =
                "GUARDAR EVIDÊNCIA";

        }

    }


    mostrarTela(
        "tela-evidencia"
    );

}


/* =========================================================
   GUARDAR EVIDÊNCIA
========================================================= */

function guardarEvidencia() {

    if (!evidenciaAtual) {

        return;

    }


    if (
        !evidenciasEncontradas.includes(
            evidenciaAtual.id
        )
    ) {

        evidenciasEncontradas.push(
            evidenciaAtual.id
        );


        salvarProgresso();


        atualizarContadorEvidencias();


        atualizarListaEvidencias();

    }


    const botao =
        document.getElementById(
            "guardar-evidencia"
        );


    if (botao) {

        botao.textContent =
            "EVIDÊNCIA GUARDADA";

    }

}


/* =========================================================
   CONTADOR DE EVIDÊNCIAS
========================================================= */

function atualizarContadorEvidencias() {

    const contador =
        document.getElementById(
            "contador-evidencias"
        );


    if (contador) {

        contador.textContent =
            evidenciasEncontradas.length;

    }

}


/* =========================================================
   LISTA DE EVIDÊNCIAS
========================================================= */

function atualizarListaEvidencias() {

    const lista =
        document.getElementById(
            "lista-evidencias"
        );


    if (!lista) {

        return;

    }


    if (
        evidenciasEncontradas.length === 0
    ) {

        lista.innerHTML = `

            <div class="sem-conteudo">

                <span>🔎</span>

                <p>
                    Nenhuma evidência encontrada.
                </p>

                <small>
                    Explore os ambientes para
                    encontrar novas pistas.
                </small>

            </div>

        `;


        return;

    }


    lista.innerHTML = "";


    evidenciasEncontradas.forEach(
        function (id) {


            const evidencia =
                evidencias[id];


            if (!evidencia) {

                return;

            }


            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "evidencia-card";


            card.innerHTML = `

                <h3>
                    ${evidencia.titulo}
                </h3>

                <p>
                    ${evidencia.descricao}
                </p>

            `;


            lista.appendChild(
                card
            );

        }
    );

}


/* =========================================================
   ABRIR MAPA
========================================================= */

function abrirMapa() {

    mostrarTela(
        "tela-mapa"
    );

}


/* =========================================================
   ABRIR CADERNO
========================================================= */

function abrirCaderno() {

    const anotacoes =
        document.getElementById(
            "anotacoes"
        );


    if (anotacoes) {

        anotacoes.value =
            localStorage.getItem(
                "rouboMuseuAnotacoes"
            ) || "";

    }


    mostrarTela(
        "tela-caderno"
    );

}


/* =========================================================
   SALVAR ANOTAÇÕES
========================================================= */

function salvarAnotacoes() {

    const anotacoes =
        document.getElementById(
            "anotacoes"
        );


    if (!anotacoes) {

        return;

    }


    localStorage.setItem(
        "rouboMuseuAnotacoes",
        anotacoes.value
    );


    alert(
        "Anotações salvas!"
    );

}


/* =========================================================
   ABRIR SUSPEITOS
========================================================= */

function abrirSuspeitos() {

    mostrarTela(
        "tela-suspeitos"
    );

}


/* =========================================================
   ABRIR LINHA DO TEMPO
========================================================= */

function abrirLinhaDoTempo() {

    mostrarTela(
        "tela-linha-do-tempo"
    );

}


/* =========================================================
   COMO JOGAR
========================================================= */

function abrirComoJogar() {

    mostrarTela(
        "tela-como-jogar"
    );

}


/* =========================================================
   CRÉDITOS
========================================================= */

function abrirCreditos() {

    mostrarTela(
        "tela-creditos"
    );

}


/* =========================================================
   VOLTAR AO MENU
========================================================= */

function voltarMenu() {

    mostrarTela(
        "menu-principal"
    );

}


/* =========================================================
   VERIFICAR CULPADO
========================================================= */

function verificarCulpado(
    culpado
) {

    const resultado =
        document.getElementById(
            "resultado-final"
        );


    if (!resultado) {

        return;

    }


    if (
        culpado === "rafael"
    ) {


        resultado.innerHTML = `

            <strong>
                CASO RESOLVIDO!
            </strong>

            <p>

                Rafael é o responsável
                pelo roubo.

                As evidências das câmeras,
                do computador de segurança,
                do acesso à área da pintura
                e do desligamento das câmeras
                conectam os acontecimentos.

            </p>

        `;


    } else {


        resultado.innerHTML = `

            <strong>
                CONCLUSÃO INCORRETA
            </strong>

            <p>

                Essa hipótese não explica
                todas as evidências encontradas.

                Continue investigando
                o caso.

            </p>

        `;

    }

}


/* =========================================================
   SALVAR PROGRESSO
========================================================= */

function salvarProgresso() {

    const progresso = {

        localAtual:
            localAtual,

        evidenciasEncontradas:
            evidenciasEncontradas,

        jogoIniciado:
            jogoIniciado

    };


    localStorage.setItem(

        "rouboMuseuProgresso",

        JSON.stringify(
            progresso
        )

    );

}


/* =========================================================
   CONTINUAR JOGO
========================================================= */

function continuarJogo() {

    const dados =
        localStorage.getItem(
            "rouboMuseuProgresso"
        );


    if (!dados) {

        alert(
            "Nenhum jogo salvo foi encontrado."
        );

        return;

    }


    try {


        const progresso =
            JSON.parse(
                dados
            );


        localAtual =
            progresso.localAtual ||
            "entrada";


        evidenciasEncontradas =
            progresso.evidenciasEncontradas ||
            [];


        jogoIniciado =
            progresso.jogoIniciado ||
            true;


        atualizarLocal();


        atualizarContadorEvidencias();


        atualizarListaEvidencias();


        configurarCenario();


        mostrarTela(
            "tela-jogo"
        );


    } catch (erro) {


        console.error(
            "Erro ao carregar o jogo:",
            erro
        );


        alert(
            "Não foi possível carregar o jogo salvo."
        );

    }

}


/* =========================================================
   EVENTOS DA INTERFACE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* =================================================
           MENU PRINCIPAL
        ================================================= */


        const btnNovoJogo =
            document.getElementById(
                "btn-novo-jogo"
            );


        if (btnNovoJogo) {

            btnNovoJogo.addEventListener(
                "click",
                iniciarJogo
            );

        }


        const btnContinuar =
            document.getElementById(
                "btn-continuar"
            );


        if (btnContinuar) {

            btnContinuar.addEventListener(
                "click",
                continuarJogo
            );

        }


        const btnComoJogar =
            document.getElementById(
                "btn-como-jogar"
            );


        if (btnComoJogar) {

            btnComoJogar.addEventListener(
                "click",
                abrirComoJogar
            );

        }


        const btnCreditos =
            document.getElementById(
                "btn-creditos"
            );


        if (btnCreditos) {

            btnCreditos.addEventListener(
                "click",
                abrirCreditos
            );

        }


        /* =================================================
           INTRODUÇÃO
        ================================================= */


        const btnIniciar =
            document.getElementById(
                "btn-iniciar-investigacao"
            );


        if (btnIniciar) {

            btnIniciar.addEventListener(
                "click",
                começarInvestigacao
            );

        }


        const btnVoltarIntroducao =
            document.getElementById(
                "btn-voltar-introducao"
            );


        if (btnVoltarIntroducao) {

            btnVoltarIntroducao.addEventListener(
                "click",
                voltarMenu
            );

        }


        /* =================================================
           BARRA INFERIOR
        ================================================= */


        const btnMapa =
            document.getElementById(
                "btn-mapa"
            );


        if (btnMapa) {

            btnMapa.addEventListener(
                "click",
                abrirMapa
            );

        }


        const btnCaderno =
            document.getElementById(
                "btn-caderno"
            );


        if (btnCaderno) {

            btnCaderno.addEventListener(
                "click",
                abrirCaderno
            );

        }


        const btnEvidencias =
            document.getElementById(
                "btn-evidencias"
            );


        if (btnEvidencias) {

            btnEvidencias.addEventListener(
                "click",
                function () {


                    atualizarListaEvidencias();


                    mostrarTela(
                        "tela-evidencias"
                    );

                }
            );

        }


        const btnSuspeitos =
            document.getElementById(
                "btn-suspeitos"
            );


        if (btnSuspeitos) {

            btnSuspeitos.addEventListener(
                "click",
                abrirSuspeitos
            );

        }


        const btnLinhaDoTempo =
            document.getElementById(
                "btn-linha-do-tempo"
            );


        if (btnLinhaDoTempo) {

            btnLinhaDoTempo.addEventListener(
                "click",
                abrirLinhaDoTempo
            );

        }


        const btnMenu =
            document.getElementById(
                "btn-menu"
            );


        if (btnMenu) {

            btnMenu.addEventListener(
                "click",
                voltarMenu
            );

        }


        /* =================================================
           MAPA
        ================================================= */


        const locaisMapa =
            document.querySelectorAll(
                ".local-mapa"
            );


        locaisMapa.forEach(
            function (botao) {


                botao.addEventListener(
                    "click",
                    function () {


                        const local =
                            botao.dataset.local;


                        if (local) {

                            mudarLocal(
                                local
                            );

                        }

                    }
                );

            }
        );


        /* =================================================
           FECHAR MAPA
        ================================================= */


        const fecharMapa =
            document.getElementById(
                "fechar-mapa"
            );


        if (fecharMapa) {

            fecharMapa.addEventListener(
                "click",
                function () {

                    mostrarTela(
                        "tela-jogo"
                    );

                }
            );

        }


        /* =================================================
           FECHAR EVIDÊNCIAS
        ================================================= */


        const fecharEvidencias =
            document.getElementById(
                "fechar-evidencias"
            );


        if (fecharEvidencias) {

            fecharEvidencias.addEventListener(
                "click",
                function () {

                    mostrarTela(
                        "tela-jogo"
                    );

                }
            );

        }


        /* =================================================
           FECHAR SUSPEITOS
        ================================================= */


        const fecharSuspeitos =
            document.getElementById(
                "fechar-suspeitos"
            );


        if (fecharSuspeitos) {

            fecharSuspeitos.addEventListener(
                "click",
                function () {

                    mostrarTela(
                        "tela-jogo"
                    );

                }
            );

        }


        /* =================================================
           FECHAR CADERNO
        ================================================= */


        const fecharCaderno =
            document.getElementById(
                "fechar-caderno"
            );


        if (fecharCaderno) {

            fecharCaderno.addEventListener(
                "click",
                function () {

                    mostrarTela(
                        "tela-jogo"
                    );

                }
            );

        }


        /* =================================================
           FECHAR LINHA DO TEMPO
        ================================================= */


        const fecharLinha =
            document.getElementById(
                "fechar-linha-do-tempo"
            );


        if (fecharLinha) {

            fecharLinha.addEventListener(
                "click",
                function () {

                    mostrarTela(
                        "tela-jogo"
                    );

                }
            );

        }


        /* =================================================
           FECHAR EVIDÊNCIA
        ================================================= */


        const fecharEvidencia =
            document.getElementById(
                "fechar-evidencia"
            );


        if (fecharEvidencia) {

            fecharEvidencia.addEventListener(
                "click",
                function () {

                    mostrarTela(
                        "tela-jogo"
                    );

                }
            );

        }


        /* =================================================
           FECHAR COMO JOGAR
        ================================================= */


        const fecharComoJogar =
            document.getElementById(
                "fechar-como-jogar"
            );


        if (fecharComoJogar) {

            fecharComoJogar.addEventListener(
                "click",
                voltarMenu
            );

        }


        /* =================================================
           FECHAR CRÉDITOS
        ================================================= */


        const fecharCreditos =
            document.getElementById(
                "fechar-creditos"
            );


        if (fecharCreditos) {

            fecharCreditos.addEventListener(
                "click",
                voltarMenu
            );

        }


        /* =================================================
           GUARDAR EVIDÊNCIA
        ================================================= */


        const guardar =
            document.getElementById(
                "guardar-evidencia"
            );


        if (guardar) {

            guardar.addEventListener(
                "click",
                guardarEvidencia
            );

        }


        /* =================================================
           SALVAR ANOTAÇÕES
        ================================================= */


        const salvar =
            document.getElementById(
                "salvar-anotacoes"
            );


        if (salvar) {

            salvar.addEventListener(
                "click",
                salvarAnotacoes
            );

        }


        /* =================================================
           BOTÕES DOS SUSPEITOS
        ================================================= */


        const botoesSuspeitos =
            document.querySelectorAll(
                ".suspeito-final"
            );


        botoesSuspeitos.forEach(
            function (botao) {


                botao.addEventListener(
                    "click",
                    function () {


                        verificarCulpado(
                            botao.dataset.culpado
                        );

                    }
                );

            }
        );


        /* =================================================
           VOLTAR AO MENU FINAL
        ================================================= */


        const voltarFinal =
            document.getElementById(
                "btn-voltar-menu-final"
            );


        if (voltarFinal) {

            voltarFinal.addEventListener(
                "click",
                voltarMenu
            );

        }


        /* =================================================
           INICIALIZAÇÃO
        ================================================= */

        atualizarLocal();

        atualizarContadorEvidencias();

        atualizarListaEvidencias();

        configurarCenario();

    }
);