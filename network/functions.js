function random() {
  return Math.random() - 1
}

function sign(sum) {
  return sum >= 0.5 ? 1 : 0
}

function randomPosition() {
  return Math.floor(Math.random()*(c.width - 2*0) + 1*0)
}

function insertPoints(point) {
  document.querySelector('p').innerHTML = point
}