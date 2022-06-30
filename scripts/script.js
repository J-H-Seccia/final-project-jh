const $popup        = $('#pop-up');
const $wrapper      = $('.wrapper');
const $rollBtn      = $('#roll-button');
const $card1        = $('#card1');
const $closeBtn     = $('#close-pop-up');
const $resetBtn     = $('#reset-button');
const $plDice1      = $("#pdice1");
const $plDice2      = $("#pdice2");
const $coDice1      = $("#cdice1");
const $coDice2      = $("#cdice2");
const $popupDiv     = $("#inside-popup");

let displayHandler;
let opacityHandler;
let animationHandler;
let loopHandler;

window.onload = function() {
    $popup.css("display", "none");
    $popup.css("opacity", "0");

}



let playerRdScore = 0;
let playerTotalScore = 0;
    

let computerRdScore = 0;
let computerTotalScore = 0;
    
    $("#player-round-score").html(`<p>${playerRdScore}</p>`);
    $("#player-total-score").html(`<p>${playerTotalScore}</p>`);
    

    $("#computer-round-score").html(`<p>${computerRdScore}</p>`);
    $("#computer-total-score").html(`<p>${computerTotalScore}</p>`);

let roundCounter = 0;

    $("#round-count").html(`<h3>Round: ${roundCounter}</h3>`);

function diceRandomizer(){
    return Math.floor(Math.random() * 6) + 1
}

function changeDiceImage(value, dice)
{
    dice.attr(
        {
            'src' : `images/dice-${value}.png`,
            'alt' : `Dice: ${value}`
        });
}

class Dice{

    constructor(value)
    {
        this.value = value;
    }

    showValue()
    {
        return `<p>Value: ${this.value}</p>`
    }

    roll()
    {
        this.value = diceRandomizer();
    }

    returnValue()
    {
        return this.value;
    }

}

$rollBtn.click(function()
{
    let playerDice1     = new Dice(0);
    let playerDice2     = new Dice(0);
    let computerDice1   = new Dice(0);
    let computerDice2   = new Dice(0);

    playerDice1.roll();
    playerDice2.roll();
    changeDiceImage(playerDice1.value, $plDice1)
    changeDiceImage(playerDice2.value, $plDice2)

    //$("#player-dice-output1").html(playerDice1.showValue());
    //$("#player-dice-output2").html(playerDice2.showValue());

    computerDice1.roll();
    computerDice2.roll();
    changeDiceImage(computerDice1.value, $coDice1)
    changeDiceImage(computerDice2.value, $coDice2)

    //$("#computer-dice-output1").html(computerDice1.showValue());
    //$("#computer-dice-output2").html(computerDice2.showValue());


    
    
    if(playerDice1.value === 1 || playerDice2.value === 1)
    {
        playerRdScore += 0;
        playerTotalScore += 0;

    }else if(playerDice1.value === playerDice2.value)
    {
        playerRdScore += (playerDice1.value + playerDice2.value) * 2;
        playerTotalScore += (playerDice1.value + playerDice2.value) * 2;

    }else
    {
        playerRdScore += (playerDice1.value + playerDice2.value);
        playerTotalScore += (playerDice1.value + playerDice2.value);
    }

    if(computerDice1.value === 1 || computerDice2.value === 1)
    {
        computerRdScore += 0;
        computerTotalScore += 0;

    }else if(computerDice1.value === computerDice2.value)
    {
        computerRdScore += (computerDice1.value + computerDice2.value) * 2;
        computerTotalScore += (computerDice1.value + computerDice2.value) * 2;

    }else
    {
        computerRdScore += (computerDice1.value + computerDice2.value);
        computerTotalScore += (computerDice1.value + computerDice2.value);
    }
    
    $("#player-round-score").html(`<p>${playerRdScore}</p>`);
    $("#player-total-score").html(`<p>${playerTotalScore}</p>`);
    

    $("#computer-round-score").html(`<p>${computerRdScore}</p>`);
    $("#computer-total-score").html(`<p>${computerTotalScore}</p>`);

    playerRdScore = 0;
    computerRdScore = 0;

    roundCounter++;
    $("#round-count").html(`<h3>Round: ${roundCounter}</h3>`);

    if(roundCounter === 3) {

        if(computerTotalScore > playerTotalScore)
        {
            $("#win-lose-heading").html(`<h3>Computer won! Too bad...</h3>`);
            $popupDiv.css("background-color", "red");

        }else
        {
            $("#win-lose-heading").html(`<h3>You won!! Great job.</h3>`);
            $popupDiv.css("background-color", "green");
        }
        $popup.css("display", "block");
        $popup.css("opacity", "0");
    
        const opacityTimer = 1000;
        const displayTimer = 950;
    
        displayHandler = setTimeout(function()
        {   
            
            $popup.css("display", "block");
    
        }, displayTimer);
    
        opacityHandler = setTimeout(function()
        {   
            
            $popup.css("opacity", "1");
        }, opacityTimer);


    
    };
});


$resetBtn.click(function()
{
    changeDiceImage("empty", $plDice1)
    changeDiceImage("empty", $plDice2)

    changeDiceImage("empty", $coDice1)
    changeDiceImage("empty", $coDice2)

    playerRdScore = 0;
    computerRdScore = 0;

    playerTotalScore = 0;
    computerTotalScore = 0;

    $("#player-round-score").html(`<p>${playerRdScore}</p>`);
    $("#player-total-score").html(`<p>${playerTotalScore}</p>`);
    

    $("#computer-round-score").html(`<p>${computerRdScore}</p>`);
    $("#computer-total-score").html(`<p>${computerTotalScore}</p>`);

    roundCounter = 0;
    $("#round-count").html(`<h3>Round: ${roundCounter}</h3>`);
});



$closeBtn.click(function()
{
    changeDiceImage("empty", $plDice1)
    changeDiceImage("empty", $plDice2)

    changeDiceImage("empty", $coDice1)
    changeDiceImage("empty", $coDice2)

    playerRdScore = 0;
    computerRdScore = 0;

    playerTotalScore = 0;
    computerTotalScore = 0;

    $("#player-round-score").html(`<p>${playerRdScore}</p>`);
    $("#player-total-score").html(`<p>${playerTotalScore}</p>`);
    

    $("#computer-round-score").html(`<p>${computerRdScore}</p>`);
    $("#computer-total-score").html(`<p>${computerTotalScore}</p>`);

    roundCounter = 0;
    $("#round-count").html(`<h3>Round: ${roundCounter}</h3>`);
    
    $popup.css("opacity", "0");
    const exitDelay = 1050;

    loopHandler = setTimeout(function()
    {
        $popup.css("display", "none");
    }, exitDelay);
});




