import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

//***********Media

const media = {
  regularPhone: '@media(max-width: 400px)',
  bigPhone: '@media(max-width: 500px)',
  tablet: '@media(max-width: 800px)',
};

//***********Popular

export const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

export const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;

    ${media.regularPhone} {
      width: 70%;
      font-size: 0.8rem;
    }
    ${media.bigPhone} {
      width: 70%;
      font-size: 0.9rem;
    }
  }
`;

//***********Category

export const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;

export const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 2rem;
  border-radius: 50%;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  /* transform: scale(0.8); */

  ${media.regularPhone} {
    transform: scale(0.4);
  }
  ${media.bigPhone} {
    transform: scale(0.6);
    margin-right: 0;
  }

  h4 {
    color: white;
    font-size: 0.8rem;

    ${media.regularPhone} {
      font-size: 0.7rem;
      font-weight: lighter;
    }
  }

  svg {
    color: white;
    font-size: 1.5rem;
  }

  &.active {
    background: linear-gradient(to right, #2147f2, #408fe9);
  }
`;

//***********Cousine and Searched

export const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  gap: 3rem;

  ${media.tablet} {
    gap: 1.5rem;
  }
`;

export const Card2 = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }

  a {
    text-decoration: none;
  }

  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

//***********Search

export const FormStyle = styled.form`
  margin: 0rem 20%;

  div {
    position: relative;
    width: 100%;
  }

  input {
    outline: none;
    border: none;
    border-radius: 1rem;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    width: 100%;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }
`;

//***********Recepie

export const DetailWrapper = styled.div`
  display: flex;
  margin: 5rem 0 3rem;

  /* ${media.regularPhone} {
    transform: scale(0.4);
  } */
  ${media.tablet} {
    flex-direction: column;
  }

  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }

  h2 {
    margin-bottom: 2rem;
  }

  img {
    width: 37vw;
    margin-bottom: 1.7rem;

    ${media.tablet} {
      width: 80vw;
    }
  }

  ul {
    margin-top: 2rem;
  }

  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
`;

export const Button = styled.button`
  padding: 0.8rem 1.8rem;
  color: #313131;
  background: white;
  border: 2px solid hsl(0, 0%, 17%);
  margin: 0.5rem 1rem 0.5rem 0;
  font-weight: 600;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.27s;

  ${media.tablet} {
    font-size: 0.9rem;
  }

  &:hover {
    transform: scale(0.97);
  }
`;

export const Info = styled.div`
  margin-left: 2rem;

  p {
    margin: 1.5rem 0 0 0;
    line-height: 1.5;
    font-size: 1.1rem;

    ${media.tablet} {
      font-size: 0.8rem;
    }
  }
`;

//***********Nav

export const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Lobster Two', cursive;
`;

export const Nav = styled.nav`
  padding: 2rem 0rem;

  svg {
    font-size: 2rem;
    margin-right: 0.2rem;
  }
`;
