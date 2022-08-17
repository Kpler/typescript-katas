export class Minesweeper {
    rows: number;
    columns: number;
    mines: [number,number][];

    constructor(
        rows: number,
        columns: number,
        mines: [number,number][]
    ) {
        this.rows = rows;
        this.columns = columns;
        this.mines = mines;
    }

    hasMine(i: number, j: number): boolean {
        let hasMine = false;
        this.mines.forEach(mine => {
            const [x, y] = mine;
            if (x === i && y === j) {
                hasMine = true;
            }
        });
        return hasMine;
    }

    display(): string {
        let display = ''
        for(let i =0;i<this.rows;i++){
            for(let j =0;j<this.columns;j++){
                display += this.hasMine(i, j) ? '*' : '.'
            }
            if (i < this.rows - 1) {
                 display += '\n'
            }
        }
        return display
    }
}
