import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Drawer from './Drawer';
import SearchBar from './SearchBar';
import Logo from '../Logo';

const Wrapper = styled.header`
  display: grid;
  grid-template-columns: 60px 100px repeat(10, 1fr);
  align-items: center;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  padding: 0 20px;
  background: #fff;
  box-shadow: 0 10px 14px 0 rgba(0, 0, 0, 0.06);
  .Drawer {
    grid-column: 1;
  }
  .Logo {
    grid-column: 2;
  }
  .SearchBar {
    grid-column: 4 / 10;
  }
  @media (max-width: 800px) {
    grid-template-columns: 100px 1fr;
    .Drawer {
      display: none;
    }
    .Logo {
      grid-column: 1;
    }
    .SearchBar {
      grid-column: 2;
    }
  }
`;

function NavBar() {
  return (
    <Wrapper>
      <Drawer />
      <Link to='/' className='Logo'>
        <Logo />
      </Link>
      <SearchBar />
    </Wrapper>
  );
}

export default NavBar;
