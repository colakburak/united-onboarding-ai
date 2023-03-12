/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});

const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
  item.addEventListener('dragstart', e => {
    e.dataTransfer.setData('text/plain', item.innerHTML);
  });
});

document.addEventListener('dragover', e => {
  e.preventDefault();
});

document.addEventListener('drop', e => {
  e.preventDefault();
  const dropTarget = e.target.closest('.drop-target');
  if (dropTarget) {
    dropTarget.innerHTML += e.dataTransfer.getData('text/plain');
  }
});

const draggableElement = document.getElementById("menu-item-1");
const dropzone = document.getElementById("dropzone");

// Event listener for when the draggable element is being dragged
draggableElement.addEventListener("dragstart", (event) => {
  // Set the data that will be transferred to the dropzone
  event.dataTransfer.setData("text/plain", draggableElement.id);
});

// Event listener for when the draggable element is dropped onto the dropzone
dropzone.addEventListener("drop", (event) => {
  event.preventDefault();
  // Get the data from the draggable element
  const data = event.dataTransfer.getData("text/plain");
  const draggableElement = document.getElementById(data);
  // Add the draggable element to the dropzone
  dropzone.appendChild(draggableElement);
});

// Prevent default behavior for the dropzone element
dropzone.addEventListener("dragover", (event) => {
  event.preventDefault();
});
