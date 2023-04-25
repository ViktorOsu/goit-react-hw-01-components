import PropTypes from 'prop-types';
import {
  ProfileCard,
  ProfileDescr,
  ProfileImg,
  PtofileName,
  PortfileTag,
  ProfileLocation,
  ProfileStats,
  ProfileItem,
  ProfileLable,
  ProfileQuant,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  const userStates = [
    {
      label: 'Followers',
      quantity: stats.followers,
    },
    {
      label: 'Views',
      quantity: stats.views,
    },
    {
      label: 'Likes',
      quantity: stats.likes,
    },
  ];
  return (
    <ProfileCard>
      <ProfileDescr>
        <ProfileImg src={avatar} alt="User avatar" className="avatar" />
        <PtofileName>{username}</PtofileName>
        <PortfileTag>@{tag}</PortfileTag>
        <ProfileLocation>{location}</ProfileLocation>
      </ProfileDescr>

      <ProfileStats>
        {userStates.map(({ label, quantity }) => (
          <ProfileItem key={label}>
            <ProfileLable>{label}</ProfileLable>
            <ProfileQuant>{quantity}</ProfileQuant>
          </ProfileItem>
        ))}
      </ProfileStats>
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.exact({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
