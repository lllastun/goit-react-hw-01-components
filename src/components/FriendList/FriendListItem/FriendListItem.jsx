import React from 'react';
import css from './FriendListItem.module.css';

const FriendListItem = ({ friend: {avatar, name, isOnline} }) => {
  // console.log(avatar, name, isOnline, id);

  return (

      <li className={css.item}>
        {isOnline && <span className={`${css.status} ${css.isOnline}`}></span>}
        {!isOnline && <span className={css.status}></span>}
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
      </li>

  );
};

export default FriendListItem;
