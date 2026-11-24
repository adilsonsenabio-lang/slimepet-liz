# Alterações da V41-R9

## T-00 — Separação do HTML offline

- Preservei o HTML extraído do ZIP e fiz uma cópia em `backup/V41_R8_original.html`.
- Separei a marcação, o CSS e o JavaScript em `src/index.html`, `src/slimepet.css` e `src/slimepet.js`.
- Extraí as 112 ocorrências de imagens PNG em Base64 para arquivos com nomes descritivos em `assets/`.
- O script `scripts/build.mjs` reintegra os arquivos em um HTML autônomo. Ele gera a saída R8 solicitada pelo Prompt 00 e a saída R9 solicitada pelo AGENTS.md. Nesta etapa, as duas são idênticas ao original.
- O arquivo `task_slimepet.md` foi criado a partir da ordem dos prompts porque estava ausente no ZIP e na pasta de trabalho.

Execute `node scripts/build.mjs` na pasta do projeto para gerar os HTMLs em `dist/`.

## T-01 — Ciclo do ouriço

- Ajustei o ciclo para 3 minutos escondido na toca e 1 minuto no loop parcialmente enterrado. A escavação e a saída continuam usando o mesmo buraco.
- Reaproveitei os sprites existentes. Durante o repouso, o jogo oculta a parte inferior do sprite para representar o ouriço enterrado na areia.
- Com “Pouco movimento”, o ouriço usa uma pose fixa quando está visível e mantém os 3 minutos escondido.
- O manifesto em `assets/manifest.json` lista as três sequências usadas. O build gera a revisão R9 com o ajuste e recompõe a saída R8 usando o backup original.

## T-02 — Ciclo do esquilo

- Configurei um intervalo de 3 minutos entre subidas e 1 minuto de repouso no galho após cada descida. O tempo na copa é calculado a partir do ciclo e das durações das animações.
- Reaproveitei as sequências existentes de 20 quadros e registrei as três no manifesto. O esquilo diminui continuamente até desaparecer entre as folhas e retorna suavemente à posição original do galho.
- Com “Pouco movimento”, o esquilo alterna entre a pose fixa no galho e a fase oculta na copa.

## T-03 — Casinha do joão-de-barro

- Criei uma casinha de barro de 48 × 52 px, posicionada junto ao galho da árvore direita.
- Reaproveitei as poses do joão-de-barro para montar duas sequências de 20 quadros de 72 × 56 px, com entrada, saída e retorno ao galho na escala original de 0,9265.
- Configurei 60 segundos dentro da casinha e 20 segundos no galho após a saída. “Pouco movimento” usa pose fixa no galho e mantém o intervalo dentro da casinha.
- Os três PNGs constam em `assets/manifest.json` e estão embutidos no HTML offline.

## T-04 — Voo da joaninha

- Ajustei a escala de 0,656 para 0,5904 e o voo para 20 s, com saída e pouso na mesma flor. A animação aproveita a folha existente. “Pouco movimento” mantém a joaninha pousada.

## T-05 — Língua do sapo

- Montei `sapo_lingua.png` sobre os 20 quadros do sapo parado, com a âncora e o tamanho originais. Mantive `sapo_salto.png` porque o pulo acionado pelo toque usa essa folha.

## T-06 — Poça e lagoa

- Separei a poça da lagoa no cenário e criei as sequências de mergulho, emersão e saltos de ida e volta. O sapo some por 60 s, durante os quais a poça mostra ondulações, depois emerge no mesmo lugar e faz o percurso até a lagoa. “Pouco movimento” suprime os deslocamentos e os efeitos animados.

## T-07 — Gramado

- Removi a faixa pontilhada desenhada em `assets/bg.png` e `assets/tree_occlusion_v40.png`. Criei três folhas `grama_vento_0.png` a `grama_vento_2.png`, com 20 quadros cada. Os tufos ficam atrás dos personagens e exibem o primeiro quadro em “Pouco movimento”.

## T-08 — Colisões

- Adicionei `src/collision.js` com caixas pela base dos sprites. `resolveCollisionX`, `limitSlimeWalk` e `resolveActorCollisions` limitam deslocamentos e mantêm os personagens na área visível. Animais ocultos ficam fora da resolução.

## T-09 — Bichinhos selecionáveis

- Adicionei “Bichinhos do cenário” ao Jardim, com ícones e botões de alternância. `fauna.presentes` armazena as espécies desativadas no save atual. Saves antigos habilitam todas por padrão. A recolocação procura espaço disponível, preservando o habitat dos residentes fixos e dos animais aquáticos.

## T-10 — Temporização

- Centralizei durações e offsets em `src/fauna-timers.js`. `resetGardenWildlife`, `createFaunaSchedule` e `updateVisitors` distribuem os inícios das cinco rotinas principais, dos visitantes sorteados e do patinho. Alguns inícios são adiados para preservar a janela de 5 s. O intervalo de 3 min do esquilo tem prioridade. Deslocamentos contínuos e interações iniciadas pelo jogador têm regras próprias.
- O build incorpora a configuração, as caixas de colisão e os PNGs. A saída R8 continua sendo uma cópia do backup original.

## Refinamentos do jardim

- Substituí o desenho do Sol por `assets/sol_jardim.png`, com halo e raios em pixel art. O relógio, a trajetória e a iluminação continuam usando os cálculos existentes.
- Ampliei o percurso contínuo da borboleta e suavizei a virada e os ajustes de colisão do voo. A libélula passou a ter presença fixa no jardim, com arrancadas, pausas, alvos e alturas sorteados a cada trecho.
- Usei a faixa inferior do gramado para separar os percursos do caracol, do coelho e da tartaruga. Reduzi o caracol e a sua caixa de colisão para acompanhar a nova escala de 85%.
- Substituí a emersão do sapo por um salto para fora da poça, com quadros emergindo, respingos na água e pouso na margem. A folha de 20 quadros e os PNGs individuais constam no manifesto. Com “Pouco movimento”, a pose fixa aparece gradualmente na margem.

## Correções de movimento e reação no jardim

- Ajustei “Pouco movimento” para manter o passeio do coelho e os voos da borboleta e da libélula em ritmo mais calmo. O coelho usa um passo sem salto nesse modo.
- Posicionei o sapo sobre a poça ao abrir o jardim. Ele emerge em direção à margem, faz o percurso até a lagoa e retorna à poça.
- Adicionei as folhas de reação ao toque de coelho, sapo, borboleta e libélula e conectei as quatro ao desenho dos bichos durante a interação.

## Ciclos naturais do jardim

- Retirei as quatro folhas de reação ao toque adicionadas na etapa anterior e seus vínculos com o jogo.
- Mantive o passeio do coelho, os voos contínuos da borboleta e da libélula e o salto do sapo para fora da poça. O relógio da borboleta mantém a posição ao mudar a velocidade de “Pouco movimento”.

## Revisão das animações do jardim

- Retirei o ouriço e a toca animada da R9, incluindo o seletor e o calendário da fauna. O backup da R8 mantém os arquivos originais.
- Modelei uma folha de 20 quadros para o joão-de-barro recolher o corpo ao entrar pela abertura da casinha. O ciclo conserva um minuto no interior.
- Aumentei a poça ao redor da posição inicial do sapo, com o ponto de apoio centralizado na água.
- Substituí a folha de caminhada do coelho por 20 quadros de passos ligados à distância percorrida. A nova folha da libélula tem 20 quadros de batidas de asas.

## Correção a partir do print

- Restaurei a folha de caminhada original do coelho, com seis quadros e avanço por distância.
- Posicionei o sapo sobre a água à direita indicada em `Screenshot_2.jpg`. A saída, o pouso e o retorno usam essa mesma área do cenário.

## Libélula e joão-de-barro

- Reduzi a escala da libélula de 0,67 para 0,5695 e acelerei o intervalo dos quadros das asas de 34 ms para 12 ms. Confirmei por simulação que o joão-de-barro fica oculto exatamente 60.000 ms entre a entrada e a saída.

## Gramado e pousos da borboleta

- Acrescentei 11 tufos na faixa inferior e ao redor da água, usando como referência as duas áreas marcadas em `Screenshot_2.jpg`.
- A borboleta pousa em três flores por 4,5 segundos em cada uma e retoma o voo. A trajetória desacelera até o pouso e volta a acelerar na decolagem.

## Percursos dos insetos

- Restaurei a ida da joaninha ao arbusto e a volta à flor, com 10 s de voo por trecho e pausa de 4 s no arbusto.
- Afastei os percursos da borboleta e da libélula da faixa de voo da joaninha. A borboleta mantém os três pousos.
- Retirei o esquilo do Jardim e do seletor, bem como o galho desenhado na árvore esquerda.

## Mergulho do sapo com a folha fornecida

- Adaptei as poses de `Sprite Sheet de Salto do Sapo.png` para uma folha de 20 quadros, com a mesma âncora do sapo.
- O sapo mergulha de cabeça na água onde já está. A linha da água cobre progressivamente as partes submersas. O mergulho dura 2,8 segundos e é seguido de 60 segundos submerso.

## Ciclo fixo e respingos do sapo

- Fixei o primeiro mergulho para cerca de 8 a 10 segundos após abrir o Jardim e a repetição para cada 120 segundos. O sapo passa 60 segundos submerso e 60 segundos fora, incluindo as transições.
- Ajustei o mergulho para 3,4 segundos e a saída para 2,1 segundos. O mergulho usa a folha derivada da arte fornecida. Uma folha separada de 16 quadros desenha os respingos no impacto.

## Velocidade da libélula e entrada na casinha

- Encurtei os trechos e as pausas do voo da libélula e dobrei a cadência dos quadros das asas.
- O joão-de-barro diminui progressivamente para atravessar a abertura e recupera o tamanho ao sair. Os 60 segundos no interior continuam valendo.

## Grama padronizada

- Usei a faixa inferior marcada em `Screenshot_5.jpg` para posicionar 27 tufos. Os 51 pontos de grama usam a mesma folha de 20 quadros, com fases diferentes de balanço.
- Substituí as folhas de grama anteriores e a grama desenhada em código. Limpei os tufos isolados dos dois fundos do Jardim e conservei a vegetação da margem e o contorno do terreno.

## Ajuste fino das animações

- Antecipei a redução do joão-de-barro na aproximação à portinha. O sapo mantém a duração do salto inicial e afunda em 1,44 s após tocar a água. O ciclo continua com um minuto submerso e um minuto fora.
- As asas da libélula avançam a cada 4,3 ms no relógio de animação, preservando a velocidade de deslocamento.

## Retângulos pretos no gramado

- Restaurei a camada transparente das árvores. O fundo tratado e a folha de tufos padronizada continuam ativos.

## Ritmo e turnos da fauna

- O sapo afunda em 0,99 s após tocar a água. As asas da libélula avançam mais rápido.
- Organizei a exibição em turnos, com até seis bichos no Jardim. Coelho, caracol e tartaruga percorrem o gramado até a outra ponta e voltam em faixas distintas. Alguns turnos incluem dois caminhantes.

## Respingos e decoração do Jardim

- Criei uma folha de 20 quadros com gotas e ondulação, sincronizada com o contato do sapo com a água.
- Substituí a faixa escura da frente por uma extensão do gramado e adicionei três grupos de cogumelos e um tronco caído.

## Saída do sapo da poça

- Encurtei a descida após o contato com a água para 620 ms. Os respingos terminam depois de o sapo ficar oculto.
- Adaptei uma folha de 20 quadros para a saída. O sapo surge sob a linha d’água, ganha impulso e pousa na margem.

## Continuidade entre cenários

- A troca de tela deixa posição, caminhada, efeitos, visitantes e horários locais guardados enquanto outro cenário estiver aberto. Ao voltar, o cenário e a fauna retomam o andamento dentro da mesma sessão.
- O relógio do Jardim pausa durante a ausência e nas transições. A compatibilidade dos saves e o relógio das necessidades permanecem os mesmos.

## Escala e distribuição do Jardim

- Reduzi o slime do Jardim em 22%, incluindo a seleção por toque e a caixa de colisão. A escala da Casa e do Limbo continua como antes.
- Distribuí o slime, o caracol, a tartaruga e o coelho por faixas separadas no gramado. Ajustei também as faixas de voo e o trecho de água usado pelo patinho.
- Desloquei os cogumelos e o tronco para a parte inferior. O fundo passa de verdes mais claros no gramado principal a manchas suaves de verde na frente.

## Entradas laterais e saída do sapo

- Aumentei e contrastei as gotas do impacto. Elas são desenhadas na frente do slime para ficarem visíveis quando ele estiver perto da água.
- O sapo emerge dentro do lago antes de se deslocar para a margem, inclusive em “Pouco movimento”.
- Coelho, caracol e tartaruga começam e terminam os passeios fora da área visível e cruzam a borda gradualmente. As caixas não puxam os sprites para dentro durante a entrada. A tartaruga usa trechos de 30 segundos e avanços de quadro mais espaçados.

## Flores pequenas e cogumelo vermelho

- Acrescentei sete pares de flores nas áreas destacadas no Print 5 mais recente. A folha tem três paletas e 20 quadros de balanço por paleta.
- Incluí um cogumelo duplo vermelho com pintas claras, perto do canto inferior esquerdo.

## Profundidade do Jardim, rastro e escala da formiga

- A fauna passa atrás dos troncos, copas, arbustos, pedra, flores, tufos e decorações. A portinha conserva a abertura e a água conserva a animação do sapo.
- A lesma anda devagar da borda esquerda até a árvore e volta. As marcas do rastro clareiam e somem em cerca de seis segundos.
- Reduzi a formiga em 10% na Casa, com o mesmo ajuste nas áreas de toque e colisão.

## Respingos, reaparecimento na água e voo da joaninha

- Criei uma folha maior para o impacto, com gotas claras, uma coroa de água e ondas. O sapo emerge e pousa sobre a mesma poça. Desloquei o pato dois quadradinhos de 8 px para baixo no palco.
- Reaproveitei a folha da joaninha. Ela sobe batendo as asas sobre a flor, pousa ali e depois faz a ida e a volta ao arbusto.

## Ajuste de profundidade da fauna

- Retirei o recorte por objetos para joão-de-barro, joaninha, lesma e tartaruga. Os demais bichos conservam o recorte. A portinha conserva seu recorte próprio durante a entrada e a saída.

## Luz do Sol, pólen e profundidade do coelho

- Adicionei sombras projetadas pela direção do Sol para árvores, pedra, cogumelos, tronco e animais terrestres. O pólen flutua perto das flores e fica parado com “Pouco movimento”.
- O coelho voltou ao primeiro plano com o mesmo percurso.

## Camadas da borboleta e do pato

- A borboleta passa à frente das flores, mantendo o recorte por árvores e outros objetos. O pato passa à frente dos objetos e seu trajeto foi deslocado mais 8 px para baixo.

## Camadas do impacto na poça

- Separei o impacto em três folhas de 20 quadros, com a coroa de água, as gotas caindo e as ondas. As camadas se sobrepõem e desaparecem em momentos diferentes.

## Velocidade do mergulho e camada da borboleta

- Reduzi a duração do mergulho para 1.090 ms, mantendo o ciclo de um minuto dentro e um minuto fora. A borboleta passou ao primeiro plano do Jardim.

## Entrada da abelha e destinos da libélula

- A abelha recolocada começa pela lateral, como na visita normal. Uma visita barrada por lotação não reaparece no meio do trajeto. Se o Jardim encher durante uma visita já visível, a abelha some aos poucos.
- A libélula escolhe destinos em sete regiões, com alturas variadas e sem alternância obrigatória de direção.

## Transição rápida da Casa para o Jardim

- Reduzi a animação de 2.050 ms para 180 ms. O Jardim começa a carregar em segundo plano assim que a Casa está pronta.

## Velocidade da libélula

- Reduzi em 10% a velocidade dos trechos de voo da libélula no Jardim.

## Retorno do Jardim para a Casa

- A passagem pela porta dura 180 ms nos dois sentidos.

## Lembrete de necessidades e passeio do gato

- O balão ganhou cantos arredondados, sombra suave e um círculo para destacar o estado da necessidade.
- O gato vai da ponta direita até os livros e volta em 15 segundos. Descansa na ponta por mais 15 segundos e continua animando os quadros da spritesheet atual.

## Passadas do gato na prateleira

- A caminhada na sala, no quarto e na cozinha usa 20 quadros próprios de 72 × 56 px, com passadas alternadas e movimento da cauda. A pausa usa a animação original.

## Gato, formigas e lembretes da Casa

- O gato começa a caminhada ao trocar de cômodo. Com “Pouco movimento”, a sequência usa menos quadros por segundo. O trajeto na prateleira tem espaço próprio, separado das colisões do piso.
- Sete formigas reutilizam a animação original em uma fila no rodapé de cada cômodo.
- Redesenhei o balão do slime e os botões das necessidades. Retirei “Modo de cuidado” e mantive os controles em “Som e movimento”. A dificuldade já salva continua sendo usada pelo jogo.

## Animação e continuidade dos cômodos

- Refiz as 20 poses de caminhada do gato e sincronizei as passadas à distância percorrida.
- Cada cômodo mantém seu relógio e seus efeitos ao alternar. O gato e as formigas retomam do ponto em que estavam.
- A fila de formigas cruza o rodapé em ciclo contínuo e passa atrás dos móveis e do vaso.
- O lembrete agora usa fundo claro, ícone e a ação em texto.

## Ritmo das formigas e do gato

- Cada formiga alterna o ritmo das passadas e a distância para as vizinhas dentro da fila do rodapé. Cada cômodo tem sua própria variação.
- O ciclo do gato tem 15 segundos de caminhada e 15 segundos de pausa em cada cômodo.

- A ponta do balão de necessidades fica próxima ao topo do slime e aponta para ele mesmo junto às bordas.

- Os cartões de necessidades mostram uma casa decimal, e as barras acompanham as pequenas quedas entre percentuais inteiros.

- Ao receber carinho, o slime ganha uma animação de 20 quadros com corações ascendentes e estrelas. O efeito acompanha a reação feliz na Casa e no Jardim.

- Os cartões voltaram a mostrar percentuais inteiros. Saciedade, sede, higiene e felicidade caem 30% mais rápido em todas as dificuldades.

- O Jardim usa turnos exclusivos para as dez espécies, com um intervalo entre eles. Na Casa, a abelha aparece durante as pausas do gato. A fila de formigas segue seu ciclo contínuo no rodapé.
- Em 2026-11-24, o gato passou a ter pelagem cinza na sala, bege no quarto e marrom na cozinha. As duas spritesheets existentes recebem a mesma paleta por cômodo, preservando os quadros, a transparência e os detalhes rosados. O build gera a R9 mesmo em cópias de trabalho em que o backup da R8 está ausente.
- As paletas da sala e da cozinha ganharam tons médios próprios. O cinza quente da sala tem sombras suaves e luzes claras. O caramelo da cozinha combina sombras castanhas e luzes douradas.
- O camaleão verde-musgo ocupa a prateleira da sala e o hamster dourado ocupa a da cozinha. O gato bege permanece no quarto. Os três compartilham o percurso e o ciclo de 15 segundos de caminhada e 15 de repouso.
- Com as abelhas ativadas, a Casa mantém ao menos uma à janela e sorteia até cinco a cada seis segundos. Cada uma tem uma trajetória própria. Em “Pouco movimento”, as abelhas ficam em poses fixas.
- As abelhas da Casa usam a folha de voo de 20 quadros, com ponto de partida sorteado para cada uma. A pose fixa de “Pouco movimento” tem PNG próprio, extraído da folha original.
- Removi o balão de necessidades acima do slime. Os cartões de fome, sede, higiene e felicidade exibem o percentual inteiro arredondado para baixo, e as barras acompanham o valor fracionário. O desgaste real mantém as taxas de dificuldade existentes.
- As abelhas continuam batendo asas e voam numa faixa curta e lenta com “Pouco movimento”, inclusive quando a preferência vem do Windows. Fome, sede, higiene e felicidade agora mostram uma casa decimal para que o desgaste apareça mesmo quando ainda falta tempo para cair um ponto inteiro.
- As abelhas entram pelas laterais da janela em momentos diferentes e saem voando antes de serem removidas. O jogo sorteia o tamanho do grupo a cada três segundos e mantém o limite de cinco, contando as que ainda estão entrando ou saindo.
- O Jardim distribui os bichos em três rodízios com horários defasados. Isso permite aparições simultâneas e reduz o tempo até cada espécie voltar, mantendo o tempo das suas ações.
- Mesmo com uma única abelha sorteada, outra entra pela janela antes de a primeira sair. No Jardim, a abelha também atravessa o cenário em voo, sem parar no meio do percurso.
- As abelhas da Casa passam a entrar por uma borda do cômodo e sair pela outra, com rotas em alturas diferentes. O revezamento continua mesmo quando o sorteio pede uma só abelha.
- Tripliquei o desgaste passivo de fome, sede, higiene e felicidade nas três dificuldades.
- O voo frequente das abelhas volta a ficar atrás da janela dos três cômodos. A cada 2 a 4 minutos de tempo na Casa, uma abelha pode atravessar o interior, assim que houver espaço no limite de cinco. As abelhas da janela continuam o revezamento durante a visita.
- Aumentei em 12% a escala das abelhas nas janelas, nas visitas ao interior e no Jardim.
- As abelhas agora podem nascer com variação de -20%, -15%, -10%, base, +10%, +15% ou +20%. As faixas de ±20% são super raras, ±15% raras e ±10% pouco raras.
- O relógio dos rodízios do Jardim foi acelerado em 30%, aumentando a frequência das aparições sem alterar o limite de espécies simultâneas.
- O desgaste passivo de fome, sede, higiene e felicidade ficou 50% mais rápido nas três dificuldades. Os cartões voltaram a mostrar percentuais inteiros. Retirei os botões de som suave e pouco movimento da interface.
- Acelerei mais 50% o desgaste passivo atual. Os bichos do Jardim elegíveis recebem ao aparecer as mesmas faixas raras de tamanho das abelhas. João-de-barro, sapo e joaninha ficam fora do sorteio. Grupos aleatórios de uma a cinco formigas atravessam o Jardim em trajetórias próprias.
- Os grupos de formigas do Jardim passaram a ter até dez integrantes. Redistribuí as faixas de caminhada para manter todas dentro da área visível.
- A escala base das formigas caiu de 0,78 para 0,26. A spritesheet existente tem 20 quadros distintos e agora avança conforme a distância percorrida. O sorteio de tamanho ocorre uma vez por formiga. Durante a travessia, cada uma escolhe uma faixa livre dos outros bichos visíveis.
- O grupo de formigas do Jardim voltou ao máximo de cinco. Suas trilhas ficam na faixa inferior, abaixo da poça.

## Descanso, necessidades e iluminação do Jardim (2026-11-24)

- O botão Energia inicia a soneca e passa a mostrar **Acordar**. A energia sobe durante o sono e o slime acorda automaticamente aos 100%. Acordar cedo preserva a energia recuperada. Na Casa, o slime vai para o quarto. Durante a soneca, os demais cuidados e a navegação aguardam o despertar.
- Saciedade, sede, higiene e felicidade caem 50% mais rápido que na versão anterior, durante o jogo e no cálculo de ausência. A energia é gasta nas ações e a saúde segue as regras de tratamento existentes.
- No Jardim, o Sol atravessa da direita para a esquerda em quatro minutos. A Lua percorre o mesmo arco da esquerda para a direita nos quatro minutos seguintes. A luz muda gradualmente no amanhecer e no anoitecer. Árvores, rocha, flores, objetos, fauna e slime projetam sombras de acordo com a posição do astro.

## Ciclo mais rápido no Jardim (2026-11-24)

O Sol atravessa o Jardim em dois minutos e a Lua faz o caminho inverso nos dois minutos seguintes. O ciclo completo dura quatro minutos.

## Abelhas nas flores do Jardim (2026-11-24)

As abelhas passaram a chegar em sequência, com a mesma lógica de sorteio dos grupos de formigas. O grupo sorteia de uma a cinco abelhas, com tamanhos individuais. Cada abelha escolhe uma flor livre, pousa por um tempo sorteado e volta a voar antes de sair do Jardim. As animações usam a spritesheet existente.

## Chegadas das abelhas (2026-11-24)

A cadência de chegada das abelhas do Jardim foi ajustada para cerca de 10% menos. Cada vaga fica livre para uma nova chegada após uma pequena espera. As abelhas continuam pousando e decolando no mesmo ritmo.
