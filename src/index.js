import './style.css';
import { Crud } from './crud.js';
import { Interactive } from './interactive.js';

const crud = new Crud();
const interactive = new Interactive();
crud.displayItems();
interactive.checkBoxListener();

const addForm = document.getElementById('addForm');
const editForms = document.querySelectorAll('.editForm');
const moreBtns = document.querySelectorAll('.more');
const delBtns = document.querySelectorAll('.delete');
const clearBtn = document.getElementById('clearButton');

moreBtns.forEach((moreBtn) => {
  moreBtn.addEventListener('click', () => {
    const index = moreBtn.getAttribute('id').slice(4);
    const delID = `delete${index.toString()}`;
    const delIdBtn = document.getElementById(delID);
    delIdBtn.classList.remove('none');
    delIdBtn.classList.add('block');
    moreBtn.classList.remove('block');
    moreBtn.classList.add('none');
    const p = `pDesc${index.toString()}`;
    const pDesc = document.getElementById(p);
    pDesc.classList.remove('block');
    pDesc.classList.add('none');
    const editFormID = `editForm${index.toString()}`;
    const editForm = document.getElementById(editFormID);
    editForm.classList.remove('none');
    editForm.classList.add('block');
  });
});

clearBtn.addEventListener('click', () => {
  interactive.clearButtonListener();
});

addForm.addEventListener('submit', (event) => {
  event.preventDefault();

  let description = document.getElementById('description').value;

  if ((description.trim() !== '')) {
    crud.addItem(description);

    description = '';
  }
});

editForms.forEach((editForm) => {
  editForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const desc = editForm.firstElementChild;
    let newDesc = desc.value;
    const ind = desc.getAttribute('id').slice(4);

    crud.editItem(newDesc, ind);

    newDesc = '';
  });
});

const deleteItem = () => {
  delBtns.forEach((delBtn) => {
    delBtn.addEventListener('click', () => {
      crud.removeItem(delBtn.getAttribute('id').slice(6));
    });
  });
};

deleteItem();
