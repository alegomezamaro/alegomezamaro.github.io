// Funcionalidades que estaban dentro de `app-script` en tu archivo HTML

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
      document.body.classList.add('loaded');
    }, 300);
  
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
  
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    }));
  
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
  
    sections.forEach(section => {
      observer.observe(section);
    });
  
    setTimeout(() => {
      const projectsContainer = document.getElementById('projects-container');
      
      const projects = [
        {
          id: 1,
          name: 'E-commerce Platform',
          description: 'Plataforma de comercio electrónico con carrito de compras, pagos y panel de administración.',
          image: 'https://cdn.pixabay.com/photo/2020/04/08/08/08/online-shopping-5016320_1280.jpg',
          stars: 45,
          url: 'javascript:void(0)'
        },
        // Más proyectos...
      ];
  
      let projectsHTML = '<div class="projects-grid">';
      
      projects.forEach(project => {
        projectsHTML += `
          <div class="project-card">
            <img src="${project.image}" alt="${project.name}" class="project-img">
            <div class="project-content">
              <h3 class="project-title">${project.name}</h3>
              <p class="project-desc">${project.description}</p>
              <div class="project-links">
                <a href="${project.url}" class="project-link">
                  Ver proyecto <i class="fas fa-external-link-alt"></i>
                </a>
                <div class="project-stars">
                  <i class="fas fa-star"></i> ${project.stars}
                </div>
              </div>
            </div>
          </div>
        `;
      });
      
      projectsHTML += '</div>';
      projectsContainer.innerHTML = projectsHTML;
    }, 1500);
  });  