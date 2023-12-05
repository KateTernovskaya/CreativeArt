import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";
import mainImg from '../../../assets/images/section/main/main.webp'
import {FlexWrapper} from "../../../components/wrapper/FlexWrapper";
import {StyledBtn} from "../../../components/Button";

export const Main = () => {

    return (
        <StyledMain>
            <FlexWrapper direction={'column'}>
                <Title>Discover and
                    Collect The Best NFTs <span>Digital Art.</span>
                </Title>
                <p>Get started with the easiest and most secure platform to buy and trade digital ART and NFT’s. Start
                    exploring the world of digital art and NFTs today and take control of your digital assets with
                    confidence!</p>
                <FlexWrapper>
                    <StyledBtn primary>Explore Now</StyledBtn>
                    <StyledBtn>Learn More</StyledBtn>
                </FlexWrapper>
                <div>
                    <div>
                        <div><span>8.9K</span></div>
                        <div>Art work</div>
                    </div>
                    <div>
                        <div><span>65</span>K</div>
                        <div>Artist</div>
                    </div>
                    <div>
                        <div><span>87</span>K</div>
                        <div>Collection</div>
                    </div>
                </div>
            </FlexWrapper>

            <Hero>
                <img src={mainImg} alt=""/>
                <Icon iconId={"text"} width={'172'} height={'172'} viewBox={'0 0 172 172'}/>
                <FlexWrapper justify={'space-between'}>
                    <FlexWrapper direction={'column'}>
                        <span>Ends in</span>
                        05:45:47
                    </FlexWrapper>
                    <FlexWrapper direction={'column'}>
                        <span>Current bid</span>
                        0.24ETH
                    </FlexWrapper>
                    <StyledBtn outlined>Place A Bid</StyledBtn>
                </FlexWrapper>
            </Hero>

        </StyledMain>
    );
};

const StyledMain = styled.section`
  background-color: rgb(2, 22, 65);
  min-height: 50vh;
  display: flex;
  justify-content: space-between;
  
  div{
    max-width: 40%;
  }
`

const Title = styled.h1`

`


const Hero = styled.div`

`








