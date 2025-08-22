import { navigate2DSpacecraft } from './spacecraft';

describe('Spacecraft', () => {
  it('should execute additions and soustractions correctly', () => {
    expect(
      navigate2DSpacecraft({
        initial: {
              position: [0, 0],
            direction:
        },
      })
    ).toBe(3);
  });
});
