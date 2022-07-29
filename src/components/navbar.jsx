import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div>
      <span>React Router Example</span>
      <Link to="/">Home</Link>
      <Link to="/other-page">Other Page</Link>
    </div>
  );
};
