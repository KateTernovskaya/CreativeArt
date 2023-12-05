import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/wrapper/FlexWrapper";
import {MarketCard} from "./Market-card";
import Img1 from '../../../assets/images/section/marketplace/art1.webp'
import Img2 from '../../../assets/images/section/marketplace/art2.webp'
import Img3 from '../../../assets/images/section/marketplace/art3.webp'
import {StyledBtn} from "../../../components/Button";

export const Marketplace = () => {
    return (
        <StyledMarketplace>
            <FlexWrapper justify={'space-between'}>
                <h2><span>Amazing</span> and Super
                    Unique Art of This <span>Week</span></h2>
                <StyledBtn primary>See All</StyledBtn>
            </FlexWrapper>
            <FlexWrapper>
                <MarketCard img={Img1} name={'Cyberpunk Cocomo'}/>
                <MarketCard img={Img2} name={'Charge, Qi tiao yu'}/>
                <MarketCard img={Img3} name={'Surgeon, Josh Rife'}/>
            </FlexWrapper>
        </StyledMarketplace>
    );
};

const StyledMarketplace = styled.section`
  background-color: black;
  min-height: 50vh;
`

