# AGENTS.md — SlimePet Liz (V41-R8)

Leia este arquivo inteiro antes de mexer em qualquer coisa. Depois leia `task_slimepet.md`.

## 0. Como usar com o Codex

- Coloque este arquivo na raiz da pasta do projeto. O Codex lê o `AGENTS.md` ao abrir a pasta.
- Peça: "Leia AGENTS.md e task_slimepet.md e execute só a próxima tarefa `[ ]`, na ordem."
- Uma tarefa por sessão. Ao terminar, marque `[x]` no `task_slimepet.md` e pare.

## 1. O que é o projeto

Jogo de cuidado com um slime em HTML5 + Canvas + JavaScript. Crianças cuidam do slime, que tem necessidades (fome, sede, energia, higiene, felicidade, saúde), evolução (bebê, jovem, adulto) e um jardim com bichinhos.

Público: crianças. Nada assustador, competitivo ou punitivo. Tudo afetuoso e simples.

## 2. ATENÇÃO: a base é um arquivo único

O projeto atual é **um único HTML de ~7,6 MB**: `JOGAR_SLIMEPET_LIZ_V41_R8_OFFLINE.html`. Os sprites (PNG em base64), o CSS e o JavaScript estão todos dentro dele. Não existe pasta `src/` nem `web/` separada.

Consequências:
- Antes de editar, **extraia** o JavaScript para um arquivo `slimepet.js` e os sprites para `assets/`. Faça isso como primeira tarefa (T-00 em `task_slimepet.md`), mantendo o HTML original intacto como backup.
- Só depois de separar, faça as mudanças. Depois, monte de novo um HTML único com um script de build, para que o usuário continue jogando offline.
- Não edite strings base64 à mão.

## 3. Não refazer o que já existe

A V41-R8 **já tem** várias das animações pedidas. Antes de criar qualquer sprite, procure no código e nas constantes:

- Ouriço: `updateHedgehog`, `ourico_cavando`, `ourico_surgindo`. Já existe toca na pedra.
- Esquilo: `esquilo_subindo`, `esquilo_descendo`. Já existe subida e descida.
- João de barro: visitante `perch` no galho direito.
- Joaninha: visitante `flutter` com a flor como ponto fixo.
- Sapo: `sapo`, `sapo_salto` (`assets.frogHop`), visitante `hop` restrito à faixa da lagoa.
- Poça e lagoa: efeito `poca` e área `pond`.
- Coelho: `coelho`, passeia a não ser que "Pouco movimento" esteja ativo.

Regra: **ajuste o que existe** antes de gerar sprite novo. Se o pedido já estiver atendido, diga isso e marque como concluído, sem regerar nada.

## 4. Regras de código

- **Salvamento:** a chave atual é `slime_pet_liz_v36` (`STORE`). Saves antigos (`slime_pet_virtual_v30`, `patch_guardiao_mobile_0_4`) precisam continuar abrindo. Não troque a chave sem migração.
- **Não mexer em:** necessidades (`NEEDS_DIFFICULTIES`, `advanceNeeds`), evolução (`STAGES`, `stageForXp`), saúde (`healthSystem`), cores base e botões de cuidado.
- **Tempos:** os ciclos dos bichos devem vir de constantes de configuração, não de números espalhados no código.
- **Pouco movimento:** qualquer nova animação de bicho precisa respeitar `reducedMotion.matches`.
- **Responsivo:** 320, 390 e 430 px, sem scroll horizontal.
- **Offline:** o jogo precisa funcionar sem internet. Não adicione CDN nem fonte externa.
- **Sem dependências novas** sem pedido explícito.
- Textos em português do Brasil, com acentuação.

## 5. Regras de arte (sprites)

- Estilo: Cute Modern Pixel Art, Hi-Bit, Cozy Fantasy 2D, fundo transparente.
- Quadros: 10 a 20 por ação, quadro a quadro. Pelo menos 7 quadros diferentes por sequência.
- O `FAUNA_FRAMES` atual é 20 quadros de 72×56 px. Novas sequências devem seguir esse tamanho, salvo justificativa.
- Mesmo ponto de apoio e mesma escala em todos os quadros.
- Entregue PNG por ação, spritesheet e um `manifest.json` com nome, quadros, largura, altura e FPS.
- Reaproveite sprites existentes sempre que a tarefa pedir "usar o que já tem".

## 6. Testes

Não há suíte de testes automatizados neste projeto. Para cada tarefa:
1. Abrir o HTML gerado no navegador em 320, 390 e 430 px (DevTools, modo celular).
2. Confirmar que o bicho aparece, faz a ação e volta ao ciclo.
3. Confirmar que um save antigo ainda abre.
4. Confirmar que nenhum bicho aparece ao mesmo tempo que outro em loop idêntico.
5. Registrar no `TESTES_V41_R9.md` o que foi testado e o que não foi (ex.: Android físico).

## 7. Ao terminar uma tarefa

1. Marcar `[x]` em `task_slimepet.md` com a data e o que foi feito.
2. Criar `ALTERACOES_V41_R9.md` com o que mudou e por quê.
3. Gerar o HTML offline novo com o script de build. O nome deve ser `JOGAR_SLIMEPET_LIZ_V41_R9_OFFLINE.html`.
4. Não afirmar validação em Android sem ter testado no aparelho.

## 8. Proibido

- Apagar o HTML original `V41_R8`.
- Editar strings base64 manualmente.
- Trocar a chave de salvamento sem migração.
- Adicionar mecânica de perda, morte, inimigo ou pontuação competitiva.
- Gerar sprite de bicho que já existe sem antes comparar com o atual.
