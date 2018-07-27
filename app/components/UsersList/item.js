import React from 'react';
import { UserPropType } from 'containers/UserPage/model';

import { Link } from 'react-router';

import styled from 'styled-components';
import Style from 'style';

const Row = styled.div`
  position: relative;
  margin-bottom: 15px;

  a {
    text-decoration: none;
    color: #000;
    display: flex;
    align-items: center;
    padding: 10px;
    padding-top: 15px;
    background: white;
    border-radius: ${Style.borderRadius};
    border-bottom: 1px solid ${Style.gray};

    &:hover {
      background: ${Style.gray};
    }
  }

  small {
    font-family: monospace;
    position: absolute;
    top: -6px;
    left: 8px;
    font-weight: normal;
    background: ${Style.success};
    color: white;
    border-radius: 0.2em;
    padding-left: 3px;
    padding-right: 3px;
  }
`;

function UserListItem({ user }) {
  return (
    <Row>
      {user.isPremiumUser && <small className="premium">PREMIUM</small>}

      <Link to={`/user-profile/${user.id}`}>
        <div className="username">{user.username}</div>

        <div className="booking">
          {user.isPremiumUser && <small>PREMIUM</small>}
        </div>
      </Link>
    </Row>
  );
}

UserListItem.propTypes = {
  user: UserPropType,
};

export default UserListItem;
