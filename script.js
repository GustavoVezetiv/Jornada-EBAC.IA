import utils from "./utils";
import RNA from "./utils";
import controls from "./utils";

const SAMPLE = 20;
const game = Runner.instance_;
let dinoList = [];
let dinoIndex = 0;


let bestScore = 0;
let bestRNA = nulll;

function fillDinoList () {
    for(let i = 0; i < SAMPLE; i++) {
        dinoList[i] = new RNA(3, [10, 10, 2])
        dinoList[i].load(bestRNA)
            if(i > 0) dinoList[i].mutate(0.5)


    }

    console.log ('Lista de Dinossauro Criada')

}

setTimeout(() => {
    fillDinoList()
    constrols.dispatch('jump')


}, 1000)

setInterval(()=> {
    if (!game.activated) return

    const dino = dinoList[dinoIndex]

    if (game.crashed) {
            if (dino.score > bestScore) {
                bestScore = dino.score
                bestRNA = dino.save()
                console.log ('Melhor Pontuação:', bestScore)

            }

            dinoIndex++
        

        if (dinoIndex === SAMPLE) {
            fillDinoList();
            dinoIndex = 0
            bestScore = 0
            
        }
        game.restart()
    }
    const {tRex, horizon, currentSpeed, distanceRan, dimensions} = game
    dino.score = disdtance - 2000

    const player = {
        x: tRex.xPos,
        y: tRex.yPos,
        speed: currentspeed

    };

    const [obstacle] = horizon.obstacles
    .map((obstacle) =>{
            return {
                X: obstacle.xPos,
                y: obstacle.yPos

            }
    })
        .filter((obstacle) => obstacle.x > player.x )

        if (obstacle) {
            const distance = 1 - (utils.getDistance(player, obstacle) / dimensions.WIDTH);
            const speed = player.speed / 6
            const height = Math.tanh(105 - obstacle.y)

                const [jump, crouch] = dino.compute([
                    distance,
                    speed, 
                    height
                ]);

        if (jump === crouch) return ;
        if (jump) constrol.dispatch('jump') // se for V ele pula
        if (crouch) constrols.dispatch('crouch')

        };

}, 100);

/*
const s = document.createElement('script');
s.type = 'module';
s.src = 'http://localhost:5500/script.js'
document.body.appendChild(s);
  */















