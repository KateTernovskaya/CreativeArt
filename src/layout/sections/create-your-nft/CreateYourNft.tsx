import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/wrapper/FlexWrapper";
import Img1 from '../../../assets/images/section/create-your-nft/create1.png'
import Img2 from '../../../assets/images/section/create-your-nft/create2.png'
import {StyledBtn} from "../../../components/button/Button";
import {S} from '../marketplace/Market_Styles'
import {Container} from "../../../components/wrapper/Container";
import {theme} from "../../../styles/Theme";

export const CreateYourNft = () => {
    return (
        <StyledCreateYourNft id={'collections'}>
            <Container>
                <Content>
                    <S.Title>Create And Sell
                        Your <span className='accent'>Best NFTs</span></S.Title>
                    <p>Start exploring the world of digital art and NFTs today and take control of your digital assets
                        with confidence!</p>
                    <FlexWrapper gap={'15px'}>
                        <StyledBtn primary>Create Now</StyledBtn>
                        <StyledBtn>Learn More</StyledBtn>
                    </FlexWrapper>
                </Content>

                <ImageWrapper>
                    <img className='img1' src={Img1} alt=""/>
                    <img className='img2' src={Img2} alt=""/>
                </ImageWrapper>
            </Container>
        </StyledCreateYourNft>
    );
};

const StyledCreateYourNft = styled.section`
    & ${Container}{
      display: flex;
      align-items: center;
      justify-content: space-between;
      
      @media ${theme.media.smallDesc}{
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
  width: 100%;
  position: relative;
  height: 559px;

  @media ${theme.media.mobile} {
    height: 260px;
    
    & img {
      max-width: 190px;
      height: auto;
    }
  }

  & img {
    width: 410px;
    max-width: 100%;
    object-fit: cover;
    position: absolute;

    @media ${theme.media.mobile} {
        max-width: 190px;
    }
  }

  & img:hover {
    transition: z-index .3s;
    z-index: 1;
  }

  .img2 {
    bottom: 0;
    left: 12%;
    translate: -6%;
  }

  .img1 {
    top: 0;
    right: 0;
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



`

