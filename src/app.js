function isSolved(board) {
  let colum=0, row=0, diagonal1=0, diagonal2=0, total=0;

  /* board no exist. */
  if (!board) return -1;

  //console.time('solved');

  for (j=0; j<3; j++) {
    for (i=0; i<3; i++) {
      /* sum row and column. */
      total += board[j][i];
      colum += board[i][j];
      row += board[j][i];
      
      /* sum of diagonals values.*/
      if (i+j === 2)  diagonal2 += board[j][i];
      if (i === j)  diagonal1 += board[j][i];
    }

    /* verify if exist a winner.*/
    if (colum === 3 && board[0][j] === board[1][j]) return 1;
    if (row === 3 && board[j][0] === board[j][1]) return 1;
    if (colum === 6) return 2;
    if (row === 6) return 2;

    colum = 0;
    row = 0;
  }

  /* verify if exist a winner.*/
  if (diagonal1 === 3 && board[0][0] === board[1][1]) return 1;
  if (diagonal2 === 3 && board[2][0] === board[1][1]) return 1;
  if (diagonal1 === 6) return 2;
  if (diagonal2 === 6) return 2;

  if (total === 13 || total === 14) return 0;

  //console.timeEnd('solved');

  return -1;
}

module.exports = isSolved;