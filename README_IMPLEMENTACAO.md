# Will Tutor

Planner de estudos e tutor técnico para o Will evoluir como Lead Engineer.

A arquitetura foi montada para não expor a chave do Gemini e também evitar deixar a chave anon do Supabase no GitHub Pages.

## Como funciona

```text
GitHub Pages, app estático
        ↓ chamada com código do tutor
Supabase Edge Function, backend seguro
        ↓
Supabase Database
        ↓
Gemini API
```

O app no GitHub Pages contém apenas HTML, CSS e JavaScript. A chave do Gemini fica salva como secret na Supabase Edge Function. O banco também é acessado pela função usando service role key, que fica protegida no servidor.

## Estrutura dos arquivos

```text
will-tutor/
  index.html
  styles.css
  app.js
  manifest.json
  service-worker.js
  icons/
  supabase/
    schema.sql
    functions/
      will-tutor-api/
        index.ts
```

## Parte 1, criar o banco no Supabase

1. Entre no Supabase.
2. Abra o projeto do Will Tutor.
3. Vá em SQL Editor.
4. Clique em New query.
5. Copie todo o conteúdo do arquivo `supabase/schema.sql`.
6. Cole no SQL Editor.
7. Clique em Run.

Esse script cria as tabelas:

```text
will_tutor_progress
will_tutor_insights
will_tutor_situations
will_tutor_ai_messages
```

As tabelas ficam com RLS ligado e sem policy pública, porque o app não acessa o banco direto pelo navegador. Quem acessa o banco é a Edge Function.

## Parte 2, preparar os secrets

Você vai precisar de três informações.

### 1. GEMINI_API_KEY

Essa é a chave do Gemini que você já tem.

### 2. WILL_TUTOR_TOKEN

Esse é um código que você cria. Ele será digitado no app do Will na primeira configuração.

Exemplo:

```text
WillTutor-2026-codigo-grande-e-dificil
```

Não coloque esse código no GitHub. Ele só entra como secret da Edge Function e depois no navegador do Will.

### 3. SUPABASE_SERVICE_ROLE_KEY

Essa chave fica no Supabase, em:

```text
Project Settings > API Keys > service_role ou secret key
```

Nunca coloque essa chave no GitHub Pages, nunca cole no `app.js` e nunca envie para alguém.

## Parte 3, instalar a Supabase CLI

Você precisa ter Node.js instalado no computador. Depois abra o terminal na pasta do projeto e rode:

```bash
npm install -g supabase
```

Depois faça login:

```bash
supabase login
```

Se abrir uma página no navegador, autorize o acesso.

## Parte 4, conectar a pasta ao seu projeto Supabase

No Supabase, o project ref aparece na URL do projeto.

Exemplo:

```text
https://supabase.com/dashboard/project/mecvphldyzkdoztrxvie
```

Nesse caso, o project ref é:

```text
mecvphldyzkdoztrxvie
```

No terminal, dentro da pasta `will-tutor`, rode:

```bash
supabase link --project-ref SEU_PROJECT_REF
```

Exemplo:

```bash
supabase link --project-ref mecvphldyzkdoztrxvie
```

## Parte 5, salvar os secrets da função

Ainda no terminal, rode:

```bash
supabase secrets set GEMINI_API_KEY="SUA_CHAVE_DO_GEMINI" WILL_TUTOR_TOKEN="SEU_CODIGO_DO_TUTOR" SUPABASE_SERVICE_ROLE_KEY="SUA_SERVICE_ROLE_KEY"
```

Exemplo fictício:

```bash
supabase secrets set GEMINI_API_KEY="AIza..." WILL_TUTOR_TOKEN="WillTutor-2026-codigo-grande-e-dificil" SUPABASE_SERVICE_ROLE_KEY="eyJ..."
```

## Parte 6, publicar a Edge Function

Rode:

```bash
supabase functions deploy will-tutor-api --no-verify-jwt
```

O `--no-verify-jwt` é usado porque o app não tem login. A proteção fica no código `WILL_TUTOR_TOKEN`, que a função exige no header `x-will-tutor-token`.

A URL final da função será:

```text
https://SEU_PROJECT_REF.supabase.co/functions/v1/will-tutor-api
```

Exemplo:

```text
https://mecvphldyzkdoztrxvie.supabase.co/functions/v1/will-tutor-api
```

## Parte 7, publicar o app no GitHub Pages

1. Crie um repositório no GitHub.
2. Envie todos os arquivos da pasta `will-tutor`.
3. Vá em Settings.
4. Vá em Pages.
5. Em Build and deployment, selecione Deploy from a branch.
6. Escolha a branch `main`.
7. Escolha `/root`.
8. Salve.
9. Aguarde o GitHub gerar a URL.

A URL ficará parecida com:

```text
https://seuusuario.github.io/will-tutor/
```

## Parte 8, configurar o app no navegador do Will

1. Abra a URL do GitHub Pages.
2. Clique em Configurar.
3. Cole a URL da Edge Function.
4. Cole o código do tutor que você criou em `WILL_TUTOR_TOKEN`.
5. Clique em Salvar.
6. Clique em Sincronizar.

Depois disso, o app já deve salvar progresso, insights, situações reais e respostas do tutor na nuvem.

## Parte 9, instalar no celular

### Android

1. Abra o app no Chrome.
2. Toque nos três pontinhos.
3. Toque em Adicionar à tela inicial ou Instalar app.
4. Confirme.

### iPhone

1. Abra o app no Safari.
2. Toque em Compartilhar.
3. Toque em Adicionar à Tela de Início.
4. Confirme.

## Teste rápido

Depois de configurar:

1. Marque uma atividade como concluída.
2. Salve um insight.
3. Vá em Situações reais do trabalho.
4. Preencha um caso.
5. Clique em Salvar e perguntar ao tutor.

Se a resposta aparecer, está tudo certo.

## O que nunca pode ir para o GitHub

Nunca coloque em arquivos públicos:

```text
GEMINI_API_KEY
SUPABASE_SERVICE_ROLE_KEY
WILL_TUTOR_TOKEN
```

O app não precisa dessas chaves no código. Elas ficam no Supabase como secrets ou são digitadas no navegador do Will.

## Solução de problemas

### O app diz que a nuvem não sincronizou

Confira se a URL da Edge Function está correta.

Ela precisa terminar assim:

```text
/functions/v1/will-tutor-api
```

### Erro de código inválido

Confira se o código digitado no app é exatamente igual ao secret `WILL_TUTOR_TOKEN`.

### Erro de Gemini

Confira se o secret `GEMINI_API_KEY` foi salvo corretamente.

Você pode atualizar o secret rodando de novo:

```bash
supabase secrets set GEMINI_API_KEY="SUA_CHAVE_CORRETA"
```

Depois publique a função novamente:

```bash
supabase functions deploy will-tutor-api --no-verify-jwt
```

### Erro de banco

Confira se você rodou o arquivo `supabase/schema.sql` no SQL Editor.

### A função não publica

Confirme se você está na pasta certa, onde existe a pasta `supabase/functions/will-tutor-api`.

Também confirme se rodou:

```bash
supabase link --project-ref SEU_PROJECT_REF
```

## Observação importante de segurança

Como o app não tem login, a proteção principal da Edge Function é o código do tutor. Isso evita que a chave do Gemini fique pública e reduz muito o risco de uso indevido. Para um app pessoal, é um bom equilíbrio entre segurança e simplicidade.

Se no futuro quiser mais segurança, a evolução recomendada é usar Supabase Auth com magic link ou login anônimo persistente.
