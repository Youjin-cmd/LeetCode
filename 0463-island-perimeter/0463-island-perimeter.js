/**
 * @param {number[][]} grid
 * @return {number}
 */

var islandPerimeter = function(grid) {
  let result = 0;
  const visitedCells = new Set();
  
  function dfs(width, height) {
    if (width < 0 || width > grid.length - 1 || height < 0 || height > grid[width].length - 1 || grid[width][height] === 0) {
      // 판을 벗어나 존재하지 않는 칸이거나, 바다(0)일 때
      result++;
      // 경계선 개수를 증가시킨다

      return;
    }

    if (visitedCells.has(`${width}-${height}`)) {
      return;
    }

    visitedCells.add(`${width}-${height}`);

    dfs(width - 1, height);
    dfs(width + 1, height);
    dfs(width, height - 1);
    dfs(width, height + 1);
  }

  for (let width = 0; width < grid.length; width++) {
    for (let height = 0; height < grid[width].length; height++) {
      if (grid[width][height] === 1) {
          dfs(width, height);

          break;
      }
    }
  }
  
  return result;
};