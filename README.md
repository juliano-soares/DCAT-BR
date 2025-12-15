# DCAT-BR

Perfil de Aplicação DCAT para Catálogos de Dados no Brasil

## Sobre

O DCAT-BR é um perfil de aplicação baseado no vocabulário [Data Catalogue Vocabulary (DCAT)](https://www.w3.org/TR/vocab-dcat-3/) da W3C, desenvolvido especificamente para descrever catálogos de dados públicos no Brasil.

## Estrutura do Repositório

```
DCAT-BR/
├── index.html              # Página principal do site
├── CHANGELOG.md            # Histórico de mudanças
├── releases.json           # Informações sobre releases
├── assets/                 # Recursos estáticos
│   ├── css/
│   │   └── style.css      # Estilos do site
│   └── js/
│       ├── main.js         # Scripts principais
│       └── releases.js    # Carregamento de releases
├── docs/
│   ├── releases/           # Versões do DCAT-BR
│   │   └── 1.0/
│   │       ├── index.html # Página da versão
│   │       ├── dcat-br.html
│   │       ├── dcat-br.pdf
│   │       └── dcat-br.rdf
│   ├── shacl/              # Arquivos SHACL
│   └── vocabularies/       # Vocabulários controlados
└── README.md               # Este arquivo
```

## Como Adicionar uma Nova Versão

1. **Criar diretório da versão**:
   ```bash
   mkdir -p docs/releases/1.1
   ```

2. **Adicionar arquivos da especificação**:
   - `dcat-br.html` - Especificação em HTML
   - `dcat-br.pdf` - Especificação em PDF
   - `dcat-br.rdf` - Especificação em RDF

3. **Criar página da versão**:
   - Copiar `docs/releases/1.0/index.html` para `docs/releases/1.1/index.html`
   - Atualizar informações da versão

4. **Atualizar `releases.json`**:
   ```json
   {
     "version": "1.1",
     "date": "2025-10-12",
     "status": "Recommendation",
     "description": "Descrição da nova versão...",
     "links": {
       "html": "docs/releases/1.1/dcat-br.html",
       "pdf": "docs/releases/1.1/dcat-br.pdf",
       "rdf": "docs/releases/1.1/dcat-br.rdf"
     },
     "shacl": "docs/shacl/1.1/"
   }
   ```

5. **Atualizar `CHANGELOG.md`**:
   - Adicionar entrada para a nova versão seguindo o formato existente

6. **Atualizar `assets/js/releases.js`**:
   - Adicionar a nova versão no array `releasesData.releases`

7. **Atualizar versão mais recente**:
   - Atualizar o campo `latest` em `releases.json`

## Configuração do GitHub Pages

1. Vá para **Settings** > **Pages** no repositório
2. Em **Source**, selecione a branch `main` (ou `master`)
3. Selecione a pasta `/ (root)`
4. Clique em **Save**

O site estará disponível em: `https://seu-usuario.github.io/dcat-br/`

## Desenvolvimento Local

Para visualizar o site localmente:

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/dcat-br.git
   cd dcat-br
   ```

2. Abra `index.html` em um navegador ou use um servidor local:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (com http-server)
   npx http-server
   ```

3. Acesse `http://localhost:8000`

## Contribuindo

Problemas encontrados ou sugestões podem ser submetidos como [issues](https://github.com/seu-usuario/dcat-br/issues) no GitHub.

## Licença

Copyright © 2025 DCAT-BR. Todo o material neste repositório é publicado sob a licença [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/), salvo menção explícita em contrário.
