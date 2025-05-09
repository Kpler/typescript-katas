
type handRanking = {
    hasOnePair: boolean,
    hasTwoPair: boolean,
}
export class PockerGame {
    counts = new Map<string, number>();
    handRank:handRanking = {
        hasOnePair: false,
        hasTwoPair: false,
    }
    readCards(a: string): string[] {
        return a.split(' ');
    }

    evaluateHand(cards: string[]): handRanking {
        cards.forEach(card => {
            const cardValue = card.slice(0, -1);
            const currentCount = this.counts.get(cardValue) || 0;
            this.counts.set(cardValue, currentCount + 1);
        })
        
        for (const count of this.counts.values()) {
            if (this.isPair(count)) {
                this.handRank.hasOnePair = true;
            }
            if (this.handRank.hasOnePair && this.isPair(count)) {
                this.handRank.hasTwoPair = true;
            }
        }
        
        return this.handRank
    }

    private isPair(count: number): boolean  { return count === 2 }
}
