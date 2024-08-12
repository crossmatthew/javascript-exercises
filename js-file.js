const container = document.querySelector('#container');

const content = document.createElement('div');
content.textContent = `This is the glorious text-content!`;
container.appendChild(content);

const p = document.createElement('p');
p.textContent = `Hey I'm Red`;
container.appendChild(p);
p.style.color = 'red';

const h3 = document.createElement('h3');
h3.textContent = `I'm a blue h3!`;
container.appendChild(h3);
h3.style.color = 'blue';

const div = document.createElement('div');
const h1 = document.createElement('h1');
const pTwo = document.createElement('p');

h1.textContent = `I'm in a div`
pTwo.textContent = `Me TOOOO!`

div.style.backgroundColor = 'pink';
div.style.border = '5px solid black';

div.appendChild(h1);
div.appendChild(pTwo);
container.appendChild(div);