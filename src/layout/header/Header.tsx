import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {StyledBtn} from "../../components/Button";


export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <StyledMenu>
                <ul>
                    <li>
                        <a href="#">Marketplace</a>
                    </li>
                    <li>
                        <a href="#">Artists</a>
                    </li>
                    <li>
                        <a href="#">Community</a>
                    </li>
                    <li>
                        <a href="#">Collections</a>
                    </li>
                </ul>
            </StyledMenu>
            <StyledBtn primary>Contact</StyledBtn>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30vh;
`

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 20px
  }
`
