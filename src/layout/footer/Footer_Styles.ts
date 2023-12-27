import styled from "styled-components";
import {FlexWrapper} from "../../components/wrapper/FlexWrapper";
import {theme} from "../../styles/Theme";

const Footer = styled.footer`
  padding: 92px 0;

  ${FlexWrapper}:first-child {
    margin-bottom: 48px;
    padding-bottom: 48px;
    border-bottom: 1px solid ${theme.colors.dissable};
  }
`

const LogoFooter = styled.div`
  display: flex;
  max-width: 272px;
  flex-direction: column;
`

const SocialLink = styled.a`
  margin-top: 24px;
  background-color: ${theme.colors.font};
  height: 24px;
  width: 24px;
  border-radius: 3px;
  transition: ${theme.animation.transition};

  &:hover {
    transform: translateY(-4px);
    background-color: ${theme.colors.accent};
  }
`

const FooterMenu = styled.div`
  display: flex;
  gap: 94px;
  flex-wrap: wrap;

  h4 {
    font-size: 20px;
    font-weight: 700;
    line-height: 120%;
    margin-bottom: 24px;
  }

  li {
    line-height: 160%;
    margin-top: 8px;

    a {
      transition: ${theme.animation.transition};
      border: none;
    }

    a:hover {
      border-bottom: 1px solid ${theme.colors.accent};
    }
  }
`

export const S = {
    Footer,
    LogoFooter,
    SocialLink,
    FooterMenu,
}