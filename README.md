# desafio-tecnico-front-end-xp
Repositório para o desenvolvimento do projeto de desafio técnico de front-end


Olá, seja bem-vindo(a) ao meu repositório do projeto de desafio técnico, aonde o obejtivo foi
desenvolver uma aplicação que simula uma aplicação/site de comprar e vendas de ativos do mercado
financeiro.

Foram utilizados conhecimento técnicos em liguagem de programação, bibliotecas, frameworks e ferramentas
para o desenvolvimento desta aplicação. Entre eles:


### HTML

### CSS

### JavaSCritp

### React

### Context Api

### Eslint

### React Testing Library




Foi Criado uma página de Login, aonde o usuário só pode prosseguir se preencher os campos de 
email e senha de forma correta! 

"email": algumacoisa@algumacoi.com

"senha": de ter no minimo 8 caracteres



Após efetuar o Login, o usuário é redirecionado para uma pagina aonde é possível ver e gerenciar os
ativos do usuário (já existe uma certa quantia de uma determianda ação, para assim poder vender ou comprar)
e também uma lista com certa de 84 ativos do mercado, com sua quantidade teórica e o valor médio do último 
registro da cotação.

Para pesquizar as Cotações utilizei uma Api já existente, aonde utilizei dois endpoints dela para ter
acesso a informações das cotações renderizadas na aplicação. Abaixo os links utilizados:

### https://api-cotacao-b3.labdo.it/
(link da Api)

### api/carteira
(link que retorna um json com as ações)

### api/cotacao/cd_acao/{cd_acao}/{n}
(link com a ação especificada e o número de cotações também especificado)

Infelizmente a Api não consegue me retornar todos valores dentro do tempo em que o
código acontece, por isso acaba acontecendo um loop nas requisições até que todos os
valores seja preenchidos na tabela (por acontecer um "refused" nas requisições, o meu
useEffect continua fazendo requisição até todos os valores estarem na tela)

Tabém pode ocorrer de que a api "principal" (api/carteira) também de um "refused",
para isso basta aguardar cerco de 30seg até 1min e dar refresh na página e todas
as informações estarão na tela.

Por ter feito o projeto paralelo ao curso da Trybe, que exige 6horas minimas por dia e
projetos do curso em andamento, consegui inicar o projeto apenas no dia 19/07/2002,
o que não possibilou eu fazer uma cobertura maior de testes e não poder fazer os
commits.
