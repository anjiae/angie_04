'use strict';
document.addEventListener('DOMContentLoaded', function () {
  // Header - navigation show sub-menu for pc
  const header = document.querySelector('#header');
  const mainMenu = document.querySelectorAll('#header .menu');
  const subMenu = document.querySelector('#header .sub-menu');

  mainMenu.forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('open');
    });
    btn.addEventListener('mouseenter', () => {
      btn.classList.add('open');
    });
    header.addEventListener('mouseleave', () => {
      btn.classList.remove('open');
    });
    btn.addEventListener('mouseleave', () => {
      btn.classList.remove('open');
    });
    subMenu.addEventListener('mouseleave', () => {
      btn.classList.remove('open');
    });
  });

  // Show mobile menu when click on the toggle btn
  const mobile = document.querySelector('#mobile');
  const toggleBtn = document.querySelector('.toggleBox');
  const closeBtn = document.querySelector('.closeBtn');

  toggleBtn.addEventListener('click', () => {
    mobile.classList.add('open');
  });
  closeBtn.addEventListener('click', () => {
    mobile.classList.remove('open');
  });



  // Mobile - navigation show sub-menu for mobile
  const mobileMenu = document.querySelectorAll('#mobile .menu');

  mobileMenu.forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('open');
    });
  });


  // ARROW UP BUTTON
  const arrowUp = document.querySelector('#arrow-up');
  const home = document.querySelector('#main');
  const homeHeight = home.getBoundingClientRect().height;

  document.addEventListener('scroll', function () {
    if (window.scrollY > homeHeight / 5) {
      arrowUp.classList.add('visible');
    } else {
      arrowUp.classList.remove('visible');
    }
  });

  arrowUp.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });


  // Front-page : facility lightbox event
  lightbox.option({
    'alwaysShowNavOnTouchDevices': true,
    'resizeDuration': 100,
  });


});