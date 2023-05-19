import { UserStat } from 'components/UserStat';
import styles from './UserCard.module.scss';
import { UserTitle } from 'components/UserTitle';
import { LocalGithubUser } from 'types';
import { UserInfo } from 'components/UserInfo';

interface UserCardProps extends LocalGithubUser { }

export const UserCard = (props: UserCardProps) => {
  return (
    <div className={styles.userCard}>
      <img
        className={styles.avatar}
        src={props.avatar}
        alt="profile avatar"
      />
      <UserTitle
        created={props.created}
        login={props.login}
        name={props.name}
      />
      <p className={`${styles.bio}${props.bio ? '' : ` ${styles.empty}`}`}>
        {props.bio || 'This User has no bio..'}
      </p>
      <UserStat
        followers={props.followers}
        following={props.following}
        repos={props.repos}
      />
      <UserInfo
        blog={props.blog}
        company={props.company}
        location={props.location}
        twitter={props.twitter}
      />
    </div>
  )
};
