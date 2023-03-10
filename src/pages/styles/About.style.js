import styled from 'styled-components';
import bgImage from '../../assets/about_bg.jpg';

const StyledAbout = styled.div`
  height: 90%;
  background: url(${bgImage});
  background-size: cover;
  color: ${({ theme }) => theme.colors.light};
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 768px) {
    height: 85%;
  }
  
  div {
    border-radius: 8px;
    margin: 0 2rem 2rem 0;
    padding: 1.5rem;
    background: rgba(0, 0, 0, 0.75);
    width: 45%;
    animation: fold;
    transition: 0.4s ease-in-out;
    animation: grow 0.7s;

    @media screen and (max-width: 768px) {
      width: 90%;
      
    }
    
    h2 {
      font-size: 3.5rem;
      margin-bottom: 2rem;

      @media screen and (max-width: 768px) {
        font-size: 3.2rem;
      }
    }
    
    p {
      font-size: 1.4rem;
      line-height: 1.8rem;
      letter-spacing: 2px;

      @media screen and (max-width: 768px) {
        font-size: 1.3rem;
        line-height: 1.6rem;
      }
    }

    &:hover {
      box-shadow: none;
      box-shadow: ${({ theme }) => theme.colors.lighterDark} 0px 0px 0px 2px inset, rgb(255, 255, 255) 10px -10px 0px -3px, ${({ theme }) => theme.colors.primary} 10px -10px, rgb(255, 255, 255) 20px -20px 0px -3px;
      background: rgba(0, 0, 0, 0.95);
    }

    @keyframes fold {
      100% {
        box-shadow: ${({ theme }) => theme.colors.dark} 0px 0px 0px 2px inset, rgb(255, 255, 255) 10px -10px 0px -3px, ${({ theme }) => theme.colors.primary} 10px -10px, rgb(255, 255, 255) 20px -20px 0px -3px;
        background: rgba(0, 0, 0, 0.7);
      }
    }
  }
`

export {
  StyledAbout
}
