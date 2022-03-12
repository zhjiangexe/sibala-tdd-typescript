import {Game} from "./Game"

describe("game", () => {
  test("both all of a kind", () => {
    const game = new Game()
    const showResult: string = game.showResult("Black: 5 5 5 5  White: 3 3 3 3")
    expect(showResult).toEqual("Black win. - with all of a kind: 5")
  })
})