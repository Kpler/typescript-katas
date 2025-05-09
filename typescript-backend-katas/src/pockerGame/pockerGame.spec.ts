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
    expect(game.evaluateHand(playerCards).hasOnePair).toEqual(true);
  });

  it("identify when it has two pairs", () => {
    const playerCards: string[] = ['Kc','9s','Ks','9d','4d','3c','6d']
    const game = new PockerGame();
    expect(game.evaluateHand(playerCards).hasTwoPair).toEqual(true);
  });

  it("identify no pairs", () => {
    const playerCards: string[] = ['Kc','9s','Ks','9d','4d','3c','6d']
    const game = new PockerGame();
    expect(game.evaluateHand(playerCards).hasTwoPair).toEqual(true);
  });
});
