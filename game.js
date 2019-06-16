
let target = {
  health: 100,
  items: []
}

let items = {
  block: { name: 'Block', modifier: .5 },
  dodge: { name: 'Dodge', modifier: 1 },
  barrier: { name: 'Barrier', modifier: 1 }
}

function drawhealth() {
  if (target.health < 0) {
    target.health = 0
  }
  document.querySelector("#health").textContent = target.health.toString()
}
function slap() {
  target.health -= 4 * addMods()
  drawhealth()
  clearMods()
}
function punch() {
  target.health -= 10 * addMods()
  drawhealth()
  clearMods()
}

function baseballBat() {
  target.health -= 20 * addMods()
  drawhealth()
  clearMods()
}

function reset() {
  target.health = 100
  drawhealth()
  clearMods()
}

function block() {
  target.items.push(items.block)
}

function dodge() {
  target.items.push(items.dodge)
}

function barrier() {
  target.items.push(items.barrier)
}

function addMods() {
  let total = 1
  if (target.items.length > 0) {
    for (let index = 0; index < target.items.length; index++) {
      let item = target.items[index];
      total -= item.modifier
    }
    target.items = []
  }
  return total
}

function clearMods() {
  //target.items = [];
}