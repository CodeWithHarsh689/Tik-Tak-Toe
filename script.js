let boxes = document.querySelectorAll(".btn");
let resetbtn = document.querySelector(".resetbtn");
let newbtn = document.querySelector(".newGame");
let winBar = document.querySelector(".winBar");
let winpar = document.querySelector(".winner")

let turnO = true;

const winningPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
    ];

boxes.forEach((btn) => {
    btn.addEventListener("click",() => {
        // console.log("button clicked");
        
        if(turnO) {
            btn.innerText="O";
            turnO = false;
        }
        else{
            btn.innerText="X";
            turnO = true;
        }

        btn.disabled = true;

        checkWinner ();
    })
})

const disableBoxes = () => {
    for (box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for (box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const resetBtn = () => {
    turnO = true;
    enableBoxes();
    winBar.classList.add("hide");
}

const showWinner = (winner) => {
    winpar.innerText = `Congratulations to Winner ${winner}`;
    winBar.classList.remove("hide");

}

const checkWinner = () => {
    for( let pattern of winningPattern) {
        
        let pos0val = boxes[pattern[0]].innerText;
        let pos1val = boxes[pattern[1]].innerText;
        let pos2val = boxes[pattern[2]].innerText;

        if(pos0val != "" && pos1val != "" && pos2val != "") {
            if(pos0val === pos1val && pos1val === pos2val) {
                // console.log("Winner", pos0val);
                showWinner(pos0val);
                disableBoxes();
            }
        }
    }
}

resetbtn.addEventListener("click", resetBtn);
newbtn.addEventListener("click", resetBtn);



