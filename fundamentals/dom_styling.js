const title = document.querySelector('#main-heading')
// inline styling
title.style.color = 'red'

// creating elements

const ul = document.querySelector("ul");
const li = document.createElement("li");
var text = document.createTextNode("The mysterious Island")
li.appendChild(text)
ul.append(li);

const list_item = document.querySelectorAll('li')
for(i = 0; i < list_item.length; i ++){
    list_item[i].style.color = 'blue'
}

// console.log(list_item)

// modifying the text

const firstListItem = document.querySelector('.list-items')
console.log(firstListItem.innerText)
console.log(firstListItem.textContent)
console.log(firstListItem.innerHTML)

// there is a problem using innerHTML but I did not catch it well
// it is advised to use innerText

// creating another li tag
const list = document.createElement("li")
ul.append(list)
list.innerText  = "X-men"

// modifying attributes and classes

list.setAttribute('class','list-items');
// remove attribute
list.removeAttribute('class');

const title = document.querySelector('h1')

console.log(title.getAttribute("id"))