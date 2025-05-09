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

  evaluateHand(cards: string[]): handRanking {
    cards.forEach((card) => {
      const cardValue = card.slice(0, -1);
      const currentCount = this.faceValueCounts.get(cardValue) || 0;
      this.faceValueCounts.set(cardValue, currentCount + 1);
    });
    cards.forEach((card) => {
        const suitValue = card.slice(1, -1);
        const currentCount = this.suitValueCounts.get(suitValue) || 0;
        this.suitValueCounts.set(suitValue, currentCount + 1);
      });

    for (const count of this.faceValueCounts.values()) {
      if (this.isPair(count)) {
        if (this.handRank.hasOnePair) {
          this.handRank.hasTwoPair = true;
          this.handRank.hasOnePair = false;
        } else if (!this.handRank.hasTwoPair) {
          this.handRank.hasOnePair = true;
        }
      }
    }

    return this.handRank;
  }

  private isPair(count: number): boolean {
    return count === 2;
  }
}
