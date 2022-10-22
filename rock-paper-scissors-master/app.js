// DOM elements
const scoreNumber = document.querySelector("#scoreNumber");

const choseOne = document.querySelector(".chose-one");
const options = document.querySelectorAll(".option");

const picked = document.querySelector(".picked");

const rulesBtn = document.querySelector(".rules-btn");
const modalContainer = document.querySelector(".modal-container");
const closeBtn = document.querySelector(".close-btn");

// creating elements
// you picked div
const youPicked = document.createElement('div');
youPicked.classList.add("you-picked");
youPicked.innerHTML = "<h2>YOU PICKED</h2>"

// You lose-win
const winLose = document.createElement('div');
winLose.classList.add("win-lose");
const playAgain = document.createElement('button');
playAgain.innerHTML = "PLAY AGAIN";
const result = document.createElement('h1');

winLose.append(result);
winLose.append(playAgain);

// house picked
const housePicked = document.createElement('div');
housePicked.classList.add("house-picked");
housePicked.innerHTML = "<h2>THE HOUSE PICKED</h2>";

// Random
let randomOptions ;

//Score
let score = parseInt(scoreNumber.innerHTML);



options.forEach(function (option,index) {
    option.addEventListener("click",function(e){
        score--;
        // console.log(option);
        // console.log(index);
        // console.log(e.target);
        // console.log(option);
        
        randomOptions = Math.floor(Math.random() * 3);
        console.log(randomOptions);

        choseOne.style.display = "none";
        picked.style.display = "flex";

        // Button for options
        const optionBtn = document.createElement('button');

        if((index == 0 && randomOptions == 1) || (index == 1 && randomOptions == 2 ) || (index == 2 && randomOptions == 0 )){
            youPicked.append(option);
            housePicked.append(options[randomOptions]);
            result.innerHTML = "YOU LOST";
            console.log("You Lost");
        }
        else if((index == 0 && randomOptions == 2) || (index == 1 && randomOptions == 0 ) || (index == 2 && randomOptions == 1 ) ){
            youPicked.append(option);
            housePicked.append(options[randomOptions]);
            result.innerHTML = "YOU WIN";
            console.log("You Win");
        }
        else if(index == randomOptions ){
            youPicked.append(option);
            housePicked.append(options[randomOptions]);
            result.innerHTML = "EQUAL";
            console.log("None of you won");
        }

        picked.append(youPicked);
        picked.append(winLose);
        picked.append(housePicked);
        
        console.log(options);

        playAgain.addEventListener("click",function(){
            choseOne.style.display = "flex";
            picked.style.display = "none";
        })

        scoreNumber.innerHTML = `${score}`;

    })

})

console.log(rulesBtn);
console.log(closeBtn);

rulesBtn.addEventListener("click",function(){
    modalContainer.classList.add('show');
});

closeBtn.addEventListener("click",function(){
    modalContainer.classList.remove('show');
})

