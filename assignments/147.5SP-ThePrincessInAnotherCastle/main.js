

class Player {
  constructor(){
    this.totalCoins =  0;
    this.status = "small";
    this.hasStar = false
  }
  setName(namedPick){
    return this.name = namedPick
  }
  stopGame(){
    clearInterval(intId)
  }
  goHit(){
    if(this.status === "Powered Up"){
      this.status = "Big"
    }else if(this.status === "Big"){
      this.status = "small"
    }else if(this.status === "small"){
      this.stopGame();
    }
  }
  gotPowerUp(){
    
    if(this.status === "small"){
      this.status = "Big"
    }else if(this.status === "Big"){
      this.status = "Powered Up"
    }else if(this.status === "Powered Up"){
      this.hasStar = true
    }

  }
  addCoin(){
    this.totalCoins++;
  }
  print(){
    if(this.hasStar === true){
      console.log(
      `       Name: ${this.name}
       Status: ${this.status}
       Total Coins: ${this.totalCoins}
       You Have A Star!!!`)
    }else{
      console.log(
      `       Name: ${this.name}
       Status: ${this.status}
       Total Coins: ${this.totalCoins}`)
    }
  }
}

const mario = new Player()
console.log(mario.setName("Mario"))

const random = () => {
  let x = Math.floor(Math.random() * 3);
  console.log(x)
  if(x===0){
     mario.goHit();
  }else if(x===1){
     mario.gotPowerUp();
  }else if(x===2){
     mario.addCoin();
  }
  mario.print();
}


let intId 
const startGame = () => {
  intId = setInterval(random, 3000)
}
startGame()

// let x = Math.floor(Math.random() * 3);
// console.log(x);