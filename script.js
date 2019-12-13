//if button clicked it loads this function for info on keys
let info = () => {
 let body = document.querySelector('body');
 let b1 = document.querySelector('#one')
 b1.textContent = 'WASD to move mover and press me to play';
 body.style.flexDirection = 'column';
 body.style.justifyContent = 'center';
 body.style.alignItems = 'center';

};//end of info function

//if button clicked it loads the game
let loadPage = () => {
  let getRideOfMenu = () => {
    let b1 = document.querySelector('#one');
    let b2 = document.querySelector('#two');
  let body = document.querySelector('body');
 b1.style.display = 'none';
 b2.style.display = 'none';
 body.style.flexDirection = 'row';
 body.style.justifyContent = 'flex-start';
 body.style.alignItems = 'flex-start';


};//end of getRideOfMenu function
getRideOfMenu();
//below are maze levels 1 through 10
let maze1 = [
  `##########`,
  `_.......##`,
  `#..###..##`,
  `#....#..##`,
  `#..###..##`,
  `#..###..##`,
  `#..###..##`,
  `#..###..##`,
  `#....#..!#`,
  `##########`,
];

let maze2 = [
  `###############`,
  `_.........#####`,
  `#..#..##..#####`,
  `#..#..##......#`,
  `#..#..######..#`,
  `#..#..######..#`,
  `#..#..##......#`,
  `#..#..#########`,
  `#..#..........#`,
  `#..#######..###`,
  `#..#######..###`,
  `#...........###`,
  `#..########.###`,
  `#............!#`,
  `###############`,
];
let maze3 = [
  `##############################`,
  `_.....................########`,
  `##########..########..########`,
  `##########..#......#.........#`,
  `#...........#..##..########..#`,
  `#..#######..#..##..########..#`,
  `#..#....##..#..##..####......#`,
  `#..###..#####..##.....########`,
  `#...............####........!#`,
  `##############################`,
];
let maze4 = [
  `##############################`,
  `_....###..........#........###`,
  `###..###..###..####..####..###`,
  `###.......###..#.....####..###`,
  `#############..####..#.......#`,
  `#..............####..#..###..#`,
  `#..################..#..###..#`,
  `#..##........######..#....#..#`,
  `#..##..####..#.......######..#`,
  `#......####..#..###.......#..#`,
  `###########..#..###########..#`,
  `#............#..#.......##...#`,
  `#..###########..#..###..##..##`,
  `#..................###..#...!#`,
  `##############################`,
];
let maze5 = [
  `##############################`,
  `_......####.........#........#`,
  `#..##..#.....#####..#..####..#`,
  `#......#..#..#......#..#.....#`,
  `#####..####..#####..#..#######`,
  `#......#..#..##..#...........#`,
  `...##........#..##..#..#######`,
  `#..#..##..#####..####..#.....#`,
  `#..#####..#...#..#.....#..#..#`,
  `#.........##..#..#..####..#..#`,
  `#####..#......#..#..####..#..#`,
  `#......#..#####..#........####`,
  `#..##..#.....#####..##..###..#`,
  `#..##..###..##########..#....#`,
  `#..##..#................###..#`,
  `#..##..###############..###..#`,
  `#..##..#..##..##..#########..#`,
  `#..#........................!#`,
  `##############################`
];

let maze6 = [
  `##############################`,
  `_........##..#######..##..#..#`,
  `#..####..##......#...........#`,
  `#....##..##..##..#..##..###..#`,
  `#....##......##..#..#####....#`,
  `#..####..####.......#..##..###`,
  `####..####..##..#####..##..###`,
  `#........#..##..#...#..##....#`,
  `#..#######..######..#..####..#`,
  `#..#........##...#..####.....#`,
  `#..#..##..####..##..#.....#..#`,
  `#..#..#####..#......####..####`,
  `#..#..#...........###..#..#..#`,
  `#.....#..###..#..##.......#..#`,
  `#######..#....#..##..###..#..#`,
  `#........###..#.......#...#..#`,
  `#..########################..#`,
  `#...........................!#`,
  `##############################`
];

let maze7 = [
  `##############################`,
  `_..........####.............##`,
  `#..############..#########..##`,
  `#.............#..#.....###..##`,
  `#..#########..#..#..#..###..##`,
  `#..##..#####..#..#..#..###..##`,
  `#..#.....###..#..#..#..###..##`,
  `#..####..###.....#..#.......##`,
  `#..####..#########..##########`,
  `#..####..........#.......#####`,
  `#..####..######..######..#####`,
  `#..#.....######.....#........#`,
  `#..#..#..#########..#######..#`,
  `#.....#.......#####.......#.!#`,
  `##############################`,
];



let maze8 = [

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

let maze9 = [
  `#########################################`, //index 2
  `_.......................#...............#`,
  `#####################...#...#############`,
  `#...#.......#.......#...#...#...........#`,
  `#...#...#...#...#...#...#...#...#####...#`,
  `#.......#.......#.......#.......#...#...#`,
  `#...#########...#############...#...#####`,
  `#...........................#.......#...#`,
  `#######..#####..#########...#...#...#...#`,
  `#..........#............#...#...#.......#`,
  `#...#####..##########...#...#...#########`,
  `#...#...............#.......#...........#`,
  `#...#############...#...#...#####...#...#`,
  `#...#....#......#.......#.......#...#...#`,
  `#...###..#..#....#...#########...#####..#`,
  `#..........#....#...........#.......#...#`,
  `########..####...####..###########...#..#`,
  `#...............#.......#.......#.......#`,
  `#...#############...#...#...#...#####...#`,
  `#...................#.......#..........!#`,
  `#########################################`
];

let maze10 = [
  `#############################################################`, //index 3
  `_.......######.............##............#..................#`,
  `######..##......#..######......#####..#..#########..######..#`,
  `#....#..#########..##..######..#..##..#..................#..#`,
  `###.....##.........##.................#..#################..#`,
  `#....#######...######..########..######..#...............#..#`,
  `###.......#######..##..##.....#..#..###..#..#################`,
  `########..#.........#..##..#..###........#..#...........##..#`,
  `#......#..#..#..#####..##..#..#....#######..#..#..#..#..##..#`,
  `#..#####..#..#.........##..#..###..#.....#..#..#..#..#......#`,
  `#.........#..#..#..######..#..###..####..####..#..#..#..#####`,
  `########..####..#####..#####....#..............#..####..#...#`,
  `##.....#........#.............##################........##..#`,
  `##..#..#..#######..#..#..######...................####...#..#`,
  `#####..####..####..#..#..##..##..##################..#..##..#`,
  `###..........#.....#..#..##..............................#..#`,
  `#....######..####..#..#..##..#############################..#`,
  `###..#..###.....#..#..#..##..#..............##..............#`,
  `#.#..#.......####..#..#..##..###..####..#..#..#..#####..#####`,
  `#.#..######..#..#..#..#..##..#....#..#..#..#..#..#..#####..##`,
  `#.#.......#........#..#####....#..#..#..#..................##`,
  `#.######..##..######.........###..#.....################..###`,
  `#......#..#####..#####..##############..#..........#####..###`,
  `#..#####.............####...............###..#######........#`,
  `#..#......#########..#..#..################..#........#..#..#`,
  `#..#..##..##.........#..#..#..............#######..####..#..#`,
  `#..#####..#########..#..#..#..#..#..####..#..............#..#`,
  `#................##.....#..#..#..####..#..#..###..#..##..#..#`,
  `########..#####..########..#..#........#..#..#..###..##..#..#`,
  `#.............#...............##########.....#........#....!#`,
  `#############################################################`
];

let maze11 = [
  `#############################################################`, //index 4
  `_.........#.....................#.....................#######`,
  `########..##...#######..######..#..#################........#`,
  `##.....#..###..##............#..##########..##############..#`,
  `##..#.......#..##..#..#####..#..........................##..#`,
  `##..#########..##..####..#########..#############..#######..#`,
  `##..#..........##...............................#..#######..#`,
  `##..#..######..################..################...........#`,
  `##..#.......#..#................................##########..#`,
  `##..#########..######..###########..######################..#`,
  `##.............#............#..........#.............#......#`,
  `#############..######..######..#..########..###..#####..##..#`,
  `######..#########..##########..#######..##...............#..#`,
  `#.......................................##..#################`,
  `##########################################..#..............##`,
  `#.......#...................................###..########..##`,
  `#########..####################################..#......#..##`,
  `#.......#..#........#........................##..#..#####..##`,
  `#########..#..####..#..####################..##..#.........##`,
  `#.......#..#.....#..#..#..................#..##..############`,
  `#########..#######..#..#..##############..#..##..#..........#`,
  `#..........#...........#..#......#.....#..#..##.....######..#`,
  `#..##################..#..#..##..#..#..#..#..##########..#..#`,
  `#..#...................#..#..##..#..#..#..#..............#..#`,
  `#..########..########..#..#####..#..#..#..##########..#..#..#`,
  `#..#.........#.........#.........#..#..#..............#..#..#`,
  `#..#..############################..#..################..#..#`,
  `#..#.............#....##............#....................#..#`,
  `#..############..###..##..################################..#`,
  `#.....................##...................................!#`,
  `#############################################################`
];





let currentLevel = maze1;
let levels = [maze1, maze2,maze3];



let lose = () => {
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
}; //end of lose function




const clearTable = (tableEl) => {
  while (tableEl.firstChild) {
    tableEl.removeChild(tableEl.firstChild);
  } //end of clearTable funcition
};

let mover = document.createElement('div');
const drawMaze = (maze) => {
  //creating a function to draw maze
  //defining basic layout

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
  mover.style.color = 'black';
  mover.style.zIndex = '10000';
  mover.style.display = 'block';

  for (let i = 0; i < currentLevel.length; i++) { //loop for tr's

    let rowEl = document.createElement('tr');

    tableEl.appendChild(rowEl);
    rowEl.style.border = 'none';

    for (let x = 0; x < currentLevel[i].length; x++) { //loop for td's
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
drawMaze(currentLevel);



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

  //defining variables to use for win and lose conditions
  let pos = mover.getBoundingClientRect();
  let table = document.querySelector('table');
  let win = document.querySelector('#win');
  let wins = win.getBoundingClientRect();
  let walls = document.querySelectorAll('.wall');

  for (let wall of walls) {
    let wowWalls = wall.getBoundingClientRect();
    //if statement which checks for wall and player collision
    if (pos.x < wowWalls.x + wowWalls.width && pos.x + pos.width > wowWalls.x && pos.y < wowWalls.y + wowWalls.height && pos.y + pos.height > wowWalls.y) {
      lose();
    } else if (pos.x < wins.x + wins.width && pos.x + pos.width > wins.x && pos.y < wins.y + wins.height && pos.y + pos.height > wins.y) {
      for (let i = 0; i < levels.length; i++) {
        currentLevel = levels[i]
        clearTable(table);
        mover.style.left = '10px';
        mover.style.top = '50px';
        drawMaze(currentLevel);


      }

    }

  }



}); //end of eventListener
};//end of on click function for story 5
