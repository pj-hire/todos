//1.) create a new empty array in a variable 'todos'

//2.) add an event listener so that anytime the user clicks the Add button, the text currently in the input field gets added to the todos array, and then the full array gets logged out.
  //---> array methods that adds a new entry to the array - array reference

//3.)Update the event listener so that anytime a new todo is added to the list, it (along with any previously existing todo array items) show up in the #todos div.

//4.) Add a Delete button that removes the last item from the list of todos

//5.) Instead of simply adding the array as text to the todos div, use what you know about DOM creation to turn the todos array into an unordered list and stick the list in the DOM.

//6.) update your tasklist buidler function so that inside each li is a button that contains the letter x

//7.) attach a click event listener to each button. for the time being, have the event listeners function log out the value of the x inbdex attribute.

//8.) use the x-index value in combination with an array method to remove the specific item you are clicking on from the todos array.

//9.) move your todos app into it's home directory, initialize a new git repo. commit your files. push to github.


let newTodo = document.getElementById("new-todo");

let myButton = document.getElementById("add");

let myButtonTwo = document.getElementById("delete");

let todosDiv = document.getElementById('todos');

let todos = [];

myButton.addEventListener('click', function() {
  todos.push(newTodo.value);
  newTodo.value = '';
  //clears out existing value^^
  console.log(todos);
  taskListBuilder();
});

// myButtonTwo.addEventListener('click', function() {
//   todos.pop(newTodo.value);
//   console.log(todos);
//   taskListBuilder();
// });



function taskListBuilder() {
  todosDiv.innerHTML = '';
  for (let i=0; i<todos.length; i++) {
    let li = document.createElement('li');
    let b = document.createElement('button');
    b.innerText = "X"
    b.setAttribute('x-index', i);
    li.innerText = todos[i];
    li.appendChild(b);
    todosDiv.appendChild(li);
    b.addEventListener('click', function() {
     let index = b.getAttribute('x-index');
     todos.splice(Number(index), 1);
     taskListBuilder();
    })
  }
}


//IN CLASS//////////////////////////////

//1.) create a p element, put a bried copywrite message in it, and add the p to the footer


//let footer = document.getElementById("footer");

//2.) create an unordered list element, then add three list items to that ul, then stick that ul in the footer.

// let ul = document.createElement('ul');
//
// let liOne = document.createElement('li');
// liOne.innerText = 'mow';
// let liTwo = document.createElement('li');
// liTwo.innerText = 'wash';
// let liThree = document.createElement('li');
// liThree.innerText = 'drink';
//
// ul.appendChild(liOne);
// ul.appendChild(liTwo);
// ul.appendChild(liThree);
//
// footer.appendChild(ul);
// console.log(ul);


//or loop it.............


// let ul = document.createElement('ul')
//
// let listArray = ['mow', 'wash', 'drink'];
//
// for (let i = 0; i < listArray.length; i++) {
//   let li = document.createElement('li');
//   li.innerText = listArray[i];
//   ul.appendChild(li);
// }
//
// footer.appendChild(ul);


//setAttribute() to do href attribute

// loop through the navTexts to perform the following operations during the loop:
// 1 - create a div
// 2 - create an anchor tag
// 3 - add innerText to the anchor tag
// 4 - set the anchor tag's href attribute to be '#'
// 5 - append anchor to div
// 6 - append div to header-div

// let header = document.getElementById('header-div');
//
// for (let i = 0; i < 5; i++) {
//   let navDiv = document.createElement('div');
//   let anchorTag = document.createElement('a');
//   anchorTag.innerText = 'Item ' + (i+1);
//   anchorTag.setAttribute('href','"#"');
//   navDiv.appendChild(anchorTag);
//   header.appendChild(navDiv);
// }



























//
