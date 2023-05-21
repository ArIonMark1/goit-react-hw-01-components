import PropTypes from 'prop-types';
import css from './ProfilesContainer.module.css';
import { Profile } from '.';

export const ProfilesContainer = ({ data }) => {
  const { username, tag, location, avatar, stats } = data;
  return (
    <div className={css.container}>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
    </div>
  );
};

ProfilesContainer.propTypes = {
  data: PropTypes.exact({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};
