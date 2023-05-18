import React from 'react';
// import PropTypes from 'prop-types';
// import data from './data/user.json';
import css from './Profile.module.css';

export const Profile = props => {
  // username, tag, avatar, location, stats
  // console.log(data);
  // console.log(props);
  // console.log(props.user.username);
  // const username = data.username;
  // const tag = data.tag;
  // const location = data.location;
  // const avatar = data.avatar;
  // const stats = data.stats;

  const { username, tag, avatar, location, stats:{likes, followers, views} } = props.user;

  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{followers}</span>
        </li>
        <li>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{views}</span>
        </li>
        <li>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {};

//  Profile
