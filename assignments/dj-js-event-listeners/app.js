// the square should turn blue when the mouse hovers over it
// the square should turn red when the mouse is held down over the square
// the square should turn yellow when the mouse is let go while hoovering over the square
// the square should turn green when it is double clicked
// the square should turn orange when the scroll button is used
// and the square should turn the color of the first letter used in the five colors
const square = document.getElementById("square");
const squareDoc = document.squareDiv

const blueSquare = (e) => {
  e.preventDefault();
  square.style.backgroundColor = "blue";
};

const redSquare = (e) => {
  e.preventDefault();
  square.style.backgroundColor = "red";
};

const yellowSquare = (e) => {
  e.preventDefault();
  square.style.backgroundColor = "yellow";
};

const greenSquare = (e) => {
  e.preventDefault();
  square.style.backgroundColor = "green";
};

const orangeSquare = (e) => {
  e.preventDefault();
  square.style.backgroundColor = "orange";
};

document.body.addEventListener("keydown", (ev) => {
  if(ev.key === "b"){
     square.style.backgroundColor = "blue";
  }else if(ev.key === "r"){
     square.style.backgroundColor = "red";
  }else if(ev.key === "y"){
     square.style.backgroundColor = "yellow";
  }else if(ev.key === "g"){
     square.style.backgroundColor = "green";
  }

});
 
const orange = () => {
  square.style.backgroundColor = "orange";
}
document.body.addEventListener("wheel", orange);



square.addEventListener("scroll", orangeSquare);

square.addEventListener("dblclick", greenSquare);

square.addEventListener("mouseup", yellowSquare);

square.addEventListener("mousedown", redSquare);

square.addEventListener("mouseover", blueSquare);