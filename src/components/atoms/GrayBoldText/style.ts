import styled from 'styled-components';

export const Wrapper = styled.div`
  font-size: 1.2em;
  margin: 1.5em 0 .8em;
`;

export const GrayText = styled.span`
  color: ${({ theme }) => theme.colors.gray};
`;
