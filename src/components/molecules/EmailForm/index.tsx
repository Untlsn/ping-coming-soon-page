import React from 'react';
import * as S from './style';
import { InputText, SubmitButton } from '@atoms/all';

const EmailForm = () => {
  return (
    <S.Wrapper>
      <InputText />
      <SubmitButton />
    </S.Wrapper>
  );
};

export default EmailForm;
