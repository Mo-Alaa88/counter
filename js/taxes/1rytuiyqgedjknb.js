const countEl = document.getElementById('count'),
     plus = document.getElementById('plus'),
	 minus = document.getElementById('minus'),
	 updateCount =  document.getElementById('updateCount');
plus.addEventListener('click',()=>{
	incrementVisitCount()
})
currentNum()

//updateVisitCount();
minus.addEventListener('click',()=>{
	decrementVisitCount()
})
function incrementVisitCount() {
	// fetch('https://api.countapi.xyz/update/florin-popcom/codepen/?amount=1')
	fetch('https://api.countapi.xyz/update/asqdsf/?amount=1')
	.then(res => res.json())
	.then(res => {
		countEl.innerHTML = res.value;
	})
	currentNum()
}

function decrementVisitCount() {
	// fetch('https://api.countapi.xyz/update/florin-popcom/codepen/?amount=-1')
	fetch('https://api.countapi.xyz/update/asqdsf/?amount=-1')
	.then(res => res.json())
	.then(res => {
		countEl.innerHTML = res.value;
	})
}
// https://api.countapi.xyz/hit/asqdsf/

function currentNum (){
	fetch(`https://api.countapi.xyz/get/asqdsf/`)
	.then(res=>res.json())
	.then(res => {
		updateCount.innerHTML = res.value-1;
	})
}
// For Popup
function togglePopus(){
	document.getElementById("popup-1").classList.toggle("active")
}

 function resetCounter(){
	fetch(`https://api.countapi.xyz/set/asqdsf?value=0`)
	document.getElementById("popup-1").classList.toggle("active")
}
