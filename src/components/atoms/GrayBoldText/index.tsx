import * as React from 'react';
import * as S from './style';
import type { GrayBoldTextProps } from './types';

const GrayBoldText = ({ gray, bold }: GrayBoldTextProps) => {
  return (
    <S.Wrapper>
      <S.GrayText>{gray}</S.GrayText><b>{bold}</b>
    </S.Wrapper>
  );
};

export default GrayBoldText;
