function addProduct() {
  var taskValue = document.querySelector('input').value;

  //  x non aggiungere una checkbox vuota 
  if (taskValue !== '') {

    // creo li e checkbox
    var li = document.createElement('li');

    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    // Appendo testo  e checkbox a li.
    li.appendChild(document.createTextNode(taskValue));
    li.appendChild(checkbox);

    // appendo li a ul
    const ul= document.querySelector('ul')
    ul.appendChild(li);

    // Pulisco il campo di testo dopo l'aggiunta
    document.querySelector('input').value = '';
  }
}