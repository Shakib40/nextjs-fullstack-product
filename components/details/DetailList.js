import DetailItem from './DetailItem';
import classes from './DetailList.module.css';

function DetailList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <DetailItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
        />
      ))}
    </ul>
  );
}

export default DetailList;