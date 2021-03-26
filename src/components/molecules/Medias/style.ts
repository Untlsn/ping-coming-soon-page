import styled from 'styled-components';

export const IconWrapper = styled.div`
  display: flex;
  gap: 2em;
  justify-content: center;
  margin-bottom: 2em;
`;

export const Icon = styled.div`
  position: relative;
  &::before {
    content: '';
    display: block;
    z-index: -1;
    
    position: absolute;
    top:  -.5em;
    left: -.6em;
    
    background-color: ${({ theme }) => theme.colors.blue};
    border-radius: 2em;
    height: 2em;
    width: 2em;
    opacity: 0;
    transition: opacity .2s;
  }
  &:hover {
    cursor: pointer;
    &::before {
      opacity: 1;
    }
    svg path {
      fill: white;
    }
  }
  svg {
    height: 1em;
    path {
      fill: ${({ theme }) => theme.colors.blue};
      transition: fill .2s;
    }
  }
`;

export const Copies = styled.div`
  font-size: .7em;
  color: ${({ theme }) => theme.colors.gray};
`;
