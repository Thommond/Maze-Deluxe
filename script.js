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
  let mover = document.createElement('div');
  let divTable = document.getElementById('cover');
  console.log(divTable);
  divTable.appendChild(mover);
  mover.style.backgroundColor = 'black';
  mover.style.width = '15px';
  mover.style.height = '15px';
  mover.style.position = 'absolute';
  mover.setAttribute('id', 'player');




  let tableEl = document.querySelector('table');
  //setting table El to the element table
  clearElement(tableEl);
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

      tdEl.innerHTML = maze[i].charAt(x);
      //conditionals below if/else if the char is a specific character
      //then run the code below


      if (maze[i].charAt(x) == "#") {
        rowEl.appendChild(tdEl);
        tdEl.style.backgroundColor = 'red';
        tdEl.style.color = 'red';
        tdEl.style.border = 'none';
      } else if (maze[i].charAt(x) == ".") {
        rowEl.appendChild(tdEl);
        tdEl.style.backgroundColor = "blue";
        tdEl.style.color = 'blue';
        tdEl.style.border = 'none';
      } else if (maze[i].charAt(x) == "_") {
        rowEl.appendChild(tdEl);
        tdEl.style.backgroundColor = "green";
        tdEl.style.color = 'green';
        tdEl.style.border = 'none';
      } else if (maze[i].charAt(x) == "!") {
        rowEl.appendChild(tdEl);
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

window.addEventListener("keydown", event => {

    //condition which states that if key is pressed then anything with in will occur
    if (event.key == "w") {

      let animate = (time, lastTime) => {
        if (lastTime != null) {
          (time - lastTime) * 0.01;
        }
        mover.style.left = 5 + 'px';
        requestAnimationFrame(newTime => animate(newTime, time));
      }
      requestAnimationFrame(animate);
    }



   else if (event.key == "s") {

    let animate = (time, lastTime) => {
      if (lastTime != null) {
        (time - lastTime) * 0.01;
      }
      mover.style.left = 5 + 'px';
      requestAnimationFrame(newTime => animate(newTime, time));
    }
    requestAnimationFrame(animate);
    }

  }




}
else if (event.key == "a") {

  let animate = (time, lastTime) => {
    if (lastTime != null) {
      (time - lastTime) * 0.01;
    }
    mover.style.left = 5 + 'px';
    requestAnimationFrame(newTime => animate(newTime, time));
  }
  requestAnimationFrame(animate);
  }

}




} else if (event.key == "d") {

  let animate = (time, lastTime) => {
    //want object to move on press
      //while
    if (lastTime != null) {
      (time - lastTime) * 0.01;
    }
    mover.style.left = 5 + 'px';
    requestAnimationFrame(newTime => animate(newTime, time));
  }
  requestAnimationFrame(animate);
  }

}

}

});
