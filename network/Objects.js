class Objects {
  constructor() {
    this.x = randomPosition()
    this.y = 0
    
    this.gravity = .005
    this.speed = 0
    
  }
  
  update(){
    this.speedUp()
    
    if (this.y > c.height) {
      this.speed = 0
      this.y = 0
      
      this.x = randomPosition()
    }
    
    this.speed += this.gravity
    
    this.y += this.speed
  }
  
  speedUp(){
    if (this.gravity <= 0.5) {
      if (person.point == 50) {
        this.gravity = 0.05
      }
      if (person.point == 200) {
        this.gravity = 0.1
      }
      if (person.point == 400) {
        this.gravity = 0.5
      }
    }
  }
  draw(){
    this.update()
    
    ctx.fillStyle = 'Red'
    ctx.fillRect(this.x, this.y, 1, 1)
  }
}