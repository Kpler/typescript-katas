import {computeRank} from "./game";

describe("when computing a pair", () => {
    it("should return the best matching hand rank with a pair being flagged", () => {
        // Given
        // When
        const actual = computeRank([
            {rank: Rank.TWO, suit: Suit.SPADES},
            {rank: Rank.ACE, suit: Suit.CLUBS},
            {rank: Rank.JACK, suit: Suit.CLUBS},
            {rank: Rank.NINE, suit: Suit.DIAMONDS},
            {rank: Rank.HEIGHT, suit: Suit.DIAMONDS},
            {rank: Rank.TWO, suit: Suit.HEARTS},
            {rank: Rank.FOUR, suit: Suit.HEARTS},
        ])
        // Then
        expect(actual).toBe(HandRank.PAIR);
    });
});