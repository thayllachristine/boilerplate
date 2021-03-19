import * as S from './Main.styles';

const Main = () => (
  <S.Wrapper>
    <S.Title>boilerplate</S.Title>
    <S.Subtitle data-testid="subtitle">
      A simple project starter to work with React, NextJS, TypeScript and Styled
      Components
    </S.Subtitle>
    <S.Image
      src="/images/star.svg"
      alt="animation of a star rotating 360 degrees"
    />
  </S.Wrapper>
);

export default Main;
