import styled from 'styled-components';
import { OvalInput } from '@style/reusable';

export const Wrapper = styled(OvalInput)`
  text-align: center;
  background-color: ${({ theme }) => theme.colors.blue};
  color: white;
  position: relative;

  @media (orientation: landscape) {
    width: 10em
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: inherit;
    height: inherit;
    border-radius: inherit;
    background-color: white;
    opacity: 0;
    transition: opacity .2s;
  }
  &:hover {
    cursor: pointer;
    box-shadow: ${({ theme }) => theme.colors.paleBlue} -3px 5px 15px 0;
    &::before {
      opacity: .3;
    }
  }
`;
