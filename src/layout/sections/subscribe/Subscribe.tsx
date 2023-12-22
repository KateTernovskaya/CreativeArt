import React from 'react';
import styled from "styled-components";
import Img1 from '../../../assets/images/section/subscribe/img1.png'
import Img2 from '../../../assets/images/section/subscribe/img2.png'
import {FlexWrapper} from "../../../components/wrapper/FlexWrapper";
import {StyledBtn} from "../../../components/button/Button";
import {Container} from "../../../components/wrapper/Container";
import {S} from '../marketplace/Market_Styles'
import {theme} from "../../../styles/Theme";

export const Subscribe = () => {
    return (
        <StyledSubscribe id={'community'}>
            <Container>
                <ImgBlock>
                    <img src={Img1} alt=""/>
                    <img src={Img2} alt=""/>
                </ImgBlock>
                <FlexWrapper direction={'column'}>
                    <S.Title>Subscribe And <span className='accent'>get our
                    Updates</span> Every Week</S.Title>
                    <p>We have a blog related to NFT so we can share thoughts and routines on our blog which is updated
                        weekly</p>
                    <SubscribeForm>
                        <input type="text" placeholder='Enter your e-mail'/>
                        <StyledBtn primary type={"submit"}>Subscribe</StyledBtn>
                    </SubscribeForm>
                </FlexWrapper>
            </Container>
        </StyledSubscribe>
    );
};

const StyledSubscribe = styled.section`
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

  @media ${theme.media.mobile} {
    height: 250px;
  }

  & img {
    position: absolute;
    width: 100%;
    object-fit: cover;

    &:first-child {
      max-width: 410px;
      border-radius: 20px;

      @media ${theme.media.mobile} {
        max-width: 225px;
      }
    }

    &:nth-child(2) {
      bottom: 0;
      right: 0;
      border-radius: 16px;
      max-width: 282px;
      
      @media ${theme.media.mobile} {
        max-width: 153px;
      }
    }
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
    outline: ${theme.colors.anyBg} ;
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