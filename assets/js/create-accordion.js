/*jshint esversion: 6 */

import 'https://cdnjs.cloudflare.com/ajax/libs/js-yaml/3.13.1/js-yaml.js';

fetch('/assets/authenticlearningdata.yaml')
  .then(r => r.text())
  .then(createAccordion);

function createAccordion(file) {
  const data = jsyaml.load(file);
  let root = document.getElementById('accordion');
  data.forEach(dataSection => appendSection(dataSection, root));
}


function appendSection(section, element) {
  console.table(section);
  let current = document.createElement('div');
  current.classList.add('card');

  current.append(title(section.title));

  if (typeof section.text!=='undefined') current.append(text(section.text));
  if (typeof section.bullets!=='undefined') current.append(bullets(section.bullets));
  if (typeof section.contents!=='undefined') section.contents.forEach(inner => appendSection(inner, current));
  // if no contents, disable

  element.append(current);
}

function title(t) {
  var h = document.createElement('h5');
  h.innerHTML = t;
  return h;
}

function text(t) {
  var p = document.createElement('p');
  p.innerHTML = t.replace(/\n/g, '<br>');
  return p;
}

function bullets(arr) {
  let ul = document.createElement('ul');
  arr.forEach(bulletText => {
    let li = document.createElement('li');
    li.innerHTML = bulletText;
    ul.append(li);
  });
  return ul;
}
