import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendList = ({friends}) => {
    
    return <ul className={css.friend_list}>
        {friends.map(friend => <li key={friend.id} className={css.item}>
            <span className={`css.status ${friend.isOnline ? "online" : ""}`}></span>
            <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
            <p className={css.name}>{friend.name}</p>
              </li> )}
           </ul>
};

FriendList.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool, 
    id: PropTypes.number,
};

// {friend.isOnline ? "status online" : "status"}