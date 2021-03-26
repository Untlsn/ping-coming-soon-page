import styled from 'styled-components';

export const IconWrapper = styled.div`
  display: flex;
  gap: 2em;
  justify-content: center;
  
  margin-bottom: 2em;
  
  svg {
    height: 1em;
    path {
      fill: ${({ theme }) => theme.colors.blue};
    }
  }
`;

export const Copies = styled.div`
  font-size: .7em;
  color: ${({ theme }) => theme.colors.gray};
`;
