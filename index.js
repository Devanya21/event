
const menuBtn = document.getElementById('menu-btn');
const navbar = document.getElementById('navbar');

menuBtn.addEventListener('click', () => {
  navbar.classList.toggle('active');
});


document.getElementById('reachBtn').addEventListener('click', () => {
  alert('Thank you for reaching out! We will get back to you soon.');
});
