const draggables = document.querySelectorAll('.draggable');

const dropzones = document.querySelectorAll('.dropzone');

const feedback = document.getElementById('feedback');



let draggedElement = null; // Keep track of the currently dragged element



// Desktop Drag Events

draggables.forEach(draggable => {

  draggable.addEventListener('dragstart', () => {

    draggedElement = draggable;

  });



  draggable.addEventListener('dragend', () => {

    draggedElement = null;

  });

});



// Mobile Touch Events

draggables.forEach(draggable => {

  draggable.addEventListener('touchstart', e => {

    draggedElement = draggable;

    draggable.style.opacity = '0.5';

  });



  draggable.addEventListener('touchend', e => {

    draggable.style.opacity = '1';

    draggedElement = null;

  });

});



dropzones.forEach(dropzone => {

  // Desktop Drag Events

  dropzone.addEventListener('dragover', e => e.preventDefault());

  dropzone.addEventListener('drop', e => {

    handleDrop(dropzone);

  });



  // Mobile Touch Events

  dropzone.addEventListener('touchmove', e => {

    e.preventDefault();

  });



  dropzone.addEventListener('touchend', e => {

    handleDrop(dropzone);

  });

});



function handleDrop(dropzone) {

  if (draggedElement) {

    const correctValue = dropzone.dataset.value;

    const draggedValue = draggedElement.dataset.value;



    if (correctValue === draggedValue) {

      dropzone.classList.add('correct');

      dropzone.textContent = draggedElement.textContent;

      draggedElement.remove();

      feedback.textContent = 'Great job!';

      feedback.style.color = 'green';

    } else {

      dropzone.classList.add('wrong');

      feedback.textContent = 'Oops! Try again.';

      feedback.style.color = 'red';

    }

  }

}
