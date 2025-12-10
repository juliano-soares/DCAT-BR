# Guia para Adicionar uma Nova Versão do DCAT-BR

Este guia explica passo a passo como adicionar uma nova versão do DCAT-BR ao site GitHub Pages.

## Pré-requisitos

- Acesso ao repositório GitHub
- Arquivos da nova versão prontos (HTML, PDF, RDF)
- Arquivos SHACL da nova versão (se houver)

## Passos

### 1. Preparar os Arquivos da Especificação

Certifique-se de ter os seguintes arquivos prontos:
- `dcat-br.html` - Especificação em HTML
- `dcat-br.pdf` - Especificação em PDF  
- `dcat-br.rdf` - Especificação em RDF

### 2. Criar Diretório da Versão

```bash
mkdir -p docs/releases/1.1
```

Substitua `1.1` pela versão que você está adicionando.

### 3. Copiar Arquivos para o Diretório

```bash
cp dcat-br.html docs/releases/1.1/
cp dcat-br.pdf docs/releases/1.1/
cp dcat-br.rdf docs/releases/1.1/
```

### 4. Criar Página da Versão

Copie o template da versão anterior:

```bash
cp docs/releases/1.0/index.html docs/releases/1.1/index.html
```

Edite `docs/releases/1.0/index.html` e atualize:
- Versão no título
- Data de publicação
- Status (Recommendation, Candidate, Draft, etc.)
- Links para os arquivos

### 5. Adicionar Arquivos SHACL (se houver)

Se a nova versão tiver arquivos SHACL:

```bash
mkdir -p docs/shacl/1.1
cp shacl/*.ttl docs/shacl/1.1/
```

### 6. Atualizar `releases.json`

Adicione a nova versão no início do array `releases`:

```json
{
  "releases": [
    {
      "version": "1.1",
      "date": "2024-06-01",
      "status": "Recommendation",
      "description": "Segunda versão do DCAT-BR com melhorias e correções.",
      "links": {
        "html": "docs/releases/1.1/dcat-br.html",
        "pdf": "docs/releases/1.1/dcat-br.pdf",
        "rdf": "docs/releases/1.1/dcat-br.rdf"
      },
      "shacl": "docs/shacl/1.1/",
      "changelog": "CHANGELOG.md#11---2024-06-01"
    },
    {
      "version": "1.0",
      ...
    }
  ],
  "latest": "1.1",
  ...
}
```

**Importante**: 
- Adicione a nova versão no **início** do array (versões mais recentes primeiro)
- Atualize o campo `latest` com a versão mais recente

### 7. Atualizar `CHANGELOG.md`

Adicione uma nova seção no topo do arquivo:

```markdown
## [1.1] - 2024-06-01

### Adicionado
- Nova funcionalidade X
- Suporte para Y

### Modificado
- Melhoria em Z

### Corrigido
- Correção do bug A

---

## [1.0] - 2024-01-01
...
```

### 8. Atualizar `assets/js/releases.js` (Opcional)

Se você quiser manter dados estáticos como fallback, atualize também o objeto `releasesData`:

```javascript
const releasesData = {
    "releases": [
        {
            "version": "1.1",
            "date": "2024-06-01",
            ...
        },
        ...
    ]
};
```

**Nota**: O site tenta carregar `releases.json` primeiro, então esta atualização é opcional.

### 9. Testar Localmente

Antes de fazer commit, teste localmente:

```bash
# Usando Python
python -m http.server 8000

# Ou usando Node.js
npx http-server
```

Acesse `http://localhost:8000` e verifique:
- A nova versão aparece na lista de releases
- Os links funcionam corretamente
- A página da versão está correta

### 10. Fazer Commit e Push

```bash
git add .
git commit -m "Adiciona DCAT-BR v1.1"
git push origin main
```

### 11. Verificar no GitHub Pages

Após alguns minutos, verifique se o site foi atualizado:
- Acesse a URL do GitHub Pages
- Verifique se a nova versão aparece
- Teste todos os links

## Checklist

- [ ] Diretório da versão criado
- [ ] Arquivos HTML, PDF e RDF copiados
- [ ] Página `index.html` da versão criada e atualizada
- [ ] Arquivos SHACL copiados (se houver)
- [ ] `releases.json` atualizado
- [ ] `CHANGELOG.md` atualizado
- [ ] Versão `latest` atualizada em `releases.json`
- [ ] Testado localmente
- [ ] Commit e push realizados
- [ ] Verificado no GitHub Pages

## Exemplo Completo

Aqui está um exemplo completo de como ficaria a entrada em `releases.json`:

```json
{
  "version": "1.1",
  "date": "2024-06-01",
  "status": "Recommendation",
  "description": "Segunda versão do DCAT-BR. Principais mudanças: alinhamento com DCAT-AP 3.0, novos vocabulários controlados, melhorias na documentação.",
  "links": {
    "html": "docs/releases/1.1/dcat-br.html",
    "pdf": "docs/releases/1.1/dcat-br.pdf",
    "rdf": "docs/releases/1.1/dcat-br.rdf"
  },
  "shacl": "docs/shacl/1.1/",
  "changelog": "CHANGELOG.md#11---2024-06-01"
}
```

## Status Possíveis

- **Recommendation**: Versão recomendada e estável
- **Candidate**: Versão candidata, em revisão
- **Draft**: Rascunho, ainda em desenvolvimento
- **Deprecated**: Versão depreciada, não recomendada para uso

## Dúvidas?

Se tiver dúvidas ou problemas, abra uma [issue](https://github.com/seu-usuario/dcat-br/issues) no GitHub.

