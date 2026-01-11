// your code here
document.getElementById("button").onclick=function(){
	var name=document.getElementById("name").value;
	var year=document.getElementById("year").value;
	document.getElementById("url").innerText="https://localhost:8080/?name="+name+"&year"+year;
}