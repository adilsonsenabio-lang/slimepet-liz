# Testes da V41-R9

## T-00

- O HTML extraído do ZIP, o backup e as duas saídas do build têm o mesmo SHA-256. O build recompõe o original byte a byte.
- `node --check src/slimepet.js` passou.
- Exercitei a função de carregamento em Node.js com dados sintéticos das chaves `slime_pet_virtual_v30` e `patch_guardiao_mobile_0_4`. Obtive a versão 36 e preservei fome, sede e posição nas duas leituras. O teste usou armazenamento e dependências simuladas.
- A automação do Edge não produziu uma comparação visual verificável. Ficaram pendentes a comparação em 390 px e a inspeção em 320 e 430 px, assim como a observação dos ciclos da fauna no navegador.
- Android físico ficou fora da validação.

## T-01

- Em Node.js, simulei o ciclo e confirmei as transições de escavação, 180.000 ms invisível, saída pelo mesmo buraco, 60.000 ms na areia e reinício. Verifiquei o último quadro de entrada e saída, a troca de quadro na areia e a pose fixa com “Pouco movimento”.
- Confirmei a sintaxe do JavaScript, a inclusão dos PNGs no HTML e a igualdade da chave e da função de leitura de salvamentos com a R8.
- O Edge não pôde ser inspecionado porque o controle do navegador não conseguiu identificar a URL da janela. Ficaram pendentes a inspeção a 320, 390 e 430 px, a observação visual dos ciclos dos bichos em conjunto e a abertura de um save antigo no navegador. Android físico ficou fora da validação.

## T-02

- Em Node.js, simulei a subida, a permanência na copa, a descida e o repouso. Confirmei os 180.000 ms entre subidas, os 60.000 ms de repouso, a redução contínua da escala, os quadros finais das duas sequências e a continuidade de posição, escala e direção no pouso.
- Verifiquei a pose fixa e a fase oculta com “Pouco movimento”, a sintaxe do JavaScript e a inclusão dos PNGs no build. Comparei a chave e a função de leitura de salvamentos com as da R8.
- O serviço de controle do navegador estava indisponível. Ficam pendentes a inspeção a 320, 390 e 430 px, a observação simultânea dos animais e a abertura de um save antigo no navegador. Android físico ficou fora da validação.

## T-03

- Inspecionei os três PNGs e conferi dimensões e transparência. As sequências de entrada e saída têm 20 quadros cada, com 14 e 12 quadros distintos, respectivamente.
- Em Node.js, simulei entrada, 60 segundos oculto, saída, retorno ao galho e repetição, inclusive com “Pouco movimento”. Confirmei a sintaxe do JavaScript, a inclusão dos três PNGs no HTML e a igualdade do carregador de saves com o da R8.
- O serviço de controle do navegador estava indisponível. Ficaram pendentes a inspeção do posicionamento e dos ciclos da fauna em 320, 390 e 430 px e a abertura de um save antigo no navegador. Android físico ficou fora da validação.

## T-04 a T-10

- T-04. Simulei os 20 s no ar, o pouso na coordenada da flor e a pose fixa com “Pouco movimento”.
- T-05 e T-06. Simulei língua, mergulho, 60 s oculto, emersão, ida, permanência na lagoa e retorno. Conferi dimensões, transparência e 20 quadros distintos em cada uma das cinco folhas. Inspecionei visualmente as folhas da língua e do mergulho.
- T-07. Inspecionei o fundo sem a faixa pontilhada e a folha do tufo maior. Cada folha de grama tem 20 quadros, com 11 distintos.
- T-08. Exercitei o bloqueio de passagem nos dois sentidos, a liberação em níveis diferentes e o limite da borda em Node.js.
- T-09. Em DOM simulado, retirei e recoloquei o sapo, conferi o estado pressionado do botão e reli a preferência após serialização. Comparei a chave e o carregador de saves com a R8.
- T-10. Executei 40 simulações de 10 min com sementes distintas. Verifiquei pelo menos 5 s entre inícios reservados de espécies diferentes e 180 s exatos entre subidas do esquilo. Na primeira execução foram contabilizados 12 voos da joaninha, 4 subidas do esquilo, 3 entradas do ouriço, 6 entradas do joão-de-barro e 4 ciclos do sapo.
- O JavaScript passou na verificação de sintaxe. Conferi o manifesto e os PNGs embutidos e verifiquei que a saída R8 tem o mesmo SHA-256 do backup.
- O serviço de controle do navegador continuou indisponível. Ficaram pendentes o teste visual em 320, 390 e 430 px, a captura em 390 px, a observação de 10 min em tempo real, a abertura de saves antigos no navegador e a conferência em Android físico.

## Refinamentos do jardim

- Comparei a rotina do Sol com a R8 e confirmei que seu cálculo é idêntico. Simulei uma volta da borboleta e 22 segundos de voo da libélula com pontos sorteados.
- Simulei o minuto submerso, a saída abaixo da superfície, o arco, o pouso e a transição de “Pouco movimento” do sapo. Os 20 PNGs individuais correspondem à folha, com 19 quadros distintos.
- Verifiquei a sintaxe e a inclusão da folha do sapo e do sprite do Sol no HTML offline. A inspeção visual do jogo no navegador e em Android segue pendente por indisponibilidade do serviço de controle do navegador.

## Correções de movimento e reação no jardim

- Em Node.js, exercitei as rotinas de movimento e colisão juntas por 25 s em cada modo. Verifiquei o deslocamento do coelho, da borboleta e da libélula, a posição inicial do sapo na poça e o estado submerso.
- Em um Canvas simulado, confirmei o uso das quatro folhas de reação no caminho de desenho. Conferi as dimensões e a inclusão no HTML offline.
- O serviço de controle do navegador seguiu indisponível, então a validação visual no Edge ficou pendente.

## Ciclos naturais do jardim

- Em simulação com Canvas, confirmei a folha de caminhada do coelho, a troca de quadros nos voos e a folha de salto do sapo no modo normal. Verifiquei a pose de saída gradual do sapo e o deslocamento dos outros bichos em “Pouco movimento”.
- Confirmei os PNGs embutidos no HTML atualizado. A conferência visual no navegador ficou pendente.

## Revisão das animações do jardim

- Simulei a caminhada do coelho, as batidas de asa, os 20 quadros de entrada e a ocultação do joão-de-barro nos dois modos de movimento. Confirmei o ponto inicial do sapo no centro da água.
- Verifiquei a ausência do ouriço no HTML R9, as dimensões das três folhas, a inclusão dos PNGs no build e a sintaxe dos scripts. A inspeção no navegador ficou pendente porque o controle estava indisponível.

## Correção a partir do print

- Conferi o ciclo dos seis quadros originais do coelho e a inclusão da folha no HTML. Comparei a posição inicial do sapo com o centro da água marcada no print. A conferência da cena em execução no navegador ficou pendente.

## Gramado e pousos da borboleta

- Simulei a volta completa e confirmei os três pousos, as pausas de 4,5 segundos, a continuidade nas decolagens e os 24 pontos de grama. A inspeção visual no navegador ficou pendente.

## Percursos dos insetos

- Simulei ida, pausa e retorno da joaninha. Comparei pontos amostrados da rota da borboleta e o limite inferior do voo da libélula com toda a trajetória da joaninha. Confirmei a retirada do esquilo e do galho no HTML compilado. A inspeção no navegador ficou pendente.

## Mergulho do sapo com a folha fornecida

- Inspecionei a folha adaptada e simulei o salto, a descida contínua após o contato, a cobertura completa e os 60 segundos submersos em ambos os modos de movimento. A inspeção do jogo em execução no navegador ficou pendente.

## Ciclo fixo e respingos do sapo

- Simulei o calendário e o desenho dos respingos em quatro voltas consecutivas para três offsets iniciais. Verifiquei a folha de mergulho e a folha de respingos embutidas no HTML. A conferência visual no navegador ficou pendente.

## Arquivo exato do mergulho

- Substituí a folha derivada anterior por uma extração de `Sprite de Sapo Saltando no Lago.png`, localizado em Downloads. O manifesto registra o SHA-256 da origem.
- Verifiquei que o desenho do mergulho seleciona os 20 quadros da folha nova, inclusive em “Pouco movimento”, com um Canvas simulado. A conferência visual no navegador ficou pendente.

## Velocidade da libélula e entrada na casinha

- Simulei a redução contínua, a escala na altura da portinha e a recuperação do tamanho original nos dois modos. Conferi as durações dos trechos e a cadência das asas na configuração. Conferência visual no navegador pendente.

## Grama padronizada

- Inspecionei o fundo e a folha nova. Em Canvas simulado, confirmei os 51 pontos na mesma folha, 27 na faixa inferior, fases diferentes de movimento e o quadro fixo em “Pouco movimento”. A conferência visual do jogo no navegador ficou pendente.

## Ajuste fino das animações

- Confirmei em simulação a redução antes da portinha, os 1.440 ms da descida após o contato, os 120 s do ciclo do sapo e a nova cadência das asas. A conferência visual no navegador ficou pendente.

## Retângulos pretos no gramado

- Compus o fundo com a camada das árvores e comparei os 6.105 pixels nas sete marcas do Print 5 com o fundo verde. Todos coincidiram. Confirmei os PNGs corretos no HTML offline. A inspeção no navegador ficou pendente.

## Ritmo e turnos da fauna

- Simulei dez minutos de turnos, incluindo visitantes recolocados, e confirmei o limite de seis. Verifiquei ida e volta completa de cada caminhante, os turnos em dupla e o ciclo de 120 s do sapo. Inspeção visual no navegador pendente.

## Respingos e decoração do Jardim

- Inspecionei os PNGs. Em Canvas simulado, confirmei que os respingos começam no instante do contato, que os quadros avançam e que as quatro decorações são desenhadas. Verifiquei a faixa frontal pixel a pixel e os PNGs embutidos no HTML. Inspeção visual no navegador pendente.

## Saída do sapo da poça

- Simulei a queda, o final dos respingos, a seleção dos quadros da saída e o pouso. Confirmei o ciclo de 120 s e o PNG embutido no HTML. Conferência visual no navegador pendente.

## Continuidade entre cenários

- Simulei Casa → Jardim → Casa → Jardim com transição e uma troca imediata pelo Limbo. Conferi a posição de cada cenário, o quadro e o destino da caminhada do slime, o efeito em andamento, os visitantes, o tempo até a próxima visita e a mesma instância do calendário do Jardim. Revalidei as preferências de bichinhos ao retornar. A inspeção visual no navegador ficou pendente.

## Escala e distribuição do Jardim

- Verifiquei as caixas das quatro faixas terrestres e a separação das faixas da abelha, da libélula e da borboleta. Conferi a distância entre o ponto da poça e o trajeto do patinho. Validei a transição de cor entre linhas do fundo e a inclusão do PNG no build. A conferência visual no navegador ficou pendente.

## Entradas laterais e saída do sapo

- Simulei os três percursos, confirmei que os sprites aparecem parcialmente durante a travessia da borda e medi a velocidade máxima da tartaruga abaixo de 28 px/s. Verifiquei a folha de gotas no instante do impacto e a posição da saída do sapo nos dois modos. A conferência visual no navegador ficou pendente.

## Flores pequenas e cogumelo vermelho

- Inspecionei os PNGs e confirmei em Canvas simulado os sete pontos, a seleção das três paletas, as fases de balanço e o primeiro quadro em “Pouco movimento”. Os dois PNGs estão no HTML offline. Conferência visual no navegador pendente.

## Profundidade do Jardim, rastro e escala da formiga

- Simulei o desenho das máscaras e a abertura da casinha. Verifiquei o início, a volta e a velocidade máxima da lesma, o desaparecimento das marcas e a escala da formiga nos cômodos. O HTML inclui a máscara do Jardim. Conferência visual no navegador pendente.

## Respingos, reaparecimento na água e voo da joaninha

- Inspecionei a folha de água e simulei o momento do impacto, a saída do sapo no centro da poça nos dois modos, a linha do pato e as fases de voo e pouso da joaninha. Confirmei os PNGs embutidos. Conferência visual no navegador pendente.

## Ajuste de profundidade da fauna

- Simulei as chamadas de desenho e confirmei que só os quatro animais solicitados passam pelo desenho sem a máscara de objetos. Conferência visual no navegador pendente.

## Luz do Sol, pólen e profundidade do coelho

- Confirmei por simulação a mudança contínua de direção das sombras, o movimento e a pausa do pólen e a camada do coelho. Inspeção visual no navegador pendente.

## Camadas da borboleta e do pato

- Simulei a ordem de composição das máscaras das flores e das árvores, o desenho em primeiro plano do pato e o uso da nova altura na rotina de aparição. Conferência visual no navegador pendente.

## Camadas do impacto na poça

- Inspecionei as três folhas e conferi a ordem de composição, o avanço dos quadros, o quadro fixo em “Pouco movimento” e os três PNGs embutidos. A posição do coelho na composição foi preservada. A conferência visual no navegador ficou pendente.

## Velocidade do mergulho e camada da borboleta

- Confirmei os tempos do salto, do contato e do ciclo, a inclusão da borboleta na camada da frente e a sintaxe do JavaScript. Conferência visual no navegador pendente.

## Entrada da abelha e destinos da libélula

- Simulei a admissão, a rejeição e a saída gradual da abelha. Verifiquei as sete regiões, a diferença de altura e direções consecutivas na simulação da libélula. Inspeção visual no navegador pendente.

## Transição rápida da Casa para o Jardim

- Simulei a navegação da Casa para o Jardim, o retorno e a troca imediata com “Pouco movimento”. Verifiquei o início do carregamento antecipado. O tempo de abertura no navegador ficou pendente de medição.

## Velocidade da libélula

- A simulação confirmou a redução de 10%, a preservação das pausas e dos destinos e a retomada do ciclo com e sem “Pouco movimento”. A sintaxe e o HTML offline gerado foram conferidos. A validação visual e a abertura de um salvamento antigo ficaram pendentes.

## Retorno do Jardim para a Casa

- Simulei a troca nos dois sentidos e confirmei 180 ms. Também verifiquei a passagem pelo Limbo, a troca imediata com “Pouco movimento” e a geração dos HTMLs. Conferência visual pendente.

## Lembrete de necessidades e passeio do gato

- Simulei o trajeto, a pausa, a repetição e o modo “Pouco movimento” nos três cômodos. Conferi o desenho do ícone e do estado no balão e a geração dos HTMLs. Conferência visual no navegador pendente.

## Passadas do gato na prateleira

- Inspecionei a spritesheet e validei os 20 quadros distintos com fundo transparente. Simulei o desenho da caminhada e da pausa em cada cômodo, incluindo “Pouco movimento”, e confirmei a inclusão da spritesheet nos dois HTMLs. Conferência visual no navegador pendente.

## Gato, formigas e lembretes da Casa

- Simulei a caminhada e a pausa do gato nos três cômodos com as duas preferências de movimento. Conferi o avanço e a altura da fila de formigas, a remoção do controle de dificuldade e o desenho do lembrete junto à margem da tela. Os HTMLs offline e do Pages têm o mesmo conteúdo. Conferência visual no navegador e teste de salvamento antigo pendentes.

## Animação e continuidade dos cômodos

- Inspecionei a nova spritesheet e simulei a retomada do gato e dos efeitos ao alternar cômodos. Verifiquei a repetição das posições das formigas e a aplicação do recorte dos móveis nos três cenários. Os builds offline e Pages são idênticos. A conferência visual no navegador ficou pendente.

## Ritmo das formigas e do gato

- Simulei 90 segundos de fila em cada cômodo. Conferi os retornos pelas bordas, a altura no rodapé, o espaçamento entre formigas e a aplicação do recorte dos móveis. Verifiquei os limites de 15 e 30 segundos do ciclo do gato. A conferência visual no navegador ficou pendente.

- Conferi em simulação o posicionamento do balão em três escalas, com a respiração e perto das duas margens. Os HTMLs offline e Pages foram gerados.

- Simulei o desgaste das necessidades em seis segundos, um minuto e após suspensão. Conferi os percentuais decimais e a atualização das barras. Conferência visual no navegador pendente.

- Inspecionei a spritesheet do carinho e simulei a sequência de 20 quadros na Casa e no Jardim, incluindo o quadro fixo em “Pouco movimento”. Confirmei a inclusão do PNG nos dois HTMLs. Conferência no navegador pendente.

- Simulei um minuto de desgaste nas três dificuldades. Confirmei o aumento de 30% nas quatro taxas passivas e os percentuais inteiros nos cartões e nas barras. Conferência no navegador pendente.

- Simulei dois rodízios completos do Jardim, quatro ciclos da Casa e um turno com espécie desativada. Conferi a exclusividade dos turnos e gerei os dois HTMLs. Conferência no navegador pendente.

- Comparei o desenho e o relógio da fila com a versão anterior ao rodízio. A rotina contínua das formigas foi restaurada integralmente e os turnos do gato, da abelha e do Jardim foram conferidos.

- Em 2026-11-24, conferi em simulação as três paletas, a preservação dos detalhes rosados e da transparência, o reaproveitamento das folhas coloridas e o ciclo de caminhada e repouso nos três cômodos. Validei a sintaxe do JavaScript e a inclusão dos PNGs no HTML offline. O Edge headless falhou ao inicializar o processo gráfico. Ficaram pendentes a conferência visual em 320, 390 e 430 px, o carregamento de saves antigos no navegador, a observação conjunta da fauna e o teste em Android físico.

- Conferi a revisão das paletas em prévias lado a lado dos quadros de caminhada e repouso dos três cômodos. Validei a sintaxe e gerei o HTML offline e o de publicação. A conferência visual dentro do jogo continua pendente.
