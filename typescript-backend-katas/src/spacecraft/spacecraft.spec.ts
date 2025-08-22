import { navigate2DSpacecraft } from './spacecraft';

describe('Spacecraft', () => {
  it('should stay at the initial position when no commands are sent', () => {
    expect(
      navigate2DSpacecraft(
        {
          position: [0, 0],
          direction: 'N',
          fuel: 100,
          status: 'OK'
        },
        [],
        [],
      )
    ).toStrictEqual({
      position: [0, 0],
      direction: 'N',
      fuel: 100,
      status: 'OK'
    });
  });
  it('should move forward in the current direction', () => {
    expect(
      navigate2DSpacecraft(
        {
          position: [0, 0],
          direction: 'N',
          fuel: 100,
          status: 'OK'
        },
        ['F'],
        [],
      )
    ).toStrictEqual({
      position: [0, 1],
      direction: 'N',
      fuel: 100,
      status: 'OK'
    });
  });

  it('should rotate from north to east when facing North and receiving Right command', () => {
    expect(
      navigate2DSpacecraft(
        {
          position: [0, 0],
          direction: 'N',
          fuel: 100,
          status: 'OK'
        },
        ['R'],
        [],
      )
    ).toStrictEqual({
      position: [0, 0],
      direction: 'E',
      fuel: 100,
      status: 'OK'
    });
  });

  it('should move forward twice when receiving two forward commands', () => {
    expect(
      navigate2DSpacecraft(
        {
          position: [0, 0],
          direction: 'N',
          fuel: 100,
          status: 'OK'
        },
        ['F', 'F'],
        [],
      )
    ).toStrictEqual({
      position: [0, 2],
      direction: 'N',
      fuel: 100,
      status: 'OK'
    });
  });
});
