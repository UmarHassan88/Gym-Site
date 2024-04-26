function getBodypart(bp) {
const url = 'https://gym-fit.p.rapidapi.com/exercises/search?bodyPart=' + bp;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '71fdc23500msh88d7978753c439fp116ffcjsnba702c04a20d',
		'X-RapidAPI-Host': 'gym-fit.p.rapidapi.com'
	}
};
 try{
	document.getElementById("ta1").append("The Relevant Exercises are -> ");
fetch(url,options).then(response => response.json()).then(response => {
console.log(response);
for (let i=0;i<response.length;i++){
	//let y = response[i].name;
console.log(response[i].name)
document.getElementById("ta").append(response[i].name + "---");

//debugger
//
}

})}
catch (error) {
	console.error(error);
}

}
let r = document.getElementById("it")
let r2 = document.getElementById("itt")
r2.addEventListener("click",()=>{
	let u = r.value
	console.log(u);
	getBodypart(u)
})


