import { Link } from 'react-router-dom';
import { StyledHome } from './styles/Home.style';

const Home = () => {
  return (
    <StyledHome>
      <p>Best online store of the year</p>
      <h2>Make your fashion look more attractive</h2>
      <Link to="/Shopping-cart/products">Shop now</Link>
    </StyledHome>
  );
};

export default Home;
