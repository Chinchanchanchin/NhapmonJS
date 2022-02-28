

let cans = document.getElementById("canvas");
let ctx = cans.getContext("2d");


let bird = new Image();
let bg = new Image();
let letter = new Image();
let boom = new Image();

bird.src = "img/bet.png";
bg.src = "img/b1.png";
letter.src = "img/heart.png";
boom.src = "img/boom.png";


let score = 0;



let fly = new Audio();
let scor = new Audio();
let gameover = new Audio ();


fly.src ="audio/fly.mp3";
scor.src = "audio/score.mp3";
gameover.src ="audio/gameover.mp3";

let birdd= {
    x: 300,
    y: 80
}

let lter = [];
    lter[0] = {
    x : cans.width,
    y : 400
};


let bm = [];
    bm [0] = {
    x : cans.width,
    y : 0
};


let gOver = new Image();
gOver.src = "img/gover.jpg";

let tryagain = new Image();
tryagain.src = "img/tryagain.jpeg";





function run () {
    ctx.drawImage(bg,0,0);
    ctx.drawImage(bird,birdd.x,birdd.y);
        

    for (let i= 0; i < lter.length; i ++) {
        ctx.drawImage(letter,lter[i].x,lter[i].y);
        lter[i].x -=10;

        if (lter[i].x == cans.width/2) {
            lter.push (
                {
                    x : cans.width,
                    y : Math.floor(Math.random() *(450-0)+0)
                }
            )
                }
            
        if(lter[i].x == 0) lter.splice(0,1);


        
        if (birdd.y+ bird.height >= cans.height ||  birdd.y < 0  || birdd.x <=0 || birdd.x + bird.width>= cans.width) {
            gameover.play();
            ctx.drawImage(gOver,100,100);
            ctx.drawImage(tryagain,600,150);
            ctx.fillStyle = "#000000";
            ctx.font = "50px Verdana bolder";
            ctx.fillText("Your score: " + score,370,cans.height/5);
            return;
          
            }  
       
                
            for (let j= 0; j < bm.length; j ++) {
                ctx.drawImage(boom,bm[j].x,bm[j].y);
                bm[j].x -=6;
        
                if (bm[j].x == 100) {
                    bm.push (
                        {
                            x : cans.width,
                            y : Math.floor(Math.random() *(450-0)+0)
                        }
                    )
                        }
                    if(bm[j].x == 0) bm.splice(0,1); 

                    let ox2 = Math.abs((birdd.x + boom.width/2) - ((bm[j].x + boom.width/2))) <= Math.abs((bird.width + boom.width)/2); 
                    let oy2 = Math.abs((birdd.y + boom.height/2) - (bm[j].y + boom.height/2)) <=  Math.abs((bird.height + boom.height)/2);
                    if (ox2 && oy2 == true) {
                        
                        gameover.play();
                        ctx.drawImage(gOver,100,100);
                        ctx.drawImage(tryagain,600,150);
                        ctx.fillStyle = "#006400";
                        ctx.font = "50px Monaco ";
                        ctx.fillText("Your score: " + score,370,cans.height/5);
                        return;
                    }   
        
    }
   
   

    let ox1 = Math.abs((birdd.x + bird.width/2) - ((lter[i].x + letter.width/2))) <= Math.abs((bird.width + letter.width)/2); 
    let oy1 = Math.abs((birdd.y + bird.height/2) - (lter[i].y + letter.height/2)) <=  Math.abs((bird.height + letter.height)/2);
    if (ox1 && oy1 == true) {
        scor.play();
        lter.splice(0,1)
        score++;
        document.getElementById("score1").innerHTML = "Score: " + score ;    
    }  
      
    }  

   
    birdd.y += 1;
    requestAnimationFrame(run);
    

}


document.addEventListener("keydown", key => {
    switch(key.keyCode) {

        case 37: 
            birdd.x -=70;
            fly.play();
            break;
        case 38:
            birdd.y -=70;
            fly.play();
            break;
        case 39:
            birdd.x +=70;
            fly.play();
            break;
        case 40:
            birdd.y +=70;
            fly.play();
            break;

    }
    
})


function reload() {
    location.reload();
    
} 

let end = new Image;
end.src = "img/mm.png"; 

function endGame() {
    ctx.drawImage(bg,0,0);
    ctx.drawImage(bird,birdd.x,birdd.y);
    ctx.drawImage(end,cans.width/2,cans.height/2);
    ctx.fillStyle = "#006400";
    ctx.font = "80px Verdana bolder";
    ctx.fillText("End Game !!! Thank you",90,cans.height/3);
}
        


function muted() {
    fly.muted = muted;
    scor.muted = muted;
    gameover.muted = muted;
    
}


run () 
 
    

    
