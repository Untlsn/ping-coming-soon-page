import React from 'react';
import { SomeText, EmailForm } from '@molecules/all';
import * as S from './style';

const SideTop = () => {
  return (
    <S.Wrapper>
      <SomeText />
      <EmailForm />
    </S.Wrapper>
  );
};

export default SideTop;
