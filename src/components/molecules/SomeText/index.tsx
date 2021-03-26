import React from 'react';
import GrayBoldText from '@atoms/GrayBoldText';
import * as S from './style';

const SomeText = () => {
  return (
    <S.Wrapper>
      <S.Image />
      <GrayBoldText gray='We are launching ' bold='soon!' />
      <S.SmallDiv>Subscribe and get notified</S.SmallDiv>
    </S.Wrapper>
  );
};

export default SomeText;
