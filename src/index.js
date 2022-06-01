import './style.css';

const todos = [
  {
    description: 'Wash the dishes',
    completed: false,
    index: 0,
  },
  {
    description: 'Complete To-DO list Project',
    completed: true,
    index: 1,
  },
];

todos.sort((a, b) => a.index - b.index);

const comps = (comp) => {
  if (comp.completed === true) return 'Checked';
  return null;
};

todos.forEach((todo) => {
  document.querySelector('.todos').innerHTML += `
    <li>
      <div>
        <input type="checkbox" value="${todo.index}" ${comps(todo)}>
        <p>${todo.description}</p>
      </div>
      <img src="http://nduatikagiri.co.ke/icons/more.png" alt="">
    </li>
  `;
});
