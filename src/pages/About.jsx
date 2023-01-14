import Footer from '../components/Footer';
import { StyledAbout } from './styles/About.style';

const About = () => {
  return (
    <StyledAbout>
      <div>
        <h2>Who are we?</h2>
        <p>
          FakeStore focuses on fashionable and sustainable clothing with an
          affordable price tag. We are currently working with 2 different
          suppliers from Europe to provide incredible quality.
        </p>
      </div>
      <Footer />
    </StyledAbout>
  );
};

export default About;
