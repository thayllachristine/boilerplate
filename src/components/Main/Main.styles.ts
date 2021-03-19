import styled, { keyframes } from 'styled-components';

const Wrapper = styled.main`
  align-items: center;
  background-color: #333333;
  color: #fff;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: 3rem;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 3rem;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Image = styled.img`
  animation: ${rotate} 10s linear infinite;
  height: min(30rem, 100%);
  width: min(30rem, 100%);
`;

export { Wrapper, Title, Subtitle, Image };
