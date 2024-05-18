let cards = []
let suits = []
let total = 0
let n = 0

let hasBlackJack = false
let isAlive = true

let cardEl = document.getElementById("card-el")
let totalEl = document.getElementById("total-el")
let resultEl = document.getElementById("result-el")

let playerEl = document.getElementById("player-el")
let betEl = document.getElementById("bet-el")
let submitBtn = document.getElementById("submit-btn")

let playerName = ""
let betAmount = 0

let player = document.getElementById("player-name")
let bet = document.getElementById("bet-amount")

let addbetEl = document.getElementById("addbet-el")

function submit() {
    isAlive = true

    playerName = playerEl.value
    betAmount = betEl.value

    betEl.value = ""

    player.textContent = playerName
    bet.textContent = "$" + betAmount
}

function getRandomNumber() {
    return Math.floor(Math.random() * 13) + 1;
}

function getRandomCharacter() {
    const characters = "♠♥♦♣"
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters.charAt(randomIndex);
}

function startGame() {
    if (betAmount < 50) {
        isAlive = false
        alert("Not enough balance!")
    }

    if ( isAlive === true && n === 0 ) {

        betAmount -= 50
        bet.textContent = "$" + betAmount
        
        total = 0

        for (i=0; i<2; i++) {    
            suits[i] = getRandomCharacter()
            cards[i] = getRandomNumber()

            if ( cards[i] === 1 ) {
                if (total < 10) {
                    cards[i] = 11
                }
                cardEl.textContent += `A${suits[i]} `
            } 
            
            else if ( cards[i] === 11 ) {
                cards[i] = 10
                cardEl.textContent += `J${suits[i]} `
            } 

            else if ( cards[i] === 12 ) {
                cards[i] = 10
                cardEl.textContent += `Q${suits[i]} `
            } 

            else if ( cards[i] === 13 ) {
                cards[i] = 10
                cardEl.textContent += `K${suits[i]} `
            } 
            
            else {
                cardEl.textContent += `${cards[i]}${suits[i]} `
            }

            total += cards[i]
        }

        totalEl.textContent = total
        
        if (total < 21) {      
            resultEl.textContent = `Get another card?`
        }

        if (total === 21) {
            resultEl.textContent = `You've got Blackjack!`
            hasBlackJack = true
            isAlive = false
        }

        if (total > 21) {
            resultEl.textContent = `You lose!`
            isAlive = false
        }

        n = 2
    }
}

function getCard() {
    if (isAlive === true && n > 1) {

        betAmount -= 10
        bet.textContent = "$" + betAmount

        cards.push(getRandomNumber())
        suits.push(getRandomCharacter())

        if ( total < 10 && cards[n] === 1 ) {
            cards[n] = 11   
            cardEl.textContent += `A${suits[i]} ` 
        } 

        else if ( cards[n] === 1 ) {
            cardEl.textContent += `A${suits[i]} `
        } 
        
        else if ( cards[n] === 11 ) {
            cards[n] = 10
            cardEl.textContent += `J${suits[i]} `
        } 

        else if ( cards[n] === 12 ) {
            cards[n] = 10
            cardEl.textContent += `Q${suits[i]} `
        } 

        else if ( cards[n] === 13 ) {
            cards[n] = 10
            cardEl.textContent += `K${suits[i]} `
        } 
        
        else {
            cardEl.textContent += `${cards[n]}${suits[n]} `
        }

        total += cards[n]
        totalEl.textContent = total

        if (total < 21) {
            resultEl.textContent = `Get another card?`
        }

        if (total === 21) {
            resultEl.textContent = `You've got Blackjack!`
            hasBlackJack = true
            betAmount += 500
            bet.textContent = "$" + betAmount
        }

        if (total > 21) {
            resultEl.textContent = `You lose!`
            isAlive = false
        }

        n += 1   
    }

    

    if (hasBlackJack === true) {
        isAlive = false
        resultEl.textContent = `You've got Blackjack!`
    }

}

function reset() {
    for ( i=cards.length; i>=0; i--) {
        cards.pop(); 
    }

    total = 0
    n = 0

    document.getElementById("card-el").textContent = ""
    document.getElementById("total-el").textContent = ""
    document.getElementById("result-el").textContent = ""

    hasBlackJack = false
    isAlive = true
}

// | GREETINGS
let sentence = ["Hello!", "Let's", "play"]
let greetingEl = document.getElementById("greeting-el")

for ( i = 0; i < sentence.length; i++ ) {
    greetingEl.textContent += sentence[i] + " "
}

// | PLAYER CHIPS



