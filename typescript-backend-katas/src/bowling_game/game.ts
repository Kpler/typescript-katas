export class Game {
  frames: number[][] = [[]];

  score(): number {
    let currentScore = 0;

    for (let frameIndex = 0; frameIndex < this.frames.length; frameIndex++) {
      const currentFrame = this.frames[frameIndex];

      const sum = currentFrame.reduce((a, b) => a + b, 0);
      if (sum === 10) {
        // spare
        const nextFrame = this.frames[frameIndex+1];
        if(nextFrame?.length){
          currentScore+=nextFrame[0]
        }
      }
      currentScore += sum;
      
    }
    return currentScore;
  }

  roll(pins: number) {
    const lastFrame = this.frames[this.frames.length-1];

    lastFrame.push(pins);

    if (lastFrame.length === 2) {
      this.frames.push([]);
    }
  }
}
