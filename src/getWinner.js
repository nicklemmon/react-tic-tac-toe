export default function getWinner(gameStateArr, currentPlayer) {
  let winner

  const checkAgainstSolutions = (index1, index2, index3, arr = gameStateArr, player = currentPlayer) => {
    if (arr[index1] === player && arr[index2] === player && arr[index3] === player) {
      winner = player
    }
  }

  const solutionsArr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  solutionsArr.forEach(solution => {
    checkAgainstSolutions(solution[0], solution[1], solution[2])
  })
  
  return winner
}
