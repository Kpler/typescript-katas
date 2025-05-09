type handRanking = {
  hasOnePair: boolean;
  hasTwoPair: boolean;
  isFlush: boolean;
};
export class PockerGame {
  faceValueCounts = new Map<string, number>();
  suitValueCounts = new Map<string, number>();
  handRank: handRanking = {
    hasOnePair: false,
    hasTwoPair: false,
    isFlush: false,
  };
  readCards(a: string): string[] {
    return a.split(" ");
  }

  evaluateHand(cards: string[]): string {
    cards.forEach((card) => {
      const cardValue = card.slice(0, -1);
      const currentCount = this.faceValueCounts.get(cardValue) || 0;
      this.faceValueCounts.set(cardValue, currentCount + 1);
    });
    cards.forEach((card) => {
        const suitValue = card.slice(1, 2);
        const currentCount = this.suitValueCounts.get(suitValue) || 0;
        this.suitValueCounts.set(suitValue, currentCount + 1);
      });

      for (const count of this.suitValueCounts.values()) {
          if (count >= 5){
              this.handRank.isFlush = true;
              return "Flush";
          }
      }

    let numberOfPairs = 0;
    for (const count of this.faceValueCounts.values()) {
      if (this.isPair(count)) {
          numberOfPairs ++;
      }
    }
    if (numberOfPairs >= 2) {
        return "Two Pairs"
    } else if (numberOfPairs >= 1) {return "One Pair"}


    return "";
  }

  private isPair(count: number): boolean {
    return count === 2;
  }
}
