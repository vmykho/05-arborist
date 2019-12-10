
document.getElementById("company").innerHTML = "Arborist";
document.getElementById("slogan").innerHTML = "One with nature";
document.getElementById("pageName").innerHTML = "Plant some trees.";
var i;
var x;
var y;
var z;

var treeList = ["Oak", "Cherry", "Aspen", "Maple"];

function tree() {
	x="";
	for (i=0; i<treeList.length; i++) {
		x+=treeList[i]+"<br>";
	}
	document.getElementById('mytreelist').innerHTML=x;
}

tree();

function addButton(){
	treeList.push("Birch");
	tree();
	}

function tackstart(){
	treeList.splice(0, 0, "Apple");;
	tree();
}

function removebegin(){
	if (treeList.length>0){
	treeList.splice(0, 1);
	tree();}else{
		y="Error: Not enough trees";
		document.getElementById('messages').innerHTML=y;
	}
}
function removesecond(){
	if (treeList.length>1){
	treeList.splice(1, 1);
	tree();}else{
		y="Error: Not enough trees";
		document.getElementById('messages').innerHTML=y;
	}
}

function removelast(){
	if (treeList.length>0){
	treeList.pop();
	tree();}else{
		y="Error: Not enough trees";
		document.getElementById('messages').innerHTML=y;
	}
}

function tree3(){
	if (treeList.length>2){
	y=treeList[2] + "<br>";
	document.getElementById('messages').innerHTML=y;}else{
		y="Error: Not enough trees";
		document.getElementById('messages').innerHTML=y;
	}
}

function tree4(){
	if (treeList.length>3){
	y=treeList[3] + "<br>";
	document.getElementById('messages').innerHTML=y;}else{
		y="Error: Not enough trees";
		document.getElementById('messages').innerHTML=y;
	}
}

function az(){
	if (treeList.length>0){
	treeList.sort();
	tree();}else{
		y="Error: Not enough trees";
		document.getElementById('messages').innerHTML=y;
	}
}

function lower(){
	if (treeList.length>0){
	for (i=0; i<treeList.length; i++) {
		var z=treeList[i].toLowerCase();
		treeList[i]=z;
	}
	tree();}else{
		y="Error: Not enough trees";
		document.getElementById('messages').innerHTML=y;
	}
}