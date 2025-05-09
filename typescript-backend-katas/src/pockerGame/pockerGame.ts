
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

    hasOnePair(cards: string[]): boolean {
        cards.forEach(card => {
            const cardValue = card.slice(0, -1);
            const currentCount = this.counts.get(cardValue) || 0;
            this.counts.set(cardValue, currentCount + 1);
        })
        
        for (const count of this.counts.values()) {
            if (count === 2) {
                this.handRank.hasOnePair = true;
            }
        }
        
        return this.handRank.hasOnePair
    }
}
