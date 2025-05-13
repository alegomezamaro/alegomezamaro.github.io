document.addEventListener('DOMContentLoaded', () => {
  fetch('https://api.github.com/users/alegomezamaro/repos')
    .then(res => res.json())
    .then(data => {
      const reposContainer = document.getElementById('repos');
      data.forEach(repo => {
        const div = document.createElement('div');
        div.classList.add('repo');
        div.innerHTML = `
          <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
          <p>${repo.description || 'Sin descripción'}</p>
        `;
        reposContainer.appendChild(div);
      });
    })
    .catch(err => {
      console.error('Error al cargar los repositorios:', err);
    });
});