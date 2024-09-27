
export enum SpecialOfferType {
    ThreeForTwo, TenPercentDiscount, TwoForAmount, FiveForAmount
}

export const SpecialOfferTypeUnit = new Map<SpecialOfferType, number>([
    [SpecialOfferType.ThreeForTwo, 3],
    [SpecialOfferType.FiveForAmount, 5],
    [SpecialOfferType.TwoForAmount, 2],
]);