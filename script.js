const sections = [...document.querySelectorAll('section[id]')];
const navLinks = document.querySelectorAll('.nav-list a');
window.addEventListener('scroll', () => {
      let cur = sections[0].id;
      for (const sec of sections) {
        if (window.scrollY + 110 >= sec.offsetTop) cur = sec.id;
      }
      navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href').substring(1) === cur));
    });
    document.getElementById('scrollArrow').addEventListener('click', function() {
      const navHeight = document.querySelector('nav').offsetHeight || 0;
      const aboutSection = document.getElementById('about');
      const top = aboutSection.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    });
    document.querySelectorAll('a[href^="#"]').forEach(a=>{
      a.addEventListener('click', function(e){
        const href = this.getAttribute('href');
        if(href.startsWith('#')) {
          e.preventDefault();
          document.querySelector(href).scrollIntoView({behavior:'smooth'});
        }
      });
    });