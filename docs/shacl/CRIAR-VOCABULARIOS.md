# Como Criar os Vocabulários Controlados do DCAT-BR

Este documento explica como criar os vocabulários SKOS necessários para validação SHACL do DCAT-BR.

## Vocabulários Necessários

Os seguintes vocabulários precisam ser criados como vocabulários SKOS:

1. **Periodicidade** (`http://purl.org/dcat-br/vocabularies/periodicity`)
2. **Observância Legal** (`http://purl.org/dcat-br/vocabularies/access-rights`)
3. **Temas** (`http://purl.org/dcat-br/vocabularies/theme`)
4. **Tipo de Recurso** (`http://purl.org/dcat-br/vocabularies/resource-type`)

## Estrutura de um Vocabulário SKOS

Cada vocabulário deve seguir a estrutura SKOS padrão:

```turtle
@prefix skos: <http://www.w3.org/2004/02/skos/core#> .
@prefix dct: <http://purl.org/dc/terms/> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix owl: <http://www.w3.org/2002/07/owl#> .

# URI do esquema de conceitos
<http://purl.org/dcat-br/vocabularies/periodicity>
    a skos:ConceptScheme ;
    dct:title "Periodicidade de Atualização - DCAT-BR"@pt-BR ;
    dct:title "Accrual Periodicity - DCAT-BR"@en ;
    dct:description "Vocabulário controlado para periodicidade de atualização de conjuntos de dados conforme DCAT-BR 1.0.0"@pt-BR ;
    dct:description "Controlled vocabulary for dataset accrual periodicity according to DCAT-BR 1.0.0"@en ;
    dct:modified "2025-12-05"^^xsd:date ;
    dct:publisher <https://www.gov.br/gestao/pt-br> ;
    owl:versionInfo "1.0.0" .

# Conceitos individuais
<http://purl.org/dcat-br/vocabularies/periodicity/MENSAL>
    a skos:Concept ;
    skos:inScheme <http://purl.org/dcat-br/vocabularies/periodicity> ;
    skos:prefLabel "MENSAL"@pt-BR ;
    skos:prefLabel "MONTHLY"@en ;
    skos:definition "Atualização mensal dos dados"@pt-BR ;
    skos:definition "Monthly data update"@en ;
    skos:notation "MENSAL" .
```

## 1. Vocabulário de Periodicidade

**URI Base:** `http://purl.org/dcat-br/vocabularies/periodicity`

**Valores:**
- `DIARIA` - Diária
- `SEMANAL` - Semanal
- `QUINZENAL` - Quinzenal
- `MENSAL` - Mensal
- `TRIMESTRAL` - Trimestral
- `QUADRIMESTRAL` - Quadrimestral
- `SEMESTRAL` - Semestral
- `ANUAL` - Anual
- `SOB_DEMANDA` - Sob Demanda
- `OUTRAS` - Outras

**Exemplo de conceito:**
```turtle
<http://purl.org/dcat-br/vocabularies/periodicity/MENSAL>
    a skos:Concept ;
    skos:inScheme <http://purl.org/dcat-br/vocabularies/periodicity> ;
    skos:prefLabel "MENSAL"@pt-BR ;
    skos:prefLabel "MONTHLY"@en ;
    skos:definition "Atualização mensal dos dados do conjunto de dados"@pt-BR ;
    skos:definition "Monthly update of dataset data"@en ;
    skos:notation "MENSAL" .
```

## 2. Vocabulário de Observância Legal

**URI Base:** `http://purl.org/dcat-br/vocabularies/access-rights`

**Valores principais:**
- `PUBLICO` - Público
- `RESTRITO_*` - Vários tipos de restrição (ver lista completa abaixo)
- `SIGILOSO_*` - Vários tipos de sigilo (ver lista completa abaixo)

**Valores completos de Restrito:**
- `RESTRITO_DIREITO_AUTORAL`
- `RESTRITO_INFORMACAO_PESSOAL`
- `RESTRITO_PROPRIEDADE_INTELECTUAL`
- `RESTRITO_PROTOCOLO_PENDENTE`
- `RESTRITO_DOCUMENTO_PREPARATORIO`
- `RESTRITO_SEGREDO_JUSTICA_CIVIL`
- `RESTRITO_SEGREDO_JUSTICA_PENAL`
- `RESTRITO_SEGREDO_INDUSTRIAL`
- `RESTRITO_SIGILO_COMERCIAL`
- `RESTRITO_SIGILO_CONTABIL`
- `RESTRITO_SIGILO_NOME_IMAGEM`
- `RESTRITO_SIGILO_INQUERITO_POLICIAL`
- `RESTRITO_SIGILO_PROCEDIMENTO_DISCIPLINAR`
- `RESTRITO_SIGILO_AUTOS`
- `RESTRITO_SIGILO_EMPRESARIAL`
- `RESTRITO_SIGILO_FUNCIONAL_SFC`
- `RESTRITO_SIGILO_RISCO_DANO`
- `RESTRITO_SIGILO_PROCEDIMENTO_ADMIN`
- `RESTRITO_SIGILO_PROFISSAO_ADVOGADO`

**Valores completos de Sigiloso:**
- `SIGILOSO_DOCUMENTO_PREPARATORIO`
- `SIGILOSO_INFORMACAO_PESSOAL_SENSIVEL`
- `SIGILOSO_RESERVA_PROCESSO_ETICO`
- `SIGILOSO_SEGREDO_JUSTICA_CIVIL`
- `SIGILOSO_SEGREDO_JUSTICA_PENAL`
- `SIGILOSO_SIGILO_BANCARIO`
- `SIGILOSO_SIGILO_FISCAL`
- `SIGILOSO_SIGILO_ACORDO_LENIENCIA`
- `SIGILOSO_SIGILO_PAD_CGU`
- `SIGILOSO_SIGILO_INQUERITO_POLICIAL`
- `SIGILOSO_SIGILO_AUTOS`
- `SIGILOSO_SIGILO_FUNCIONAL_SFC`
- `SIGILOSO_SIGILO_PROCEDIMENTO_ADMIN`
- `SIGILOSO_SIGILO_PROFISSAO_ADVOGADO`

**Exemplo de conceito:**
```turtle
<http://purl.org/dcat-br/vocabularies/access-rights/PUBLICO>
    a skos:Concept ;
    skos:inScheme <http://purl.org/dcat-br/vocabularies/access-rights> ;
    skos:prefLabel "Público"@pt-BR ;
    skos:prefLabel "Public"@en ;
    skos:definition "Dado público, sem restrições de acesso"@pt-BR ;
    skos:definition "Public data, without access restrictions"@en ;
    skos:notation "PUBLICO" .
```

## 3. Vocabulário de Temas

**URI Base:** `http://purl.org/dcat-br/vocabularies/theme`

**Valores:**
- `ABASTECIMENTO` - Abastecimento
- `ADMINISTRACAO` - Administração
- `AGROPECUARIA_PESCA_EXTRATIVISMO` - Agropecuária, Pesca e Extrativismo
- `COMERCIO_SERVICOS` - Comércio e Serviços
- `COMUNICACOES` - Comunicações
- `CULTURA` - Cultura
- `DEFESA_NACIONAL` - Defesa Nacional
- `ECONOMIA_FINANCAS` - Economia e Finanças
- `EDUCACAO` - Educação
- `ENERGIA` - Energia
- `ESPORTE_LAZER` - Esporte e Lazer
- `HABITACAO` - Habitação
- `INDUSTRIA` - Indústria
- `INFRAESTRUTURA_FOMENTO` - Infraestrutura e Fomento
- `MEIO_AMBIENTE` - Meio Ambiente
- `PESQUISA_DESENVOLVIMENTO` - Pesquisa e Desenvolvimento
- `PLANEJAMENTO_GESTAO` - Planejamento e Gestão
- `PREVIDENCIA_SOCIAL` - Previdência Social
- `PROTECAO_SOCIAL` - Proteção Social
- `RELACOES_INTERNACIONAIS` - Relações Internacionais
- `SANEAMENTO` - Saneamento
- `SAUDE` - Saúde
- `SEGURANCA_ORDEM_PUBLICA` - Segurança e Ordem Pública
- `TRABALHO` - Trabalho
- `TRANSPORTES` - Transportes
- `URBANISMO` - Urbanismo

**Exemplo de conceito:**
```turtle
<http://purl.org/dcat-br/vocabularies/theme/ECONOMIA_FINANCAS>
    a skos:Concept ;
    skos:inScheme <http://purl.org/dcat-br/vocabularies/theme> ;
    skos:prefLabel "Economia e Finanças"@pt-BR ;
    skos:prefLabel "Economy and Finance"@en ;
    skos:definition "Tema relacionado a economia e finanças públicas"@pt-BR ;
    skos:definition "Theme related to economy and public finance"@en ;
    skos:notation "ECONOMIA_FINANCAS" .
```

## 4. Vocabulário de Tipo de Recurso

**URI Base:** `http://purl.org/dcat-br/vocabularies/resource-type`

**Valores:**
- `DADOS` - Dados
- `DICIONARIO_DE_DADOS` - Dicionário de Dados
- `DOCUMENTACAO` - Documentação
- `API` - API
- `OUTRO` - Outro

**Exemplo de conceito:**
```turtle
<http://purl.org/dcat-br/vocabularies/resource-type/DADOS>
    a skos:Concept ;
    skos:inScheme <http://purl.org/dcat-br/vocabularies/resource-type> ;
    skos:prefLabel "DADOS"@pt-BR ;
    skos:prefLabel "DATA"@en ;
    skos:definition "Recurso do tipo dados"@pt-BR ;
    skos:definition "Data type resource"@en ;
    skos:notation "DADOS" .
```

## Ferramentas para Criar Vocabulários SKOS

1. **Protégé** - Editor de ontologias que suporta SKOS
   - Download: https://protege.stanford.edu/

2. **VocBench** - Plataforma web para gerenciamento de vocabulários SKOS
   - Site: https://vocbench.uniroma2.it/

3. **SKOS Play** - Ferramenta online para visualizar vocabulários SKOS
   - Site: https://labs.sparna.fr/skos-play/

4. **Editor de texto** - Para criar manualmente em Turtle/RDF

## Publicação dos Vocabulários

Após criar os vocabulários SKOS:

1. **Hospedar os arquivos** em um servidor web acessível
2. **Configurar content negotiation** para servir RDF/Turtle quando solicitado
3. **Atualizar as URIs** em `mdr_imports.ttl` se necessário
4. **Validar** os vocabulários usando validadores SKOS

## Validação

Valide os vocabulários SKOS criados usando:

- [SKOS Validator](https://www.w3.org/2001/sw/wiki/SKOS/Validator)
- [SKOS Play](https://labs.sparna.fr/skos-play/) - valida e visualiza
- Validadores RDF genéricos

## Referências

- [SKOS Primer](https://www.w3.org/TR/skos-primer/)
- [SKOS Reference](https://www.w3.org/TR/skos-reference/)
- [DCAT-BR 1.0.0](https://www.gov.br/governodigital/pt-br/infraestrutura-nacional-de-dados/catalogo-nacional-de-dados)

