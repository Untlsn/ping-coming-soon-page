import React from 'react';
import * as S from './style';
import * as I from '@assets/icons/mediaIcons';

const Medias = () => {
  return (
    <div>
      <S.IconWrapper>
        <I.facebookIcon />
        <I.twitterIcon />
        <I.instagramIcon />
      </S.IconWrapper>
      <S.Copies>&copy; Copyright Ping. All right reserved.</S.Copies>
    </div>
  );
};

export default Medias;
