import styled from "styled-components";
import {Container} from "../../../components/wrapper/Container";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/FontMixin";
import mainImg from "../../../assets/images/section/main/main.png";

const Main = styled.section`
  margin-top: 46px;

  ${Container} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 60px;

    @media ${theme.media.smallDesc} {
      flex-direction: column;
      gap: 40px;
    }
  }

  @media ${theme.media.mobile} {
    margin-top: 0;
    position: relative;

    .stats {
      width: 90%;
      position: absolute;
      bottom: -150px;
      left: 50%;
      translate: -50%;
    }
  }
`

const Content = styled.div`
  max-width: 544px;
  width: 100%;

  p {
    margin: 20px 0 40px 0;
  }

  .stats {
    margin-top: 72px;
  }
`

const Title = styled.h1`
  ${font({family: 'Kalnia', weight: 500, Fmax: 60, Fmin: 39})};
  line-height: 120%;
`

const Stat = styled.div`
  padding: 0 28px 0 10px;

  &:not(:last-child) {
    border-right: 1px solid ${theme.colors.accent};
  }
`

const StatCount = styled.div`
  ${font({family: 'Canela', weight: 500, Fmax: 48, Fmin: 31})};
  line-height: 120%;
  margin-bottom: 8px;
`

const Hero = styled.div`
  max-width: 464px;
  width: 100%;
  height: 544px;
  margin-right: 51px;
  border-radius: 24px;
  background-image: url(${mainImg});
  background-size: cover;
  background-position: center;

  position: relative;

  svg {
    position: absolute;
    top: 40%;
    left: -13%;
    max-width: 172px;
    width: 100%;
    max-height: 172px;
    height: 100%;
  }

  ::before {
    content: '';
    max-width: 620px;
    width: 100%;
    height: 458px;
    background-color: ${theme.colors.lightBg};
    filter: blur(200px);
    position: absolute;
    top: 157px;
    right: 169px;
    border: 1px solid red;
    z-index: -99;
  }

  @media ${theme.media.mobile} {
    width: 264px;
    height: 344px;
    border-radius: 16px;
    margin-right: 0;

    svg {
      max-width: 81px;
      max-height: 81px;
    }
  }
`

const Bid = styled.div`
  display: flex;
  max-width: 304px;
  width: 100%;
  padding: 20px;
  flex-direction: column;
  gap: 24px;

  border-radius: 16px;
  border-top: 1px solid ${theme.colors.accent};
  background: ${theme.colors.anyBg};
  box-shadow: 0 9px 50px 0 rgba(23, 36, 65, 0.04);

  position: absolute;
  top: 85%;
  left: 45%;

  .accent {
    ${font({Fmax: 16, Fmin: 14})};
    color: ${theme.colors.accent};
  }

  @media ${theme.media.mobile} {
    max-width: 200px;
    padding: 12px;
    gap: 16px;

    left: 35%;
  }
`

export const S = {
    Main,
    Content,
    Title,
    Stat,
    StatCount,
    Hero,
    Bid,
}