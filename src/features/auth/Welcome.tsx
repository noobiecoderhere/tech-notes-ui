import { Link } from 'react-router-dom';

const Welcome = (): JSX.Element => {
  const date = new Date();
  const dateOptions = {
    day: 'numeric',
    weekday: 'long',
    month: 'long',
    year: 'numeric',
  } as const;
  const today = Intl.DateTimeFormat('en-IN', dateOptions).format(date);

  const content = (
    <section className='welcome'>
      <p>{today}</p>
      <h1>Welcome!</h1>
      <p>
        <Link to='/dash/notes'>View techNotes</Link>
      </p>
      <p>
        <Link to='/dash/users'>View User Settings</Link>
      </p>
    </section>
  );

  return content;
};

export default Welcome;
