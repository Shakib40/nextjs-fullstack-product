import classes from './MainNavigation.module.css';
import NextLink from 'next/Link'

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <NextLink href='/'>All Meetups</NextLink>
          </li>
          <li>
            <NextLink href='/new-detail'>Add New Meetup</NextLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;