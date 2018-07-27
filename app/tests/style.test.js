import Style from 'style';

describe('StyleApi', () => {
  it('should define some style prop', () => {
    expect(Object.keys(Style).length).toBeGreaterThan(0);
  });
});
