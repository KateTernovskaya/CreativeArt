import styled, {css} from "styled-components";
import {theme} from "../../styles/Theme";

type StyledBtnPropsType = {
    primary?: boolean
    outlined?: boolean
}

export const StyledBtn = styled.button<StyledBtnPropsType>`
  border: none;
  font-size: 16px;
  padding: 14px 42px;
  text-align: center;
  border-radius: 8px;
  background-color: transparent;
  color: white;
  font-weight: 700;
  line-height: 120%;

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
  a,
  a:hover,
  a:visited {
    color: inherit;
  }

`