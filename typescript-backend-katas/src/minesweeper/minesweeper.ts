class Minesweeper {
    constructor(
        public rows: number,
        public columns: number,
        public minePositions: MinePositions
    ) {}
}

type MinePosition = {x: number, y: number};
type MinePositions = MinePosition[];
