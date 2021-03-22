// alert('test')
////////////////

const canvas = document.getElementById("GameCanvas");
const ctx = canvas.getContext("2d");
const groundHeight = 460;
const groundWidth = 960;
const size = 50;
const gravity = 1;
const legPower = 20;
const speed = 10;
const startPos = 100
var relHeight = 0;
var veloc = 0;
var isJump = false;
var obstacles = []
var score = 0



window.addEventListener('keydown', keyDown);
window.addEventListener('keyup', keyUp);

function background(number) {
	switch(number){
		case 1:
			ctx.beginPath();
		    ctx.rect(0, groundHeight, groundWidth, 640 - groundHeight);
		    ctx.fillStyle = "#EFCB68";
		    ctx.fill();
		    ctx.closePath();

		    ctx.beginPath();
		    ctx.rect(0, 0, groundWidth, groundHeight);
		    ctx.fillStyle = "#2F52E0";
		    ctx.fill();
		    ctx.closePath();
		    break;

		case 2:
		    ctx.beginPath();
		    ctx.rect(0, 0, groundWidth, 640);
		    ctx.fillStyle = "#F9CB40";
		    ctx.fill();
		    ctx.closePath();
		    break;
	}

    
}

function obstacleCreate(x, y) {
    ctx.beginPath();
    ctx.rect(x, y, size, size);
    ctx.fillStyle = "#BCED09";
    ctx.fill();
    ctx.closePath();
}

function playerGen(x, y) {
    ctx.beginPath();
    ctx.rect(x, y, size, size);
    ctx.fillStyle = "#FF715B";
    ctx.fill();
    ctx.closePath();
}

function keyDown(e) {

    if (e.keyCode == 32) {
        isJump = true
    }
}

function keyUp(e) {

    if (e.keyCode == 32) {
        isJump = false
    }
}

function collisionCheck(relativeHeight) {
    if (relativeHeight < size) {
        // console.log(relativeHeight-size)
        for (var obstacle = obstacles.length - 1; obstacle >= 0; obstacle--) {
            if (startPos >= obstacles[obstacle]) {
                if (startPos <= obstacles[obstacle]+size) {
                	collided()
                }
            }
            if (startPos + 50 >= obstacles[obstacle]) {
                if (startPos <= obstacles[obstacle]) {
                	collided()
                }
            }
        }
    }
}

function collided(){
	background(2)
	let deathSubText = "nice one."
	let deathText = score.toString()
	ctx.fillStyle = "#000000";
	ctx.font = '200px sans-serif';
    deathTextWidth = ctx.measureText(deathText ).width;
    deathSubTextWidth = ctx.measureText(deathSubText ).width;
	ctx.fillText(deathText , (canvas.width/2) - (deathTextWidth / 2), (canvas.height/2) - (200/4));
	ctx.fillText(deathSubText , (canvas.width/2) - (deathSubTextWidth / 2), (canvas.height/2) + (200));

	throw new Error();
}


function game(relativeHeight) {
    // relativeHeight = 0
    collisionCheck(relativeHeight)
    background(1);
    relativeHeight = jump(relativeHeight, isJump);
    playerGen(startPos, groundHeight - size - relativeHeight);
    // playerGen(startPos, 530);


    for (var obstacle = obstacles.length - 1; obstacle >= 0; obstacle--) {
        obstacleCreate(obstacles[obstacle], groundHeight - size)
        obstacles[obstacle] -= speed
        // obstacles.push(obstacles[obstacles.length-1] + 300 + Math.floor(Math.random() * 1000))

        if (obstacles[obstacle] <= -size) {
            obstacles[obstacle] = Math.max(...obstacles) + 1000 + Math.floor(Math.random() * 500)
            score++;
            console.log(score)
        }
    }
    return relativeHeight
}

function jump(height, jumping) {
    if (height == 0) {
        if (jumping) {
            veloc = legPower;
            // console.log(height)
        } else {
            veloc = 0
        }
    }

    height += veloc
    veloc -= gravity;
    // console.log(height)

    return height;
}

// window.setTimeout(function(){relHeight = game(relHeight);},16); }
// relHeight = game(relHeight);
function gm() {
    relHeight = game(relHeight)
}

obstacles.push(1000 + Math.floor(Math.random() * 1000))
// obstacles.push(Math.max(...obstacles) + 300 + Math.floor(Math.random() * 1000))
// obstacles.push(Math.max(...obstacles) + 300 + Math.floor(Math.random() * 1000))
// obstacles.push(Math.max(...obstacles) + 300 + Math.floor(Math.random() * 1000))
setInterval(gm, 11)