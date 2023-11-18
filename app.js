let diplo = document.querySelector('.diplo');
let diploBack = document.querySelector('.diplo-back');
let mont = document.querySelector('.monta');
let montBack = document.querySelector('.monta-back')


diplo.querySelector('#text').addEventListener('mouseover', function() {
  diplo.classList.add('flipped');
});

diplo.addEventListener('transitionend', function() {
  this.classList.add('d-none');
  diploBack.classList.remove('d-none')
});

mont.querySelector('#text2').addEventListener('mouseover', function() {
  mont.classList.add('flipped');
});

mont.addEventListener('transitionend', function() {
  this.classList.add('d-none');
  montBack.classList.remove('d-none')
});
let scrolling;
window.addEventListener('scroll', function() {
  let nav = document.querySelector('.nav');
  if (window.pageYOffset > 50) { 
    nav.style.width = '50px';
    nav.style.borderRadius = '50% 50% 50% 50% / 50% 50% 50% 50% ';
    nav.querySelector('.link').classList.add('d-none')
    logo.style.position = 'absolute';
    logo.style.left = '50%';
    logo.style.transform = 'translateX(-50%)';
  } else {
    nav.style.width = '950px';
    nav.style.borderRadius = '4% 4% 4% 4% / 100% 100% 100% 100%';
    logo.style.position = 'absolute';
    logo.style.left = '0';
    logo.style.transform = 'none';
    nav.querySelector('.link').classList.remove('d-none')
  }
  clearTimeout(scrolling);
  scrolling = setTimeout(function() {
    nav.style.width = '950px';
    nav.style.borderRadius = '4% 4% 4% 4% / 100% 100% 100% 100%';
    logo.style.position = 'absolute';
    logo.style.left = '0';
    logo.style.transform = 'none';
    nav.querySelector('.link').classList.remove('d-none')
    link.style.opacity = '1';
  }, 600);
});
