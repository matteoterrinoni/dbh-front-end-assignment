/**
 * User page model tests
 */

import { Users } from '../model';

const users = [
  {
    id: 1,
    username: 'aaa',
  },
];

describe('UserPage model', () => {
  describe('Given Users Methods', () => {
    it('should find a user', () => {
      expect(Users(users).find(1)).toBe(users[0]);
    });

    it('should find a user with string id', () => {
      expect(Users(users).find('1')).toBe(users[0]);
    });

    it('should not find a user', () => {
      expect(Users(users).find(999)).toBeUndefined();
    });

    it('should find a user index', () => {
      expect(Users(users).findIndex(1)).toBe(0);
    });

    it('should not find a user index', () => {
      expect(Users(users).findIndex(999)).toBe(-1);
    });

    it('should add a new user with set', () => {
      const newuser = {
        id: 2,
        username: 'bbb',
      };
      expect(Users(users).set(newuser).users.length).toBe(users.length + 1);
    });

    it('should replace an existing user with set', () => {
      const newuser = {
        id: 1,
        username: 'bbb',
      };
      expect(Users(users).set(newuser).users.length).toBe(users.length);
    });

    it('should replace an existing user with setUserAtIndex', () => {
      const newuser = {
        id: 1,
        username: 'bbb',
      };
      expect(Users(users).setUserAtIndex(0, newuser).users[0]).toBe(newuser);
    });

    it('should not replace any user if index does not exist with setUserAtIndex', () => {
      const newuser = {
        id: 1,
        username: 'bbb',
      };
      expect(
        JSON.stringify(Users(users).setUserAtIndex(-1, newuser).users)
      ).toBe(JSON.stringify(users));
    });
  });
});
