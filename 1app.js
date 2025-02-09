let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")
let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

boxes.forEach(box => {
    box.addEventListener("click" , () =>{
        if(turnO === true){
            box.innerHTML = "O";
            turnO = false;
        } else {
            box.innerHTML = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    })
});

const Disableboxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableboxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerHTML = ""
    }
}
const showwinner = (winner) => {
msg.innerHTML = `Congratulation..! Winner is ${winner}`;
msgcontainer.classList.remove("hide");

Disableboxes();
}
const checkWinner = () => {
    for(let pattern of winPatterns) {

        let pos1val = boxes[pattern[0]].innerHTML;
        let pos2val = boxes[pattern[1]].innerHTML;
        let pos3val = boxes[pattern[2]].innerHTML;

        if(pos1val != "" && pos2val != "" && pos3val != "")
            if(pos1val === pos2val && pos2val === pos3val){
                
                showwinner(pos1val);
            }
    }
}

const resetgame = () => {
    turnO = true;
    enableboxes();
    msgcontainer.classList.add("hide")
}

resetBtn.addEventListener("click" , resetgame)