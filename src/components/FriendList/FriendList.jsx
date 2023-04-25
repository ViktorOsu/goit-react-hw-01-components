import PropTypes from 'prop-types';
import {
  FriendsListEl,
  FriendCard,
  FriendStatus,
  FriendsName,
} from './FriendList.styled';

export const FriendsList = ({ friends }) => {
  return (
    <FriendsListEl>
      {friends.map(({ id, name, avatar, isOnline }) => (
        <FriendCard key={id}>
          <FriendStatus prop={isOnline}></FriendStatus>
          <img className="avatar" src={avatar} alt={name} width="48" />
          <FriendsName>{name}</FriendsName>
        </FriendCard>
      ))}
    </FriendsListEl>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      avatar: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    })
  ),
};
