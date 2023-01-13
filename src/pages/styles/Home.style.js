import styled from 'styled-components';
import heroImg from '../../assets/home_bg.jpg';

const StyledHome = styled.div`
  padding: 1rem 1rem 1rem 8vw;
  height: 90%;
  display: flex;
  justify-content: center;
  background: url(${heroImg}), ${({ theme }) => theme.colors.light};
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;

  p {
    color: ${({ theme }) => theme.colors.dark};
    text-transform: uppercase;
    font-weight: 600;
    font-size: 1.1rem;
    width: 50%;
    letter-spacing: 4px;
  }

  h2 {
    width: 50%;
    font-size: 4rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  a {
    padding: 1rem 2rem;
    font-weight: 600;
    border-radius: 40px;
    text-decoration: none;
    background: ${({ theme }) => theme.colors.dark};
    color: ${({ theme }) => theme.colors.light};
    font-size: 1.2rem;
    cursor: pointer;
    transition: 0.1s ease-in-out;

    &:hover {
      background: ${({ theme }) => theme.colors.lighterDark};
    }
  }
`

export {
  StyledHome
}
