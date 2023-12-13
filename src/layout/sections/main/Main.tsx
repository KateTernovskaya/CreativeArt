import React from 'react';
import {FlexWrapper} from "../../../components/wrapper/FlexWrapper";
import {StyledBtn} from "../../../components/Button";
import {Container} from "../../../components/wrapper/Container";
import {Icon} from "../../../components/icon/Icon";
import {S} from './Main_Styles'

export const Main = () => {
    return (
        <S.Main>
            <Container>
                <S.Content>
                    <S.Title>Discover and
                        Collect The Best NFTs <span className='accent'>Digital Art.</span>
                    </S.Title>
                    <p>Get started with the easiest and most secure platform to buy and trade digital ART and NFT’s.
                        Start
                        exploring the world of digital art and NFTs today and take control of your digital assets with
                        confidence!</p>
                    <FlexWrapper gap={'10px'}>
                        <StyledBtn primary>Explore Now</StyledBtn>
                        <StyledBtn>Learn More</StyledBtn>
                    </FlexWrapper>
                    <FlexWrapper className='stats' justify={'space-between'}>
                        <S.Stat>
                            <S.StatCount><span className={'accent'}>8.9</span>K</S.StatCount>
                            <div>Art work</div>
                        </S.Stat>
                        <S.Stat>
                            <S.StatCount><span className={'accent'}>65</span>K</S.StatCount>
                            <div>Artist</div>
                        </S.Stat>
                        <S.Stat>
                            <S.StatCount><span className={'accent'}>87</span>K</S.StatCount>
                            <div>Collection</div>
                        </S.Stat>
                    </FlexWrapper>
                </S.Content>
                <S.Hero>
                    <Icon iconId={'text'} viewBox="0 0 172 172"/>
                    <S.Bid>
                        <FlexWrapper justify={'space-between'}>
                            <FlexWrapper direction={'column'}>
                                <span className='accent'>Ends in</span>
                                05:45:47
                            </FlexWrapper>
                            <FlexWrapper direction={'column'}>
                                <span className='accent'>Current bid</span>
                                0.24ETH
                            </FlexWrapper>
                        </FlexWrapper>
                        <StyledBtn outlined>Place A Bid</StyledBtn>
                    </S.Bid>
                </S.Hero>
            </Container>
        </S.Main>
    );
};