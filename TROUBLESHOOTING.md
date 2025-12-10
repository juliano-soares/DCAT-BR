# Troubleshooting - Problemas com GitHub Pages

## Erro 404 ao acessar o site

Se você está recebendo erro 404 ao acessar `https://www.julianosoares.com/DCAT-BR`, verifique:

### 1. Configuração do GitHub Pages

1. Acesse: https://github.com/juliano-soares/DCAT-BR/settings/pages
2. Verifique se:
   - **Source**: Está configurado para a branch `master` (ou `main`)
   - **Folder**: Está configurado para `/ (root)`
3. Salve as configurações

### 2. Verificar se o site está publicado

O GitHub Pages pode levar alguns minutos para publicar. Verifique:
- Acesse: https://juliano-soares.github.io/DCAT-BR/
- Se funcionar aqui, o problema é com o domínio personalizado

### 3. Configuração de Domínio Personalizado

Se você está usando um domínio personalizado (`www.julianosoares.com`):

1. **No GitHub**:
   - Vá em Settings > Pages
   - Em "Custom domain", adicione: `www.julianosoares.com`
   - Marque "Enforce HTTPS" (após o DNS propagar)

2. **No seu provedor DNS**:
   - Crie um registro CNAME:
     - Nome: `www` (ou `DCAT-BR` se for subdomínio)
     - Valor: `juliano-soares.github.io`
   - OU crie um registro A:
     - Nome: `www` (ou `DCAT-BR`)
     - Valor: IPs do GitHub Pages (verifique na documentação do GitHub)

3. **Aguarde a propagação DNS** (pode levar até 24 horas)

### 4. Verificar arquivos necessários

Certifique-se de que estes arquivos existem na raiz do repositório:
- `index.html` ✓
- `.nojekyll` ✓
- `releases.json` ✓
- `assets/` (pasta com CSS e JS) ✓

### 5. Testar localmente

Para testar se os caminhos estão corretos:

```bash
cd DCAT-BR
python -m http.server 8000
```

Acesse: `http://localhost:8000`

### 6. Verificar console do navegador

Abra o console do navegador (F12) e verifique:
- Erros de carregamento de recursos
- Mensagens de debug sobre o caminho base detectado
- Erros de CORS ou 404

### 7. Arquivo de teste

Acesse `test.html` para ver informações de diagnóstico:
- `https://www.julianosoares.com/DCAT-BR/test.html`
- Ou: `https://juliano-soares.github.io/DCAT-BR/test.html`

Isso mostrará:
- URL completa
- Pathname
- Caminho base calculado

## Soluções comuns

### Problema: Site funciona no GitHub mas não no domínio personalizado

**Solução**: Verifique a configuração DNS e aguarde a propagação.

### Problema: Recursos (CSS/JS) não carregam

**Solução**: Verifique se o arquivo `.nojekyll` existe na raiz.

### Problema: 404 em todos os caminhos

**Solução**: 
1. Verifique se o GitHub Pages está habilitado
2. Verifique se está usando a branch correta
3. Aguarde alguns minutos após fazer push

### Problema: Caminhos relativos não funcionam

**Solução**: O código já detecta automaticamente o caminho base. Se ainda houver problemas, verifique o console do navegador para ver o caminho detectado.

## Contato

Se o problema persistir, abra uma issue no GitHub:
https://github.com/juliano-soares/DCAT-BR/issues

