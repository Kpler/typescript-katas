export class Game {
  frames: number[][] = [[]];

  score(): number {
    let currentScore = 0;

    for (let frameIndex = 0; frameIndex < this.frames.length; frameIndex++) {
      const currentFrame = this.frames[frameIndex];
      for (let rollIndex = 0; rollIndex < currentFrame.length; rollIndex++) {

        // If it's a odd roll and the last rolls score is ten, then it's a spare
        const sum = currentFrame.reduce((a, b) => a + b, 0);
        if (sum === 10) {
          // spare
        }
        // if (rollIndex % 2 === 1 && currentFrame[rollIndex] + currentFrame[rollIndex-1] === 10) {
        //   currentScore += currentFrame[rollIndex+1];
        // }

        currentScore += currentFrame[rollIndex];
      }
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
