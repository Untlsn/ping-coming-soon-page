import React from 'react';
import * as S from './style';
import type { InputTextProps } from './tyles';

const InputText = ({ error = '', ...inputProps }: InputTextProps) => {
  return (
    <S.Wrapper error={error}>
      <S.Input
        { ...inputProps }
        type='text'
        placeholder='Your email address'/>
    </S.Wrapper>
  );
};

export default InputText;
