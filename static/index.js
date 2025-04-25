function updateActiveNav() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const sectionId = section.getAttribute('id');
      
      if (rect.top <= 100 && rect.bottom >= 100) {
        
        navLinks.forEach(link => link.classList.remove('active'));
        
        const activeLink = document.querySelector(`nav a[href="#${sectionId}"]`);
        if (activeLink) {
          activeLink.classList.add('active');
        }
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav);
  
  updateActiveNav();