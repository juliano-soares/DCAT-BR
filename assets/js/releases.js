// Carrega informações sobre releases
// Tenta carregar de releases.json, caso contrário usa dados padrão
let releasesData = {
    "releases": [
        {
            "version": "1.0",
            "date": "2024-01-01",
            "status": "Recommendation",
            "description": "Primeira versão do DCAT-BR, baseada no DCAT-AP 2.x e adaptada para o contexto brasileiro.",
            "links": {
                "html": "docs/releases/1.0/dcat-br.html",
                "pdf": "docs/releases/1.0/dcat-br.pdf",
                "rdf": "docs/releases/1.0/dcat-br.rdf"
            },
            "shacl": "docs/shacl/1.0/"
        }
    ]
};

// Função para normalizar caminhos relativos
function normalizePath(path) {
    // Se o caminho já começa com http:// ou https://, retorna como está
    if (path.startsWith('http://') || path.startsWith('https://')) {
        return path;
    }
    
    // Se o caminho começa com /, retorna como está (caminho absoluto)
    if (path.startsWith('/')) {
        return path;
    }
    
    // Remove ./ se existir
    if (path.startsWith('./')) {
        path = path.substring(2);
    }
    
    // Retorna o caminho relativo (o <base> tag cuida do resto)
    return path;
}

// Tenta carregar releases.json
async function loadReleasesData() {
    try {
        // Tenta diferentes caminhos para releases.json
        const basePath = document.querySelector('base')?.href || window.location.pathname.replace(/\/[^/]*$/, '') || '';
        const paths = [
            'releases.json',
            basePath + 'releases.json',
            './releases.json',
            '/DCAT-BR/releases.json'
        ];
        
        let loaded = false;
        for (const path of paths) {
            try {
                console.log('Tentando carregar releases.json de:', path);
                const response = await fetch(path);
                if (response.ok) {
                    const data = await response.json();
                    releasesData = data;
                    loaded = true;
                    console.log('releases.json carregado com sucesso de:', path);
                    break;
                }
            } catch (e) {
                console.warn('Erro ao carregar de', path, e);
                continue;
            }
        }
        
        if (!loaded) {
            console.warn('Não foi possível carregar releases.json, usando dados padrão');
        }
    } catch (error) {
        console.warn('Não foi possível carregar releases.json, usando dados padrão', error);
    }
    loadReleases();
}

function loadReleases() {
    const releasesList = document.getElementById('releases-list');
    
    if (!releasesList) return;

    releasesData.releases.forEach(release => {
        const releaseCard = document.createElement('div');
        releaseCard.className = 'release-card';
        
        const statusBadge = release.status === 'Recommendation' 
            ? '<span class="version">Recomendação</span>' 
            : `<span class="version" style="background: #ff9800;">${release.status}</span>`;
        
        // Normaliza os caminhos dos links
        const htmlLink = normalizePath(release.links.html);
        const pdfLink = normalizePath(release.links.pdf);
        const rdfLink = normalizePath(release.links.rdf);
        const shaclLink = release.shacl ? normalizePath(release.shacl) : '';
        
        releaseCard.innerHTML = `
            <h3>DCAT-BR ${release.version}</h3>
            ${statusBadge}
            <p class="date">Publicado em: ${formatDate(release.date)}</p>
            <p class="description">${release.description}</p>
            <div class="links">
                <a href="${htmlLink}" class="btn">Especificação HTML</a>
                <a href="${pdfLink}" class="btn btn-secondary">PDF</a>
                <a href="${rdfLink}" class="btn btn-secondary">RDF</a>
                ${shaclLink ? `<a href="${shaclLink}" class="btn btn-secondary">SHACL</a>` : ''}
            </div>
        `;
        
        releasesList.appendChild(releaseCard);
    });
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Carrega releases quando a página estiver pronta
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadReleasesData);
} else {
    loadReleasesData();
}
