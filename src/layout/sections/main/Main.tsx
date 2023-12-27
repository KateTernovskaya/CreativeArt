import React from 'react';
import {FlexWrapper} from "../../../components/wrapper/FlexWrapper";
import {StyledBtn} from "../../../components/button/Button";
import {Container} from "../../../components/wrapper/Container";
import {Icon} from "../../../components/icon/Icon";
import {S} from './Main_Styles'

const statItems = [
    {
        title: 'Art work',
        count: 8.9,
    },
    {
        title: 'Artist',
        count: 65,
    },
    {
        title: 'Collection',
        count: 87,
    },
]

export const Main = () => {
    return (
        <S.Main id={'main'}>
            <Container>
                <S.Content>
                    <S.Title>Discover and
                        Collect The Best NFTs <span className='accent'>Digital Art.</span>
                    </S.Title>
                    <p>Get started with the easiest and most secure platform to buy and trade digital ART and NFT’s.
                        Start exploring the world of digital art and NFTs today and take control of your digital assets
                        with
                        confidence!</p>
                    <FlexWrapper gap={'10px'}>
                        <StyledBtn as={'a'} primary>Explore Now</StyledBtn>
                        <StyledBtn as={'a'}>Learn More</StyledBtn>
                    </FlexWrapper>
                    <FlexWrapper className='stats' justify={'space-between'}>
                        {statItems.map((item, index) => {
                            return (
                                <S.Stat key={index}>
                                    <S.StatCount>
                                        <span className={'accent'}>{`${item.count}`}</span>K
                                    </S.StatCount>
                                    <div>{`${item.title}`}</div>
                                </S.Stat>
                            )
                        })}
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