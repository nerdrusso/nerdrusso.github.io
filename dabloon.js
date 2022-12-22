//it just logs, lol
function log(txt) { 
    console.log(txt)
    }


//gets element by id
function id(name){ 
return document.getElementById(name);
}
function makeDiv(id, parent) {
id = document.createElement('div');
  element.id = id;

  parent.appendChild(id);
}


//creates a buttom
function btn(id, parent) {
var elem = document.createElement('button');
  elem.id = id;

  parent.appendChild(elem);
}


//creates a div
function div(id, parent) {
var elem = document.createElement('div');
  elem.id = id;

  parent.appendChild(elem);
}
 
 
//gets text content 
function getTxt(element) {
    return element.textContent;
  }


//get background color
  function getBg(element) {
    return element.style.backgroundColor;
  }
  
  
//rounds the corners
  HTMLElement.prototype.radius = function(radi) {
  this.style.borderRadius = vh(radi);
}

//converts px to vh
function vh(num)
{
    return num*0.14+"vh";
}


//sets the width
HTMLElement.prototype.x = 
function(xx) {
  this.style.width = vh(xx);
}


//sets the height
HTMLElement.prototype.y = 
function(yy) {
  this.style.height = vh(yy);
}
