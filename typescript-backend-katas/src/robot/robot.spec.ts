import {navigateRobot} from './robot';

describe("Robot", () => {
  describe('navigateRobot', () => {
    it('should be in its init position', () => {
        expect(navigateRobot()).toEqual({
            position: [0, 0],
            direction: 'North'
        });
    });
  });
});
