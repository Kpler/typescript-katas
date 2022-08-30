export class Minesweeper {
    constructor(
        public rows: number,
        public columns: number,
        public minePositions: MinePositions
    ) {}

    outputField(): string {
        return '';
    }
}

export type MinePosition = {x: number, y: number};
export type MinePositions = MinePosition[];
