import React from 'react';
import css from './FriendList.module.css';
import FriendListItem from './FriendListItem/FriendListItem';

const FriendList = ({ friendList }) => {
  const friendsArray = friendList.map(friend => (
    <FriendListItem friend={friend} key={friend.id} />
  ));
  return <ul className={css.friendList}> {friendsArray}</ul>;
};

export default FriendList;

// export default class FriendList extends Component {
//   render() {
//     console.log(this.props);
//     return (
//       <>
//         <ul class="friend-list"></ul>;
//       </>
//     );
//   }
// }
