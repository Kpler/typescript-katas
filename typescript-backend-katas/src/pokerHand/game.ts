export enum Rank {
    TWO = 2,
    THREE = 3,
    FOUR = 4,
    FIVE = 5,
    SIX = 6,
    SEVEN = 7,
    EIGHT = 8,
    NINE = 9,
    TEN = 10,
    JACK = 11,
    QUEEN = 12,
    KING = 13,
    ACE = 14,
}

export enum Suit {
    SPADES = "spades",
    CLUBS = "clubs",
    DIAMONDS = "diamonds",
    HEARTS = "hearts",
}

export interface Card {
    rank: Rank;
    suit: Suit;
}

export enum HandRank {
    FOLDED = 0,
    HIGH_CARD = 1,
    PAIR = 2,
    TWO_PAIRS = 3,
    THREE_OF_A_KIND = 4,
}
export interface ComputedRank {
    handRank: HandRank;
    highestRankValue: Rank | null;
}

export const computeRank = (hand: Card[]): ComputedRank => {
    if (hand.length < 7) {
        return {
            handRank: HandRank.FOLDED,
            highestRankValue: null,
        };
    }

    const handRankCards = hand.reduce((acc, currentCard) => {
        const currentRankArray = acc[currentCard.rank] ?? [];
        currentRankArray.push(currentCard);
        acc[currentCard.rank] = currentRankArray;
        return acc;
    }, {} as Record<Rank, Card[]>);

    const threeKindsCards = Object.values(handRankCards).filter((cards) => cards.length === 3);
    if (threeKindsCards.length === 1) {
        return {
            handRank: HandRank.THREE_OF_A_KIND,
            highestRankValue: threeKindsCards[0][0].rank,
        };
    }

    const pairs = Object.values(handRankCards).filter((cards) => cards.length === 2);
    if (pairs.length === 1) {
        return {
            handRank: HandRank.PAIR,
            highestRankValue: pairs[0][0].rank,
        };
    }
    if (pairs.length === 2) {
        return {
            handRank: HandRank.TWO_PAIRS,
            highestRankValue: pairs[pairs.length - 1][ pairs.length - 1].rank,
        };
    }

    return {
        handRank: HandRank.HIGH_CARD,
        highestRankValue: Rank.TWO,
    };
}

interface computeResult {
    winner: boolean;
}

export const computeWinner = (hand1: Card[], hand2: Card[]): [computeResult, computeResult] => {
    const rank1 = computeRank(hand1);
    const rank2 = computeRank(hand2);

    if (rank1 > rank2) {
        return [{
            winner: true,
        }, {
            winner: false,
        }]
    }

    return [{
        winner: false,
    }, {
        winner: true,
    }]
}
