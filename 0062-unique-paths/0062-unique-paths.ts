function uniquePaths(m: number, n: number): number {
  const map = [];
  
  for (let i = 0; i < m; i++) {
    map.push(Array(n).fill(1));
  }
  
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      map[i][j] = map[i - 1][j] + map[i][j - 1];
    }
  }
  
  return map[m - 1][n - 1];
};