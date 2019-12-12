//just put all levels in an array then go by the outer
//array's index for the drawMaze function
let maze = [

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

let compare = (wowWalls, pos) => {

}; //end of compare function

const clearTable = (tableEl) => {
  while (tableEl.firstChild) {
    tableEl.removeChild(tableEl.firstChild);
  } //end of clearTable funcition
};

let loose = () => {
  //needed variables for end condition
  let table = document.querySelector('table');
  let looseP = document.createElement('section');
  let body = document.querySelector('body');
  let para = document.createElement('p');
  let h1 = document.createElement('h1');
  let button = document.createElement('button');
  clearTable(table);
  //styles for end condition
  mover.style.display = 'none';
  looseP.style.width = '500px';
  looseP.style.height = '500px';
  looseP.style.border = '1px solid black';
  looseP.style.borderRadius = '10px';
  looseP.style.backgroundColor = 'grey';
  looseP.style.zIndex = '10000';
  looseP.style.display = 'flex';
  looseP.style.flexDirection = 'column';
  looseP.style.justifyContent = 'center';
  looseP.style.alignItems = 'center';
  h1.textContent = 'GAME OVER';
  h1.fontFamily = 'sans-serif';
  h1.fontWeight = 'bold';
  h1.style.color = 'black';
  h1.style.height = '100px';
  h1.style.fontSize = '40pt';
  para.textContent = 'Press the Button below to restart.';
  para.fontFamily = 'sans-serif';
  para.style.color = 'black';
  para.style.fontSize = '15pt';
  para.style.height = '50px';
  button.style.border = '1px solid purple';
  button.style.fontSize = '50pt';
  button.style.color = 'purple';
  button.style.backgroundColor = 'red';
  button.textContent = 'Restart??';
  button.style.fontFamily = 'sans-serif';
  button.style.width = '300px';
  button.style.height = '100px';
  button.setAttribute('onclick', 'window.location.reload();');
  button.setAttribute('type', 'button');
  //adding end para to body and other child elements
  body.appendChild(looseP);
  looseP.appendChild(h1);
  looseP.appendChild(para);
  looseP.appendChild(button);

  body.style.justifyContent = 'center';
}; //end of endGame function


//values of different char


//the clearElement function clears all elements from its argument


const drawMaze = (maze) => {
  //creating a function to draw maze
  //defining basic layout
  let mover = document.createElement('div');
  let divTable = document.getElementById('cover');
  let tableEl = document.querySelector('table');
  clearTable(tableEl);
  divTable.appendChild(mover);
  //styling the mover
  mover.style.left = '10px';
  mover.style.top = '50px';
  mover.style.backgroundColor = 'black';
  mover.style.width = '20px';
  mover.style.height = '20px';
  mover.style.position = 'absolute';
  mover.setAttribute('id', 'player');
  mover.textContent = '@';
  mover.style.color = 'yellow';
  mover.style.zIndex = '10000';





  //setting table El to the element table
  //clearing if any elements are children of the tableEl

  //loop which
  for (let i = 0; i < maze.length; i++) { //loop for tr's

    let rowEl = document.createElement('tr');

    tableEl.appendChild(rowEl);
    rowEl.style.border = 'none';

    for (let x = 0; x < maze[i].length; x++) { //loop for td's
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
      } //end of text content if
      else if (maze[i].charAt(x) == ".") {
        tdEl.style.backgroundColor = "blue";
        tdEl.style.color = 'blue';
        tdEl.style.border = 'none';
        tdEl.setAttribute('class', 'freespace');

      } //end of text content else if 1
      else if (maze[i].charAt(x) == "_") {
        tdEl.style.backgroundColor = "green";
        tdEl.style.color = 'green';
        tdEl.style.border = 'none';
        tdEl.setAttribute('id', 'start');
      } // end of text content else if 2
      else if (maze[i].charAt(x) == "!") {
        tdEl.setAttribute('id', 'win');
        tdEl.style.backgroundColor = 'yellow';
        let win = document.getElementById('win');

        tdEl.style.color = 'yellow';
        tdEl.style.border = 'none';
      } //end of text content else if 3


    }

  };



}; //end of drawMaze

//Calling the function drawMaze print the maze and table on the page
drawMaze(maze);


let mover = document.getElementById('player');
window.addEventListener('keydown', event => {
  //the mover moves on left and top axis then parseInt gives a interger
  //which I add 5 and px too
  if (event.key == 'a') {
    mover.style.left = parseInt(mover.style.left) - 10 + 'px';

  } //end of mover if
  else if (event.key == 's') {

    mover.style.top = parseInt(mover.style.top) + 10 + 'px';

  } //end of mover else if 2
  else if (event.key == 'd') {
    mover.style.left = parseInt(mover.style.left) + 10 + 'px';
  } //end of mover else if 2
  else if (event.key == 'w') {
    mover.style.top = parseInt(mover.style.top) - 10 + 'px';

  } //end of mover else if 3
  let pos = mover.getBoundingClientRect();
  let table = document.querySelector('table');
  let win = document.querySelector('#win');
  let wins = win.getBoundingClientRect();
  console.log(wins);
  let walls = document.querySelectorAll('.wall');

  for (let wall of walls) {
    let wowWalls = wall.getBoundingClientRect();
    //if statement which checks for wall and player collision
    if (pos.x < wowWalls.x + wowWalls.width && pos.x + pos.width > wowWalls.x && pos.y < wowWalls.y + wowWalls.height && pos.y + pos.height > wowWalls.y) {
      loose();
    } else if (pos.x < wins.x + wins.width && pos.x + pos.width > wins.x && pos.y < wins.y + wins.height && pos.y + pos.height > wins.y) {
       clearTable(table);
       let win = () => {
         return true;
       };

    } else {
      //nothing to see here
    }

  }


}); //end of eventListener

let nextlevel = () => {

}



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
