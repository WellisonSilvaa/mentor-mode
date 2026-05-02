# 📖 Manual do Desenvolvedor — Mentor Mode

O **Mentor Mode** não é apenas um conjunto de comandos; é uma mudança de mentalidade no desenvolvimento assistido por IA. Este manual explica como tirar o máximo proveito do sistema.

---

## 🧭 A Filosofia do "Andaime" (Scaffolding)

O objetivo do Mentor Mode é que você precise cada vez **menos** da IA para escrever código básico, e cada vez **mais** para discussões de alto nível (arquitetura e estratégia).

### Os 4 Níveis de Evolução

| Nível | Sua Atitude | Atitude da IA |
|---|---|---|
| **4. Aprendiz** | Observador curioso | Professor explicando fundamentos e analogias |
| **3. Praticante** | Executor guiado | Mentor fornecendo o esqueleto (esqueleto) |
| **2. Autônomo** | Piloto | Supervisor fazendo Code Review (revisar) |
| **1. Mestre** | Estrategista | Consultor sob demanda |

---

## 🛠️ Como usar no dia a dia

### 1. Começando uma nova tarefa
Sempre peça um **Briefing**.
> *Exemplo: "/gsd-progress. Me dê o briefing da próxima fase no Mentor Mode."*

### 2. Quando você não conhece a tecnologia
Use o comando de aprendizado.
> *Exemplo: "/mentor-aprender Como funcionam as Row Level Security (RLS) do Supabase?"*

### 3. Evitando o "Copiar e Colar"
Em vez de pedir o código pronto, peça o esqueleto.
> *Exemplo: "/mentor-esqueleto para um Hook de autenticação."*
> **A IA vai te dar os espaços vazios e você deve escrever a lógica.**

### 4. O momento da verdade
Após escrever seu código, peça a revisão.
> *Exemplo: "/mentor-revisar. Analise se meu tratamento de erros está robusto."*

---

## 🚨 Regras de Ouro para o Usuário

1. **Não trapaceie:** Se você pedir o código pronto por preguiça, estará apenas atrasando seu próprio crescimento.
2. **Questione o "Porquê":** Se a IA sugerir uma solução, use `/mentor-porquê` para entender a decisão técnica.
3. **Erre sem medo:** O Mentor Mode foi desenhado para você aprender com o erro. Se o código não funcionar de primeira, tente debuggar antes de pedir a solução.

---

## 🏗️ Estrutura Técnica (Para Curiosos)

Este pacote instala arquivos em `~/.gemini/antigravity/`:
- `skills/`: Comandos de terminal que a IA reconhece.
- `knowledge/`: Instruções de comportamento que moldam a personalidade da IA.

---

**Desenvolvido por Wellison**
*Transformando código em conhecimento.*
