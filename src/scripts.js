// Biblioteca de Scripts Oncologia (Essentia)
// Texto original da Kelly para WhatsApp. Troque tudo que está entre parênteses.
// Regras: sem promessa de resultado, cura ou perda de peso (CFN 856) e sem depoimento de paciente.

export const SCRIPTS_INTRO = `
## Como usar
Toque no script, copie e cole no WhatsApp. Troque tudo que está entre **(parênteses)** antes de enviar.

**Tom Essentia:** acolhimento, sem medo, sem culpa e sem cobrança. A paciente pode estar com enjoo, cansaço ou dor. Deixe sempre uma saída gentil e a porta aberta.

**Cuidado ético (CFN 856):** nada de promessa de resultado, cura ou perda de peso. Não divulgue depoimento nem print de paciente.
`.trim();

export const SCRIPT_GROUPS = [
  {
    id: "soft-sell",
    title: "Soft Sell",
    subtitle: "Do Instagram à consulta, sem pressão",
    categories: [
      {
        id: "potencial",
        title: "Potencial paciente: Instagram para WhatsApp",
        items: [
          { label: "Ela comentou ou respondeu um story", text: "Oi, (nome)! Vi que você respondeu meu conteúdo sobre (tema) e pensei em te escrever. Posso te perguntar como anda a alimentação no seu tratamento? Sem compromisso, só quero entender se consigo te ajudar." },
          { label: "Ela mandou a palavra-chave", text: "Oi, (nome), aqui é a Kelly, nutricionista. Você pediu o material sobre (tema) e já te mando. Antes, me conta: em que fase do tratamento você está? Assim eu te indico o que faz sentido pra você." },
          { label: "Quem escreve é a filha ou o cuidador", text: "Oi, (nome)! Obrigada por falar comigo. Cuidar de quem a gente ama durante o tratamento é muito, e a comida costuma virar uma preocupação a mais. Quer me contar como está a rotina de (nome da paciente) à mesa?" },
        ],
      },
      {
        id: "primeiro-contato",
        title: "Primeiro contato no WhatsApp",
        items: [
          { label: "Direto com a paciente", text: "Oi, (nome)! Que bom ter você por aqui. Sou a Kelly, nutricionista focada em oncologia. Me conta, o que mais está pesando na sua alimentação hoje: enjoo, falta de apetite, mudança de gosto ou dúvida do que pode comer?" },
          { label: "Resposta curta (já pediu valores)", text: "Oi, (nome)! Antes de falar de valores, quero entender seu momento para indicar o formato certo (consulta única ou acompanhamento). Você está em quimioterapia, hormonioterapia ou em outra fase?" },
          { label: "Quando uma secretária ou assistente responde", text: "Olá! Aqui é a equipe da Kelly Oliveira, nutricionista oncológica. Vou te passar as informações de consulta e horários. Pode me dizer o nome da paciente e a melhor forma de contato dela?" },
        ],
      },
      {
        id: "remarketing",
        title: "Remarketing",
        items: [
          { label: "Quem sumiu depois de perguntar", text: "Oi, (nome)! Lembrei de você. Na nossa conversa você comentou que queria (desejo dela: comer sem enjoo, entender o que pode, ter mais energia). Esse assunto continua importante pra mim. Quer que eu te explique como funciona a consulta, sem pressa?" },
        ],
      },
      {
        id: "objecoes-resultado",
        title: "Objeções: resultado e qualidade",
        items: [
          { label: "\"Já tive experiência ruim com outros profissionais\"", text: "Sinto muito que isso aconteceu, (nome). Em oncologia, receber uma dieta genérica cansa mesmo. Aqui o plano parte do seu tratamento, do seu exame e do que você consegue comer hoje. Posso te contar como é a primeira consulta?" },
          { label: "\"Não tenho certeza se devo investir\"", text: "Faz sentido pensar com calma. Posso te explicar exatamente o que está incluso e o que você leva da consulta, aí você decide com segurança. Qual dúvida pesa mais: o valor, o formato ou se vai servir pra você?" },
          { label: "\"Não sei se a consulta é para mim\"", text: "Me conta o que você está vivendo hoje com a comida. Se eu perceber que não é o momento ou que outro profissional ajuda mais, eu te digo com sinceridade." },
        ],
      },
      {
        id: "objecoes-tempo",
        title: "Objeções: tempo",
        items: [
          { label: "\"Vou analisar e te aviso\" / \"Vou ver e te aviso\"", text: "Claro, (nome), sem pressa. Se ajudar, deixo aqui o resumo do que combinamos e os horários desta semana. Qualquer dúvida que surgir enquanto pensa, pode me chamar." },
          { label: "\"Não tenho tempo para me dedicar\"", text: "Entendo, o tratamento já toma muito. O acompanhamento é desenhado para caber na sua rotina: orientações simples, no seu ritmo, e a gente ajusta nos dias ruins. Quer ver como ficaria na prática?" },
          { label: "Gatilho do desapego (último lembrete, leve)", text: "(Nome), vou deixar seu horário reservado até (dia). Se não for o momento, tudo bem, a porta continua aberta. Cuide de você." },
        ],
      },
      {
        id: "objecoes-preco",
        title: "Objeções: preço",
        items: [
          { label: "\"Pode dar desconto?\"", text: "Entendo, (nome). Meus valores são fixos para manter a qualidade do cuidado. Posso te mostrar a opção de consulta única, que costuma caber melhor agora, e depois decidimos o acompanhamento." },
          { label: "Sinal do pagamento", text: "Para reservar seu horário, peço um sinal de (valor), que é abatido do total. Ele garante o seu espaço na agenda. Pix: (chave)." },
          { label: "\"Atende por convênio?\"", text: "Não atendo por convênio, mas emito nota fiscal com todos os dados para você solicitar reembolso, se o seu plano tiver essa possibilidade." },
        ],
      },
    ],
  },
  {
    id: "pacientes",
    title: "Pacientes",
    subtitle: "Da primeira consulta ao retorno",
    categories: [
      {
        id: "onboarding",
        title: "Onboarding",
        items: [
          { label: "Consulta única", text: "Oi, (nome), seja muito bem-vinda! Fico feliz de cuidar da sua alimentação nesse momento. Para começar, preciso que você: 1) assine o contrato (link), 2) preencha o formulário pré-consulta (link). Se algum campo cansar, preencha o que der e completamos juntas. Horários disponíveis: (opções)." },
          { label: "Plano de acompanhamento", text: "Oi, (nome), bem-vinda ao acompanhamento Essentia! Aqui você não anda sozinha: ajustamos o plano conforme o tratamento muda. Primeiros passos: contrato (link), formulário (link) e escolher o melhor horário: (opções). Qualquer dúvida, me escreve." },
        ],
      },
      {
        id: "lembretes",
        title: "Lembretes de consulta",
        items: [
          { label: "Um dia antes (online)", text: "Oi, (nome)! Amanhã, (dia) às (hora), temos nossa consulta online. Link: (link). Se puder, deixe por perto seus exames recentes e a lista de medicamentos. Se estiver num dia difícil, me avise que a gente adapta." },
          { label: "No dia (online)", text: "Bom dia, (nome)! Hoje às (hora) nos vemos por vídeo. Link: (link). Procure um lugar tranquilo e, se puder, tenha água por perto." },
          { label: "Um dia antes (presencial)", text: "Oi, (nome)! Amanhã, (hora), te espero no consultório: (endereço). Tem estacionamento em (local). A consulta dura em torno de (tempo). Se a sessão de quimio ou o enjoo atrapalhar, me avise com antecedência." },
          { label: "No dia (presencial)", text: "Bom dia, (nome)! Hoje às (hora) te espero aqui. Tolerância de 20 minutos; se precisar atrasar por causa do tratamento, me avise e eu me organizo." },
        ],
      },
      {
        id: "cobranca",
        title: "Cobrança",
        items: [
          { label: "Sinal", text: "Para confirmar seu horário, peço um sinal de (valor). Pix: (chave). Assim que cair, te confirmo por aqui." },
          { label: "Após a consulta", text: "Obrigada pela consulta, (nome). O valor restante é (valor). Pix: (chave) ou cartão: (link)." },
          { label: "Paciente esquecida (tom sensível)", text: "Oi, (nome)! Passando só para lembrar do pagamento da consulta, (valor), caso tenha passado batido. Sei que a rotina está intensa. Se precisar de uma alternativa, me diga." },
          { label: "Paciente que faltou", text: "Oi, (nome)! Notei que sua consulta de hoje não aconteceu. Quer remarcar? Combinamos de forma tranquila, só preciso saber para reorganizar a agenda." },
          { label: "Link do cartão", text: "Aqui está o link para pagar no cartão em até (x) vezes: (link). Me avisa quando concluir." },
        ],
      },
      {
        id: "pos-consulta",
        title: "Pós-consulta",
        items: [
          { label: "Check-in no mesmo dia (cerca de 5 horas depois)", text: "Oi, (nome), como você está depois da nossa conversa? Ficou alguma dúvida do que combinamos? Pode me mandar, sem cerimônia." },
          { label: "Entrega do plano", text: "Pronto, (nome)! Seu plano está aqui: (arquivo). Comece pelo que for mais fácil hoje. Nos dias ruins, o plano se adapta a você, não o contrário. Qualquer dificuldade, me chama." },
        ],
      },
      {
        id: "follow-up",
        title: "Follow-up",
        items: [
          { label: "Cancelou: logo depois", text: "Oi, (nome), recebi seu aviso. Imagino que não esteja num bom dia. Quer remarcar quando se sentir melhor? Fico à disposição." },
          { label: "Cancelou: uma semana depois", text: "Oi, (nome), como você está? Estava pensando em você. Se quiser retomar, tenho horários em (dias)." },
          { label: "Cancelou: após alguns meses", text: "Oi, (nome), faz um tempo que não nos falamos. Como estão as coisas? Se fizer sentido retomar o acompanhamento, estou aqui, sem cobrança." },
          { label: "Convite para encontro rápido", text: "Oi, (nome), tenho um encontro rápido de 30 minutos para tirar dúvidas e organizar os próximos passos. Quer que eu reserve um horário?" },
          { label: "Follow-up de 7 dias", text: "Oi, (nome), uma semana depois da consulta. Como está sendo colocar o plano em prática? Se algo não está funcionando, me conta, a gente ajusta. Separei também um material extra pra você: (link)." },
        ],
      },
      {
        id: "retorno",
        title: "Retorno",
        items: [
          { label: "Retorno vencendo", text: "Oi, (nome), seu retorno vence em (data). Como o tratamento muda, vale reavaliar. Quer que eu reserve um horário?" },
          { label: "Agendamento de retorno", text: "Vamos marcar seu retorno? Tenho (opções de dia e hora). Qual fica melhor, considerando suas sessões?" },
          { label: "Retorno do plano", text: "Chegou a hora de revisar o seu plano, (nome). Vamos ver como está a tolerância, exames e o que mudou. Posso reservar (opções)?" },
        ],
      },
      {
        id: "avaliacao",
        title: "Pedir avaliação (privada)",
        note: "Pela CFN 856, não divulgue o retorno da paciente como resultado. Use só para melhorar o atendimento.",
        items: [
          { label: "Formulário", text: "Oi, (nome), queria saber como foi sua experiência comigo, só para eu cuidar melhor das próximas pacientes. Leva 2 minutos: (link). Suas respostas são privadas." },
          { label: "WhatsApp", text: "(Nome), o que mais ajudou na nossa consulta e o que eu poderia fazer melhor? Sua opinião me ajuda a evoluir." },
        ],
      },
      {
        id: "duvidas",
        title: "Dúvidas frequentes",
        items: [
          { label: "Nota fiscal e reembolso", text: "Emito nota fiscal com todos os dados para reembolso. Cada plano de saúde tem suas regras, vale conferir com o seu." },
          { label: "Parcelamento", text: "Parcelo no cartão em até (x) vezes. Te mando o link na hora." },
          { label: "Retorno", text: "O retorno serve para reavaliar o plano conforme o tratamento muda. Indico a cada (período) ou quando algo importante mudar." },
          { label: "Online ou presencial", text: "Os dois seguem o mesmo cuidado. O online é ótimo em dias de baixa energia ou quando a ida ao consultório pesa. O presencial permite avaliação física completa." },
        ],
      },
      {
        id: "reajuste",
        title: "Reajuste e confirmação",
        items: [
          { label: "Reajuste de valor", text: "Oi, (nome)! A partir de (data), o valor da consulta passa a ser (valor). Para quem já está em acompanhamento, mantenho o valor atual até (data). Agradeço a confiança e continuo aqui por você." },
          { label: "Confirmar sem abrir para remarcação", text: "(Nome), seu horário está reservado para (dia) às (hora). Preciso da sua confirmação até (prazo): é só responder SIM. Se surgir um imprevisto de saúde, me avise o quanto antes." },
        ],
      },
    ],
  },
  {
    id: "datas",
    title: "Datas comemorativas",
    subtitle: "Mensagens de afeto ao longo do ano",
    categories: [
      {
        id: "aniversario",
        title: "Aniversário",
        items: [
          { label: "Opção 1", text: "Feliz aniversário, (nome)! Que seu dia seja leve. Desejo carinho, descanso e uma mesa com o que te faz bem hoje. Um abraço da Kelly." },
          { label: "Opção 2", text: "(Nome), hoje é o seu dia. Se quiser comer aquele bolo, coma com prazer. Cuidar de você também é isso. Feliz aniversário!" },
          { label: "Opção 3", text: "Hoje o tempo é todo seu. Obrigada por me deixar fazer parte do seu cuidado. Parabéns!" },
          { label: "Opção 4", text: "(Nome), parabéns pelo seu dia. Que a alegria venha na medida que o seu corpo permite. Com carinho, Kelly." },
          { label: "Opção 5", text: "Feliz aniversário! Que cada ano traga mais acolhimento e cuidado. Estou torcendo por você." },
          { label: "Opção 6", text: "Parabéns, (nome)! Aproveita o dia do seu jeito, no seu ritmo." },
        ],
      },
      {
        id: "pascoa",
        title: "Páscoa",
        items: [
          { label: "Opção 1", text: "Feliz Páscoa, (nome)! Se o chocolate fizer parte do seu dia, aproveite sem culpa, em pedacinhos que couberem hoje. Cuide-se com carinho." },
          { label: "Opção 2", text: "Que a Páscoa seja de renovação e de mesa tranquila. Se o enjoo ou a falta de apetite estiverem difíceis, vá no seu tempo." },
          { label: "Opção 3", text: "Feliz Páscoa! Qualquer dúvida de como se organizar nos dias de festa, me chama." },
        ],
      },
      {
        id: "natal",
        title: "Natal",
        items: [
          { label: "Opção 1", text: "Feliz Natal, (nome)! Que a ceia seja leve e cheia de afeto. Dica: escolha o que te dá prazer, em porções pequenas, e hidrate-se ao longo do dia." },
          { label: "Opção 2", text: "Que o seu Natal seja de paz. Se a comida estiver difícil, lembre que estar junto já é o presente. Um abraço." },
          { label: "Opção 3", text: "Boas festas, (nome)! Se precisar de ajuda para adaptar a ceia ao seu tratamento, me escreva antes do dia 24." },
        ],
      },
      {
        id: "ano-novo",
        title: "Ano Novo",
        items: [
          { label: "Opção 1", text: "Feliz Ano Novo, (nome)! Que o novo ano traga mais cuidado e menos cobrança. Seguimos juntas." },
          { label: "Opção 2", text: "Que o novo ano seja gentil com você. Obrigada pela confiança neste ano que termina." },
        ],
      },
      {
        id: "carnaval",
        title: "Carnaval",
        items: [
          { label: "Opção 1", text: "(Nome), Carnaval com cuidado: hidrate-se, coma o que te cair bem e respeite seu cansaço. Se tiver dúvida de como se organizar, me chama." },
          { label: "Opção 2", text: "Bom Carnaval! Aproveite do jeito que o seu corpo permitir. Estou por aqui se precisar." },
        ],
      },
      {
        id: "oncologicas",
        title: "Datas oncológicas",
        items: [
          { label: "Outubro Rosa", text: "Outubro Rosa me lembra de você, (nome). A alimentação faz parte do cuidado em todas as fases. Se quiser conversar sobre a sua, estou à disposição." },
          { label: "Novembro Azul", text: "Novembro Azul: cuidar da saúde do homem inclui a mesa. Se você ou alguém da sua família quer orientação durante o tratamento, é só chamar." },
          { label: "27 de novembro (Dia Nacional de Combate ao Câncer)", text: "Hoje é dia de lembrar que ninguém precisa passar por isso sozinho. Se a comida está pesando no seu tratamento, estou aqui para ajudar." },
          { label: "Dia das Mães / Dia dos Pais", text: "Para quem cuida e para quem é cuidada: um dia de afeto e de descanso. Feliz dia, (nome)." },
        ],
      },
    ],
  },
];
