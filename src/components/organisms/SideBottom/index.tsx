import React from 'react';
import * as S from './style';
import Medias from '@molecules/Medias';
import illustrationDashboard from '@assets/images/illustration-dashboard.png';

const SideBottom = () => {
  return (
    <div>
      <S.Images src={illustrationDashboard}/>
      <Medias />
    </div>
  );
};

export default SideBottom;
