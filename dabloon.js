function log(txt) { 
    console.log(txt)
    }
    
   function id(name){ 
return document.getElementById(name);
}

function btn(id, parent) {
var elem = document.createElement('button');
  elem.id = id;
  elem.border = 'none'
  parent.appendChild(elem);
}

function div(id, parent) {
var elem = document.createElement('div');
  elem.id = id;

  parent.appendChild(elem);
}


HTMLElement.prototype.bg = function(value) {
  this.style.backgroundColor = value;
}

HTMLElement.prototype.txt = function(value) {
  this.textContent = value;
}

function getTxt(element) {
    return element.textContent;
  }
  
  function getBg(element) {
    return element.style.backgroundColor;
  }


HTMLElement.prototype.radius = function(radi) {
  this.style.borderRadius = vh(radi);
}



HTMLElement.prototype.x = 
function(xx) {
  this.style.width = vh(xx);
}

HTMLElement.prototype.y = 
function(yy) {
if (yy.includes('%')){
  this.style.height = (yy)
} else {
    this.style.height = vh(yy)
}}

function vh(num)
{
    return num*0.14+"vh";
} 
