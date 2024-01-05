const c = document.querySelector('canvas')
c.height = 10
c.width = 10

const ctx = c.getContext('2d')

const ps = new Perceptron()
let obj = new Objects()
let  person = new Person()

loop()

function loop() {
  ctx.clearRect(0,0,c.width, c.height)
  
  
  person.draw()
  obj.draw()
  
  requestAnimationFrame(loop)
}