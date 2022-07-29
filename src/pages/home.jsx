import { useNavigate } from 'react-router-dom';
export const Home = () => {
  let navigate = useNavigate();
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => navigate('/other-page')}>Go to other page</button>
    </div>
  );
};
