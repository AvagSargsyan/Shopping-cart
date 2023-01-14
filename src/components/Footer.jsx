import { FaGithub } from 'react-icons/fa';
import { StyledFooter } from './styles/Footer.style';

const Footer = () => {
  return (
    <StyledFooter>
      <span>Copyright &copy; 2023 Avag Sargsyan</span>
      <a href="https://github.com/AvagSargsyan">
        <FaGithub />
      </a>
    </StyledFooter>
  );
};

export default Footer;
