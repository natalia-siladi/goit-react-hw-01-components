import React from 'react';
import css from './friendList.module.css';
import PropTypes from 'prop-types';
import FriendsListItem from '../FriendListItem/FriendListItem';

export default function FriendsList({ friends }) {
  return (
    <ul className={css.box}>
      {friends.map(friend => (
        <li className={css.item} key={friend.id}>
          <FriendsListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};
