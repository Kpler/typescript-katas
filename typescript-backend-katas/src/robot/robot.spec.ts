import {navigateRobot} from './robot';

describe("Robot", () => {
  describe('navigateRobot', () => {
    it('should be in its init position', () => {
        expect(navigateRobot()).toEqual({
            position: [0, 0],
            direction: 'North'
        });
    });

    it('should heading turn to the West', () => {
      expect(navigateRobot('L')).toEqual({
          position: [0, 0],
          direction: 'West'
      });
    });

    it('should heading turn to the East', () => {
      expect(navigateRobot('R')).toEqual({
          position: [0, 0],
          direction: 'East'
      });
    });

      it('should heading turn to the South', () => {
          expect(navigateRobot('LL')).toEqual({
              position: [0, 0],
              direction: 'South'
          });
      });

      it('should heading turn to the North using many commands', () => {
        expect(navigateRobot('LLRLLL')).toEqual({
            position: [0, 0],
            direction: 'North'
        });
      });

      it('should change position one step forward', () => {
        expect(navigateRobot('M')).toEqual({
            position: [0, 1],
            direction: 'North'
        });
      });

      it('should change heading and position', () => {
        expect(navigateRobot('LM')).toEqual({
            position: [-1, 0],
            direction: 'West'
        });
      });

      it('should change heading and position for a complex movement', () => {
        expect(navigateRobot('LMMMRRM')).toEqual({
            position: [-2, 0],
            direction: 'East'
        });
      });

      it('should return status "obstacle encountered" with last position', () => {
        expect(navigateRobot('M', [[0, 1]])).toEqual({
            position: [0, 0],
            direction: 'North',
            status: 'Obstacle encountered'
        });
      })

      it('should return status "obstacle encountered" with last position after complex movement', () => {
        expect(navigateRobot('LLMRM', [[-1, -2]])).toEqual({
            position: [-1, -1],
            direction: 'West',
            status: 'Obstacle encountered'
        });
      })
  });
});
