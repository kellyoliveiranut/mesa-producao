// Dados do Painel Essentia (atualizados em 17/10/2026).
// Para atualizar no dia a dia, edite este arquivo.

export const PAINEL = {
  dataLabel: "sábado, 17 de outubro de 2026",
  resumo: [
    { tipo: "ok", texto: "Agenda livre hoje e amanhã" },
    { tipo: "warn", texto: "2 avaliações de pacientes para processar" },
    { tipo: "warn", texto: "Pagamento do Google recusado" },
    { tipo: "", texto: "12 copys: 6 Helena e 6 Cláudia" },
  ],
  agenda: "Nenhum compromisso no Google Calendar para sábado (17/10) e domingo (18/10). Bom momento para gravar os Reels da semana.",
  tarefas: [
    { id: "t1", titulo: "Processar as avaliações no Shaped", detalhe: "Ana Larissa Guimarães Dias e Gisella Yasmin de Assis Costa enviaram as fotos na sexta (16/10)." },
    { id: "t2", titulo: "Resolver o pagamento da assinatura Google", detalhe: "Cobranças de R$ 49,99 e R$ 53,90 recusadas por saldo insuficiente no Mercado Pago, e o cartão virtual final 5340 foi cancelado." },
    { id: "t3", titulo: "Conferir a fatura da Águas do Pará", detalhe: "Venceu em 15/10 segundo o aviso recebido." },
    { id: "t4", titulo: "Gravar 2 Reels para a semana", detalhe: "Copys H2 (Helena) e C2 (Cláudia) cabem em uma hora." },
  ],
  emails: [
    { tag: "Ação", nome: "Mercado Pago", texto: "pagamentos ao Google recusados (várias tentativas entre 16 e 17/10) e cartão virtual cancelado." },
    { tag: "Pacientes", nome: "Shaped", texto: "duas avaliações realizadas, aguardando você verificar as fotos e processar." },
    { tag: "Prazo", nome: "Águas do Pará", texto: "lembrete de fatura vencida." },
    { tag: "Baixa", nome: "IntechOpen", texto: "convite de editora para publicar livro. Sem urgência." },
  ],
  personas: [
    { id: "h", titulo: "Helena · quimioterapia ativa", texto: "48 anos. Enjoo, gosto de metal, medo de \"derreter\" e de atrapalhar o tratamento. Quer comer em paz e aguentar firme." },
    { id: "c", titulo: "Cláudia · terapia hormonal", texto: "52 anos. Barriga que apareceu, dor nas juntas, névoa mental, medo da recidiva. Quer se sentir ela de novo. O foco é força, função e disposição, nunca meta de peso." },
  ],
  radar: [
    { titulo: "Outubro Rosa fecha em 14 dias", texto: "As buscas por câncer de mama e mamografia têm pico sazonal em outubro, segundo análise nos Cadernos de Saúde Pública. Depois do dia 31 a atenção cai.", fazer: "priorizar a Cláudia (mama em terapia hormonal) até 31/10, sem abandonar a Helena." },
    { titulo: "Reels lidera entre profissionais de nutrição", texto: "Um TCC de 2026 da UFC sobre desinformação nutricional encontrou preferência nítida pelo Reels. Um estudo em nutrição esportiva viu que o Reels, mesmo menos frequente, trazia conteúdo mais adequado.", fazer: "2 Reels por semana, um para cada persona, e carrossel para o que ela vai salvar." },
    { titulo: "Pouca ciência e muita venda no feed de nutrição", texto: "Em um estudo com 898 usuários dos EUA, só 14,3% dos posts de nutrição tinham evidência científica e mais de 90% promoviam produto ou marca. A pesquisa brasileira sobre hashtags como #dieta e #nutrição aponta o mesmo problema de confiabilidade.", fazer: "o seu diferencial é o conteúdo que acalma sem prometer milagre. Cite fonte no último slide dos carrosséis." },
    { titulo: "Datas que vêm aí", texto: "Novembro Azul (câncer de próstata) e o Dia Nacional de Combate ao Câncer, em 27 de novembro. Confirme as datas antes de montar campanha.", fazer: "preparar 1 carrossel de nutrição na oncologia em geral, que serve para as duas datas." },
  ],
  limite: "O Instagram não publica áudios em alta nem hashtags do dia para consulta automática, e a busca não trouxe esses dados. O que está acima vem de estudos e do calendário. Para áudios em alta, abra a aba Reels do Instagram e salve 2 ou 3 que combinem com o seu tom.",
  regras: [
    "Sem antes e depois e sem depoimento de resultado de paciente.",
    "Sem promessa de cura, de emagrecimento ou de alimento que \"combate o tumor\".",
    "Sem lista de terror nem dieta que culpa. Para a Cláudia, nunca meta de peso ou número.",
  ],
  semanaLabel: "Semana de 19 a 25 de outubro",
  semana: [
    { dia: "Segunda 19", who: "h", titulo: "Gosto de metal na boca", sub: "Helena · carrossel (H1)" },
    { dia: "Terça 20", who: "", titulo: "Dia de gravar", sub: "Stories com caixinha de perguntas sobre enjoo e sobre dor nas juntas" },
    { dia: "Quarta 21", who: "c", titulo: "Você não engordou por comer demais", sub: "Cláudia · carrossel (C1)" },
    { dia: "Quinta 22", who: "h", titulo: "Açúcar alimenta o câncer?", sub: "Helena · Reels (H2)" },
    { dia: "Sexta 23", who: "", titulo: "Bastidores", sub: "Só stories: como monto o plano de uma paciente, sem mostrar caso real" },
    { dia: "Sábado 24", who: "c", titulo: "Dor nas juntas do bloqueio", sub: "Cláudia · Reels (C2)" },
    { dia: "Domingo 25", who: "", titulo: "Descanso", sub: "Stories leves de Raiz Amazônica, se quiser" },
  ],
  fontes: [
    ["Nutrition-related content on Instagram in the United States (Foods, 2022)", "https://zaguan.unizar.es/record/110607"],
    ["(Des)informação nutricional no Instagram, UFC (2026)", "https://repositorio.ufc.br/ri/bitstream/riufc/85590/1/2026_tcc_cslessa.pdf"],
    ["Sucesso do Outubro Rosa no Brasil, Cadernos de Saúde Pública (2021)", "https://scielosp.org/pdf/csp/2021.v37n11/e00247121/pt"],
    ["Conteúdo de nutricionistas do esporte no Instagram, Rev. Bras. Nutrição Esportiva (2024)", "https://doaj.org/article/b1c9c1c6193442fb968af80aa99687bf"],
    ["Instagram, desinformação e hashtags em Nutrição, Redalyc", "https://www.redalyc.org/journal/4656/465681410022/465681410022.pdf"],
  ],
};

export const IDEAS = [
  {
    "id": "H1",
    "who": "h",
    "persona": "Helena",
    "p": "Manejo de Sintomas",
    "f": "Carrossel",
    "n": "Nível 2",
    "hook": "Tudo com gosto de metal? Não é frescura, e tem ajuste.",
    "roteiro": [
      "Capa: o gancho acima",
      "Por que o paladar muda no tratamento, em duas frases e sem jargão",
      "Ajuste 1: comida fria ou em temperatura ambiente cheira menos",
      "Ajuste 2: talheres de plástico ou madeira no lugar dos de metal",
      "Ajuste 3: um toque de limão ou ervas frescas, se não houver aftas",
      "Ajuste 4: se a carne enjoa, ovo, peixe e leguminosas entram no lugar",
      "Fecho: o seu caso pode precisar de mais que isso"
    ],
    "legenda": "Quimio e tudo com gosto de metal, de remédio ou de papelão?\n\nVocê não está exagerando, e não precisa só aguentar. Essa mudança no paladar é muito comum durante o tratamento, e pequenos ajustes na hora de comer fazem diferença.\n\nSalva este post para o próximo dia difícil e manda para quem está cozinhando para você.\n\nCada tratamento e cada corpo são diferentes. Se o gosto estranho está te fazendo comer cada vez menos, vale ajustar o plano com quem acompanha o seu caso.",
    "cta": "Comente GOSTO que eu te mando o guia completo no direct."
  },
  {
    "id": "H2",
    "who": "h",
    "persona": "Helena",
    "p": "Mito x Verdade",
    "f": "Reels 30s",
    "n": "Nível 1 e 2",
    "hook": "Cortar o açúcar não faz o câncer morrer de fome.",
    "roteiro": [
      "0 a 3s: o gancho, olhando para a câmera",
      "Todas as células do corpo usam glicose, as saudáveis também",
      "Cortar tudo o que é doce não elimina o tumor e pode te deixar sem energia e sem proteína",
      "O que pesa é o conjunto da sua alimentação e o seu estado nutricional",
      "Fecho: você não pecou por comer algo gostoso"
    ],
    "legenda": "\"Açúcar alimenta o câncer\" é uma das frases que mais assustam quem está em tratamento.\n\nA verdade é mais calma: seu corpo inteiro usa glicose, e tirar tudo do prato por medo pode te deixar mais fraca bem na fase em que você mais precisa de força.\n\nSe alguém já te disse que você precisa cortar tudo, me conta nos comentários. Sua dúvida pode virar o próximo vídeo.\n\nA orientação certa depende do seu caso e do seu tratamento.",
    "cta": "Salve para mandar a quem te disse o contrário."
  },
  {
    "id": "H3",
    "who": "h",
    "persona": "Helena",
    "p": "Corpo Forte no Tratamento",
    "f": "Reels 40s",
    "n": "Nível 2",
    "hook": "\"Tô derretendo.\" O que olhar além da balança.",
    "roteiro": [
      "Acolher: ver o corpo afinar assusta mesmo",
      "A balança mostra o total, mas não separa músculo de outras coisas",
      "Perder músculo no tratamento pesa mais que o número",
      "O que observar: força nas pernas e braços, energia, o que o seu médico acompanha",
      "Proteína distribuída no dia ajuda, e o plano é individual"
    ],
    "legenda": "Se você está pensando \"tô derretendo\", não ignore esse sentimento.\n\nDurante o tratamento, o que mais importa muitas vezes não é o número da balança, e sim manter sua força. É ela que sustenta suas pernas, sua rotina e a sua disposição para continuar.\n\nConta aqui se você também sente isso. Você não está sozinha.\n\nSe a perda de peso está te preocupando, converse com sua equipe e peça um plano feito para o seu caso.",
    "cta": "Me chama no direct com a palavra FORÇA."
  },
  {
    "id": "H4",
    "who": "h",
    "persona": "Helena (cuidador)",
    "p": "Quem Cuida Também Precisa",
    "f": "Reels 40s",
    "n": "Cuidador",
    "hook": "\"Minha mãe não come nada.\" Por onde começar sem brigar à mesa.",
    "roteiro": [
      "Acolher: ver quem a gente ama sem comer dói",
      "Forçar costuma piorar o enjoo",
      "Aposta 1: porções pequenas, várias vezes ao dia",
      "Aposta 2: o prato que ela pedir hoje, mesmo que mude amanhã",
      "Aposta 3: comida morna ou fria, com cheiro mais fraco",
      "Lembrar de cuidar de quem cuida"
    ],
    "legenda": "Quem cuida de alguém em tratamento também carrega muito.\n\nSe você está aí tentando fazer sua mãe, sua esposa ou sua irmã comer alguma coisa, respira. Insistir na mesa costuma virar briga, e briga piora o enjoo.\n\nComeça por porções pequenas, pelo que ela aceitar hoje e por cheiros mais leves.\n\nMarca aqui quem está cuidando de alguém agora e precisa ler isso. E não esquece de comer você também.",
    "cta": "Compartilhe com quem está cuidando de alguém."
  },
  {
    "id": "H5",
    "who": "h",
    "persona": "Helena",
    "p": "Ciência sem Susto",
    "f": "Carrossel",
    "n": "Nível 3",
    "hook": "Suplemento durante o tratamento: quando ajuda e quando atrapalha.",
    "roteiro": [
      "Capa: o gancho acima",
      "Nem todo suplemento é neutro durante quimio ou radio",
      "Quando pode ajudar: déficit confirmado em exame",
      "Quando exige cuidado: doses altas de antioxidantes e produtos naturais sem prescrição",
      "A pergunta antes de comprar: a minha equipe sabe que vou tomar?",
      "Fontes no último slide"
    ],
    "legenda": "Quem está em tratamento vê todo dia alguém indicando um suplemento. Antes de comprar, vale saber de uma coisa: não é porque é natural que não interage com o tratamento.\n\nSuplemento pode ajudar quando existe uma necessidade real, vista em exame. Em outros casos, pode atrapalhar.\n\nSalva este post e leva a pergunta para a próxima consulta: \"posso tomar isso junto com o meu protocolo?\"\n\nNunca comece nem pare nada sem falar com a sua equipe.",
    "cta": "Nem toda orientação serve para o seu caso. Me chama com a palavra DÚVIDA."
  },
  {
    "id": "H6",
    "who": "h",
    "persona": "Helena",
    "p": "Convite ao acompanhamento",
    "f": "Stories 5x",
    "n": "Nível 5",
    "hook": "Se você quer parar de adivinhar o que comer, me chama com a palavra COMEÇAR.",
    "roteiro": [
      "Story 1: a pergunta que você se faz toda noite: \"será que posso comer isso?\"",
      "Story 2: acompanhamento feito para caber no seu pior dia de quimio",
      "Story 3: sem dieta impossível de seguir",
      "Story 4: dá para começar ainda esta semana, no seu ritmo",
      "Story 5: botão de mensagem com a palavra COMEÇAR"
    ],
    "legenda": "Você não precisa decidir tudo sozinha.\n\nSe a internet te deixou com medo de comer, ou se o enjoo está atrapalhando o seu dia, dá para começar um acompanhamento pensado para o seu momento do tratamento, no seu ritmo.\n\nManda COMEÇAR no direct e eu te explico como funciona. Sem pressão.",
    "cta": "Convite com acolhimento. Sem prova social de resultado."
  },
  {
    "id": "C1",
    "who": "c",
    "persona": "Cláudia",
    "p": "Corpo Forte no Tratamento",
    "f": "Carrossel",
    "n": "Nível 1",
    "hook": "Você não engordou por comer demais. Seu estrogênio caiu por causa do tratamento.",
    "roteiro": [
      "Capa: o gancho acima",
      "Validar: o corpo mudou e incomoda, sim",
      "A terapia hormonal reduz o estrogênio, e isso pode mudar músculo, gordura e energia",
      "Por isso muita mulher sente que \"come pouco e o corpo não responde\"",
      "Apertar a comida costuma piorar a força e a disposição",
      "O que importa agora: preservar músculo e função, com orientação individual",
      "Fecho: seu corpo mudou por um motivo, não por falta de disciplina"
    ],
    "legenda": "Quase ninguém te explicou isso depois do tratamento: o bloqueio hormonal muda o seu corpo.\n\nSe você sente que come pouco e a barriga aparece do nada, saiba que isso não é falta de disciplina. A queda do estrogênio provocada pelo tratamento pode mexer com a forma como o corpo guarda gordura e mantém músculo.\n\nE existe o que fazer, com foco em força, disposição e função, não em número na balança.\n\nSe você se identificou, conta aqui nos comentários o que mais mudou no seu corpo.\n\nSempre converse com o seu oncologista sobre qualquer mudança no tratamento.",
    "cta": "Me chama no direct com a palavra CORPO."
  },
  {
    "id": "C2",
    "who": "c",
    "persona": "Cláudia",
    "p": "Manejo de Sintomas",
    "f": "Reels 40s",
    "n": "Nível 2",
    "hook": "Dor nas juntas no bloqueio hormonal: você não tem só que aguentar.",
    "roteiro": [
      "Acordar dura, com os dedos e os joelhos doendo",
      "Essa queixa é comum com os inibidores de aromatase",
      "Muitas vezes o que ajuda é movimento regular, adaptado à sua dor",
      "Treino de força com orientação protege músculo e articulação",
      "A alimentação sustenta esse músculo",
      "Conte ao seu oncologista, ele pode ter outras orientações"
    ],
    "legenda": "Acordar com as juntas doendo, os dedos rígidos e a sensação de que o corpo envelheceu dez anos de uma vez.\n\nSe isso acontece com você no bloqueio hormonal, saiba que é uma queixa comum e que não precisa ser só suportada.\n\nMovimento regular, força orientada e uma alimentação que sustente seu músculo costumam ajudar. Cada caso é diferente, então converse também com o seu oncologista.\n\nMe conta aqui: em que hora do dia a dor é pior para você?",
    "cta": "Comente JUNTAS que eu te mando um material no direct."
  },
  {
    "id": "C3",
    "who": "c",
    "persona": "Cláudia",
    "p": "Ciência sem Susto",
    "f": "Carrossel",
    "n": "Nível 3",
    "hook": "Dieta de emagrecimento comum pode piorar o seu caso no bloqueio hormonal.",
    "roteiro": [
      "Capa: o gancho acima",
      "O que a dieta comum pede: cortar muito e perder peso rápido",
      "O que o seu corpo precisa agora: preservar músculo",
      "Restringir demais pode levar à perda de força e de disposição",
      "Orientação de menopausa comum esquece que você tratou câncer de mama",
      "Por que o seu plano precisa ser pensado para o seu caso",
      "Fontes no último slide"
    ],
    "legenda": "Muitas mulheres no bloqueio hormonal tentam uma dieta de emagrecimento comum e saem pior: mais cansadas, com mais dor e sem resultado.\n\nO corpo dela já está passando por uma mudança hormonal que não é culpa sua. Cortar muito pode atrapalhar justamente o que mais importa agora, que é manter músculo e função.\n\nE a orientação de menopausa genérica também não leva em conta que você tratou um câncer de mama.\n\nSalva este post. O seu caso precisa de um plano que entenda o seu contexto.",
    "cta": "Quer entender o seu? Me chama com a palavra CORPO."
  },
  {
    "id": "C4",
    "who": "c",
    "persona": "Cláudia",
    "p": "A Jornada Além do Prato",
    "f": "Legenda longa",
    "n": "Nível 2",
    "hook": "\"Pelo menos você está viva.\" E a dor que ninguém deixa você sentir.",
    "roteiro": [
      "Abrir com a frase que ela ouve de todo mundo",
      "Validar: estar grata e estar cansada podem existir juntas",
      "Falar do corpo que mudou, da dor e da névoa sem romantizar",
      "Dizer que cuidar do corpo agora é uma forma de seguir em frente",
      "Fechar com uma pergunta para os comentários"
    ],
    "legenda": "\"Pelo menos você está viva.\" Você já ouviu isso?\n\nSim, você está, e isso importa. Mas continuar sentindo dor nas juntas, cansaço, o corpo diferente e a cabeça confusa também é real. As duas coisas podem existir juntas.\n\nVocê não precisa fingir que está tudo bem para provar gratidão.\n\nSe você precisa ouvir isso hoje: o que você sente tem espaço aqui.\n\nCuidar do seu corpo agora, no seu ritmo, é uma forma de seguir em frente, e não de ingratidão.\n\nConta nos comentários o que você gostaria que as pessoas entendessem sobre essa fase.",
    "cta": "Compartilhe com uma amiga que passou por isso."
  },
  {
    "id": "C5",
    "who": "c",
    "persona": "Cláudia",
    "p": "Manejo de Sintomas",
    "f": "Reels 35s",
    "n": "Nível 1 e 2",
    "hook": "Esqueceu o nome de novo? A névoa mental no bloqueio hormonal existe.",
    "roteiro": [
      "Cena: perder o fio da conversa no meio da frase",
      "Muitas mulheres relatam névoa mental com a terapia hormonal",
      "Contar ao oncologista é o primeiro passo",
      "Rotina de sono, refeições regulares e movimento ajudam a sustentar a disposição",
      "Sem promessa: o objetivo é te dar mais clareza no dia a dia"
    ],
    "legenda": "Entrou na cozinha e esqueceu para quê? Perdeu o fio da conversa no meio de uma frase?\n\nSe você está no bloqueio hormonal, essa névoa mental é uma queixa que muitas mulheres relatam. Não significa que algo pior esteja acontecendo, mas vale sempre contar ao seu oncologista.\n\nDormir bem, comer em horários regulares e se movimentar ajudam a sustentar a sua disposição.\n\nVocê também sente isso? Conta aqui.",
    "cta": "Comente NÉVOA e eu te mando dicas no direct."
  },
  {
    "id": "C6",
    "who": "c",
    "persona": "Cláudia",
    "p": "Convite ao acompanhamento",
    "f": "Stories 5x",
    "n": "Nível 5",
    "hook": "Se você quer entender esse corpo novo, me chama no direct com a palavra CORPO.",
    "roteiro": [
      "Story 1: a frase que você pensa no espelho",
      "Story 2: acompanhamento feito para quem está no bloqueio hormonal",
      "Story 3: sem dieta de sofrimento, respeitando a sua névoa e o seu cansaço",
      "Story 4: dá para começar esta semana, no seu ritmo",
      "Story 5: botão de mensagem com a palavra CORPO"
    ],
    "legenda": "Seu corpo mudou, e entender o que mudou é o primeiro passo.\n\nSe você está no bloqueio hormonal e quer um plano que caiba na sua rotina e na sua névoa, sem dieta de sofrimento e sem pressão, me chama.\n\nManda CORPO no direct e eu te explico como funciona.",
    "cta": "Convite com acolhimento. Nunca meta de peso nem número."
  }
];

// Biblioteca de Stories (Essentia). Texto original para oncologia.
// Sem depoimento de paciente, sem antes e depois, sem promessa de cura ou de peso (CFN 856).
export const STORIES = [
  {
    id: "frameworks",
    titulo: "Frameworks",
    sub: "Moldes de sequência para repetir",
    itens: [
      { label: "Caixinha de perguntas em 4 stories", who: "", frames: [
        "Story 1: caixinha. \"Qual a sua maior dúvida de comida durante o tratamento?\"",
        "Story 2: print da pergunta (sem nome) e a resposta curta, falando para a câmera.",
        "Story 3: o que fazer hoje, em uma frase prática.",
        "Story 4: \"Quer que eu responda a sua? Manda a palavra DÚVIDA no direct.\"" ] },
      { label: "Mito x Verdade com enquete", who: "h", frames: [
        "Story 1: o mito em letras grandes. \"Cortar o açúcar faz o tumor morrer de fome.\"",
        "Story 2: enquete. Mito ou verdade?",
        "Story 3: a resposta calma, sem susto: o corpo inteiro usa glicose.",
        "Story 4: o que pesa de verdade: manter força e proteína.",
        "Story 5: \"Ouviu outro mito? Me conta no direct.\"" ] },
      { label: "Passo a passo em 5 stories", who: "h", frames: [
        "Story 1: o problema. \"Tudo com gosto de metal?\"",
        "Story 2: ajuste 1, comida fria ou em temperatura ambiente.",
        "Story 3: ajuste 2, talher de plástico ou madeira.",
        "Story 4: ajuste 3, um toque de limão ou ervas, se não houver aftas.",
        "Story 5: \"Salve para o próximo dia difícil. Quer o guia? Manda GOSTO.\"" ] },
      { label: "Conversa de direct com palavra-chave", who: "c", frames: [
        "Story 1: a frase que ela pensa no espelho.",
        "Story 2: o que mudou no corpo com a terapia hormonal, em linguagem simples.",
        "Story 3: o que ajuda: força, movimento e proteína, sem número na balança.",
        "Story 4: \"Manda CORPO no direct e eu te explico.\"" ] },
    ],
  },
  {
    id: "desejo",
    titulo: "Ativadores de desejo",
    sub: "Ganchos que falam do que ela quer viver",
    itens: [
      { label: "Comer em paz (Helena)", who: "h", frames: [
        "Imagina almoçar sem medo do cheiro da comida.",
        "E se a refeição deixasse de ser uma briga e virasse um momento seu?",
        "Existe um jeito de comer no pior dia de quimio. Vou te mostrar um." ] },
      { label: "Ter força (Helena)", who: "h", frames: [
        "Sentir as pernas firmes para subir a escada de casa.",
        "Força também é um objetivo de tratamento, e a comida entra nisso.",
        "Dá para proteger o seu músculo enquanto você se cuida." ] },
      { label: "Se sentir ela de novo (Cláudia)", who: "c", frames: [
        "Acordar sem as juntas travadas.",
        "Lembrar o nome da pessoa sem o branco na hora.",
        "Olhar no espelho e reconhecer o próprio corpo, no ritmo dele." ] },
      { label: "Ter clareza (as duas)", who: "", frames: [
        "Parar de adivinhar o que pode e o que não pode comer.",
        "Um plano que cabe na sua rotina e no seu cansaço.",
        "Saber que você não está fazendo nada errado." ] },
      { label: "Para quem cuida", who: "", frames: [
        "Ver quem você ama comer um pouquinho, sem insistir.",
        "Cuidar sem se esgotar também é possível.",
        "Você também merece ser cuidada." ] },
    ],
  },
  {
    id: "storyselling",
    titulo: "StorySelling",
    sub: "Narrativas que levam ao convite, sem prova de resultado",
    itens: [
      { label: "A cena da cozinha", who: "h", frames: [
        "Story 1: \"Hoje uma paciente me contou que passou a semana só olhando para a comida.\" (história composta, sem nome)",
        "Story 2: o que isso diz sobre o enjoo e o medo de comer errado.",
        "Story 3: como eu começo a olhar um caso assim: tratamento, exames, o que desce hoje.",
        "Story 4: o que o acompanhamento tem: ajuste conforme o ciclo muda.",
        "Story 5: \"Se isso é a sua semana, manda COMEÇAR no direct. Sem pressão.\"" ] },
      { label: "O corpo que mudou", who: "c", frames: [
        "Story 1: \"Quase ninguém explica o que a terapia hormonal faz com o corpo.\"",
        "Story 2: queda de estrogênio, músculo, energia, gordura. Em duas frases.",
        "Story 3: por que dieta comum não serve para esse momento.",
        "Story 4: o foco do plano: força e função, nunca meta de peso.",
        "Story 5: \"Quer entender o seu? Manda CORPO.\"" ] },
      { label: "Por que eu faço isso (autoridade humana)", who: "", frames: [
        "Story 1: foto sua no consultório, sem paciente. \"Por que escolhi a oncologia.\"",
        "Story 2: o que mais me incomodava ao ver a comida tratada como detalhe.",
        "Story 3: o que eu acredito: comer faz parte do cuidado.",
        "Story 4: como é a primeira consulta, passo a passo.",
        "Story 5: convite aberto, sem escassez falsa." ] },
    ],
  },
  {
    id: "lifestyle",
    titulo: "Lifestyle intencional",
    sub: "Bastidores que aproximam sem expor paciente",
    itens: [
      { label: "Raiz Amazônica", who: "", frames: [
        "Foto de um ingrediente da região (jambu, tucumã, cupuaçu, açaí de verdade).",
        "Uma frase: o que ele tem de interessante para quem está com paladar alterado.",
        "Pergunta: \"Qual sabor da sua infância ainda desce bem?\"" ] },
      { label: "Por trás do jaleco", who: "", frames: [
        "Foto da sua mesa de estudo ou do café antes de atender.",
        "Uma coisa que você aprendeu esta semana, em linguagem simples.",
        "Fechamento: \"Estudo para te explicar sem susto.\"" ] },
      { label: "Cozinha real", who: "", frames: [
        "Vídeo curto de um preparo fácil e morno, sem cheiro forte.",
        "Texto na tela: quando serve (enjoo, pouco apetite, boca seca).",
        "Aviso: \"O seu caso pode pedir ajuste. Me chama.\"" ] },
      { label: "Quem cuida também precisa", who: "", frames: [
        "Uma frase para o cuidador, falando devagar.",
        "Uma ideia de lanche rápido para quem não tem tempo de comer.",
        "\"Marca aí quem está cuidando de alguém hoje.\"" ] },
    ],
  },
  {
    id: "frequencia",
    titulo: "Frequência e calendário",
    sub: "Ritmo semanal sugerido",
    itens: [
      { label: "Segunda: educar", who: "h", frames: ["1 sequência curta de Mito x Verdade (Frameworks)."] },
      { label: "Terça: caixinha", who: "", frames: ["Abrir a caixinha de perguntas e guardar as respostas para quinta."] },
      { label: "Quarta: desejo", who: "c", frames: ["2 ou 3 stories de Ativadores de desejo da Cláudia."] },
      { label: "Quinta: responder", who: "", frames: ["Responder 3 perguntas da caixinha, em vídeo."] },
      { label: "Sexta: StorySelling", who: "", frames: ["1 narrativa de 5 stories com convite no último."] },
      { label: "Sábado: lifestyle", who: "", frames: ["Raiz Amazônica ou Cozinha real, leve."] },
      { label: "Domingo: descanso", who: "", frames: ["No máximo 1 story pessoal. Sem venda."] },
      { label: "Regra de ouro", who: "", frames: ["3 a 5 dias com stories por semana, no máximo 1 convite direto. Stories interativos (enquete, quiz) precisam ser postados pelo app do Instagram."] },
    ],
  },
];
