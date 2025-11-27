async function loadProjects(){
  try{
    const res = await fetch('projects.json');
    const projects = await res.json();
    const grid = document.getElementById('projects-grid');
    grid.innerHTML = '';
    projects.forEach(p => {
      const card = document.createElement('article');
      card.className = 'project';
      card.innerHTML = `
        <img src="${p.image}" alt="${p.title}" />
        <div class="body">
          <h3>${p.title}</h3>
          <p>${p.description}</p>
          <div class="meta">
            <small>${p.tech.join(' · ')}</small>
            <a class="btn" href="${p.link}" target="_blank" rel="noopener">View</a>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });
  }catch(e){
    console.error('projects load error', e);
    document.getElementById('projects-grid').innerText='프로젝트를 불러올 수 없습니다.';
  }
}

document.addEventListener('DOMContentLoaded', ()=>{
  loadProjects();
});
