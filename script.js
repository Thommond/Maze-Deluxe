//just put all levels in an array then go by the outer
//array's index for the drawMaze function
let maze1 = [//level one maze
    `########################################`, //index 1
    `_......................#...............#`,
    `#..#################...#...#########...#`,
    `#..#.......#.......#...#...#...........#`,
    `#..#...#...#...#...#...#...#...#####...#`,
    `#..#...#.......#.......#...#...#...#...#`,
    `#..#########...#############...#...#...#`,
    `#..........#...............#...#...#...#`,
    `########################...#...#...#...#`,
    `#......................#...#...#.......#`,
    `#..#################...#...#...#########`,
    `#..#...............#...#...#...........#`,
    `#..#############...#...#...#####...#...#`,
    `#......#.......#.......#.......#...#...#`,
    `#..#...#...#...#...#########...#####...#`,
    `#..#.......#...#...........#.......#...#`,
    `############...#################...#...#`,
    `#..............#.......#.......#.......#`,
    `#..#############...#...#...#...#####...#`,
    `#..................#.......#..........!#`,
    `########################################`


];

let compare = (wowWalls,pos) => {




  if (wallX[i] == pos.x && wallY[j] == pos.y) {
     console.log(dead);
  }

  else {
     //nothing is needed
  }


};//end of compare function

let gameEnd = () => {

};//end of endGame function

let mazeCheck = (pos) => {

};//end of mazeCheck function

//values of different char
let levelValues = {
    '.': 'empty',
    '#': 'wall',
    '_': 'startPosition',
    '!': 'finishPosition'
};

//array.push(domrect.x);

//the clearElement function clears all elements from its argument
const clearTable = (tableEl) => {
  while (tableEl.firstChild) {
    tableEl.removeChild(tableEl.firstChild);
  }//end of clearTable funcition
};

const drawMaze = (maze) => {
  //creating a function to draw maze

  //defining basic layout
  let mover = document.createElement('div');
  let divTable = document.getElementById('cover');
  let tableEl = document.querySelector('table');
    clearTable(tableEl);
   divTable.appendChild(mover);
  //styling the mover
  mover.style.left = '20px';
  mover.style.top = '60px';
  mover.style.backgroundColor = 'black';
  mover.style.width = '20px';
  mover.style.height = '20px';
  mover.style.position = 'absolute';
  mover.setAttribute('id', 'player');
  let node = document.createTextNode('@');
  mover.appendChild(node);
  mover.style.color = 'yellow';
  mover.style.zIndex = '10000';





  //setting table El to the element table
  //clearing if any elements are children of the tableEl

  //loop which
  for (let i = 0; i < maze.length; i++) {//loop for tr's

        let rowEl = document.createElement('tr');

    tableEl.appendChild(rowEl);
    rowEl.style.border = 'none';

    for (let x = 0; x < maze[i].length; x++) {//loop for td's
      let tdEl = document.createElement('td');
          rowEl.appendChild(tdEl)
       tdEl.style.width = '25px';
       tdEl.style.height = '35px';
       tdEl.style.padding = '0px';
       tdEl.style.margin = '0px';
       tdEl.style.border = '0px';
      tdEl.innerHTML = maze[i].charAt(x);

      //conditionals below if/else if the char is a specific character
      //then run the code below


      if (maze[i].charAt(x) == "#") {
        tdEl.style.backgroundColor = 'red';
        tdEl.style.color = 'red';
        tdEl.style.border = 'none';
        tdEl.setAttribute('class', 'wall');
        let wall = tdEl.getBoundingClientRect();

      //  if (joe.y == posY || joe.x == posX ) {
        //  console.log('no');
      //  }
      } //end of text content if
      else if (maze[i].charAt(x) == ".") {
        tdEl.style.backgroundColor = "blue";
        tdEl.style.color = 'blue';
        tdEl.style.border = 'none';
        tdEl.setAttribute('class', 'freespace');

      }//end of text content else if 1
       else if (maze[i].charAt(x) == "_") {
        tdEl.style.backgroundColor = "green";
        tdEl.style.color = 'green';
        tdEl.style.border = 'none';
        tdEl.setAttribute('id','start');
      }// end of text content else if 2
       else if (maze[i].charAt(x) == "!") {
        tdEl.setAttribute('id','win');
        tdEl.style.backgroundColor = 'yellow';
        let win = document.getElementById('win');

        tdEl.style.color = 'yellow';
        tdEl.style.border = 'none';
      }//end of text content else if 3


    }

  };



};//end of drawMaze

//Calling the function drawMaze print the maze and table on the page
drawMaze(maze1);

let mover = document.getElementById('player');
window.addEventListener('keydown',event => {
//the mover moves on left and top axis then parseInt gives a interger
//which I add 5 and px too
if (event.key == 'a') {
  mover.style.left = parseInt(mover.style.left) - 7 + 'px';

}//end of mover if

else if (event.key == 's') {

  mover.style.top = parseInt(mover.style.top) + 7 + 'px';

}//end of mover else if 2

else if (event.key == 'd') {
  mover.style.left = parseInt(mover.style.left) + 7 + 'px';
}//end of mover else if 2

else if (event.key == 'w') {
  mover.style.top = parseInt(mover.style.top) - 7 + 'px';

}//end of mover else if 3
let pos = mover.getBoundingClientRect();
console.log(pos);
console.log(pos);

let walls = document.querySelectorAll('.wall');

for (let wall of walls) {

let wowWalls = wall.getBoundingClientRect();
 if (pos.top > wowWalls.bottom && pos.right < wowWalls.left && pos.bottom < wowWalls.top && pos.left > wowWalls.right ) {
   console.log('wall');
 }

}



});//end of eventListener


/*
let endGameWin = () => {
   removeEventListener( 'keydown', event);
  let winState = document.createElement('p');
  let divTable = document.getElementById('cover');
  divTable.appendChild(winState);
  winState.textContent = 'Yay you won!';
  winState.style.width = '200px';
  winState.style.height = '20px';
  winState.style.border = '1px solid black';
  divTable.style.display = 'flex';
  divTable.style.flexDirection = 'column';
  console.log('win');


};

let endGameLoose = () => {
  removeEventListener( 'keydown', event);

};

*/

    //if # is in the position of the div
    //then cancel animation and make a p element which is created to the window
    //that states you loose
    //also disable the keys


/*
function createTimer(seconds) {
    intervalVar = setInterval(function() {
        makeWhite(mazeWidth, 0, table.width - mazeWidth, table.height);
        if (seconds === 0) {
            clearInterval(intervalVar);
            window.removeEventListener("keydown", moveplayer, true);
            makeWhite(0, 0, table.width, table.height);
            context.font = "40px Arial";
            context.fillStyle = "red";
            context.textAlign = "center";
            context.textBaseline = "middle";
            context.fillText("Time's up!", canvas.width / 2, canvas.height / 2);
            return;
        }
        context.font = "20px Arial";
        if (seconds <= 20 && seconds > 10) {
            context.fillStyle = "yellow";
        } else if (seconds <= 10) {
            context.fillStyle = "red";
        } else {
            context.fillStyle = "green";
        }
        context.textAlign = "center";
        context.textBaseline = "middle";
        var minutes = Math.floor(seconds / 60);
        var secondsToShow = (seconds - minutes * 60).toString();
        if (secondsToShow.length === 1) {
            secondsToShow = "0" + secondsToShow; // if the number of seconds is '5' for example, make sure that it is shown as '05'
        }
        context.fillText(
            minutes.toString() + ":" + secondsToShow,
            mazeWidth + 30,
            table.height / 2
        );
        seconds--;
    }, 1000);
}
*/
