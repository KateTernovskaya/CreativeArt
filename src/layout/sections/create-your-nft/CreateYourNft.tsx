import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/wrapper/FlexWrapper";
import Img1 from '../../../assets/images/section/create-your-nft/create1.webp'
import Img2 from '../../../assets/images/section/create-your-nft/create2.webp'
import {StyledBtn} from "../../../components/Button";

export const CreateYourNft = () => {
    return (
        <StyledCreateYourNft>
            <FlexWrapper direction={'column'}>
                <h2>Create And Sell
                    Your <span>Best NFTs</span></h2>
                <p>Start exploring the world of digital art and NFTs today and take control of your digital assets with
                    confidence!</p>
                <FlexWrapper>
                    <StyledBtn primary>Create  Now</StyledBtn>
                    <StyledBtn>Learn More</StyledBtn>
                </FlexWrapper>
            </FlexWrapper>

            <div>
                <img src={Img1} alt=""/>
                <img src={Img2} alt=""/>
            </div>

        </StyledCreateYourNft>
    );
};

const StyledCreateYourNft = styled.section`
  display: none;
`

