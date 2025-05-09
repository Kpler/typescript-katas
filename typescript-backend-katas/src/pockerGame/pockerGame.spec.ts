import {PockerGame} from "./pockerGame";

describe("Texas Holdem", () => {
  it("should read cards of one player", () => {
    const playerCards: string = 'Kc 9s Ks Kd 9d 3c 6d'
    const game = new PockerGame();
    expect(game.readCards(playerCards)).toEqual(['Kc','9s','Ks','Kd','9d','3c','6d']);
  });

  it.each([
    { input: ['5c','9s','Ks','Qd','4d','3c','6d'],
      result: {hasOnePair: false, hasTwoPair: false },
    },
      { input: ['Kc','9s','Ks','Qd','4d','3c','6d'],
        result: {hasOnePair: true, hasTwoPair: false },
      },{ input: ['Kc','Qs','Ks','Qd','4d','3c','6d'],
        result: {hasOnePair: false, hasTwoPair: true },
      },
      { input: ['Kc','Qs','Ks','2d','Kd','3c','6d'],
        result: {hasOnePair: false, hasTwoPair: false },
      },
      { input: ['Kc','Qs','Ks','Qd','7d','3c','3d'],
        result: {hasOnePair: false, hasTwoPair: true },
      }
  ]
  )("shouldEvaluateHand", ({input, result}) => {
    const game = new PockerGame();
    expect(game.evaluateHand(input)).toEqual(result);
  });
});
