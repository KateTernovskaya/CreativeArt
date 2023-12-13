import styled, {css} from "styled-components";

type StyledBtnPropsType = {
    primary?: boolean
    outlined?: boolean
}

export const StyledBtn = styled.button<StyledBtnPropsType>`
  border: none;
  height: 48px;
  padding:0 40px;
  text-align: center;
  border-radius: 8px;
  background-color: transparent;
  color: white;
  font-weight: 700;
  
  ${props => props.primary && css<StyledBtnPropsType>`
    background-color:  #D3F85A;
    color: black;
  `}

  ${props => props.outlined && css<StyledBtnPropsType>`
    border: 1px solid  #D3F85A;
    color:  #D3F85A;
  `}

  
`