export class Minesweeper {
    rows: number;
    columns: number;

    constructor(rows: number, columns: number, mines: any[]) {
        this.rows = rows;
        this.columns = columns;
    }
    display(): string {
        let display = ''
        for(let i =0;i<this.rows;i++){
            for(let j =0;j<this.columns;j++){
                display += '.'
            }
            if (i < this.rows - 1) {
                 display += '\n'
            }
        }
        return display
    }
}
