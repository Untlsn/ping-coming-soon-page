import styled from 'styled-components';
import { OvalInput } from '@style/reusable';

export const Wrapper = styled(OvalInput)`
  border: ${({ theme }) => theme.colors.paleBlue} 1px solid;
  padding: 0 3em;
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.paleBlue};
  }
`;
