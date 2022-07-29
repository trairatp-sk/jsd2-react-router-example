import { Link } from 'react-router-dom';
export const OtherPage = () => {
  return (
    <div>
      <h1>This is other page</h1>
      <Link to="/">
        <button>Go to home</button>
      </Link>
    </div>
  );
};
