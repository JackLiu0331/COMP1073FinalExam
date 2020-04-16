// JavaScript Document
//should use selector not all
let main = document.querySelector('main');
//type no need ""
let submitButton = document.querySelector('input[type=submit]');
//documan --> document
let body = document.querySelector('body');
//define input
let input = document.querySelector('input[type=text]');

submitButton.addEventListener('click', function(e) {
  let personName = input.value;
  let para = document.createElement('p');
  para.innerHTML = '<h3>Hey there ' + personName + '! Thanks for stopping by!</h3>';
  //paragraph --> para
  main.appendChild(para);
  body.setAttribute('class', 'meow');
  console.log('=^..^=');
});
