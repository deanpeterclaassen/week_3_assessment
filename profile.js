
function colorButton(evt){
    evt.preventDefault();
	
	alert("My favorite color is Reeddish egret red")

}

function placeButton(evt){
    evt.preventDefault();
	
	alert("My favorite place is where the birds are ;)")

}

function ritualButton(evt){
    evt.preventDefault();
	
	alert("My favorite ritual is the PAYPHONE `bring lysol`")

}
function birds(evt){
    evt.preventDefault();
    
    alert("the answer should be 11.")
}

let color = document.querySelector("#color")
color.addEventListener('click', colorButton)


let place = document.querySelector("#place")
place.addEventListener('click', placeButton)



let ritual = document.querySelector("#ritual")
ritual.addEventListener('click', ritualButton)

let birdss = document.querySelector("#form")
birdss.addEventListener('submit', birds)
