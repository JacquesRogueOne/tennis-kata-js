const Points = {LOVE: 0, FIFTEEN: 15}

class Game {
    state = {left = Points.LOVE, right = Points.LOVE}

    scoredPoint(player) {

    }

    leftPlayerScores() {
        state = scoredPoint(Player.LEFT)
    } 
}

class Match {
    game = new Game()
    scoreSheet = { sets: [], current: this.game }

    score () {
        return this.scoreSheet
    }

    leftPlayerScores () {
        this.game.leftPlayerScores();
    }
}

test('Before any player has won a point', () => {
    // Arrange
    match = new Match()

    // Act
    result = match.score()

    // Assert
    expected = {sets:[], current:{left:Points.LOVE, right:Points.LOVE}}
    expect(result).toMatchObject(expected)
  });

  test('When left player scores the first point', () => {
    // Arrange
    match = new Match()

    // Act
    match.leftPlayerScores()
    result = match.score()

    // Assert
    expected = {sets:[], current:{left:Points.FIFTEEN, right:Points.LOVE}}
    expect(result).toMatchObject(expected)
  });

  test('When left player scores the first point', () => {
    // Arrange
    game = new Game()

    // Act
    game.leftPlayerScores()

    // Assert
    expect(game.left).toEqual(Points.FIFTEEN)
  });
