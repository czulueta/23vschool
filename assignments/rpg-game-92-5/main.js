const readlineSync = require("readline-sync");

const userName = readlineSync.question("Player what is your name? ")
console.log("Welcome to the game " + userName)

const ask = require("readline-sync");
console.log("Ephesians 6:12 For we wrestle not against flesh and blood, but against principalities, against powers, against the rulers of the darkness of this world, against spiritual wickedness in high places. 13 Wherefore take unto you the whole armour of God, that ye may be able to withstand in the evil day, and having done all, to stand.")
let username = ask.question("What is your name ");
console.log("|--------------------------------------------------------------------------------------------------------------|")
console.log("If it be the Most High's will, may he bless you " + username + " And know this before you continue. 1 Corinthians 10:13 There hath no temptation taken you but such as is common to man: but God is faithful, who will not suffer you to be tempted above that ye are able; but will with the temptation also make a way to escape, that ye may be able to bear it.");

function Enemy(name, hp, num) {
    this.name = name;
    this.hp = 100;
    this.attack = function () {
        return Math.floor(Math.random() * num) + 5
    };
}

const alexandria = new Enemy("Alexandria", 100, 25)
const gordo = new Enemy("Gordo", 100, 50)
const luke = new Enemy("Luke", 100, 35)

const enemies = [alexandria, gordo, luke]

function Player(name) {
    this.name = name;
    this.hp = 100;
    this.inventory = ["King James Version Bible"];
    this.isStillAlive = true;
    this.hasOverComedTemptation = false;
    this.attack = function () {
        return Math.floor(Math.random() * 40) + 5
    }
}
const lowerLevelPriest = new Player(username)

while (!lowerLevelPriest.hasOverComedTemptation && lowerLevelPriest.isStillAlive) {
    let beginJourney = ask.keyIn(username + " Are you ready to start your journey? Press [w] to walk and press on. Press [i] to check your inventory, or press [q] to quit the game. ", {
        limit: "wiq"
    })
    if (beginJourney === "w") {
        walk()
    } else if (beginJourney === "i") {
        checkInventory()
        // console.log(lowerLevelPriest.inventory)
    } else if (beginJourney === "q") {
        lowerLevelPriest.isStillAlive = false
        console.log("The Test Over")
    }

}

function checkInventory() {
    console.log(`Your inventory is ${lowerLevelPriest.inventory}`)
}




function walk() {
    if (enemies.length <= 0) {
        lowerLevelPriest.hasOverComedTemptation = true;
        console.log(`You pass Today's Test!!! ${lowerLevelPriest.name}!!! ALL PRAISES GLORY AND HONOR BE UNTO THE MOST HIGH GOD THROUGH CHRIST HIS PERFECT SON!!!`)
    } else {
        let random = Math.floor(Math.random() * 3) + 1

        if (random < 3) {
            console.log(" Matthew 7:13 Enter ye in at the strait gate: for wide is the gate, and broad is the way, that leadeth to destruction, and many there be which go in thereat:14 Because strait is the gate, and narrow is the way, which leadeth unto life, and few there be that find it.")
        } else {
            encounterEnemy()
        }
    }
}

// function endGame() {
//     if (enemies.length === 0)
//         lowerLevelPriest.hasOverComedTemptation === true
// }

function encounterEnemy() {
    console.log('encountered')
    let enemy = enemies[Math.floor(Math.random() * enemies.length)]

    let beginJourney = ask.keyIn(`Your being tempted by ${enemy.name} would you like to run [r], or fight [f] the temptation `, {
        limit: "rf"
    })
    if (beginJourney === "r") {
        run(enemy)
    } else if (beginJourney === "f") {
        fight(enemy)
    } else {
        enemy.hp = 0;
        let index = enemies.indexOf(enemy);
        console.log('-----------------------------------------------------')
        console.log(`Enemy: ${enemy.name} and index: ${index}`)
        console.log(`arr before splice: ${enemies}`)
        enemies.splice(index, 1);
        console.log(`arr after splice: ${enemies}`)


    }

}

function run(enemy) {
    lowerLevelPriest.hp -= enemy.attack()
    console.log(`You got attacked from ${enemy.name} while running but remember this 2 timothy 1:7 For God hath not given us the spirit of fear; but of power, and of love, and of a sound mind.`)
}

function fight(enemy) {
    console.log('spiritual battle commences....................')
    while(lowerLevelPriest.hp > 0 && enemy.hp > 0){
        if (enemy === alexandria) {
            fightAlexandria(enemy)
        }else if (enemy === gordo) {
            fightGordo(enemy)
        }else if (enemy === luke) {
            fightLuke(enemy)
        }
    }
    if (lowerLevelPriest.hp <= 0) {
        lowerLevelPriest.isStillAlive = false
        console.log(`2 Esdras 16:65 And when your sins are brought forth, ye shall be ashamed before men, and your own sins shall be your accusers in that day.`)
    } else {
        console.log(`${enemy.name} did not tempt ${lowerLevelPriest.name}. \n ${lowerLevelPriest.name}'s hp is now ${lowerLevelPriest.hp} \n ${enemy.name}'s is now ${enemy.hp}`)
    }
}


function fightAlexandria(enemy){
    let answer = ask.keyIn(`Would you like to kiss me?`, {
        limit: "yn"
    });
    if (answer === "y") {
        lowerLevelPriest.hp -= enemy.attack()
    } else if (answer === 'n') {
        enemy.hp -= lowerLevelPriest.attack()
    }
    let answer2 = ask.keyIn(`Can you feel on my booty?`, {
        limit: "yn"
    })
    if (answer2 === "y") {
        lowerLevelPriest.hp -= enemy.attack()
    } else if (answer2 === "n") {
        enemy.hp -= lowerLevelPriest.attack()
    }
    let answer3 = ask.keyIn(`Will you sleep with me and please fulfill my needs?`, {
        limit: "yn"
    })
    if (answer3 === "y") {
        lowerLevelPriest.hp -= enemy.attack()
    } else if (answer3 === "n") {
        enemy.hp = 0
        lowerLevelPriest.inventory.push(" Apocrypha ")
        lowerLevelPriest.hp += 25
        console.log(`Praise the most high you overcame the temptation of Alexandria and have recieved increased health and a new sword, "The Apocrypha"`)
        let index = enemies.indexOf(enemy);
        // console.log(`Enemy: ${enemy.name} and index: ${index}`)
        console.log(`arr before splice: ${enemies}`)
        enemies.splice(index, 1);
        console.log(`arr after splice: ${enemies}`)
    } else if (enemies.length === 0) {
        console.log(`You pass the Test!!! ${lowerLevelPriest.name} ALL PRAISES GLORY AND HONOR BE UNTO THE MOST HIGH GOD THROUGH CHRIST HIS PERFECT SON!!!`)
        console.log(`${enemy.name} did not tempt ${lowerLevelPriest.name}. \n ${lowerLevelPriest.name}'s hp is now ${lowerLevelPriest.hp} \n ${enemy.name}'s hp is now ${enemy.hp}`)
        return console.log(`you overcame a spirit`)
    }
}

function fightGordo(enemy){
    let ans1 = ask.keyIn(`If i gave you a million dollars, would you want ten million dollars more instead?`, {
        limit: "yn"
    });
    if (ans1 === "y") {
        lowerLevelPriest.hp -= enemy.attack()
    } else if (ans1 === 'n') {
        enemy.hp -= lowerLevelPriest.attack()
    }
    let ans2 = ask.keyIn(`If i made you the boss of your company, would you want more and rather be the owner of the company instead?`, {
        limit: "yn"
    })
    if (ans2 === "y") {
        lowerLevelPriest.hp -= enemy.attack()
    } else if (ans2 === "n") {
        enemy.hp = 0
        lowerLevelPriest.inventory.push(" Book of Enoch ")
        lowerLevelPriest.hp += 25
        console.log(`Praise the most high you overcame the temptation of Gordo and have recieved increased health and a new sword, " The Book of Enoch "`)
        let index = enemies.indexOf(enemy);
        // console.log(`Enemy: ${enemy.name} and index: ${index}`)
        // console.log(`arr before splice: ${enemies}`)
        enemies.splice(index, 1);
        // console.log(`arr after splice: ${enemies}`)
    } else if (enemies.length === 0) {
        console.log(`You pass Today's Test!!! ${lowerLevelPriest.name} ALL PRAISES GLORY AND HONOR BE UNTO THE MOST HIGH GOD THROUGH CHRIST HIS PERFECT SON!!!`)
        console.log(`${enemy.name} did not tempt ${lowerLevelPriest.name}. \n ${lowerLevelPriest.name}'s hp is now ${lowerLevelPriest.hp} \n ${enemy.name}'s hp is now ${enemy.hp}`)
        return console.log(`you overcame a spirit`)
    }
}

function fightLuke(enemy){
    let answerOne = ask.keyIn(`If i slapped your mom, would you want to kill me?`, {
        limit: "yn"
    })
    if (answerOne === "y") {
        lowerLevelPriest.hp -= enemy.attack()
    } else if (answerOne === 'n') {
        enemy.hp -= lowerLevelPriest.attack()
    }
    let answerTwo = ask.keyIn(`If i stole your girlfriend and all your money would you hate me?`, {
        limit: "yn"
    })
    if (answerTwo === "y") {
        lowerLevelPriest.hp -= enemy.attack()
    } else if (answerTwo === "n") {
        enemy.hp -= lowerLevelPriest.attack()
    }
    let answerThree = ask.keyIn(`If i killed your entire race including your family would you hate me forever?`, {
        limit: "yn"
    })
    if (answerThree === "y") {
        lowerLevelPriest.hp -= enemy.attack()
    } else if (answerThree === "n") {
        enemy.hp = 0
        lowerLevelPriest.inventory.push(" Pseudepigrapha ")
        lowerLevelPriest.hp += 25
        console.log(`Praise the most high you overcame the temptation of Luke and have recieved increased health and a new sword, "The Pseudepigrapha"`)
        let index = enemies.indexOf(enemy);
        // console.log(`Enemy: ${enemy.name} and index: ${index}`)
        // console.log(`arr before splice: ${enemies}`)
        enemies.splice(index, 1);
        // console.log(`arr after splice: ${enemies}`)
    } else if (enemies.length === 0) {
        console.log(`You pass Todays Test!!! ${lowerLevelPriest.name} ALL PRAISES GLORY AND HONOR BE UNTO THE MOST HIGH GOD THROUGH CHRIST HIS PERFECT SON!!!`)
        console.log(`${enemy.name} did not tempt ${lowerLevelPriest.name}. \n ${lowerLevelPriest.name}'s hp is now ${lowerLevelPriest.hp} \n ${enemy.name}'s hp is now ${enemy.hp}`)
        return console.log(`you overcame a spirit`)
    }
}
  