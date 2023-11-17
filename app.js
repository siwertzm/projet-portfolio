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
