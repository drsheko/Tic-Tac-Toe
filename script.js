const gameBoard = [];
const player = function(name,marker){
    const getName = () => name;
    const getMarker = () => marker;
    return {getName, getMarker};
}

const player1 = player("shady",'X')
const player2 = player("sheko","O")

let currentPlayer;

const p1Btn = document.querySelector('.p1Btn')
p1Btn.addEventListener('click', ()=>currentPlayer=player1)

const p2Btn = document.querySelector('.p2Btn')
p2Btn.addEventListener('click', ()=>currentPlayer=player2)


function switchPlayer(currentPlayer){
    if (currentPlayer=== player1){
        return currentPlayer=player2
    }
    else if(currentPlayer===player2){
       return  currentPlayer=player1
    }
 return currentPlayer
}


const spots = document.querySelectorAll('.spot')
spots.forEach(spot=>spot.addEventListener('click', fillSpot))
function fillSpot(e){
    
    e.target.textContent += currentPlayer.getMarker()
    e.target.removeEventListener('click', fillSpot)
    if (e.target.textContent==="X"){
        return switchPlayer(player1)}
    else if(e.target.textContent==="O"){
         return switchPlayer(player2)}    
    }