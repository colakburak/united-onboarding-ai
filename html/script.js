const items = document.querySelectorAll('.item');
const flow = document.querySelector('.flow');
const objects = document.querySelector('.objects');
const menu = document.querySelector('.menu');
const menuToggle = document.querySelector('#menu-toggle');

let dragItem = null;

for (let i = 0; i < items.length; i++) {
  const item = items[i];

  item.addEventListener('dragstart', function () {
    dragItem = item;
    setTimeout(() => {
      item.style.display = 'none';
    }, 0);
  });

  item.addEventListener('dragend', function () {
    setTimeout(() => {
      dragItem.style.display = 'block';
      dragItem = null;
    }, 0);
  });
}

flow.addEventListener('dragover', function (e) {
  e.preventDefault();
});

flow.addEventListener('dragenter', function (e) {
  e.preventDefault();
  this.style.borderStyle = 'solid';
});

flow.addEventListener('dragleave', function () {
  this.style.borderStyle = 'dashed';
});

flow.addEventListener('drop', function () {
  this.style.borderStyle = 'dashed';
  const object = document.createElement('div');
  object.textContent = dragItem.textContent;
  objects.appendChild(object);
});

menuToggle.addEventListener('click', function () {
  menu.classList.toggle('hidden');
});

for (let i = 0; i < items.length; i++) {
  const item = items[i];

  item.addEventListener('dragstart', function () {
    dragItem = item;
    setTimeout(() => {
      item.style.display = 'none';
    }, 0);
  });

  item.addEventListener('dragend', function () {
    setTimeout(() => {
      dragItem.style.display = 'block';
      dragItem = null;
    }, 0);
  });
}

flow.addEventListener('dragover', function (e) {
  e.preventDefault();
});

flow.addEventListener('dragenter', function (e) {
  e.preventDefault();
  this.style.borderStyle = 'solid';
});

flow.addEventListener('dragleave', function () {
  this.style.borderStyle = 'dashed';
});

flow.addEventListener('drop', function () {
  this.style.borderStyle = 'dashed';
});