import styled from 'styled-components';
import { OvalInput } from '@style/reusable';

export const Wrapper = styled(OvalInput)`
  text-align: center;
  background-color: ${({ theme }) => theme.colors.blue};
  color: white;

  @media (orientation: landscape) {
    width: 10em
  }
`;
