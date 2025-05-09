import { computeRank, computeWinner, Suit, Rank, HandRank, ComputedRank } from "./game";

const handWithOnePair = [
    { rank: Rank.TWO, suit: Suit.SPADES },
    { rank: Rank.ACE, suit: Suit.CLUBS },
    { rank: Rank.JACK, suit: Suit.CLUBS },
    { rank: Rank.NINE, suit: Suit.DIAMONDS },
    { rank: Rank.EIGHT, suit: Suit.DIAMONDS },
    { rank: Rank.TWO, suit: Suit.HEARTS },
    { rank: Rank.FOUR, suit: Suit.HEARTS },
];
const handWithOnePairOfAces = [
    { rank: Rank.TWO, suit: Suit.SPADES },
    { rank: Rank.ACE, suit: Suit.CLUBS },
    { rank: Rank.JACK, suit: Suit.CLUBS },
    { rank: Rank.NINE, suit: Suit.DIAMONDS },
    { rank: Rank.EIGHT, suit: Suit.DIAMONDS },
    { rank: Rank.ACE, suit: Suit.HEARTS },
    { rank: Rank.FOUR, suit: Suit.HEARTS },
];
const highCardHand = [
    { rank: Rank.TWO, suit: Suit.SPADES },
    { rank: Rank.ACE, suit: Suit.CLUBS },
    { rank: Rank.JACK, suit: Suit.CLUBS },
    { rank: Rank.NINE, suit: Suit.DIAMONDS },
    { rank: Rank.EIGHT, suit: Suit.DIAMONDS },
    { rank: Rank.THREE, suit: Suit.HEARTS },
    { rank: Rank.FOUR, suit: Suit.HEARTS },
];
const handWithTwoPairs = [
    { rank: Rank.TWO, suit: Suit.SPADES },
    { rank: Rank.ACE, suit: Suit.CLUBS },
    { rank: Rank.JACK, suit: Suit.CLUBS },
    { rank: Rank.JACK, suit: Suit.DIAMONDS },
    { rank: Rank.EIGHT, suit: Suit.DIAMONDS },
    { rank: Rank.TWO, suit: Suit.HEARTS },
    { rank: Rank.FOUR, suit: Suit.HEARTS },
];
const handWithThreeOfAKind = [
    { rank: Rank.TWO, suit: Suit.SPADES },
    { rank: Rank.ACE, suit: Suit.CLUBS },
    { rank: Rank.TWO, suit: Suit.CLUBS },
    { rank: Rank.JACK, suit: Suit.DIAMONDS },
    { rank: Rank.EIGHT, suit: Suit.DIAMONDS },
    { rank: Rank.TWO, suit: Suit.HEARTS },
    { rank: Rank.FOUR, suit: Suit.HEARTS },
];
describe("computeRank", () => {
    it("should return a pair when there is one among 7 cards", () => {
        // Given
        // When
        const actual = computeRank(handWithOnePair);

        // Then
        expect(actual).toEqual({
            handRank: HandRank.PAIR,
            highestRankValue: Rank.TWO,
        });
    });

    it("should return FOLDED if less than 7 cards are provided", () => {
        // When
        const actual = computeRank([
            { rank: Rank.TWO, suit: Suit.SPADES },
            { rank: Rank.ACE, suit: Suit.CLUBS },
        ])
        // Then
        expect(actual).toEqual({
            handRank: HandRank.FOLDED,
            highestRankValue: null,
        });
    });

    it("should return a high card when there is nothing better among 7 cards", () => {
        // When
        const actual = computeRank(highCardHand);

        // Then
        expect(actual).toEqual({ handRank: HandRank.HIGH_CARD, highestRankValue: Rank.ACE, });
    });

    it("should return two pairs when there are two pairs among 7 cards", () => {
        // When
        const actual = computeRank(handWithTwoPairs);

        // Then
        expect(actual).toEqual({handRank: HandRank.TWO_PAIRS, highestRankValue: Rank.JACK});
    });

    it("should return 'three of a kind' when there is one among 7 cards", () => {
        // When
        const actual = computeRank(handWithThreeOfAKind);

        // Then
        expect(actual).toEqual({handRank: HandRank.THREE_OF_A_KIND, highestRankValue: Rank.TWO});
    });
});

describe("computeWinner", () => {
    it("should two pairs win against one pair", () => {
        // Given
        const playerOne = handWithOnePair;
        const playerTwo = handWithTwoPairs;
        // When
        const actual = computeWinner(playerOne, playerTwo);
        // Then
        expect(actual).toEqual([{ winner: false }, { winner: true}])
    });
    it("should compute based on pair quality", () => {
        // Given
        const playerOne = handWithOnePairOfAces;
        const playerTwo = handWithOnePair;
        // When
        const actual = computeWinner(playerOne, playerTwo);
        // Then
        expect(actual).toEqual([{ winner: true }, { winner: false}])
    });
});