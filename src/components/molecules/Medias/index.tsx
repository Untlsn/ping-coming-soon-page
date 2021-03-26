import React from 'react';
import * as S from './style';
import * as I from '@assets/icons/mediaIcons';

const Medias = () => {
  return (
    <div>
      <S.IconWrapper>
        <S.Icon><I.facebookIcon /></S.Icon>
        <S.Icon><I.twitterIcon /></S.Icon>
        <S.Icon><I.instagramIcon /></S.Icon>
      </S.IconWrapper>
      <S.Copies>&copy; Copyright Ping. All right reserved.</S.Copies>
    </div>
  );
};

export default Medias;
