const container = document.getElementById("repos");

fetch("https://api.github.com/users/alegomezamaro/repos")
  .then((res) => res.json())
  .then((repos) => {
    repos.sort((a, b) => b.stargazers_count - a.stargazers_count);
    repos.slice(0, 6).forEach((repo) => {
      const repoEl = document.createElement("div");
      repoEl.className = "repo";
      repoEl.innerHTML = `
        <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
        <p>${repo.description || "Sin descripción."}</p>
      `;
      container.appendChild(repoEl);
    });
  })
  .catch((err) => {
    container.innerHTML = "<p>Error cargando repositorios.</p>";
    console.error(err);
  });
