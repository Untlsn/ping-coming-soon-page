import styled from 'styled-components';
import { OvalInput } from '@style/reusable';

export const Wrapper = styled.span<{ error: string }>`
  position: relative;
  
  &::before {
    content: '${({ error }) => error}';
    display: inline-block;
    position: absolute;
    bottom: -1.5em;
    left: 4em;
    color: ${({ theme }) => theme.colors.lightRed};
    font-size: .6em;
  }
`;

export const Input = styled(OvalInput)`
  border: ${({ theme }) => theme.colors.paleBlue} 1px solid;
  padding: 0 3em;
    
  &::placeholder {
    color: ${({ theme }) => theme.colors.paleBlue};
  }
`;
