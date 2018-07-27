import Api from '../api';

describe('Api', () => {
  it('api correctly defined', () => {
    expect(Api.basePath).not.toBeNull();
  });
});
