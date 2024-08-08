function solveNQueens(n) {
    const solutions = [];
    const board = new Array(n).fill().map(() => new Array(n).fill('.'));

    function isValid(board, row, col) {
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') return false;
        }
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') return false;
        }
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === 'Q') return false;
        }
        return true;
    }

    function backtrack(board, row) {
        if (row === n) {
            solutions.push(board.map(r => r.join('')));
            return;
        }
        for (let col = 0; col < n; col++) {
            if (isValid(board, row, col)) {
                board[row][col] = 'Q';
                backtrack(board, row + 1);
                board[row][col] = '.';
            }
        }
    }

    backtrack(board, 0);
    return solutions;
}

// Test cases
console.log(solveNQueens(4));
// Output: [
//   [".Q..","...Q","Q...","..Q."],
//   ["..Q.","Q...","...Q",".Q.."]
// ]
console.log(solveNQueens(1));
// Output: [["Q"]]
