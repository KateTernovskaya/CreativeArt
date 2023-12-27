import {theme} from "../../../styles/Theme";
import {StyledBtn} from "../../../components/button/Button";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/wrapper/FlexWrapper";
import {Container} from "../../../components/wrapper/Container";

const Subscribe = styled.section`
  ${Container} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;

    ${FlexWrapper} {
      max-width: 530px;
      width: 100%;

      & p {
        margin: 20px 0 40px;
      }
    }

    @media ${theme.media.smallDesc} {
      flex-direction: column-reverse;
    }

    @media ${theme.media.mobile} {
      gap: 100px;
    }
  }
`

const ImgBlock = styled.div`
  position: relative;
  max-width: 580px;
  width: 100%;
  height: 450px;

  @media (max-width: 505px) {
    max-width: 300px;
    height: 250px;
  }

  & img {
    position: absolute;
    width: 100%;
    object-fit: cover;

    &:first-child {
      max-width: 410px;
      border-radius: 20px;

      @media (max-width: 505px) {
        max-width: 225px;
      }
    }

    &:nth-child(2) {
      bottom: 0;
      right: 0;
      border-radius: 16px;
      max-width: 282px;

      @media (max-width: 505px) {
        max-width: 153px;
      }
    }
  }

  & img:hover {
    transition: z-index .3s;
    z-index: 1;
  }
`

const SubscribeForm = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  & input {
    display: flex;
    width: 100%;
    height: 60px;
    padding: 16px 24px;
    align-items: center;
    outline: ${theme.colors.anyBg};
    color: ${theme.colors.font};

    border-radius: 8px;
    border: none;
    background: ${theme.colors.anyBg};
  }

  ${StyledBtn} {
    position: absolute;
    right: 0;

    @media ${theme.media.mobile} {
      bottom: -120%;
      right: 50%;
      translate: 50%;
    }
  }
`
export const S = {
    Subscribe,
    ImgBlock,
    SubscribeForm,
}