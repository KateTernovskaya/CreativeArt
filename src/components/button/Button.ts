import styled, {css} from "styled-components";
import {theme} from "../../styles/Theme";

type StyledBtnPropsType = {
    primary?: boolean
    outlined?: boolean
}

export const StyledBtn = styled.button<StyledBtnPropsType>`
  border: none;
  height: 48px;
  padding: 0 40px;
  text-align: center;
  border-radius: 8px;
  background-color: transparent;
  color: white;
  font-weight: 700;

  &:hover {
    transition: ${theme.animation.transition};
    background-color: ${theme.colors.accent};
    color: black;
    transform: translateY(-4px);
  }

  ${props => props.primary && css<StyledBtnPropsType>`
    background-color: ${theme.colors.accent};
    color: black;
  `}

  ${props => props.outlined && css<StyledBtnPropsType>`
    border: 1px solid ${theme.colors.accent};
    color: ${theme.colors.accent};
  `}


`