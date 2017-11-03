//Задача 1.
document.querySelector('#block').onmousemove = function(event){
	document.querySelector('#offx').innerHTML = event.offsetX;
	document.querySelector('#offy').innerHTML = event.offsetY;
}
//Задача 2.
document.querySelector('.z2').ondblclick=function(){
	this.style.background = "url(https://st2.depositphotos.com/5266903/8713/v/450/depositphotos_87132840-stock-illustration-open-folder-flat-icon.jpg)";
	this.style.backgroundSize = 'cover';
}
//Задача 3.
var output = document.querySelector('output');
var out = '';
for (var i = 0; i < 350; i++) {
	out += `<div class="boxx"></div>`;
}
output.innerHTML = out;
var bx = document.getElementsByClassName('boxx');
for (var i = 0; i < bx.length; i++) {
	bx[i].onmouseenter = function() {
		this.style.borderRadius = '50%';
	};
	bx[i].onmouseleave = function() {
		this.style.borderRadius = 0;
	}
}

//Задача 4-1.
// var	minImg = document.querySelectorAll('.min-img');
// document.onclick =function(event){
// //console.log(event.target);
// if(event.target.className == 'min-img'){
// 	changeImg(event.target);
// 	}
// }

// function changeImg(target){
// 	document.querySelector('#main').src = target.src;
// }
////////Задача 4-2.
var out = document.querySelector('#boxik');
var photo = document.getElementsByClassName('photo');
for (var i = 0; i < photo.length; i++) {
	photo[i].onclick = function() {
		out.style.backgroundSize = 'contain';
		out.style.backgroundImage = 'url("' + this.currentSrc + '")';
	}
}
/////////////Задача 5.
var movingBox = document.querySelector('#movingBox').offsetTop;
document.querySelector('#movingBox').onclick = function() {
	movingBox = movingBox + 100;
	this.style.marginTop = movingBox + 'px';
}
/////Задача 6.
var orangeBox = document.querySelector('#orangebox');
var position = 0;
var switchMove = document.querySelector('#switch');
switchMove.onclick = function() {
	if (position == 0) {
		orangeBox.style.float = 'none';
		orangeBox.style.margin = '0 auto';
		position++;
		console.log(position);
	} else if (position == 1) {
		orangeBox.style.float = 'right';
		position++;
		console.log(position);
	} else if (position == 2) {
		orangeBox.style.float = 'left';
		position = 0;
		console.log(position);
	}
}
////


