import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import css from './FriendList.module.css';

export const FriendList = ({friends}) => {
    // console.log(friends);
    return <ul className={css.friendList}>
        {friends.map(friend => (
            <FriendListItem
                key={friend.id}
                isOnline={friend.isOnline}
                avatar={friend.avatar}
                name={friend.name}
            />
        ))}
           </ul>
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};






//     return <ul className={css.friend_list}>
//         {friends.map(friend => <li key={friend.id} className={css.item}>
//             <span className={friend.isOnline ? css.online : css.offline}></span>
//             <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
//             <p className={css.name}>{friend.name}</p>
//               </li> )}
//            </ul>
// };

// FriendList.propTypes = {
//     avatar: PropTypes.string,
//     name: PropTypes.string,
//     isOnline: PropTypes.bool, 
//     id: PropTypes.number,
// };