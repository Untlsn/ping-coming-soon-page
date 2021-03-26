import React, { useState } from 'react';
import * as S from './style';
import { InputText, SubmitButton } from '@atoms/all';
import { testEmail } from './helpers';

const EmailForm = () => {
  const [inputText, setInputText] = useState('');
  const [error, setErrorText] = useState('');
  return (
    <S.Wrapper onSubmit={
      (ev) => {
        ev.preventDefault();
        if(testEmail(inputText)) {
          setErrorText('');
          alert('correct');
        }
        else {
          setErrorText('Please provide a valid email address');
        }
      }
    }>
      <InputText
        value={inputText}
        onChange={({ target }) => setInputText(target.value)}
        error={error}/>
      <SubmitButton />
    </S.Wrapper>
  );
};

export default EmailForm;
