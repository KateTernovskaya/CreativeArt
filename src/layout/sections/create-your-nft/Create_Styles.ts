import styled from "styled-components";
import {Container} from "../../../components/wrapper/Container";
import {theme} from "../../../styles/Theme";

const CreateYourNft = styled.section`
  & ${Container} {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media ${theme.media.smallDesc} {
      flex-direction: column;
      gap: 48px;
    }
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 426px;

  & p {
    margin: 20px 0 40px;
    line-height: 160%
  }
`

const ImageWrapper = styled.div`
  max-width: 690px;
  width: 100%;
  position: relative;
  height: 559px;
  margin: 0 auto;

  & img {
    width: 410px;
    max-width: 100%;
    object-fit: cover;
    position: absolute;
  }

  .img1 {
    top: 0;
    right: 0;
  }

  .img2 {
    bottom: 0;
    right: 30%;
    left: 2%;
  }

  & img:hover {
    transition: z-index .3s;
    z-index: 1;
  }

  &::before {
    content: '';
    width: 346px;
    height: 128px;
    background: ${theme.colors.lightBg};
    filter: blur(125px);

    position: absolute;
    bottom: -10px;
    right: 0;
  }

  @media (max-width: 505px) {
    height: 260px;
    max-width: 390px;

    & img {
      max-width: 190px;
    }
  }
`

export const S = {
    CreateYourNft,
    Content,
    ImageWrapper,
}