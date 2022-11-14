//Grade color
// lowgreen
const grade10 = document.getElementById("grade10");

let index = 0;

const lowgreen = ["#7ED957", "white"];

grade10.addEventListener("click", function onClick() {
  grade10.style.backgroundColor = lowgreen[index];
  grade10.style.color = "black";

  index = index >= lowgreen.length - 1 ? 0 : index + 1;
  console.log("Grade10", index);
});
// midgreen
const grade11 = document.getElementById("grade11");
let index1 = 0;

const midgreen = ["#05A84B", "white"];

grade11.addEventListener("click", function onClick() {
  grade11.style.backgroundColor = midgreen[index1];
  grade11.style.color = "black";

  index1 = index1 >= midgreen.length - 1 ? 0 : index1 + 1;
  console.log("Grade11", index1);
});
// highgreen
const grade12 = document.getElementById("grade12");
let index2 = 0;

const highgreen = ["#4E725D", "white"];

grade12.addEventListener("click", function onClick() {
  grade12.style.backgroundColor = highgreen[index2];
  grade12.style.color = "black";

  index2 = index2 >= midgreen.length - 1 ? 0 : index2 + 1;
  console.log("Grade12", index2);
});
//Project
const project = document.getElementById("project");
let index3 = 0;

const brown = ["#9D5738", "white"];

project.addEventListener("click", function onClick() {
  project.style.backgroundColor = brown[index3];
  project.style.color = "black";

  index3 = index3 >= brown.length - 1 ? 0 : index3 + 1;
  console.log("Project", index3);
});
//Subject
//math
const math = document.getElementById("math");
let index4 = 0;

const pink = ["#CB6CE6", "white"];

math.addEventListener("click", function onClick() {
  math.style.backgroundColor = pink[index4];
  math.style.color = "black";

  index4 = index4 >= pink.length - 1 ? 0 : index4 + 1;
  console.log("Project", index4);
});
//social
const social = document.getElementById("social");
let index5 = 0;

const yellow = ["#F8A229", "white"];

social.addEventListener("click", function onClick() {
  social.style.backgroundColor = yellow[index5];
  social.style.color = "black";

  index5 = index5 >= yellow.length - 1 ? 0 : index5 + 1;
  console.log("Social", index5);
});
//history
const history = document.getElementById("history");
let index6 = 0;

const red = ["red", "white"];

history.addEventListener("click", function onClick() {
  history.style.backgroundColor = red[index5];
  history.style.color = "black";

  index5 = index5 >= red.length - 1 ? 0 : index5 + 1;
  console.log("History", index5);
});
//physics
const physics = document.getElementById("physics");
let index7 = 0;

const darkblue = ["#3D51D6", "white"];

physics.addEventListener("click", function onClick() {
  physics.style.backgroundColor = darkblue[index7];
  physics.style.color = "black";

  index7 = index7 >= darkblue.length - 1 ? 0 : index7 + 1;
  console.log("physics", index7);
});
