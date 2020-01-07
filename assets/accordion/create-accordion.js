/*jshint esversion: 6 */

fetch('/assets/authenticlearningdata.json')
  .then(r => r.text())
  .then(createAccordion)
  .then(addClickListeners);

function createAccordion(file) {
  const data = JSON.parse(file);
  console.log(data);
  let root = document.getElementById('accordion');
  data.forEach(dataSection => appendSection(dataSection, root));
}


function appendSection(sectionData, element) {
  let header = createHeader(sectionData.title);

  let contents = document.createElement('div');
  contents.classList.add('contents');
  if (typeof sectionData.text !== 'undefined') contents.append(createText(sectionData.text));
  if (typeof sectionData.bullets !== 'undefined') contents.append(createBullets(sectionData.bullets));
  if (typeof sectionData.children !== 'undefined') sectionData.children.forEach(inner => appendSection(inner, contents));

  element.append(header);
  if (contents.firstChild) {
    element.append(contents);
  } else {
    header.classList.add('disabled');
  }
}

function createHeader(t) {
  var h = document.createElement('h5');
  h.classList.add('header');
  h.innerHTML = t;
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

function addClickListeners() {
  var headers = document.getElementsByClassName("header");
  for (let i = 0; i < headers.length; i++) {
    if (headers[i].classList.contains('disabled')) continue;
    headers[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var contents = this.nextElementSibling;
      if (contents.style.display === "block") {
        contents.style.display = "none";
      } else {
        contents.style.display = "block";
      }
    });
  }
}
