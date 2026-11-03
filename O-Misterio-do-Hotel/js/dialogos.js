// Conversas opcionais da primeira noite no Hotel Belladonna.
// O jogador escolhe com quem conversar. As falas apresentam o elenco,
// sem antecipar pistas, culpados ou reviravoltas da investigação.

export const dialogos = {
  recepcao: [
    {
      id: 'jaqueline',
      rotulo: 'Conversar com Jaqueline',
      falas: [
        {
          personagem: 'Jaqueline',
          texto: 'Boa noite. O senhor deve ser o investigador esperado. Peço desculpas por não ter ido recebê-lo na entrada; a chuva trouxe alguns problemas e a recepção ficou bastante movimentada. De todo modo, seja bem-vindo ao Hotel Belladonna.'
        },
        {
          personagem: 'Investigador',
          texto: 'Não se preocupe. A viagem foi longa, mas cheguei sem grandes dificuldades. Imagino que já tenham avisado sobre minha hospedagem. Antes de me recolher, gostaria de conhecer um pouco o hotel e saber com quem estou lidando.'
        },
        {
          personagem: 'Jaqueline',
          texto: 'Naturalmente. Meu nome é Jaqueline, sou responsável pela recepção. Se precisar de informações sobre os hóspedes, horários ou serviços, pode falar comigo. Só não prometo ter todas as respostas de imediato; há muita coisa acontecendo esta noite.'
        },
        {
          personagem: 'Investigador',
          texto: 'Não espero que tenha. Por enquanto, quero apenas conhecer o lugar e as pessoas. É mais fácil entender um ambiente quando não se começa fazendo perguntas como se todos estivessem sob suspeita.'
        },
        {
          personagem: 'Jaqueline',
          texto: 'Nesse caso, sugiro começar pelo salão. A equipe ainda está preparando a apresentação de Margaret e Camilo. Também pode conhecer o bar, os espaços de serviço e o jardim. Quando terminar, volte aqui; verificarei o acesso ao seu quarto.'
        }
      ]
    }
  ],

  salao: [
    {
      id: 'margaret',
      rotulo: 'Conversar com Margaret',
      falas: [
        {
          personagem: 'Margaret',
          texto: 'Boa noite. Não me lembro de tê-lo visto por aqui antes. É um dos hóspedes que chegaram hoje? Espero que a movimentação do salão não esteja atrapalhando sua estadia. Estamos nos preparando para a apresentação e, como pode imaginar, há sempre alguma coisa para resolver antes de subir ao palco.'
        },
        {
          personagem: 'Investigador',
          texto: 'Cheguei há pouco. Sou investigador e ficarei hospedado no hotel. Não precisa interromper seus preparativos por minha causa; só estou aproveitando a oportunidade para conhecer as pessoas.'
        },
        {
          personagem: 'Margaret',
          texto: 'Então é um prazer conhecê-lo. Meu nome é Margaret. Trabalho como cantora e esta noite vou me apresentar aqui. Já cantei em lugares muito diferentes, mas ainda gosto da expectativa que antecede uma apresentação. O salão fica cheio de conversas e, por alguns instantes, todos parecem esperar pela mesma coisa.'
        },
        {
          personagem: 'Investigador',
          texto: 'Imagino que seja uma sensação particular. E aquele homem junto aos instrumentos? Parece estar cuidando de tudo por aqui.'
        },
        {
          personagem: 'Margaret',
          texto: 'É Camilo, meu companheiro e parceiro musical. Ele toca trompete e tem um ouvido muito mais exigente do que o meu, embora jamais admita quando está preocupado. Trabalhamos juntos há bastante tempo. Se ouvir alguém reclamando de uma nota fora do lugar, provavelmente será ele.'
        }
      ]
    },
    {
      id: 'camilo',
      rotulo: 'Conversar com Camilo',
      falas: [
        {
          personagem: 'Camilo',
          texto: 'Se veio reclamar do som, ainda não começamos. Estou apenas conferindo os instrumentos antes da apresentação. Prefiro descobrir qualquer problema agora, quando ainda há tempo de resolvê-lo, em vez de perceber alguma coisa errada diante de todo o salão.'
        },
        {
          personagem: 'Investigador',
          texto: 'Não vim reclamar. Sou o investigador que chegou há pouco e estou conhecendo o hotel. Você é Camilo, certo?'
        },
        {
          personagem: 'Camilo',
          texto: 'O próprio. Toco trompete e acompanho Margaret nas apresentações. Ela costuma dizer que sou detalhista demais, mas alguém precisa prestar atenção nos detalhes. Uma música pode parecer perfeita para quem está ouvindo e, ainda assim, ter alguma coisa fora do lugar.'
        },
        {
          personagem: 'Investigador',
          texto: 'Parece que você leva o trabalho bastante a sério. Está há muito tempo no Belladonna?'
        },
        {
          personagem: 'Camilo',
          texto: 'Estamos hospedados aqui por causa da apresentação. Margaret e eu trabalhamos juntos há anos, então já nos acostumamos a viajar e dividir os preparativos. O hotel tem sido atencioso conosco até agora. Espero que a noite continue tranquila para todos.'
        }
      ]
    }
  ],

  bar: [
    {
      id: 'sullivan',
      rotulo: 'Conversar com Sullivan',
      falas: [
        {
          personagem: 'Sullivan',
          texto: 'Boa noite, senhor. Se pretende pedir alguma coisa, posso atendê-lo, mas aviso que o bar deve ficar bastante cheio quando a apresentação começar. Meu nome é Sullivan; cuido daqui e tento manter a ordem mesmo quando todos resolvem pedir ao mesmo tempo.'
        },
        {
          personagem: 'Investigador',
          texto: 'Não vim fazer um pedido. Sou o investigador que chegou hoje. Estou conhecendo os funcionários e os ambientes antes de me recolher.'
        },
        {
          personagem: 'Sullivan',
          texto: 'Ah, sim. Ouvi dizer que teríamos um hóspede novo. Bem, não há muito mistério no meu trabalho: sirvo as bebidas, organizo o balcão e tento impedir que os clientes transformem uma noite agradável em uma confusão. Às vezes, essa última parte dá mais trabalho do que as outras.'
        },
        {
          personagem: 'Investigador',
          texto: 'Imagino que um bar seja um bom lugar para ouvir conversas. As pessoas costumam falar mais quando estão à vontade.'
        },
        {
          personagem: 'Sullivan',
          texto: 'Isso acontece, mas não significa que eu fique prestando atenção em tudo. Estou trabalhando, senhor. Ainda assim, depois de algum tempo, a gente acaba reconhecendo os hábitos dos clientes. É difícil não notar quem aparece toda noite e quem só dá as caras quando alguma coisa importante está acontecendo.'
        }
      ]
    },
    {
      id: 'thomas',
      rotulo: 'Conversar com Thomas',
      falas: [
        {
          personagem: 'Thomas',
          texto: 'Com licença, preciso passar com esta bandeja. Ah, desculpe, não percebi que queria falar comigo. Se não for demorar muito, posso ouvi-lo antes de levar isto ao salão.'
        },
        {
          personagem: 'Investigador',
          texto: 'É rápido. Sou o investigador hospedado no hotel. Ainda estou conhecendo a equipe.'
        },
        {
          personagem: 'Thomas',
          texto: 'Então prazer, sou Thomas. Trabalho como garçom e fico entre o salão e o bar durante os eventos. É um serviço corrido, mas gosto do movimento. A gente aprende a reconhecer os hóspedes, lembrar os pedidos e perceber quando alguém precisa de ajuda antes mesmo de chamar.'
        },
        {
          personagem: 'Investigador',
          texto: 'Você parece conhecer bem a rotina daqui. Deve cruzar com praticamente todo mundo durante o expediente.'
        },
        {
          personagem: 'Thomas',
          texto: 'Com quase todos, sim. Quando se trabalha servindo as mesas, é difícil passar despercebido, embora os hóspedes raramente se lembrem do nosso nome. Não digo isso como reclamação. Só significa que acabamos vendo muita coisa enquanto as pessoas estão ocupadas conversando entre si.'
        }
      ]
    }
  ],

  'corredor-servico': [
    {
      id: 'donna',
      rotulo: 'Conversar com Donna',
      falas: [
        {
          personagem: 'Donna',
          texto: 'Oh! Desculpe, pensei que fosse alguém da equipe. Este corredor não costuma receber hóspedes. Está procurando alguma coisa ou se perdeu tentando encontrar outro ambiente?'
        },
        {
          personagem: 'Investigador',
          texto: 'Nenhuma das duas coisas. Sou o investigador que chegou hoje. Estou conhecendo as dependências do hotel, inclusive as áreas de serviço.'
        },
        {
          personagem: 'Donna',
          texto: 'Entendo. Meu nome é Donna, trabalho na equipe de limpeza e cuido para que os quartos e os espaços comuns estejam em ordem. Não é a parte mais visível do hotel, mas garanto que dá bastante trabalho manter tudo funcionando, especialmente em noites movimentadas.'
        },
        {
          personagem: 'Investigador',
          texto: 'Imagino. É um hotel grande, e cada ambiente parece depender de muitas pessoas.'
        },
        {
          personagem: 'Donna',
          texto: 'É exatamente isso. Às vezes, os hóspedes pensam que tudo simplesmente aparece limpo e organizado pela manhã. Mas há uma equipe inteira trabalhando enquanto eles descansam. Se precisar passar por aqui, não há problema; só peço que tenha cuidado com os materiais e não bloqueie a passagem.'
        }
      ]
    },
    {
      id: 'danni',
      rotulo: 'Conversar com Danni',
      falas: [
        {
          personagem: 'Danni',
          texto: 'Você é o novo hóspede, não é? Vi a Jaqueline falando com alguém na recepção, mas não sabia que viria conhecer até o corredor de serviço. Normalmente, as pessoas ficam só nos lugares mais bonitos do hotel.'
        },
        {
          personagem: 'Investigador',
          texto: 'Gosto de conhecer o lugar por inteiro. E você, trabalha aqui há muito tempo?'
        },
        {
          personagem: 'Danni',
          texto: 'Meu nome é Danni. Trabalho ajudando a equipe com as tarefas do hotel, principalmente quando há eventos. Hoje está tudo um pouco mais corrido por causa da apresentação. Quando parece que finalmente terminei uma coisa, alguém aparece precisando de ajuda em outra.'
        },
        {
          personagem: 'Investigador',
          texto: 'Deve ser difícil manter uma rotina quando as prioridades mudam o tempo todo.'
        },
        {
          personagem: 'Danni',
          texto: 'É, mas a gente acaba se acostumando. O pessoal daqui tem seu jeito e, quando todos colaboram, as coisas funcionam. Só não conte para a Donna que eu disse isso enquanto estava parada conversando; ela vai lembrar que ainda tenho algumas tarefas para terminar.'
        }
      ]
    }
  ],

  cozinha: [
    {
      id: 'snevak',
      rotulo: 'Conversar com Snevak',
      falas: [
        {
          personagem: 'Snevak',
          texto: 'A cozinha está em horário de serviço. Se veio procurar alguém, peço que não fique no caminho dos funcionários. Tenho pedidos para o salão e não posso me dar ao luxo de perder tempo porque alguém resolveu fazer uma visita justamente agora.'
        },
        {
          personagem: 'Investigador',
          texto: 'Compreendo. Sou o investigador que chegou hoje. Só gostaria de me apresentar e saber quem está responsável pela cozinha.'
        },
        {
          personagem: 'Snevak',
          texto: 'Snevak. Sou o chefe de cozinha. Cuido do cardápio, da equipe e de tudo o que sai daqui para os hóspedes. Uma cozinha precisa de disciplina; se cada pessoa decidir fazer as coisas à própria maneira, o resultado aparece no prato.'
        },
        {
          personagem: 'Investigador',
          texto: 'Parece que não é um trabalho simples, especialmente com o hotel cheio.'
        },
        {
          personagem: 'Snevak',
          texto: 'Não é mesmo. Mas não escolhi esta profissão esperando facilidade. Gosto de saber que o trabalho foi bem feito. Agora, se não se importar, preciso voltar às minhas panelas. A apresentação não vai esperar a cozinha terminar de conversar.'
        }
      ]
    }
  ],

  'sala-funcionarios': [
    {
      id: 'matteo',
      rotulo: 'Conversar com Matteo',
      falas: [
        {
          personagem: 'Matteo',
          texto: 'Boa noite. Esta é a sala dos funcionários, mas não há problema em entrar por alguns instantes. Posso ajudá-lo com alguma coisa?'
        },
        {
          personagem: 'Investigador',
          texto: 'Sou o investigador que chegou hoje. Estou conhecendo o hotel e as pessoas que trabalham aqui. Você parece estar organizando alguns registros.'
        },
        {
          personagem: 'Matteo',
          texto: 'Matteo. Sou responsável pela equipe de funcionários e pela organização do serviço. Confiro escalas, distribuo tarefas e tento garantir que cada setor saiba o que precisa fazer. Em noites de evento, isso exige um pouco mais de atenção.'
        },
        {
          personagem: 'Investigador',
          texto: 'Imagino que coordenar tantas pessoas não seja fácil. Todos parecem ter funções bastante diferentes.'
        },
        {
          personagem: 'Matteo',
          texto: 'E têm. O hotel depende de cada setor, desde a recepção até a cozinha. Meu trabalho é fazer com que todos consigam cumprir suas responsabilidades sem que uma tarefa atrapalhe a outra. Se precisar de alguma informação sobre a equipe, pode me procurar quando eu não estiver ocupado.'
        }
      ]
    }
  ],

  jardim: [
    {
      id: 'jassir',
      rotulo: 'Conversar com Jassir',
      falas: [
        {
          personagem: 'Jassir',
          texto: 'Cuidado com o caminho, senhor. A chuva deixou as pedras escorregadias e algumas partes do jardim estão bastante escuras. Não gostaria que alguém se machucasse por aqui.'
        },
        {
          personagem: 'Investigador',
          texto: 'Obrigado pelo aviso. Sou o investigador que chegou hoje. Você é responsável pelo jardim?'
        },
        {
          personagem: 'Jassir',
          texto: 'Sim. Meu nome é Jassir, cuido das plantas e da área externa do Belladonna. Gosto deste trabalho porque o jardim muda com as estações. É preciso observar bastante; às vezes, uma folha diferente já indica que alguma coisa não está bem.'
        },
        {
          personagem: 'Investigador',
          texto: 'É uma maneira interessante de olhar para as coisas. Imagino que a tempestade complique seu trabalho.'
        },
        {
          personagem: 'Jassir',
          texto: 'Complica, mas faz parte. Depois da chuva, sempre há algo para recolher ou consertar. Ainda assim, prefiro cuidar daqui a ficar preso dentro de casa o dia inteiro. O jardim é um dos poucos lugares do hotel onde consigo ouvir meus próprios pensamentos.'
        }
      ]
    }
  ]
};

export function obterDialogosDaCena(base, idCena) {
  const resultado = base[idCena];
  return Array.isArray(resultado) ? resultado : [];
}
