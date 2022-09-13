//const prompt1 = require('prompt-sync')({sigint: true});
class MineSweeper{
    MineArray: number[][]=[];

    constructor(size:number, definer:string=""){
        var MineArray:number[][];
        var rnd:number;
        var size_from_string:number;
        this.MineArray.length=size;
        var split_definer=definer.split(",");
        if (split_definer.length>0){
            size_from_string=Math.floor(Math.sqrt(split_definer.length));
            
            for (var a=0; a<size_from_string;a++){
                this.MineArray[a]=new Array(size_from_string);
                for(var b=0;b<size_from_string;b++)
                    if(split_definer[a*size_from_string+b]=="0")
                        this.MineArray[a][b]=0;
                    else
                        this.MineArray[a][b]=1;
                }
            }
                
        else
        for(let a=0 ; a<size; a++){
            this.MineArray[a]=new Array(size);
            for(let b=0; b<size;b++){
                
                rnd=Math.random()*10.0;
                if (rnd<4.0)
                    this.MineArray[a][b]=1;
                else
                    this.MineArray[a][b]=0
                }
        }
    }
    GetSize(){

        return this.MineArray.length;

    };

    GetMineArray(){
        return this.MineArray.toString();
    }
    GetNeighbourMines(a:number,b:number){
        var size = this.MineArray.length
        var x, y;
        var sum_mines:number=0;
        for(x=-1;x<=1;x++){
            if (a+x<0 || a+x>size)
                continue;
            for(y=-1;y<=1;y++){
                if(b+y<0 || b+y>size)
                    continue;
                if(b+y==a+x)
                    continue;
                if (this.MineArray[a+x][b+y]==1)
                    sum_mines++;

            }
        }
        return sum_mines;
    }
    PlayGame(a:number,b:number){
        if(this.MineArray[a][b]==1)
            return ("Fog of blood, bones and flesh  ");
        else
            return(`Pos (${a},${b}) has ${this.GetNeighbourMines(a,b)} mines`);
    }
}


var a = new MineSweeper(0,"0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,");
var h = a.GetSize();
var x=0;
for (x=0;x<h;x++){
    console.log(a.MineArray[x].toString());
}
//a.PlayGame();
//const uga = prompt1("What is your name");
console.log(a.PlayGame(0,1));
//console.log('Her ${uga}')
//readline.question("Urk", Iread=>
//{console.log(`${Iread}`)};
//readline.close();
//});
console.log(a.GetMineArray());
console.log(a.GetNeighbourMines(1,1));
