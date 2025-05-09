export enum Rank {
    TWO = 2
    THREE = 3
    FOUR = 4
    FIVE = 5
    SIX = 6
    SEVEN = 7
    EIGHT = 8
    NINE = 9
    TEN = 10
    JACK = 11
    QUEEN = 12
    KING = 13
    ACE = 14
}

export enum Suit {
    SPADES = "spades"
    CLUBS = "clubs"
    DIAMONDS = "diamonds"
    HEARTS = "hearts"
}

export interface Card {
    rank: Rank;
    suit: Suit;
}

export enum HandRank {

    PAIR = 2
}

export const computeRank = (hand: Card[]): HandRank => {}

