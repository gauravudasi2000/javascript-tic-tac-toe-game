let boxes = document.querySelectorAll(".box");
let msg = document.querySelector(".msg");
let newBtn = document.querySelector("#new-btn");
let resetBtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");

let turnO = true;
let count = 0;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]    
];
const resetGame = () => {
    turnO = true;
    count = 0;
    enabledBtn();
    msgContainer.classList.add("hide");
}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        count++;
        let Iswinner = checkWinner();
        

        if(count === 9 && !Iswinner){
            showDraw();
        }
    });
});




const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val == pos2Val && pos2Val == pos3Val){
                showWinner(pos1Val);
                return true ;
            }
        }
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulation , Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disbalesBtn();
}
const showDraw = () => {
    msg.innerText = "Game was Draw";
    msgContainer.classList.remove("hide");
    disbalesBtn();
}
const disbalesBtn = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}
const enabledBtn = () => {
    for(let btn of boxes){
        btn.disabled = false;
        btn.innerText = "";
    }
}

resetBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame);

