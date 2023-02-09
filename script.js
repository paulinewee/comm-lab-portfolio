
//DRAGGABLE

//Make the DIV element draggagle:
dragElement(document.getElementById("header-content"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

//DATE & TIME

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];

function time() {
  var d = new Date(); 
  var ampm = d.getHours( ) >= 12 ? ' PM' : ' AM';
  
  var sec = d.getSeconds();
  var min = d.getMinutes();
  var h = d.getHours() % 12;
  h = h ? h : 12;

  document.getElementById('timespan').innerHTML = days[d.getDay()] + " " + months[d.getMonth()] + " " + d.getDate() + " " + h + ":" + ("0" + min).substr(-2) + ":" + ("0" + sec).substr(-2) + ampm;
}

setInterval(time, 1000);