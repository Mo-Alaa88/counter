const countEl = document.getElementById('count'),
yourNum	= document.getElementById('yourNum'),
getYourNumDB = sessionStorage.getItem("yourNum"),
getValueNumSys =sessionStorage.getItem("num");

currentNum()
timedRefresh(20000)//1min
notification()
// timedRefresh(5000)//2min

// https://api.countapi.xyz/hit/youtube.com/

function currentNum (){
	fetch(`https://api.countapi.xyz/get/asqdsf/`)
	.then(res=>res.json())
	.then(res => {
		const resVal =res.value;
		countEl.innerHTML =resVal ;
	})
}

function myNum(params) {
	let yourNumV = yourNum.value;
	sessionStorage.setItem("yourNum",yourNumV)
}

function notification(params) {
	console.log(`your num ${getYourNumDB}`);
	console.log(`system num ${getValueNumSys}`);
	if (Number(getYourNumDB)===Number(getValueNumSys)) {
		console.log('==');
		
	} else {
		console.log('!==');
		
	}
	
}

// function currentNum (){
// 	fetch(`https://api.countapi.xyz/get/youtube.com/`)
// 	.then(res=>res.json())
// 	.then(res => {
// 		const resVal =res.value;
// 		if(null==getValueNumSys){
// 			countEl.innerHTML =resVal ;
// 			sessionStorage.setItem("num",`${resVal}`)
// 			console.log(getValueNumSys);
// 		} else{
// 			console.log(resVal);
// 			countEl.innerHTML =resVal ;
// 			// console.log(yourNumV);
			
// 		}
// 	})
// }

function timedRefresh(time){
	setTimeout(()=>{location.reload(true)},time);
}
