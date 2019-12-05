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
  `#...................#.......#...........#`,
  `#######################################_#`
];
//values of different char
let levelValues = {
  '.': 'empty',
  '#': 'wall',
  '_': 'startPosition',
  '!': 'finishPosition'
};
//the clearElement function clears all elements from its argument
const clearElement = (element) => {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
};

const drawMaze = (maze) => {
  //creating a function
  let tableEl = document.querySelector('table');
  //setting table El to the element table
  clearElement(tableEl);
  //clearing if any elements are children of the tableEl

//loop which
  for (let i = 0; i < maze.length; i++) {

    let rowEl = document.createElement('tr');

    tableEl.appendChild(rowEl);

    rowEl.style.border = '1px solid black'
//loop which
    for (let x = 0; x < maze[i].length; x++) {

      let tdEl = document.createElement('td');

      tdEl.innerHTML = maze[i].charAt(x);
//conditionals below if/else if the char is a specific character
//then run the code below
      if (maze[i].charAt(x) == "#") {
        rowEl.appendChild(tdEl);
         tdEl.style.backgroundColor = 'red';

      } else if (maze[i].charAt(x) == ".") {
        rowEl.appendChild(tdEl);
        tdEl.style.backgroundColor = "blue";

      } else if (maze[i].charAt(x) == "_") {
        rowEl.appendChild(tdEl);
        tdEl.style.backgroundColor = "green";

      } else if (maze[i].charAt(x) == "!") {
        rowEl.appendChild(tdEl);
        tdEl.style.backgroundColor = 'yellow';
      }

    }

  };

};
//Calling the function drawMaze print the maze and table on the page
drawMaze(maze1);




/*const cells = document.getElementsByTagName('td');
console.log(cells)
console.log(cells[0]);
console.log(cells[1]);*/



//The code for the mover is below
/*
//selecting the p element with the Id of mover
let mover = document.getElementById("mover");
//an eventListener to add ability to move


window.addEventListener("keydown", event => {
  //location is equal to zero
  let location = 0;
//condition which states that if key "w" is pressed then anything with in will occur
if (event.key == "w") {
//setting the binding newLocation to the location binding minus 20
console.log(location)
  let newLocation = location - 20;
  console.log(newLocation)
  //mover.style.top is being set equal to the newLocation binding plus the string of px;
  mover.style.top = newLocation + "px";

console.log("test");
}

else if (event.key == "s") {

  let newLocation = location + 20;
  mover.style.top = newLocation + "px";

console.log("test2");
}

else if (event.key == "a") {
  let newLocation = location -  20;
  mover.style.left = newLocation + "px";
console.log("test3");
}

else if (event.key == "d") {
  let newLocation = location + 20;
  mover.style.left = newLocation + "px";
  console.log(mover.style.left)
console.log("test4");
} });


}
*/
