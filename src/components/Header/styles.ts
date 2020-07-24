import styled, { css } from 'styled-components';

import { Search as MagnifyingGlass, CartAlt } from '../../styles/icons';

export const Container = styled.div`
  width: 100%;
  height: 80px;
  position: fixed;
  z-index: 2;

  background: var(--primary);

  padding: 16px 25px;

  display: flex;
  align-items: center;
  justify-content: center;

  a {
    color: white;
    text-decoration: none;
    margin-right: 20px;
  }

  @media (max-width: 898px) {
    height: 115px;
    position: relative;
    align-items: flex-start
  }

  @media (max-width: 408px) {
    a {
      margin-right: 10px;
    }
  }
  
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  max-width: 130px;
`;

export const Form = styled.form`
  width: 500px;
    
  @media (max-width: 898px) {
    width: calc(100% - 50px);
    position: absolute;
    bottom: 10px;
  }
`;

export const Search = styled.div`
  width: 500px;
  height: 39px;
  background: #fff;

  display: flex;
  align-items: center;

  input {
    width: calc(100% - 40px);
    height: 100%;
    padding: 15px;
    border: none;
  }

  button {
    border: none;
    background: transparent;
    outline: 0;
    width: 40px;
    height: 100%;
  }

  @media (max-width: 898px) {
    width: 100%;
  }
`;

const iconCSS = css`
  width: 34px;
  height: 34px;
  cursor: pointer;
`;

export const SearchIcon = styled(MagnifyingGlass)`
  ${iconCSS}
  color: var(--primary);
`;

export const CartIcon = styled(CartAlt)`
  ${iconCSS}
  color: #fff;
  
  cursor: pointer;
  z-index: 4;

  margin-right: 30px;

  @media (max-width: 898px) {
    margin-right: 0;
  }
`;
