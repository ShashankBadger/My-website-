const mobileNav = () => {
const headerBar = document.querySelector('.header__bar');
const mobileNav = document.querySelector('.mobile-nav');
let isMobileNavOpen = false;
const mobileLinks = document.querySelectorAll('.mobile-nav__link');

headerBar.addEventListener('click',() => {
  isMobileNavOpen = !isMobileNavOpen;
  if(isMobileNavOpen){
  mobileNav.style.display = 'flex';
  document.body.style.overflowY = 'hidden';
  } 
  else {
    mobileNav.style.display = 'none';
  document.body.style.overflowY = 'auto';
  }
});

mobileLinks.forEach(Link => {
  Link.addEventListener('click', () => {
    isMobileNavOpen = false;
    mobileNav.style.display = 'none';
    document.body.style.overflowY = 'auto'
  });
});
};

export default mobileNav; 
