//level one maze
let maze1 = [
  `#########################################`, //index 1
  `!.......................#...............#`,
  `#...#################...#...#########...#`,
  `#...#.......#.......#...#...#...........#`,
  `#...#...#...#...#...#...#...#...#####...#`,
  `#...#...#.......#.......#...#...#...#...#`,
  `#...#########...#############...#...#...#`,
  `#...........#...............#...#...#...#`,
  `#########################...#...#...#...#`,
  `#.......................#...#...#.......#`,
  `#...#################...#...#...#########`,
  `#...#...............#...#...#...........#`,
  `#...#############...#...#...#####...#...#`,
  `#.......#.......#.......#.......#...#...#`,
  `#...#...#...#...#...#########...#####...#`,
  `#...#.......#...#...........#.......#...#`,
  `#############...#################...#...#`,
  `#...............#.......#.......#.......#`,
  `#...#############...#...#...#...#####...#`,
  `#...................#.......#.........._#`,
  `#########################################`
];
//values of different char
let levelValues = {
  '.': 'empty',
  '#': 'wall',
  '_': 'startPosition',
  '!': 'finishPosition'
};
//the clearElement function clears all elements from its argument
const clearTable = (tableEl) => {
  while (tableEl.firstChild) {
    tableEl.removeChild(tableEl.firstChild);
  }
};

const drawMaze = (maze) => {
  //creating a function
  let mover = document.createElement('div');
  let divTable = document.getElementById('cover');
  let tableEl = document.querySelector('table');
  divTable.appendChild(mover);
  tableEl.style.padding = '10px';
  tableEl.style.width = '1050px';
  tableEl.style.height = '1050px';
  divTable.style.width = '1050px';
  divTable.style.height = '1050px';
  divTable.style.position = 'absolute';
  mover.style.left = '995px';
  mover.style.top = '970px';
  mover.style.backgroundColor = 'black';
  mover.style.width = '15px';
  mover.style.height = '15px';
  mover.style.position = 'absolute';
  mover.setAttribute('id', 'player');
  mover.style.zIndex = '10000';


  //setting table El to the element table
  clearTable(tableEl);
  //clearing if any elements are children of the tableEl

  //loop which
  for (let i = 0; i < maze.length; i++) {

    let rowEl = document.createElement('tr');

    tableEl.appendChild(rowEl);
    rowEl.style.border = 'none';

    rowEl.style.border = '1px solid black';
    //loop which
    for (let x = 0; x < maze[i].length; x++) {
      let tdEl = document.createElement('td');
      rowEl.appendChild(tdEl)
      let divEl = document.createElement('div');
       tdEl.appendChild(divEl);
       tdEl.style.width = '25px';
       tdEl.style.height = '40px';
      divEl.innerHTML = maze[i].charAt(x);


      //conditionals below if/else if the char is a specific character
      //then run the code below


      if (maze[i].charAt(x) == "#") {
        tdEl.style.backgroundColor = 'red';
        tdEl.style.color = 'red';
        tdEl.style.border = 'none';
        tdEl.style.overflow = 'hidden';
      } else if (maze[i].charAt(x) == ".") {
        tdEl.style.backgroundColor = "blue";
        tdEl.style.color = 'blue';
        tdEl.style.border = 'none';
      } else if (maze[i].charAt(x) == "_") {
        tdEl.style.backgroundColor = "green";
        tdEl.style.color = 'green';
        tdEl.style.border = 'none';
      } else if (maze[i].charAt(x) == "!") {

        tdEl.style.backgroundColor = 'yellow';
        tdEl.style.color = 'yellow';
        tdEl.style.border = 'none';

      }


    }


  };

};
//Calling the function drawMaze print the maze and table on the page
drawMaze(maze1);




let mover = document.getElementById('player');
//adding the listener so the if and else will trigger for every
//key press
  window.addEventListener('keydown',event => {
//the mover moves on left and top axis then parseInt gives a interger
//which I add 5 and px too
  if (event.key == 'a') {
    mover.style.left = parseInt(mover.style.left) - 5 + 'px';
    console.log(mover.style.left )
  }

  else if (event.key == 's') {

    mover.style.top = parseInt(mover.style.top) + 5 + 'px';
    console.log(mover.style.top)
  }

  else if (event.key == 'd') {
    mover.style.left = parseInt(mover.style.left) + 5 + 'px';
    console.log(mover.style.left)
  }

  else if (event.key == 'w') {
    mover.style.top = parseInt(mover.style.top) - 5 + 'px';
    console.log(mover.style.top)
  }




  //make a check function
  let mazeCheck = () => {
   if(tdEl.textContent == '#' && parseInt(mover.style.top) == parseInt(tdEl) || parseInt(mover.style.top) == tdEl  ) {
     removeEventListner()
   }

mazeCheck();
    //if # is in the position of the div
    //then cancel animation and make a p element which is created to the window
    //that states you loose
    //also disable the keys
  }
});
