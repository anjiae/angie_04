'use strict';
document.addEventListener('DOMContentLoaded', function () {

  // Page Lesson : category grid by masonry
  const lists = document.querySelector('.cat__lists');
  const msnry = new Masonry(lists, {
    // options
    itemSelector: '.cat-grid',
    percentPosition: true
  });


});