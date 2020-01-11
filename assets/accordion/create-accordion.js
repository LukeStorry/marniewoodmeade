/*jshint esversion: 6 */

fetch('/assets/authenticlearningdata.json')
  .then(r => r.text())
  .then(createAccordion)
  .then(addListeners);

function createAccordion(file) {
  const data = JSON.parse(file);
  console.log(data);
  let root = document.getElementById('accordion');
  data.forEach(dataSection => appendSection(dataSection, root));
}


function appendSection(sectionData, element, level = 0) {

  let contents = document.createElement('div');
  contents.classList.add('contents');
  if (typeof sectionData.text !== 'undefined') contents.append(createText(sectionData.text));
  if (typeof sectionData.bullets !== 'undefined') contents.append(createBullets(sectionData.bullets));
  if (typeof sectionData.children !== 'undefined') sectionData.children.forEach(inner => appendSection(inner, contents, level + 1));

  if (contents.firstChild) {
    element.append(createHeader(sectionData.title, level));
    element.append(contents);
  } else {
    element.append(createHeader(sectionData.title, level, false));
  }
}

function createHeader(text, level, enabled = true) {
  var h = document.createElement('a');
  h.innerHTML = text;
  h.classList.add('header');

  if (enabled) h.setAttribute('tabindex', 0);
  else h.classList.add('disabled');

  return h;
}

function createText(t) {
  var p = document.createElement('p');
  p.innerHTML = t.replace(/\n/g, '<br>');
  return p;
}

function createBullets(arr) {
  let ul = document.createElement('ul');
  arr.forEach(bulletText => {
    let li = document.createElement('li');
    li.innerHTML = bulletText;
    ul.append(li);
  });
  return ul;
}

function addListeners() {
  var headers = document.getElementsByClassName("header");
  for (let i = 0; i < headers.length; i++) {

    if (headers[i].classList.contains('disabled')) continue;

    headers[i].addEventListener("click", function() {
      this.classList.toggle("active");
      this.nextElementSibling.classList.toggle("active");
    });

    headers[i].addEventListener('keydown', function(event) {
      if (event.code === 'Space' || event.code === 'Enter') {
        headers[i].click();
      }
    });
  }
}
