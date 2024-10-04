import { Fighter } from "./fighter";

export class RankedFighter {
    
    constructor(
        public readonly fighter: Fighter, 
        public readonly score: number) {}

}