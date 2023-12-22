import styled, {css} from "styled-components";
import {theme} from "../../styles/Theme";
import {StyledBtn} from "../../components/button/Button";
import {font} from "../../styles/FontMixin";
import {Link} from "react-scroll";

const Header = styled.header`
  padding: 28px 0;

  @media ${theme.media.smallDesc} {
    ${StyledBtn} {
      display: none;
    }
  }
`

//Desktop Menu
const DesktopMenu = styled.nav`
  ul {
    display: flex;
    gap: 40px;
  }
`

//Mobile Menu
const MobileMenu = styled.nav``

const BurgerButton = styled.button<{ isOpen: boolean }>`
  width: 50px;
  height: 50px;

  position: relative;
  z-index: 99;

  ${props => props.isOpen && css<{ isOpen: boolean }>`
    width: 50px;
    height: 50px;
  `}
  span {
    display: block;
    width: 40px;
    height: 2px;
    background-color: ${theme.colors.font};

    ${props => props.isOpen && css<{ isOpen: boolean }>`
      background-color: rgba(255, 255, 255, 0);
    `}
    &::before {
      content: '';
      display: block;
      width: 40px;
      height: 3px;
      background-color: ${theme.colors.font};

      position: absolute;
      transform: translateY(-10px);
      transition: transform 1s;

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(-45deg) translateY(0);
      `}
    }

    &::after {
      content: '';
      display: block;
      width: 40px;
      height: 3px;
      background-color: ${theme.colors.font};

      position: absolute;
      transform: translateY(10px);
      transition: transform 1s;

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(45deg) translateY(0);
      `}
    }
  }
`

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  ${StyledBtn} {
    display: block;
  }

  background-color: ${theme.colors.primaryBg};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  transform: translateY(-100%);
  transition: .8s ease-in-out;
  
  position: absolute;
  top: 0;
  right: 0;
  z-index: 9;

  ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: translateY(0);
  `}
  
  ul {
    padding: 20px;
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    & li a {
      ${font({Fmax: 25, Fmin: 14, weight: 600})};

      &:hover {
        color: ${theme.colors.accent};
        border-bottom: 1px solid ${theme.colors.accent};
      }
    }
  }
`


//Menu
const NavLink = styled(Link)`
  color: ${theme.colors.whiteDissable};

  &:hover {
    transition: ${theme.animation.transition};
    color: ${theme.colors.font};
    border-bottom: 1px solid ${theme.colors.accent};
  }
`

export const S = {
    Header,
    DesktopMenu,
    MobileMenu,
    BurgerButton,
    MobileMenuPopup,
    NavLink,
}