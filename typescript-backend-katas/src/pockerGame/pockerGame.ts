
type handRanking = {
    hasOnePair: boolean,
    hasTwoPair: boolean,
}
export class PockerGame {

    

    readCards(a: string): handRanking {
        const cards = a.split(' ');

        cards.forEach(card => {
            const cardValue = card.slice(0, -1);
        };

        return ;
    }
}