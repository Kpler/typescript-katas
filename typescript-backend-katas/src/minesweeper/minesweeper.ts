export function generateGame(
    rows: number, columns: number, mines: [number, number][]
): string {
    let grid: string[][] = new Array(rows).fill('').map(() => new Array(columns).fill('.'));

    mines.forEach(mine => {
        const [x, y] = mine;
        grid[x][y] = '*';
    });

    return grid.map(x => x.join('')).join('\n');
}
