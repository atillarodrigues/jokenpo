const machineScore = document.getElementsByClassName('machine-score')[0].querySelector('span');
const humanScore = document.getElementsByClassName('your-score')[0].querySelector('span');
const winner = document.getElementsByClassName('winner')[0]
let machinePoint = 0
let humanPoint = 0



const playHuman = (humanchoice)=>{
    console.log(humanchoice)
    const result = resultGame(humanchoice)
    changeResult(result)

}
const machinePlay = () => {
    const choice = ['rock' ,'paper', 'scissors']
    const numeroAleatorio = Math.floor(Math.random() * 3);
    return choice[numeroAleatorio]
}

function resultGame (humanchoice){
    machineChoice = machinePlay()

    if (humanchoice === machineChoice){
        machinePoint++
        humanPoint++
        return 'draw'
    }else if(
        humanchoice ==='rock' && machineChoice === 'scissors'||
        humanchoice ==='paper' && machineChoice === 'rock'||
        humanchoice === 'scissors' && machineChoice ==='paper'){
            humanPoint++
            return 'human'
        }else{
            machinePoint++
            return 'machine'
        }

}
function changeResult(result){
    machineScore.innerHTML = `${machinePoint}`
    humanScore.innerHTML = `${humanPoint}`
    winner.classList.remove('draw', 'win', 'lose');
    if (result === 'draw'){
        winner.innerHTML = 'EMPATOU &#x1F613; '
        winner.classList.add('draw')
    }else if(result === 'human'){
        winner.innerHTML = 'VOCÊ GANHOU &#x1F389;'
        winner.classList.add('win')
    }else{
        winner.innerHTML = 'VOCÊ PERDEU &#x1F62B;'
        winner.classList.add('lose')
    }
        

}
