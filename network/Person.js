class Person {
  x = 0
  y = 0
  label = 0
  trainingIndex = 0
  point = 0
  
  constructor() {
    this.x = randomPosition()
    this.y = c.height - 1
    this.label = this.getLabel()
  }
  
  getLabel(){
    if (Math.floor(this.x - obj.x) == 0) {
      return 1
    }
    else {
      return 0
    }
  }
  
  update(direction){
    const ps = new Perceptron()
    
    const input = [this.x, obj.y]
    
    const n = 1 * -direction
    
    if (this.x - n >= 0 && this.x + n < c.height) {
      this.x += n
    }
  }
  
  colision(){
    const target = this.getLabel()
    const input = [this.x, Math.floor(this.y - obj.y)]
    
    if (Math.floor(this.y - obj.y) == 0 && Math.floor(this.x - obj.x) == 0) {
      this.point -= 1
      
      insertPoints(this.point)
      
      this.x = randomPosition()
      
    }
   
    else if (this.x > c.width || this.x < 0) {
      this.x = randomPosition()
    }
    else if(Math.floor(this.x - obj.x) != 0 && Math.floor(obj.y) == c.height){
      this.point += 1
    
      insertPoints(this.point)
    }
  }
  
  ajust(){
    
    const target = this.getLabel()
    const input = [this.x, Math.floor(this.y - obj.y)]
    const direction = ps.multiplier(input)
    
    if (direction == target) {
      
      this.update(direction)
    } else {
      //console.clear()
      //console.log('ajustar', ps.weigths, direction - target)
      
      ps.train(input, target)
      this.update(direction)
      
    }
  }
  
  tariningPerson(){
    const input = [this.x, Math.floor(this.y - obj.y)]
  }
  
  draw(){
    this.ajust()
    this.colision()
    
    ctx.fillStyle = 'Blue'
    ctx.fillRect(this.x, this.y, 1, 1)
  }
}
