console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form Submitted Successfully!');
}

function imgAlert(evt){
	evt.preventDefault();
	alert("I like your style ;)")
}
let form = document.querySelector('#contact');

form.addEventListener("submit", handleSubmit);

let img = document.querySelector('img')

img.addEventListener("mouseover", imgAlert)

