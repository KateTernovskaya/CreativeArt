import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {Container} from "../../../components/wrapper/Container";

//Artist Card
const OwnerInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  & img {
    width: 48px;
    max-width: 100%;
    border-radius: 48px;
  }

  & span {
    font-size: 14px;
    line-height: 160%;
  }
`

const Card = styled.div`
  border-radius: 16px;
  position: relative;
  z-index: 1;

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    border-radius: 16px;
    background: linear-gradient(2deg, rgba(19, 30, 58, 0.92) 17%, rgba(19, 30, 58, 0.00) 52.73%);
  }

  &:hover {
    ${OwnerInfo} {
      opacity: 0;
    }
  }

  &:hover::before {
    background: none;
  }


  ${OwnerInfo} {
    position: absolute;
    z-index: 2;
    bottom: 24px;
    left: 24px;
    transition: ${theme.animation.transition};
  }
`

const CardImg = styled.img`
  width: 100%;
  object-fit: cover;
  height: 100%;
  border-radius: 16px;
  object-position: top;
`

const OwnerName = styled.span`
  font-size: 16px;
  font-weight: 700;
  line-height: 120%;
`

//Artists Block
const PopularArtists = styled.section`
  @media ${theme.media.mobile} {
    .cards {
      justify-content: center;
    }

    ${Container} {
      position: relative;

      .title_btn {
        position: absolute;
        bottom: -80px;
        left: 50%;
        translate: -50%;
      }
    }
  }
`

const Artists = styled.div`
  display: grid;
  grid-auto-rows: 340px;
  grid-template-areas:
    "card1  card2 card2 card2  card3 "
    "card4  card4 card5 card5 card3 ";
  gap: 30px;

  & div:nth-child(1) {
    grid-area: card1;
  }

  & div:nth-child(2) {
    grid-area: card2;
  }

  & div:nth-child(3) {
    grid-area: card3;
  }

  & div:nth-child(4) {
    grid-area: card4;
  }

  & div:nth-child(5) {
    grid-area: card5;
  }

  @media ${theme.media.tablet} {
    grid-template-areas:
    "card1  card2"
    "card3  card4"
    "card5  card5";
  }

  @media ${theme.media.mobile} {
    grid-template-areas:
    "card1"  
    "card2"
    "card3"  
    "card4"
    "card5";
  }
`

export const S = {
    OwnerInfo,
    Card,
    CardImg,
    OwnerName,
    PopularArtists,
    Artists,
}