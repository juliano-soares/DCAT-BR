// Dados das releases
const releasesData = {
    "releases": [
        {
            "version": "1.0",
            "date": "2025-12-12",
            "status": "Recommendation",
            "description": "Primeira versão do DCAT-BR, baseada no DCAT-AP 2.x e adaptada para o contexto brasileiro.",
            "links": {
                "html": "docs/releases/1.0/",
                "rdf": "docs/releases/1.0/dcat-br.rdf"
            },
            "shacl": "docs/shacl/1.0/"
        }
    ]
};

// Tenta carregar releases.json
async function loadReleasesData() {
    try {
        const response = await fetch('releases.json');
        if (response.ok) {
            const data = await response.json();
            Object.assign(releasesData, data);
        }
    } catch (error) {
        // Usa dados padrão se não conseguir carregar
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
        
        releaseCard.innerHTML = `
            <h3>DCAT-BR ${release.version}</h3>
            ${statusBadge}
            <p class="date">Publicado em: ${formatDate(release.date)}</p>
            <p class="description">${release.description}</p>
            <div class="links">
                <a href="${release.links.html}" class="btn">Especificação</a>
                <a href="${release.links.rdf}" class="btn btn-secondary">RDF</a>
                ${release.shacl ? `<a href="${release.shacl}" class="btn btn-secondary">SHACL</a>` : ''}
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

// Carrega quando a página estiver pronta
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadReleasesData);
} else {
    loadReleasesData();
}
