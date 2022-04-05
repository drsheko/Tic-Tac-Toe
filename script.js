const gameBoard = [];
const winBoard = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]  
const player = function(name,marker){
    const getName = () => name;
    const getMarker = () => marker;
    let moves = [];
    return {getName, getMarker , moves};
}

let player1 = player("shady",'X')
let player2 = player("sheko","O")

let currentPlayer= player1;

const p1Btn = document.querySelector('.p1Btn')
p1Btn.addEventListener('click', ()=>currentPlayer=player1)

const p2Btn = document.querySelector('.p2Btn')
p2Btn.addEventListener('click', ()=>currentPlayer=player2)


const spots = document.querySelectorAll('.spot')

spots.forEach(spot=>spot.addEventListener('click', fillSpot))
function fillSpot(e){
    e.target.textContent += currentPlayer.getMarker();
    e.target.removeEventListener('click', fillSpot)
    let move = e.target.id;
    
    currentPlayer.moves.push(move)
    let currentPlayerMoves = currentPlayer.moves
    alert(currentPlayerMoves)
    
    if (currentPlayer === player1){
        return currentPlayer = player2
    } else {  return currentPlayer=player1
    }
      
    } 
  
    
 /*function checkWinner(currentPlayerMoves){
     let orderedMoves = currentPlayerMoves.sort()
      for(let i =0; i<winBoard.length;i++){
        if (orderedMoves === winBoard[i]){
            alert( currentPlayer.getName)
        }

  }}*/
    
