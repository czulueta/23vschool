// const head = document.getElementById("header").createElement("h1");

// head.textContent = "Cesar";
// document.body.appendChild(head);

const titleElement = document.createElement("h1");
titleElement.textContent = "Local Farm Police";
const labelName = document.getElementById("header")
labelName.appendChild(titleElement);

const authorDiv = document.createElement("div");
authorDiv.setAttribute("id", "authorDiv");
labelName.appendChild(authorDiv);

const unorderedLi = document.createElement("ul");
unorderedLi.setAttribute("id", "orderLi");
authorDiv.appendChild(unorderedLi);

const listItem = document.createElement("li");
listItem.setAttribute("id", "list");
unorderedLi.appendChild(listItem);

const nameSpan = document.createElement("span");
nameSpan.setAttribute("class", "myName");
nameSpan.textContent = "Cesar Zulueta ";
unorderedLi.appendChild(nameSpan);

// const wordDiv = document.createElement("div");
// wordDiv.setAttribute("id", "wordDiv");
// labelName.appendChild(wordDiv);

const wordsH3 = document.createElement("span");
wordsH3.setAttribute("class", "words");
wordsH3.textContent = " wrote this in Javascript";
unorderedLi.appendChild(wordsH3);

// - Write some custom JavaScript to automatically change the words of the conversation to something fun and good.
// - Write some JavaScript that will wait until the user clicks the "clear" button, and then clears out all conversation.

const left = document.getElementsByClassName("left");
const right =document.getElementsByClassName("right");
console.log(left);
left[0].textContent = " HELP!!! HELP!!! I NEED HELP IMMEDIATELY!!";
right[0].textContent = " This is the local Farm police how can i help sir? "
left[1].textContent = " I have a cat burglar in my house ";
right[1].textContent = " Sorry sir i think you have the wrong number this is the farm police we only deal with animals";

const theme = document.getElementById("themeDropDown")
theme.addEventListener("click", () => {
  const themeOne = theme.themeOne.value
  const themeTwo = theme.themeTwo.value
  if(themeOne){
    return document.getElementsByClassName("left").setAttribute("class","leftClass");
  }else if(themeTwo){
    return document.getElementsByClassName("right").setAttribute("class", "rightClass");
  }
  

})
// const change() = () => {

// }
// const theme1 = document.body.drop.themeOne.value;
// const theme2 = document.body.drop.themeTwo.value;
