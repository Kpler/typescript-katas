export class Minesweeper {
    constructor(
        public rows: number,
        public columns: number,
        public minePositions: MinePositions
    ) {}

    outputField(): string {
        let field = '';
        for (let row=0;row < this.rows;row++) {
            for (let column=0; column < this.columns; column++) {
                if (row === this.minePositions[row] && column === this.minePositions[1])
                field = field.concat('.');
            }
            field = field.concat('\n');
        }
        return field;
    }
}

export type MinePosition = {x: number, y: number};
export type MinePositions = MinePosition[];
