class Perceptron {
  weigths = [0 ,0]
  laneRate = 0.1
  
  constructor() {
    for (var i = 0; i < this.weigths.length; i++) {
      this.weigths[1] = random()
    }
  }
  
  multiplier(input){
    let sum = 0
    
    for (var i = 0; i < this.weigths.length; i++) {
      sum += this.weigths[i] * input[i]
    }
    
    let out = sign(sum)
    return out
  }
  
  train(input, target){
    let direction = this.multiplier(input)
    
    let error = target - direction
    
    //if (error > 0.05) {
    
      for (var i = 0; i < this.weigths.length; i++) {
        this.weigths[i] +=  error *   input[i] * this.laneRate
      }
    //}
    
    
  }
}