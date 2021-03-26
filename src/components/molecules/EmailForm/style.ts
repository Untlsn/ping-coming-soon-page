import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5em;

  flex-direction: column;
  @media (orientation: landscape) {
    flex-direction: row;
  }
`;
