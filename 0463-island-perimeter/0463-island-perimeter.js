/**
 * @param {number[][]} grid
 * @return {number}
 */

var islandPerimeter = function(grid) {
  let result = 0;
  const visitedCells = new Set();
  
  function recursive(width, height) {
    if (width < 0 || width >= grid.length || height < 0 || height >= grid[width].length || grid[width][height] === 0) {
      result++;
      return;
    }

    if (visitedCells.has(`${width}-${height}`)) {
      return;
    }

    visitedCells.add(`${width}-${height}`);

    recursive(width - 1, height);
    recursive(width + 1, height);
    recursive(width, height - 1);
    recursive(width, height + 1);
  }

  for (let width = 0; width < grid.length; width++) {
    for (let height = 0; height < grid[width].length; height++) {
      if (grid[width][height]) {
          recursive(width, height);

          break;
      }
    }
  }
  
  return result;
};