import {theme} from "../../../styles/Theme";
import styled from "styled-components";
import {font} from "../../../styles/FontMixin";
import {Container} from "../../../components/wrapper/Container";
import {FlexWrapper} from "../../../components/wrapper/FlexWrapper";

//Market Card
const Card = styled.article`
  width: 330px;
  border-radius: 28px;
  border-top: 1px solid ${theme.colors.accent};
  background: ${theme.colors.anyBg};
  flex-grow: 1;
`

const CardWrapper = styled.div`
  padding: 20px;

  & img {
    margin-bottom: 24px;
    width: 100%;
    max-height: 350px;
    object-fit: cover;
    border-radius: 16px;
    object-position: top;
  }
`

const CardName = styled.span`
  ${font({Fmax: 22, Fmin: 18, weight: 700})}
  line-height: 120%;
`

const CardInfo = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 15px;

  .clock {
    font-weight: 700;
    line-height: 120%;
  }
`

const End = styled.span`
  color: ${theme.colors.dissable};
  font-size: 14px;
  line-height: 160%;
`

//Market Cards
const Marketplace = styled.section`
  margin-top: 46px;

  @media ${theme.media.mobile} {
    margin-top: 166px;
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

const SectionTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  margin-bottom: 60px;
`

const Title = styled.h2`
  max-width: 626px;
  width: 100%;
  ${font({family: 'Kalnia', weight: 500, Fmax: 48, Fmin: 31})}
  line-height: 120%;
`

export const S = {
    Card,
    CardWrapper,
    CardName,
    CardInfo,
    End,
    Marketplace,
    SectionTitle,
    Title,
}