# Exercício 2: Comparando Div e HTML Semântico
## Introdução
No desenvolvimento web, a estrutura de uma página é fundamental para a acessibilidade, SEO (Search Engine Optimization) e manutenção do código. Tradicionalmente, a tag <div> tem sido amplamente utilizada para agrupar e estilizar seções de conteúdo. No entanto, com a evolução do HTML5, surgiram as tags semânticas, que oferecem uma abordagem mais significativa e estruturada para a contrução de páginas web.
## div (Elemento Genérico)
A tag "div" é um elemento dee divisão geneérico, sem nenhum significado semântico inerente. Ela é usada principalmente para agrupar conteúdo para fins de estilização (com CSS) ou manipulação (com JavaScript). Embora seja extremamente versátil, o uso excesivo de <div> sem um propósito claro pode levar a um código menos legível e mais difícil de manter, além de prejudicar a compreensão da estrutura da página por motores de busca e tecnologias assistivas.

**Características**
- **Não Semântico**: Não descreve o tipo de conteúdo que contém.
- **Flexível**: Pode ser usado para qualquer tipo de agrupamento.
- **Dependente de CSS/JS**: Seu significado é geralmente atribuído através de classes e IDs para estilização e comportamento.

## HTML Semântico (Elementos com Significado)
HTML semântico refere-se ao uso de tags HTML que descrevem claramente o significado do conteúdo que elas envolvem. Em vez de usar "div" para tudo, o HTML5 introduziu elementos como "header", "nav", "main", "article", "section", "aside", "footer", entre outros. Esses elementos fornecem um significado estrutural e contextual ao conteúdo, tornando o código mais compreensível tanto para desenvolvedores quanto para navegadores e ferramentas de acessibilidade.

**Vantagem do HTML Semântico**:
- **Acessibilidade**: Melhora a experiência para usuários de tecnologias assistivas (leitores de tela), pois a estrutura da página é mais clara.
- **SEO**: Ajuda os motores de busca a entederem melhor o conteúdo e a relevância das diferentes seções da página, o que pode melhorar o ranqueamento.
- **Manutenibilidade**: Torna o código mais legível e fácil de manter, pois o propósito de cada seção é evidente.
- **Desenvolvimento**: Facilita a colaboração entre desenvolvedores e a aplicação de estilos, pois a estrutura é mais intuitiva.

## Conclusão
Embora a tag "div" ainda tenha seu lugar para agrupamentos puramente estilísticos ou de script sem significado estrutural, a prática recomendada é priorizar o uso de elementos HTML semânticos sempre que possível . Isso não apenas melhora a qualidade do código e a experiência do desenvolvedor, mas também beneficia diretamente os usuários e a otimização para motores de busca, criando uma web mais acessível e compreensível.
