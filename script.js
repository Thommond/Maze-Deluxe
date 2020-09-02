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

  `########################################`,
  `_......................#...............#`,
  `#..#################...#...#########...#`,
  `#..#.......#.......#...#...#.......#...#`,
  `#..#...#...#...#...#...#...#...#..##...#`,
  `#..#...#.......#...........#...#...#...#`,
  `#..#########...#############...#...#...#`,
  `#..........#...............#...#...#...#`,
  `#####################..#...#...#...#...#`,
  `#......................#...#...#.......#`,
  `#..#################...#...#...#########`,
  `#..#...............#...#...#...........#`,
  `#..#############...#...#...#####...#...#`,
  `#......#.......#.......#.......#...#...#`,
  `#..#...#...#...#...#########...#####...#`,
  `#..#.......#...#...........#.......#...#`,
  `############...#################...#...#`,
  `#..............#.......#.......#...#...#`,
  `#..#############...#...#...#...#####...#`,
  `#..................#.......#..........!#`,
  `########################################`
];

let maze9 = [
  `#########################################`,
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
  `#############################################################`,
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
  `#############################################################`,
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

//global variables
let currentLevel = maze1;
let levels = [];
let body = document.querySelector('body');
let divTable = document.getElementById('cover');
let tableEl = document.querySelector('table');
//if button clicked it loads this function for info on keys
let info = () => {
  let b1 = document.querySelector('#startGame')// TODO: Make a info page of the game
  b1.textContent = 'WASD to move mover and press me to play';
}; //end of info function
//if button clicked it loads the game for easy access
let loadPage = () => {
  //the function below removes the two menu buttons from the page by making it invisible to the user
  let updatePageMenu = () => {
    let b1 = document.querySelector('#startGame');
    let b2 = document.querySelector('#controls');
    let b3 = document.querySelector('#winners');
    let h1 = document.querySelector('h1');
    let backButton = document.querySelector('#backButton');
    b1.style.display = 'none';
    b2.style.display = 'none';
    b3.style.display = 'none';
    h1.style.display = 'none';
    backButton.style.display = 'flex';
    backButton.setAttribute('onclick', 'window.location.reload();');
    backButton.setAttribute('type', 'button');
    backButton.style.position = 'relative';
    backButton.style.top = '1px';

  }; //end of getRideOfMenu function
  updatePageMenu();


  let lose = () => {
    //needed variables for end condition
    let looseP = document.createElement('section');
    let para = document.createElement('p');
    let h1 = document.createElement('h1');
    let button = document.createElement('button');
    let cover = document.querySelector('#coverTwo');
    clearTable(tableEl);
    //styles for end condition
    mover.style.display = 'none';
    cover.style.display = 'none';
    h1.textContent = 'GAME OVER';
    para.textContent = 'Press the Button below to restart.';
    button.textContent = 'Restart??';
    button.setAttribute('onclick', 'window.location.reload();');
    button.setAttribute('type', 'button');
    //adding end para to body and other child elements
    body.appendChild(looseP);
    looseP.appendChild(h1);
    looseP.appendChild(para);
    looseP.appendChild(button);
  }; //end of lose function

  let ending = () => {
    // Making so a message appears to users who have completed
    //the eleven Mazes
    let endingS = document.createElement('section');
    let para = document.createElement('p');
    let h1 = document.createElement('h1');
    let button = document.createElement('button');
    let cover = document.querySelector('#coverTwo');
    // TODO: Make a form pop up so winners can add their name to a list of winners
    clearTable(tableEl);
    cover.style.display = 'none';
    mover.style.display = 'none';
    h1.textContent = 'Congrats you have won! I hope you enjoyed the journey.';
    para.textContent = 'Press the Button below to play again!.';
    button.textContent = 'Play Again?';
    endingS.setAttribute('id', 'ending');
    button.setAttribute('onclick', 'window.location.reload();');
    button.setAttribute('type', 'button');
    //adding end para to body and other child elements
    body.appendChild(endingS);
    endingS.appendChild(h1);
    endingS.appendChild(para);
    endingS.appendChild(button);
    body.style.backgroundImage = "url('src/winning-Image.jpeg')";

  }

  //clear table function for clearing the levels after every level is completed
  const clearTable = (tableEl) => {
    while (tableEl.firstChild) {
      tableEl.removeChild(tableEl.firstChild);
    } //end of clearTable funcition
  };

  let mover = document.createElement('div');
  let mazeName = document.querySelector('#mazeName');
  mazeName.style.display = 'block';

  const drawMaze = (maze) => {
    //creating a function to draw maze
    //defining basic layout
    clearTable(tableEl);
    tableEl.appendChild(mover);


    //equipting the mover
    mover.style.left = '0px';
    mover.style.top = '42px';
    mover.setAttribute('id', 'player');
    mover.textContent = '@';

    for (let i = 0; i < currentLevel.length; i++) { //loop for tr's

      let rowEl = document.createElement('tr');

      tableEl.appendChild(rowEl);

      for (let x = 0; x < currentLevel[i].length; x++) { //loop for td's
        let tdEl = document.createElement('td');
        rowEl.appendChild(tdEl)

        tdEl.innerHTML = maze[i].charAt(x);


        switch (maze[i].charAt(x)) { //each case is for a specific char which determines how the player interacts
          //with the td in the game
          case '#':
            tdEl.setAttribute('class', 'wall');
            break;
          case '.':
            tdEl.setAttribute('class', 'freespace');
            break;
          case '_':
            tdEl.setAttribute('id', 'start');
            break;
          case '!':
            tdEl.setAttribute('id', 'win');
            break;

        }

      }

    };

  }; //end of drawMaze

  // print the maze and table on the page
  drawMaze(currentLevel);


  window.addEventListener('keydown', event => {
    //mover based on which key is press then the action will occur
    switch (event.key) {
      //the mover moves on left and top axis then parseInt gives a integer
      //which adds 10 and px.
      case 'w':
        mover.style.top = parseInt(mover.style.top) - 10 + 'px';
        break;

      case 'a':
        mover.style.left = parseInt(mover.style.left) - 10 + 'px';
        break;

      case 's':
        mover.style.top = parseInt(mover.style.top) + 10 + 'px';
        break;

      case 'd':
        mover.style.left = parseInt(mover.style.left) + 10 + 'px';
        break;

      case '`':// To test ending condition will remove before deploy
        currentLevel = maze11;
        break;

      case '2':
        currentLevel = maze1;// Cheat codes to change to prefered level
        break;

      case '3':
        currentLevel = maze2;
        break;

      case '4':
        currentLevel = maze3;
        break;

      case '5':
        currentLevel = maze4;
        break;

      case '6':
        currentLevel = maze5;
        break;

      case '7':
        currentLevel = maze6;
        break;

      case '8' :
        currentLevel = maze7;
        break;

      case '9':
        currentLevel = maze8;
        break;

      case '-':
        currentLevel = maze9;
        break;

      case '=':
        currentLevel = maze10;
        break;
    }

    //defining variables to use for win and lose conditions
    let pos = mover.getBoundingClientRect();
    let win = document.querySelector('#win');
    let wins = win.getBoundingClientRect();
    let walls = document.querySelectorAll('.wall');

    for (let wall of walls) {
          let wowWalls = wall.getBoundingClientRect();
          // checks for wall and player collision
          let losingPos = pos.x < wowWalls.x + wowWalls.width && pos.x + pos.width > wowWalls.x && pos.y < wowWalls.y + wowWalls.height && pos.y + pos.height > wowWalls.y

          if (losingPos) {
            lose();
          }
          if (pos.x == 0) {
            lose();
          }
        }
         // the wining cordinate of each level
         let winingPos = pos.x < wins.x + wins.width && pos.x + pos.width > wins.x && pos.y < wins.y + wins.height && pos.y + pos.height > wins.y

         if (winingPos) {

         // for each level the switch statement will update the levels array
         switch (currentLevel) {
           case maze1:
              // Added text content updates so users can know what level they are completing
              mazeName.textContent = `Current maze is maze 2`;
              levels.push(maze2)
             break;

           case maze2:
              mazeName.textContent = `Current maze is maze 3`;
              levels.push(maze3);
             break;

            case maze3:
              mazeName.textContent = `Current maze is maze 4`;
              levels.push(maze4);
              break;

            case maze4:
              mazeName.textContent = `Current maze is maze 5`;
              levels.push(maze5);
              break;

            case maze5:
              mazeName.textContent = `Current maze is maze 6`;
              levels.push(maze6);
              break;

            case maze6:
              mazeName.textContent = `Current maze is maze 7`;
              levels.push(maze7);
              break;

            case maze7:
              mazeName.textContent = `Current maze is maze 8`;
              levels.push(maze8);
              break;

            case maze8:
              mazeName.textContent = `Current maze is maze 9`;
              levels.push(maze9);
              break;

            case maze9:
              mazeName.textContent = `Current maze is maze 10`;
              levels.push(maze10);
              break;

            case maze10:
              mazeName.textContent = `Current maze is maze 11`;
              levels.push(maze11);
              break;

            case maze11:
              ending();
            break;

         }



         // for the length of the levels array
         for (let i = 0; i < levels.length; i++) {

              // print each level via the DOM
              currentLevel = levels[i]
              clearTable(tableEl);
              mover.style.left = '10px';
              mover.style.top = '50px';
              drawMaze(currentLevel);

          }


        }

  }); //end of eventListener

}; //end of on click function
