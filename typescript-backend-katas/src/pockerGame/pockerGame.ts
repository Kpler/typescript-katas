
type handRanking = {
    hasOnePair: boolean,
    hasTwoPair: boolean,
}
export class PockerGame {

    readCards(a: string): string[] {
        return a.split(' ');
    }

    hasOnePair(cards: string[]): boolean {
        cards.forEach(card => {
            const cardValue = card.slice(0, -1);
        };


    }
}
