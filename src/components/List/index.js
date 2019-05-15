import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.ul`
  display: grid;
  grid-template-columns: ${props => props.columnWidth};
  justify-content: center;
  align-items: center;
  @media (max-width: 800px) {
    grid-template-columns: 100vw;
    gap: -30px 0;
    margin: 0;
  }
`;

function List({ children, columnWidth = '60vw', items }) {
  return (
    <Wrapper columnWidth={columnWidth}>
      {items.map(item => children(item))}
    </Wrapper>
  );
}

export default List;
