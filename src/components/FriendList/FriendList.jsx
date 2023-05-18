import React from 'react';
import css from './FriendList.module.css';
import FriendListItem from './FriendListItem/FriendListItem';
import PropTypes from 'prop-types';

const FriendList = ({ friendList }) => {
  console.log(friendList);
  const friendsArray = friendList.map(friend => (
    <FriendListItem friend={friend} key={friend.id} />
  ));
  return <ul className={css.friendList}> {friendsArray}</ul>;
};

export default FriendList;

FriendList.propTypes = {
  friendList: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.string.bool,
      id: PropTypes.string.number,
    }).isRequired,
  ).isRequired,
};
