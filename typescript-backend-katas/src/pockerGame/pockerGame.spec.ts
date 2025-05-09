import {PockerGame} from "./pockerGame";

describe("Texas Holdem", () => {
  it("should read cards of one player", () => {
    const playerCards: string = 'Kc 9s Ks Kd 9d 3c 6d'
    const game = new PockerGame();
    expect(game.readCards(playerCards)).toEqual(['Kc','9s','Ks','Kd','9d','3c','6d']);
  });

  it("has one pair", () => {
    const playerCards: string[] = ['Kc','9s','Ks','Qd','4d','3c','6d']
    const game = new PockerGame();
    expect(game.hasOnePair(playerCards)).toEqual(true);
  });
});
