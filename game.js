
let health = 100;
//reduce damage by 50%
let block = {
  name: "Block",
  modifier: .5,

}
//reduce damage by 100%
let dodge = {
  name: "Dodge",
  modifier: 1,

}
//reduce damage by 100% & add border
let barrier = {
  name: "Barrier",
  modifier: 1,
}

let items = {
  block: { name: 'Block', modifier: .5 },
  dodge: { name: 'Dodge', modifier: 1 },
  barrier: { name: 'Barrier', modifier: 1 }
}

function drawhealth() {
  if (health < 0) {
    health = 0
  }
  document.querySelector("#health").textContent = health.toString()
}
function slap() {
  //Reduce health by 5
  health -= 5
  drawhealth()
}
function punch() {
  //Reduce health b10
  health -= 10
  drawhealth()
}
function baseballBat() {
  //Reduce health by 20
  health -= 20
  drawhealth()
}

function reset() {
  health = 100
  drawhealth()
}
function addMods() {

}
