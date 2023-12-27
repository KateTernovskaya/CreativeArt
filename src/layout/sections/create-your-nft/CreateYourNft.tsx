import React from 'react';
import {FlexWrapper} from "../../../components/wrapper/FlexWrapper";
import Img1 from '../../../assets/images/section/create-your-nft/create1.png'
import Img2 from '../../../assets/images/section/create-your-nft/create2.png'
import {StyledBtn} from "../../../components/button/Button";
import {Container} from "../../../components/wrapper/Container";
import {SectionTitle} from "../../../components/title/Title";
import {S} from './Create_Styles'

export const CreateYourNft = () => {
    return (
        <S.CreateYourNft id={'collections'}>
            <Container>
                <S.Content>
                    <SectionTitle>Create And Sell Your <span className='accent'>Best NFTs</span>
                    </SectionTitle>
                    <p>Start exploring the world of digital art and NFTs today and take control of your digital assets
                        with confidence!</p>
                    <FlexWrapper gap={'15px'}>
                        <StyledBtn primary as={'a'}>Create Now</StyledBtn>
                        <StyledBtn as={'a'}> Learn More </StyledBtn>
                    </FlexWrapper>
                </S.Content>

                <S.ImageWrapper>
                    <img className='img1' src={Img1} alt=""/>
                    <img className='img2' src={Img2} alt=""/>
                </S.ImageWrapper>
            </Container>
        </S.CreateYourNft>
    );
};