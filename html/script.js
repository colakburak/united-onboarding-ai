const menuItems = document.querySelectorAll('.menu-item');
const dropZone = document.getElementById('drop-zone');

menuItems.forEach(item => {
  item.addEventListener('dragstart', dragStart);
});

dropZone.addEventListener('dragover', dragOver);
dropZone.addEventListener('drop', drop);

function dragStart(event) {
  event.dataTransfer.setData('text/plain', event.target.id);
  event.currentTarget.classList.add('dragging');
}

function dragOver(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData('text/plain');
  const droppedElement = document.getElementById(data);
  const clone = droppedElement.cloneNode(true);
  const text = document.createTextNode('Dropped!');
  clone.appendChild(text);
  dropZone.appendChild(clone);
  droppedElement.classList.remove('dragging');
      }