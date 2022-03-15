'use strict';

document.addEventListener('DOMContentLoaded', function () {
  // Page-Crew
  // show crew's information when click the img.
  const crewList = document.querySelectorAll('.team__crew__lists > li');

  crewList.forEach((img) => {
    img.addEventListener('click', function () {
      img.classList.toggle('hover');
    });
    img.addEventListener('mouseenter', function () {
      img.classList.add('hover');
    });
    img.addEventListener('mouseleave', function () {
      img.classList.remove('hover');
    });
  });


  // Page-Lesson
  // category hover & click event
  const catGrid = document.querySelectorAll('.cat-grid');

  catGrid.forEach((grid) => {
    grid.addEventListener('mouseenter', function () {
      grid.classList.add('hover');
    });
    grid.addEventListener('mouseleave', function () {
      grid.classList.remove('hover');
    });
    grid.addEventListener('click', function () {
      grid.classList.toggle('hover');
    });
  });



});